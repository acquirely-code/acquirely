import { describe, expect, it } from "vitest";
import { CODELESS_ADD_TO_CART, ctaKey } from "@/lib/audit-form/tracking";

// Each homepage CTA must get exactly one AddToCart: from the Meta setup tool if its text matches a rule, else from code.
describe("CTA AddToCart source", () => {
  const codeless = (text: string) => CODELESS_ADD_TO_CART.has(ctaKey(text));
  it("leaves buttons the setup tool already tracks to it", () => {
    expect(codeless("Book a Call")).toBe(true);
    expect(codeless("Yes, I'm Ready. Apply Now ")).toBe(true);
    expect(codeless("Book Your Free Audit! ")).toBe(true);
    expect(codeless("Book a Lead Quality Audit")).toBe(true);
  });
  it("fires from code for the other homepage buttons", () => {
    for (const text of ["Get the same diagnosis →", "Book a Growth Diagnosis Call ", "Get the Same Diagnosis ", "Book Your Free Call! "]) {
      expect(codeless(text)).toBe(false);
    }
  });
});
