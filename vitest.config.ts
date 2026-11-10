import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname) } },
  // AUDIT_SHEET_WEBHOOK_URL="" keeps tests on the local CSV instead of the real Google Sheet.
  test: { environment: "node", include: ["tests/**/*.test.ts"], env: { AUDIT_SHEET_WEBHOOK_URL: "" } },
});
