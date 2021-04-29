# goit-react-hw-03-phoenbook

GoIT course React homework

# Критерии приема

- Создан репозиторий goit-react-hw-03-image-finder
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу
  проектов на GitHub pages
- В состоянии компонентов хранится минимально необходимый набор данных,
  остальное вычисляется
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей
- Для компонентов описаны propTypes, и где необходимо, defaultProps
- Все что компонент ожидает в виде пропов, передается ему при вызове
- Имена компонентов понятные, описательные
- JS-код чистый и понятный, используется Prettier
- Стилизация делается только SASS, CSS-модулями или Styled Components, поэтому
  классы в результирующем DOM могут отличаться от примеров.
- Для стилизации достаточно позиционирование и размеры приближенные к макету.
  Компоненты, в первую очередь, должны работать, а уже потом быть красивые,
  выделяй 20% времени на стилизацию и 80% на JS.

# Поиск изображений

Напиши приложение поиска изображений по ключевому слову. Превью рабочего
приложения
[смотри по ссылке](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Создай компоненты `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` и `<Modal>`.

![preview](./src/mockup/preview.jpg)

## Инструкция Pixabay API

Для HTTP-запросов используй публичный сервис поиска изображений
[Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся и получи приватный
ключ доступа.

URL-строка HTTP-запроса.

```bash
https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API поддерживает пагинацию, по умолчанию параметр `page` равен `1`.
Пусть в ответе приходит по 12 объектов, установлено в параметре `per_page`. Не
забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение
`page` в `1`.

В ответе от апи приходит массив объектов, в которых тебе интересны только
следущие свойства.

- `id` - уникальный идентификатор
- `webformatURL` - ссылка на маленькое изображение для списка карточек
- `largeImageURL` - ссылка на большое изображение для модального окна

## Описание компонента Searchbar

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
при сабмите формы. Создает DOM-элемент следующей структуры.

```html
<header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Описание компонента ImageGallery

Список карточек изображений. Создает DOM-элемент следующей структуры.

```html
<ul className="ImageGallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

## Описание компонента ImageGalleryItem

Компонент элемента списка с изображением. Создает DOM-элемент следующей
структуры.

```html
<li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>
```

## Описание компонента Button

При нажатии на кнопку `Load more` должна догружаться следующая порция
изображений и рендериться вместе с предыдущими. После загрузки и рендера новой
партии изображений страница должна плавно скролиться. Для скрола используй
следующий код.

```js
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
```

Кнопка должна рендерится только тогда, когда есть какие-то загруженные
изобаржения. Если массив изображений пуст, кнопка не рендерится.

## Описание компонента Loader

Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
готовый компонент, например
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой
другой.

## Описание компонента Modal

При клике по элементу галереи должно открываться модальное окно с темным
оверлеем и отображаться большая версия изображения. Модальное окно должно
закрываться по нажатию клавиши `ESC` или по клику на оверлее.

Внешний вид похож на функционал этого
[VanillaJS-плагина](https://basiclightbox.electerious.com/), только вместо
белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию
делать не нужно!

```html
<div className="Overlay">
  <div className="Modal">
    <img src="" alt="" />
  </div>
</div>
```

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).
