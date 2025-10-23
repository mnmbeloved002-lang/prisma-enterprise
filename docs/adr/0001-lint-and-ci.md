# ADR 0001 — Lint, Typecheck и CI Strategy

## 🧭 Контекст

Для обеспечения стабильности кода и качества поставки требуется строгий контроль через линтер, проверку типов и автоматические CI-пайплайны (GitHub Actions).

## 💡 Решение

1. Используем ESLint для проверки кода и порядка импортов (`simple-import-sort`).
2. Используем `tsc --noEmit` для статической проверки типов.
3. CI состоит из трёх этапов:
   - Security checks (lockfile, pkg-lint, audit);
   - Lint + Typecheck + Build;
   - CodeQL + Gitleaks для анализа уязвимостей.
4. Все проверки запускаются при push и pull request в ветки `main` и `dev`.

## 📈 Результат

- Автоматизированный контроль качества кода;
- Предсказуемые сборки (reproducible builds);
- Отчётность в разделе Actions и Security GitHub.

## 📅 Дата

2025-10-23

Автор: **Shumik D.V. (IksKlUziFF)**
