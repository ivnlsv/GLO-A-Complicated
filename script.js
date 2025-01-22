function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function() {
      let element;

      if (this.selector.startsWith('.')) {
          // Создаем div с классом
          element = document.createElement('div');
          element.className = this.selector.slice(1); // Убираем точку
      } else if (this.selector.startsWith('#')) {
          // Создаем параграф с id
          element = document.createElement('p');
          element.id = this.selector.slice(1); // Убираем решетку
      }

      // Установим свойства элемента
      if (element) {
          element.style.height = this.height;
          element.style.width = this.width;
          element.style.background = this.bg;
          element.style.fontSize = this.fontSize;
          element.textContent = "Новый элемент"; // Текст внутри элемента

          // Добавляем элемент на страницу
          document.body.appendChild(element);
      }
  };
}

// Создаем новый объект на основе класса DomElement
const myElement = new DomElement('.my-class', '100px', '100px', 'lightblue', '16px');

// Вызываем метод для создания элемента на странице
myElement.createElement();
