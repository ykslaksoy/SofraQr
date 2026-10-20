import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localeLabels, locales } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  pathSuffix,
}: {
  locale: Locale;
  pathSuffix: string;
}) {
  return (
    <div className="flex gap-2 text-sm">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${pathSuffix}`}
          className={
            loc === locale
              ? "font-semibold text-zinc-900"
              : "text-zinc-500 hover:text-zinc-800"
          }
          aria-current={loc === locale ? "true" : undefined}
        >
          {localeLabels[loc]}
        </Link>
      ))}
    </div>
  );
}
