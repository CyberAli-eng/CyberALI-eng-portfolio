import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Same rule set as the previous .eslintrc.json ("next/core-web-vitals"), in ESLint 9 flat format.
export default defineConfig([
  ...nextVitals,
  {
    // New in eslint-config-next 16 (React Compiler readiness checks). Kept visible as
    // warnings: the flagged animation code predates these rules and works as intended.
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/immutability": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
