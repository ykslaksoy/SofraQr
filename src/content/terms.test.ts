import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CONTACT_URL,
  TERMS_EFFECTIVE_DATE,
  termsContent,
} from "./terms";

describe("terms content", () => {
  it("has the required effective date", () => {
    assert.equal(TERMS_EFFECTIVE_DATE, "2026-10-20");
  });

  it("uses the repository contact URL", () => {
    assert.equal(CONTACT_URL, "https://github.com/ykslaksoy/SofraQr/issues");
  });

  for (const locale of ["tr", "en"] as const) {
    it(`includes all required sections in ${locale}`, () => {
      const sections = termsContent[locale].sections;
      assert.equal(sections.length, 6);
      const combined = sections.map((s) => s.body).join(" ").toLowerCase();
      assert.match(combined, /bot|otomatik|automated/);
      assert.match(combined, /harvest|topla|collect/);
      assert.match(combined, /reverse|tersine/);
      assert.match(combined, /compet|rakip|benchmark/);
      assert.match(combined, /suspend|askı|terminat|fesih/);
      assert.match(combined, /türkiye|turkey/);
    });
  }
});
