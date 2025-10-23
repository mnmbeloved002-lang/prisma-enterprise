# ADR-0001: Lint + Typecheck + Build в CI

**Status:** Accepted  
**Date:** 2025-10-23

## Context

Нужна повторяемая и быстрая проверка качества: линт, типы, сборка, безопасность.

## Decision

- `npm run check` вызывает: `lint` → `typecheck` → `build`.
- Добавлен security-bundle (`lockfile-lint`, `npm-package-json-lint`, `npm audit`).
- Включены CodeQL и Gitleaks (официальная action, SARIF, "зелёный" пайплайн).

## Consequences

- PR не проходит без «зелёного» CI.
- Уязвимости и секреты подсвечиваются автоматически.
- Нагрузка минимальна, время сборки приемлемое.
