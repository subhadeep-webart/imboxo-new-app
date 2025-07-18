import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals"), {
  rules: {
    // Optional: Add your custom rules here
    "no-var": "error",
    "prefer-const": "warn",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-duplicate-import": "error",
  },
},];

export default eslintConfig;
