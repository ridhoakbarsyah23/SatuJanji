import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminCredentials,
  isAdminAuthConfigured,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (isAdminAuthConfigured()) {
    const { email: adminEmail } = getAdminCredentials();
    const passwordValid = await verifyAdminPassword(password);

    if (email === adminEmail && passwordValid) {
      const sessionToken = await createAdminSessionToken(adminEmail);
      const response = NextResponse.redirect(new URL("/admin", request.url), 303);
      response.cookies.set(ADMIN_COOKIE_NAME, sessionToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: ADMIN_SESSION_MAX_AGE,
      });

      return response;
    }

    if (email === adminEmail) {
      return NextResponse.redirect(new URL("/masuk?error=invalid", request.url), 303);
    }
  }

  return NextResponse.redirect(
    new URL("/masuk?error=customer-not-ready", request.url),
    303,
  );
}
