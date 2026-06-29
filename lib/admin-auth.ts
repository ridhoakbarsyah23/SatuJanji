export const ADMIN_COOKIE_NAME = "satujanji_admin";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;

const fallbackAdmin = {
  email: "admin@satujanji.id",
  passwordHash:
    "pbkdf2_sha256$210000$9O3tGhfC5xxV1tZ6fG4Tbw$DhQpHq-hHNQ-ucfX3U7GPu518FyyucDuCRDJGONDSK8",
  sessionSecret: "satujanji-local-admin-session-2026",
};

export function getAdminCredentials() {
  const useFallback = process.env.NODE_ENV !== "production";

  return {
    email: (process.env.ADMIN_EMAIL ?? (useFallback ? fallbackAdmin.email : ""))
      .trim()
      .toLowerCase(),
    passwordHash:
      process.env.ADMIN_PASSWORD_HASH ?? (useFallback ? fallbackAdmin.passwordHash : ""),
    sessionSecret:
      process.env.ADMIN_SESSION_SECRET ?? (useFallback ? fallbackAdmin.sessionSecret : ""),
  };
}

export function isAdminAuthConfigured() {
  const { email, passwordHash, sessionSecret } = getAdminCredentials();

  return Boolean(email && passwordHash && sessionSecret);
}

export async function verifyAdminPassword(password: string) {
  const { passwordHash } = getAdminCredentials();
  if (!passwordHash) {
    return false;
  }

  const [algorithm, iterationsValue, saltValue, expectedValue] =
    passwordHash.split("$");

  if (algorithm !== "pbkdf2_sha256" || !iterationsValue || !saltValue || !expectedValue) {
    return false;
  }

  const iterations = Number(iterationsValue);
  if (!Number.isFinite(iterations) || iterations < 100000) {
    return false;
  }

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: base64UrlDecode(saltValue),
      iterations,
    },
    keyMaterial,
    256,
  );

  return timingSafeEqual(base64UrlEncode(new Uint8Array(derivedBits)), expectedValue);
}

export async function createAdminSessionToken(email: string) {
  const expiresAt = Date.now() + ADMIN_SESSION_MAX_AGE * 1000;
  const payload = base64UrlEncode(
    encode(JSON.stringify({ email: email.toLowerCase(), exp: expiresAt })),
  );
  const signature = await sign(payload);

  return `${payload}.${signature}`;
}

export async function verifyAdminSessionToken(token?: string) {
  if (!token) {
    return false;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = await sign(payload);
  if (!timingSafeEqual(signature, expectedSignature)) {
    return false;
  }

  try {
    const session = JSON.parse(decode(base64UrlDecode(payload))) as {
      email?: string;
      exp?: number;
    };
    const { email } = getAdminCredentials();

    return session.email === email && typeof session.exp === "number" && session.exp > Date.now();
  } catch {
    return false;
  }
}

async function sign(payload: string) {
  const { sessionSecret } = getAdminCredentials();
  if (!sessionSecret) {
    return "";
  }

  const key = await crypto.subtle.importKey(
    "raw",
    encode(sessionSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encode(payload));

  return base64UrlEncode(new Uint8Array(signature));
}

function encode(value: string) {
  return new TextEncoder().encode(value);
}

function decode(value: Uint8Array) {
  return new TextDecoder().decode(value);
}

function base64UrlEncode(value: Uint8Array) {
  let binary = "";
  value.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlDecode(value: string) {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return result === 0;
}
