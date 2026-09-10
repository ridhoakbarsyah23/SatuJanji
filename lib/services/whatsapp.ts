// Centralized WhatsApp links for customer-facing calls to action.
const ADMIN_WHATSAPP_NUMBER = "6281390277240";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createPackageInquiryLink(packageName: string) {
  return createWhatsAppLink(
    `Halo tim SatuJanji, saya tertarik dengan paket ${packageName} untuk undangan pernikahan digital. Saya ingin berkonsultasi lebih lanjut.`,
  );
}

export function createTemplateInquiryLink(templateName: string) {
  return createWhatsAppLink(
    `Halo tim SatuJanji, saya tertarik dengan template ${templateName}. Saya ingin berkonsultasi mengenai penyesuaian desainnya.`,
  );
}
