# 🧱 Project Setup — Prisma Enterprise Foundation

## 📦 Среда и версии

- Node.js 22 (фиксировано через `engines` и Volta)
- NPM 10+
- Настроены `.npmrc`, `.gitattributes`, `.vscode/extensions.json`

## 🧰 Контроль качества

- ESLint + Prettier + Simple Import Sort
- TypeScript strict + `npm run typecheck`
- CI (GitHub Actions): Lint → Typecheck → Build
- Security Checks: lockfile-lint, pkg-lint, audit
- CodeQL + Gitleaks для анализа уязвимостей

## 🧩 Dev Experience

- Commitizen отключён → стандартные commitlint правила
- Husky v10-ready pre-commit hooks
- CSpell орфография (рус+англ, tech словарь)
- Dev Container: Node 22 + ESLint + Prettier

## 🌿 Env & Конфиги

- Пример `.env.example`
- Игнор `.env.local` файлов в git

## 📜 Документация

- LICENSE (MIT+Attribution)
- README с бейджами
- ADR-0001: Lint & CI Strategy
- CODEOWNERS: автоназначение ревьюера

---

✅ **Фаза 0 завершена**  
Готово к переходу в **Фазу 1 — Development Infrastructure**

## 🧾 Итог Фазы 0 — ФУНДАМЕНТ (завершено 2025-10-23)

### Сделано (100% рабочее)

- Reproducibility:
  - `.npmrc` (save-exact, audit, fund, engine-strict)
  - `.gitattributes` (LF), `.vscode/extensions.json`
  - `package.json → engines + engineStrict` (Node 22, npm 10)
- Качество кода:
  - `npm run typecheck` (tsc --noEmit), `npm run check` (lint+typecheck+build)
  - ESLint 9 + simple-import-sort (порядок импортов)
  - Prettier, lint-staged (JSON/MD/YML/CSS/SCSS/TS/TSX)
- Безопасность:
  - CI: security-bundle (`lockfile-lint`, `npm-package-json-lint`, `npm audit --omit=dev`)
  - CodeQL (JS/TS + GitHub Actions)
  - Gitleaks (официальный action, SARIF в Security). PR от dependabot — **skip**, пайплайн зелёный
- CI/CD:
  - GitHub Actions: `lint → typecheck → build → size-limit`
  - `size-limit` (gzip) на `dist/assets/*.js` ≤ **120 kB**
  - `.browserslistrc` – `>0.5%`, `not dead`, `not op_mini all`
- DevX:
  - CSpell (RU/EN + тех-словари), `cspell.words.txt` / `cspell.ignore.txt`
  - Husky: v10-safe хуки (без `_/husky.sh`)
  - Dev Container: Node 22, ESLint/Prettier/Spell, `postCreateCommand: npm ci`
- Документация и процесс:
  - `README` обновлён (бейджи), LICENSE (MIT + Attribution: **Shumik D.V.**)
  - `SETUP.md` обновлён, `CHANGELOG.md` создан
  - `.github/pull_request_template.md`, `.github/CODEOWNERS` (по умолчанию владелец)
  - `docs/adr/0001-lint-and-ci.md`

### Не делали / Отложено (причина → куда переносим)

- Volta pin Node 22 (**отложено**): на твоей Windows падали архивы Node при install → перенесено в **Фазу 1**, т.к. локально уже стоит Node 22 и CI фиксирует версии.
- Type-aware ESLint (`recommendedTypeChecked`/`strictTypeChecked`) (**отложено**): требует разделения tsconfig (app/node) и доп. настройки путей → перенесено в **Фазу 1**.
- Валидация `.env` (zod/envalid) (**отложено**): внедрим при появлении первых runtime-переменных → **Фазa 1**.
- Auto-approve Dependabot (**не включали осознанно**): оставили ручное review + зелёный CI как защиту → решим в **Фазе 1** при необходимости.
- SECURITY.md (**не делали**): информполитика для репортов уязвимостей → опционально в **Фазе 1**.

### Состояние системы

- CI / Security: **зелёный**, CodeQL активен, Gitleaks публикует SARIF (алертов сейчас нет).
- Репроducibility: версии зафиксированы, сборка предсказуемая.
- Документация: актуальна, ADR есть.
