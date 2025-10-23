# 🧾 CHANGELOG — Prisma Enterprise Foundation

## [0.0.1] — 2025-10-23

### Added

- Reproducible environment (Node 22, npm 10, Volta)
- CI workflows (lint, typecheck, build)
- Security bundle (lockfile-lint, pkg-lint, audit)
- CodeQL + Gitleaks integration
- Commit linting & Husky hooks
- CSpell multi-dict (ru+en+tech)
- DevContainer setup
- ADR-0001, CODEOWNERS, LICENSE

### Status

Фаза 0 — фундамент полностью построен.  
Система стабильна, надёжна, воспроизводима.

## [0.0.1] — 2025-10-23 — ФАЗА 0: Фундамент

### Added

- Reproducible среда: Node 22 / npm 10 (engines), .npmrc, .gitattributes, VS Code рекомендации
- Качество: ESLint 9 + simple-import-sort, Prettier, typecheck, общий `npm run check`
- Безопасность: lockfile-lint, npm-package-json-lint, npm audit; CodeQL; Gitleaks (SARIF, skip для dependabot)
- CI: GitHub Actions (lint → typecheck → build → size-limit), `.browserslistrc`
- DevX: CSpell (RU/EN/tech), Husky v10-safe, DevContainer (Node 22)
- Документация: README, LICENSE (MIT+Attribution), PR template, CODEOWNERS, ADR-0001, обновлённый SETUP

### Deferred

- Volta pin Node 22 (проблемы распаковки на Windows) → Phase 1
- Type-aware ESLint (recommendedTypeChecked/strictTypeChecked) → Phase 1
- .env validation (zod/envalid) → Phase 1
- SECURITY.md, auto-approve dependabot → Phase 1 (опционально)

### Status

Фаза 0 завершена. Фундамент собран, пайплайн зелёный, безопасность включена.
