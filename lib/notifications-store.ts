import { promises as fs } from "fs";
import path from "path";

export type Notification = {
  id: string;
  title: string;
  message: string;
  category: string;
  status: "Aktif" | "Arsip" | "Penting";
  createdAt: string;
};

const notificationsPath = path.join(process.cwd(), "data", "admin-notifications.json");

const initialNotifications: Notification[] = [
  {
    id: "notification-1",
    title: "Permintaan konsultasi baru",
    message: "Ada calon pelanggan baru yang mendaftar paket Premium.",
    category: "Pelanggan",
    status: "Aktif",
    createdAt: new Date().toISOString(),
  },
  {
    id: "notification-2",
    title: "Template baru disarankan",
    message: "Ada permintaan pelanggan untuk tema undangan rustic. Pertimbangkan menambah template baru.",
    category: "Konten",
    status: "Aktif",
    createdAt: new Date().toISOString(),
  },
];

function createNotificationId() {
  return `notification-${Date.now()}`;
}

async function readNotifications(): Promise<Notification[]> {
  try {
    const data = await fs.readFile(notificationsPath, "utf8");
    return JSON.parse(data) as Notification[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return initialNotifications;
    }
    throw error;
  }
}

async function writeNotifications(notifications: Notification[]) {
  await fs.mkdir(path.dirname(notificationsPath), { recursive: true });
  await fs.writeFile(notificationsPath, JSON.stringify(notifications, null, 2), "utf8");
}

export async function getNotifications(): Promise<Notification[]> {
  return readNotifications();
}

export async function addNotification(input: Omit<Notification, "id" | "createdAt">) {
  const notifications = await readNotifications();
  const notification: Notification = {
    id: createNotificationId(),
    createdAt: new Date().toISOString(),
    ...input,
  };

  await writeNotifications([notification, ...notifications]);
  return notification;
}

export async function updateNotification(id: string, input: Omit<Notification, "id" | "createdAt">) {
  const notifications = await readNotifications();
  const updated = notifications.map((item) =>
    item.id === id ? { ...item, ...input } : item,
  );

  await writeNotifications(updated);
  return updated.find((item) => item.id === id);
}

export async function deleteNotification(id: string) {
  const notifications = await readNotifications();
  await writeNotifications(notifications.filter((item) => item.id !== id));
}
