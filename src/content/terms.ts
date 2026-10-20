export const TERMS_EFFECTIVE_DATE = "2026-10-20";

export const CONTACT_URL = "https://github.com/ykslaksoy/SofraQr/issues";

export type Locale = "tr" | "en";

export const termsContent: Record<
  Locale,
  {
    title: string;
    effectiveLabel: string;
    intro: string;
    sections: { heading: string; body: string }[];
    contactLabel: string;
  }
> = {
  tr: {
    title: "Kullanım Şartları",
    effectiveLabel: "Yürürlük tarihi",
    intro:
      "Bu Kullanım Şartları, SofraQr hizmetine (“Hizmet”) erişiminizi ve kullanımınızı düzenler. Hizmeti kullanarak bu şartları kabul etmiş olursunuz.",
    sections: [
      {
        heading: "1. Otomatik erişim yasağı",
        body:
          "Yazılı iznimiz olmadan botlar, betikler, tarayıcılar (crawler), scraper’lar, yapay zekâ ajanları veya diğer otomatik araçlarla Hizmete erişemez veya Hizmeti kullanamazsınız.",
      },
      {
        heading: "2. Veri ve içerik toplama yasağı",
        body:
          "Hizmetten veya Hizmet aracılığıyla sunulan içerikten veri veya içerik toplayamaz, derleyemez veya harvest edemezsiniz.",
      },
      {
        heading: "3. Tersine mühendislik ve kopyalama yasağı",
        body:
          "Hizmetin yazılımını, tasarımını veya içeriğini tersine mühendislik yapamaz, dekompile edemez, kopyalayamaz veya bunlardan türev çalışmalar oluşturamazsınız.",
      },
      {
        heading: "4. Rekabet amaçlı kullanım yasağı",
        body:
          "Hizmeti, rakip bir ürün veya hizmet geliştirmek, eğitmek veya benchmark yapmak amacıyla kullanamazsınız.",
      },
      {
        heading: "5. Hesap askıya alma ve fesih",
        body:
          "Bu şartların ihlali halinde, önceden bildirimde bulunmaksızın hesabınızı askıya alabilir veya Hizmete erişiminizi sonlandırabiliriz.",
      },
      {
        heading: "6. Uygulanacak hukuk ve yetki",
        body:
          "Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda Türkiye mahkemeleri ve icra daireleri yetkilidir.",
      },
    ],
    contactLabel: "İletişim",
  },
  en: {
    title: "Terms of Use",
    effectiveLabel: "Effective date",
    intro:
      'These Terms of Use govern your access to and use of the SofraQr service ("Service"). By using the Service, you agree to these terms.',
    sections: [
      {
        heading: "1. No automated access",
        body:
          "You may not access or use the Service through bots, scripts, crawlers, scrapers, AI agents, or other automated means without our prior written permission.",
      },
      {
        heading: "2. No data or content harvesting",
        body:
          "You may not collect, compile, or harvest data or content from the Service or content made available through it.",
      },
      {
        heading: "3. No reverse engineering or copying",
        body:
          "You may not reverse engineer, decompile, copy, or create derivative works from the Service’s software, design, or content.",
      },
      {
        heading: "4. No competitive use",
        body:
          "You may not use the Service to build, train, or benchmark a competing product or service.",
      },
      {
        heading: "5. Suspension and termination",
        body:
          "We may suspend or terminate your account or access to the Service for violations of these terms, with or without prior notice.",
      },
      {
        heading: "6. Governing law and jurisdiction",
        body:
          "These terms are governed by the laws of the Republic of Turkey. The courts and enforcement offices of Turkey have exclusive jurisdiction over disputes.",
      },
    ],
    contactLabel: "Contact",
  },
};
