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

      element.style.cssText = `
      height: ${this.height}px; 
      width: ${this.width}px; 
      background: ${this.bg}; 
      font-size: ${this.fontSize}px; 
      position: absolute;
  `;
  element.textContent = 'Новый элемент';
  document.body.appendChild(element);
  
      }
};
 // Создать новый объект на основе класса DomElement
const myElement = new DomElement('.block', '100', '100', 'lightblue', '20');

// Вызвать метод, чтобы создать элемент на странице
myElement.createElement();