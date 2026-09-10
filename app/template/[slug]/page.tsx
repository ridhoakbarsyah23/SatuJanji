import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CulturalInvitation } from "@/components/templates/cultural-invitation";
import { culturalTemplates, getCulturalTemplate } from "@/lib/cultural-templates";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return culturalTemplates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getCulturalTemplate(slug);

  if (!template) {
    return { title: "Template tidak ditemukan" };
  }

  return {
    title: `${template.title} — Template Undangan ${template.region}`,
    description: `${template.inspiration}. Desain undangan digital responsif dari SatuJanji.`,
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getCulturalTemplate(slug);

  if (!template) {
    notFound();
  }

  return <CulturalInvitation template={template} />;
}
