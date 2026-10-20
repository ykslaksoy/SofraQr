import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const copy: Record<
  Locale,
  { heading: string; tagline: string; cta: string }
> = {
  tr: {
    heading: "SofraQr",
    tagline: "Restoranlar için modern QR menü deneyimi.",
    cta: "Kullanım Şartları",
  },
  en: {
    heading: "SofraQr",
    tagline: "Modern QR menu experience for restaurants.",
    cta: "Terms of Use",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const t = copy[locale];

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">{t.heading}</h1>
          <p className="mt-3 text-lg text-zinc-600">{t.tagline}</p>
        </div>
        <LanguageSwitcher locale={locale} pathSuffix="" />
      </div>
      <Link
        href={`/${locale}/kullanim-sartlari`}
        className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline"
      >
        {t.cta}
      </Link>
    </main>
  );
}
