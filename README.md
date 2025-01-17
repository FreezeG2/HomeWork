[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6WSz_x5B)
## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Задание

Ваша задача состоит в том, чтобы сверстать каталог с карточками с указанными стилями и атрибутами.

### Примечания

Запрещено менять какие-либо файлы кроме **index.html** и **styles/app.css**.

Результат, который ожидают тесты вы можете посмотреть по адресу **tests/example.spec.js-snapshots**.

Вы можете самостоятельно протестировать свою работу с помощью команды `make test`, либо `npm test`.

Кроме того, не забывайте запускать команду `npm run vite`, чтобы убедиться, что все работает. Используйте инструменты разработчика в браузере для дебага приложения.

Для дебага работы экшенов вы можете выгружать артефакты из `github actions`. Для работы приложения необходимо иметь `Node.js` не ниже 20 версии (а лучше 22).

Скриншот тестирование выполняется для операционной системы Linux.

## 1 задача

В файле **index.html** подключите стили, которые расположены по адресу **styles/app.css** и **styles/default.css**. В теле документа создайте заголовок первого уровня с классом **heading** и с содержанием `Tech stack`.

## 2 задача

После заголовка создайте flex-контейнер c помощью тега `section` с классом **cards**.

Элементы в созданном контейнере должны располагаться **по оси x**.

Расстояния между соседними элементами внутри контейнера одинаковые, перед первым и после последнего элемента отступы отсутсвуют.

При нехватке места элементы должны перноситься внутри контейнера на новую строку.

Cтили записывайте в файле **styles/app.css**.

## 3 задача

Внутри flex-контейнера создайте 5 карточек с помощью тега `div` с классом **card**.

Элементы внутри карточки должны располагаться **по оси у** и быть выровнены по центру по двум осям (используйте flex).

Каждая карточка должна включать в себя:

* Логотип
* Заголовок 4 уровня с названием

Картинки для логотипов необходимо взять из папки **assets**.

Названия (создавать карточки в таком же порядке):

* HTML
* CSS
* JavaScript
* React
* Vue

## 4 задача

Добавьте для каждой карточки следующее свойство при наведении:

```css
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 0;
```

Используйте для этого псевдоклассы.
