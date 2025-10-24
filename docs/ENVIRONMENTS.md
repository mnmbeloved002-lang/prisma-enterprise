# Environments (Vercel dev ↔ prod)

## Проекты и привязка веток

- **Vercel-Dev**: prisma-enterprise-dev ← ветка dev
- **Vercel-Prod**: prisma-enterprise-prod ← ветка main
- Preview-URL для PR включены по умолчанию

## Переменные окружения

- Секреты хранятся только в Vercel Env
- Локальная разработка: .env (в Git — только .env.example)
- Прод и дев — независимые наборы секретов (ротация по политике безопасности)

## Telegram WebApp / Webhook

- Prod-домен зарегистрирован в настройках бота
- /api/tg-webhook: health-check GET, валидация secret header для POST

## Проверки

- Dev: визуальная проверка фич + Lighthouse отчёт (Mobile)
- Prod: только через Release PR при выполненном Quality Gate
