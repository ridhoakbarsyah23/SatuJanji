import type { MetadataRoute } from "next";
import { getInvitations } from "@/lib/invitations-store";

const baseUrl = "https://satujanji.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const invitations = await getInvitations();
  const publishedInvitations: MetadataRoute.Sitemap = invitations
    .filter((invitation) => invitation.status === "published")
    .map((invitation) => ({
      url: `${baseUrl}/undangan/${invitation.slug}`,
      lastModified: new Date(invitation.updatedAt),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/daftar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fitur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cara-kerja`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...publishedInvitations,
  ];
}
