function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function(text) {
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
  element.textContent = text || 'Новый элемент';
  document.body.appendChild(element);
  return element;
      }
 };
 document.addEventListener("DOMContentLoaded", function() {
  const square = new DomElement('.square', 100, 100, 'red', 16);
  const element = square.createElement();

  let position = { x: 0, y: 0 };

  function moveElement(event) {
      switch (event.key) {
          case 'ArrowUp':
              position.y -= 10;
              break;
          case 'ArrowDown':
              position.y += 10;
              break;
          case 'ArrowLeft':
              position.x -= 10;
              break;
          case 'ArrowRight':
              position.x += 10;
              break;
      }
      element.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }

  window.addEventListener('keydown', moveElement);
});



