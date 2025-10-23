# 🧭 Project Setup — Prisma Enterprise Foundation

## 1. Системные требования

- Windows 10/11
- Node.js LTS v22.20.0
- npm 10.9.3
- Git 2.51.1

## 2. Быстрый старт

```bash
git clone https://github.com/mnmbeloved002-lang/prisma-enterprise.git
cd prisma-enterprise
npm ci
npm run dev

3. Скрипты npm

npm run dev — локальная разработка (Vite)

npm run build — сборка продакшена

npm run lint — ESLint 9 (flat config)


4. Хуки Git (Husky + lint-staged)

Хуки лежат в .husky/

На Windows оставляем вариант с bash-скриптами; предупреждения "DEPRECATED" допустимы (v9).

pre-commit запускает lint-staged, commit-msg — commitlint.


5. CI (GitHub Actions)

Файл: .github/workflows/ci.yml

Триггеры: push/pull_request для dev, main и ручной workflow_dispatch

Шаги: checkout → setup-node 22 → npm ci → npm run build


6. Частые проблемы

Нет прав на hooks: проверь наличие файлов в .husky/ и что они в репо.

ESLint ругается на плагины-массив: у нас уже flat-config, плагины — объект.

Actions не запускается вручную: проверь наличие блока workflow_dispatch в ci.yml.


7. Коммиты по Conventional Commits

Примеры: feat(ui): add card, fix(ci): pin node 22, chore(deps): update.

```
