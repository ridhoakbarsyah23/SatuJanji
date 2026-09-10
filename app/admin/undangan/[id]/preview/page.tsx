import { notFound } from "next/navigation";
import { CulturalInvitation } from "@/components/templates/cultural-invitation";
import { getInvitationById, toCulturalTemplate } from "@/lib/invitations-store";

export const dynamic = "force-dynamic";

export default async function InvitationPreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invitation = await getInvitationById(id);
  if (!invitation) notFound();
  return <CulturalInvitation template={toCulturalTemplate(invitation)} previewMode />;
}
