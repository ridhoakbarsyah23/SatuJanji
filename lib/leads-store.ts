import { promises as fs } from "fs";
import path from "path";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  packageName: string;
  eventDate: string;
  status: string;
  createdAt: string;
};

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  eventDate: string;
};

const leadsPath = path.join(process.cwd(), "data", "leads.json");

const packageLabels: Record<string, string> = {
  basic: "Basic",
  premium: "Premium",
  exclusive: "Exclusive",
  konsultasi: "Belum tahu, ingin konsultasi",
};

export function getPackageLabel(value: string) {
  return packageLabels[value] ?? value;
}

export async function getLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(leadsPath, "utf8");
    return JSON.parse(data) as Lead[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function addLead(input: LeadInput) {
  const leads = await getLeads();
  const lead: Lead = {
    id: `lead-${Date.now()}`,
    name: input.name,
    email: input.email,
    phone: input.phone,
    packageName: getPackageLabel(input.packageName),
    eventDate: input.eventDate || "-",
    status: "Baru",
    createdAt: new Date().toISOString(),
  };

  await fs.mkdir(path.dirname(leadsPath), { recursive: true });
  await fs.writeFile(
    leadsPath,
    JSON.stringify([lead, ...leads], null, 2),
    "utf8",
  );

  return lead;
}
