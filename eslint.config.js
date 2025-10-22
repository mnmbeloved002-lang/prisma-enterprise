// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import globals from "globals";

// 1) Глобальные игноры — применяются ко всем файлам
const ignoreAll = {
  ignores: [
    "dist/**",
    "node_modules/**",
    "**/vite.config.*",
    "**/*.config.*",
    "**/*.d.ts",
    "**/*.cjs",
  ],
};

// 2) Основной конфиг — только исходники
const appConfig = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["src/**/*.{ts,tsx}"],
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
    },
  },
);

export default [ignoreAll, ...appConfig];
