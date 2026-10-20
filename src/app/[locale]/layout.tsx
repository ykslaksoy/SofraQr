import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;

  return (
    <>
      <div className="flex-1">{children}</div>
      <Footer locale={locale} />
    </>
  );
}
