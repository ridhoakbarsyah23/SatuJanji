import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  verifyAdminSessionToken,
} from "@/lib/admin-auth";
import {
  addNotification,
  deleteNotification,
  getNotifications,
  updateNotification,
  type Notification,
} from "@/lib/notifications-store";

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

  const notifications = await getNotifications();
  return NextResponse.json(notifications);
}

export async function POST(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const title = String(body.title ?? "").trim();
  const message = String(body.message ?? "").trim();
  const category = String(body.category ?? "").trim();
  const status = String(body.status ?? "Aktif").trim() as Notification["status"];

  if (!title || !message || !category) {
    return NextResponse.json({ error: "Title, message, and category are required." }, { status: 400 });
  }

  const notification = await addNotification({ title, message, category, status });
  return NextResponse.json(notification, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const id = String(body.id ?? "").trim();
  const title = String(body.title ?? "").trim();
  const message = String(body.message ?? "").trim();
  const category = String(body.category ?? "").trim();
  const status = String(body.status ?? "Aktif").trim() as Notification["status"];

  if (!id || !title || !message || !category) {
    return NextResponse.json({ error: "ID, title, message, and category are required." }, { status: 400 });
  }

  await updateNotification(id, { title, message, category, status });
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

  await deleteNotification(id);
  return new NextResponse(null, { status: 204 });
}
