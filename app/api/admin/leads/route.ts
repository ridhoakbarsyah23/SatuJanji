import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  verifyAdminSessionToken,
} from "@/lib/auth/admin-auth";
import {
  addLead,
  deleteLead,
  getLeads,
  updateLead,
  type Lead,
  type LeadInput,
} from "@/lib/stores/leads-store";

async function requireAdminSession(request: NextRequest) {
  const sessionToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

  if (!(await verifyAdminSessionToken(sessionToken))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}

export async function GET(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const leads = await getLeads();
  return NextResponse.json(leads);
}

export async function POST(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();
  const packageName = String(body.packageName ?? "").trim();
  const eventDate = String(body.eventDate ?? "").trim();
  const status = String(body.status ?? "Baru").trim();

  if (!name || !email || !phone || !packageName) {
    return NextResponse.json({ error: "Name, email, phone, and package are required." }, { status: 400 });
  }

  const leadInput: LeadInput = { name, email, phone, packageName, eventDate, status };
  const lead = await addLead(leadInput);
  return NextResponse.json(lead, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const id = String(body.id ?? "").trim();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();
  const packageName = String(body.packageName ?? "").trim();
  const eventDate = String(body.eventDate ?? "").trim();
  const status = String(body.status ?? "").trim();

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  if (!name || !email || !phone || !packageName) {
    return NextResponse.json({ error: "Name, email, phone, and package are required." }, { status: 400 });
  }

  await updateLead(id, { name, email, phone, packageName, eventDate, status });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const id = String(body.id ?? "").trim();

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  await deleteLead(id);
  return new NextResponse(null, { status: 204 });
}
