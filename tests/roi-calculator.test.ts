import { describe, expect, it } from "vitest";
import {
  calculateLeadGenROI,
  getDefaultInputs,
  parseNumber,
  roundMoney,
  validateField,
} from "../app/roi-calculator/_lib/calculator-engine";

describe("lead-generation ROI calculator", () => {
  it("calculates the example scenario, including salaries and office costs", () => {
    const result = calculateLeadGenROI(getDefaultInputs());

    expect(result.totalCost).toBe(315000);
    expect(result.revenue).toBe(750000);
    expect(result.firstMonthRevenue).toBe(125000);
    expect(result.profit).toBe(435000);
    expect(result.roi).toBeCloseTo(138.0952, 4);
    expect(result.costPerCustomer).toBe(12600);
    expect(result.breakEvenCustomers).toBe(10.5);
  });

  it("returns finite zero-cost results for empty inputs", () => {
    const result = calculateLeadGenROI({});

    expect(result.profit).toBe(0);
    expect(result.roi).toBe(0);
    expect(result.status.key).toBe("empty");
    expect(Object.values(result).filter((value): value is number => typeof value === "number").every(Number.isFinite)).toBe(true);
  });

  it("sanitizes formatted and invalid values and validates user input", () => {
    const result = calculateLeadGenROI({ metaSpend: "₹1,00,000", price: "not a number" });

    expect(result.inputs.metaSpend).toBe(100000);
    expect(result.inputs.price).toBe(0);
    expect(parseNumber("12.5%")).toBe(12.5);
    expect(validateField("price", "-5").error).toBe("Enter a value of 0 or more.");
    expect(validateField("price", "").error).toBeNull();
  });

  it("rounds money values safely at half-cent boundaries", () => {
    expect(roundMoney(1.005)).toBe(1.01);
    expect(roundMoney(-2.675)).toBe(-2.68);
  });
});
