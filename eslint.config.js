// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import globals from "globals";
import simpleImportSort from "eslint-plugin-simple-import-sort"; // 🆕 добавили плагин

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: [
      "dist",
      "node_modules",
      "**/vite.config.*",
      "**/*.config.*",
      "**/*.d.ts",
      "**/*.cjs",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort, // 🆕 зарегистрировали плагин
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
      "no-empty": "off",
      "no-console": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // 🆕 правила сортировки импортов и экспортов
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
);
