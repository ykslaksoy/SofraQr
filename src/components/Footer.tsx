import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy: Record<
  Locale,
  { terms: string; settings: string; rights: string }
> = {
  tr: {
    terms: "Kullanım Şartları",
    settings: "Ayarlar",
    rights: "SofraQr. Tüm hakları saklıdır.",
  },
  en: {
    terms: "Terms of Use",
    settings: "Settings",
    rights: "SofraQr. All rights reserved.",
  },
};

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-sm text-zinc-600">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-8 sm:flex-row sm:justify-between">
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/kullanim-sartlari`}
            className="hover:text-zinc-900 underline-offset-4 hover:underline"
          >
            {t.terms}
          </Link>
          <Link
            href={`/${locale}/ayarlar`}
            className="hover:text-zinc-900 underline-offset-4 hover:underline"
          >
            {t.settings}
          </Link>
        </nav>
        <p className="text-center sm:text-right">{t.rights}</p>
      </div>
    </footer>
  );
}
