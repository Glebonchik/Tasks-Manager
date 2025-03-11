# Task-Manager

**Task-Manager** - копия Trollo для изучения Redux Toolkit, React DnD.  

## Основные функции
- Drag'n'Drop для перемещения тасков из одной карточки в другую


## Структура проекта

- **components/Board.tsx**: Окно для отображения карточек.
- **components/Сard.tsx**: Отображения карточки заданий, в ней реализуется фича сброса переносимого таска.
- **components/TaskItem.tsx**: Компонент отдельного задания, реализация фичи удержания и переноса таска.
- **hooks/stateHooks.tsx**: Хуки для использования Selector'а и Dispatcha'а.
- **interfaces/**: Директория, содержащая интерфейсы.
  - `cardProps.ts`: пропы для компонента **Card.tsx**
  - `taskProps.ts`: пропы для компонента **TaskItem.tsx**
  - `columns.ts`: интерфейс для стора карточки **cardStore.ts**
- **state/store.ts**: Кофигурация стора и редусеров.
- **state/card/cardStore.ts**: Объявления слайса карточки.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Glebonchik/Tasks-Manager.git
   cd Task-Manager

1. Клонируйте репозиторий:
   ```bash
   yarn