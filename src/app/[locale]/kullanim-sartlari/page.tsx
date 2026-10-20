import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  CONTACT_URL,
  TERMS_EFFECTIVE_DATE,
  termsContent,
} from "@/content/terms";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const t = termsContent[locale];

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p className="mt-2 text-sm text-zinc-600">
            {t.effectiveLabel}: {TERMS_EFFECTIVE_DATE}
          </p>
        </div>
        <LanguageSwitcher locale={locale} pathSuffix="/kullanim-sartlari" />
      </div>

      <p className="mb-8 text-zinc-700 leading-relaxed">{t.intro}</p>

      <div className="space-y-8">
        {t.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-zinc-900">
              {section.heading}
            </h2>
            <p className="mt-2 text-zinc-700 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 border-t border-zinc-200 pt-8">
        <h2 className="text-lg font-semibold">{t.contactLabel}</h2>
        <p className="mt-2 text-zinc-700">
          <a
            href={CONTACT_URL}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {CONTACT_URL}
          </a>
        </p>
      </section>
    </main>
  );
}
