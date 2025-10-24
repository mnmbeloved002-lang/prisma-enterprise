# Quality Gate (допуск в main)

## Обязательные условия

- ✅ CI зелёный: build, lint, тесты, commitlint
- ✅ Lighthouse (Mobile) ≥ 90 на ключевых экранах
- ✅ ESLint ошибок = 0, Prettier автоформат
- ✅ Документация актуальна:
  - CHANGELOG.md
  - docs/USER_STORIES.md (статусы US)
  - docs/ROADMAP.md (MoSCoW)
  - ADR при архитектурных решениях
- ✅ Проверка в двух средах: dev-preview ок, prod готов к промоушену

## Ручные UAT-пункты

- В браузере и Telegram WebApp нет перекрытий/ломающейся верстки
- Пустые состояния и ошибки человеко-понятны (баннеры/заглушки)
