import { NextResponse } from "next/server";
import { addLead } from "@/lib/leads-store";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim();
  const eventDate = String(formData.get("eventDate") ?? "").trim();
  const packageName = String(formData.get("package") ?? "").trim();

  if (!name || !email || !phone || !packageName) {
    return NextResponse.redirect(new URL("/daftar?error=required", request.url), 303);
  }

  await addLead({
    name,
    email,
    phone,
    eventDate,
    packageName,
  });

  return NextResponse.redirect(new URL("/daftar?success=1", request.url), 303);
}
