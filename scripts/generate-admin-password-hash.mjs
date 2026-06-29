import { pbkdf2Sync, randomBytes } from "crypto";
import { argv, exit } from "process";

const password = argv[2];

if (!password) {
  console.error("Usage: node scripts/generate-admin-password-hash.mjs <password>");
  exit(1);
}

const iterations = 210000;
const salt = randomBytes(16);
const hash = pbkdf2Sync(password, salt, iterations, 32, "sha256");

const value = `pbkdf2_sha256$${iterations}$${salt.toString("base64url")}$${hash.toString(
  "base64url",
)}`;

console.log(value.replaceAll("$", "\\$"));
