import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CulturalInvitation } from "@/components/templates/cultural-invitation";
import { getInvitationBySlug, toCulturalTemplate } from "@/lib/invitations-store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const invitation = await getInvitationBySlug(slug);
  if (!invitation) return { title: "Undangan tidak ditemukan" };
  return {
    title: `${invitation.groom} & ${invitation.bride}`,
    description: `Undangan pernikahan ${invitation.groom} dan ${invitation.bride}. Kami mengharapkan kehadiran dan doa restu Anda.`,
    robots: { index: true, follow: true },
    openGraph: {
      title: `${invitation.groom} & ${invitation.bride}`,
      description: `Undangan pernikahan ${invitation.groom} dan ${invitation.bride}`,
      type: "website",
      url: `/undangan/${invitation.slug}`,
    },
  };
}

export default async function PublicInvitationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const invitation = await getInvitationBySlug(slug);
  if (!invitation) notFound();
  return <CulturalInvitation template={toCulturalTemplate(invitation)} />;
}
