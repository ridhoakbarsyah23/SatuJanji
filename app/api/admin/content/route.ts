import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  verifyAdminSessionToken,
} from "@/lib/admin-auth";
import {
  createAdminItem,
  deleteAdminItem,
  getAdminItems,
  updateAdminItem,
  type AdminCollection,
  type AdminItem,
} from "@/lib/admin-store";

const collections = ["templates", "plans", "faqs"] as const;

function isAdminCollection(value: unknown): value is AdminCollection {
  return typeof value === "string" && collections.includes(value as AdminCollection);
}

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

  const url = new URL(request.url);
  const collection = url.searchParams.get("collection");

  if (collection) {
    if (!isAdminCollection(collection)) {
      return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
    }

    const data = await getAdminItems(collection);
    return NextResponse.json(data);
  }

  const allItems = {
    templates: await getAdminItems("templates"),
    plans: await getAdminItems("plans"),
    faqs: await getAdminItems("faqs"),
  };

  return NextResponse.json(allItems);
}

export async function POST(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const collection = body.collection;
  const title = String(body.title ?? "").trim();
  const meta = String(body.meta ?? "").trim();
  const status = String(body.status ?? "Aktif").trim();

  if (!isAdminCollection(collection)) {
    return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
  }

  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const item = await createAdminItem(collection, { title, meta, status });
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const collection = body.collection;
  const id = String(body.id ?? "").trim();
  const title = String(body.title ?? "").trim();
  const meta = String(body.meta ?? "").trim();
  const status = String(body.status ?? "Aktif").trim();

  if (!isAdminCollection(collection)) {
    return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
  }

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  await updateAdminItem(collection, id, { title, meta, status });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const unauthorizedResponse = await requireAdminSession(request);
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  const body = await request.json();
  const collection = body.collection;
  const id = String(body.id ?? "").trim();

  if (!isAdminCollection(collection)) {
    return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
  }

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  await deleteAdminItem(collection, id);
  return new NextResponse(null, { status: 204 });
}
