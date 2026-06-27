const ADMIN_WHATSAPP_NUMBER = "6281390277240";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createPackageInquiryLink(packageName: string) {
  return createWhatsAppLink(
    `Halo admin SatuJanji, saya ingin tanya paket ${packageName} untuk undangan pernikahan digital. Bisa dibantu?`,
  );
}

export function createTemplateInquiryLink(templateName: string) {
  return createWhatsAppLink(
    `Halo admin SatuJanji, saya tertarik dengan template ${templateName}. Bisa dibantu untuk konsultasi?`,
  );
}
