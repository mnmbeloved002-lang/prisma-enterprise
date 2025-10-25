# Release Flow

## Ветки

- main → Production (защищена: только PR + зелёный CI)
- dev → Development (интеграция фич)
- eature/\* → от dev (одна задача — одна ветка)
- hotfix/\* → от main (критические исправления)

## Поток

1. feature/\* → PR в dev → Review → CI зелёный → merge
2. Release PR: dev → main (только при выполненном Quality Gate)
3. Тег релиза X.Y.Z → автодеплой в Production

## Hotfix

- hotfix/\* от main → PR в main → тег PATCH → back-merge main → dev

## Версионирование

- SemVer (MAJOR.MINOR.PATCH)
- Каждому релизу — запись в CHANGELOG.md (Added/Changed/Fixed/Security)
