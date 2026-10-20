import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const copy: Record<
  Locale,
  { title: string; legal: string; terms: string }
> = {
  tr: {
    title: "Ayarlar",
    legal: "Yasal",
    terms: "Kullanım Şartları",
  },
  en: {
    title: "Settings",
    legal: "Legal",
    terms: "Terms of Use",
  },
};

export default async function SettingsPage({
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
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
        <LanguageSwitcher locale={locale} pathSuffix="/ayarlar" />
      </div>
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          {t.legal}
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href={`/${locale}/kullanim-sartlari`}
              className="text-zinc-800 underline-offset-4 hover:underline"
            >
              {t.terms}
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
