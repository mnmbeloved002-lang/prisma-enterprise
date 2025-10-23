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
