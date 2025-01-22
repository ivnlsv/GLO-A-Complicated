function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = function (text) {
    let elem;

    if (this.selector.startsWith(".")) {
      elem = document.createElement("div");
      elem.className = this.selector.slice(1);
    } else if (this.selector.startsWith("#")) {
      elem = document.createElement("p");
      elem.id = this.selector.slice(1);
    }

    elem.style.cssText = `
      height: ${this.height}px; 
      width: ${this.width}px; 
      background: ${this.bg}; 
      font-size: ${this.fontSize}px; 
      position: absolute;
  `;
    elem.textContent = text || "Новый элемент";
    document.body.appendChild(elem);
    return elem;
  };
}
document.addEventListener("DOMContentLoaded", function () {
  const square = new DomElement(".block", 100, 100, "lightblue", 16);
  const element = square.createElem();

  let position = { x: 0, y: 0 };

  function moveElem(event) {
    switch (event.key) {
      case "ArrowUp":
        position.y -= 10;
        break;
      case "ArrowDown":
        position.y += 10;
        break;
      case "ArrowLeft":
        position.x -= 10;
        break;
      case "ArrowRight":
        position.x += 10;
        break;
    }
    element.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }

  window.addEventListener("keydown", moveElem);
});
