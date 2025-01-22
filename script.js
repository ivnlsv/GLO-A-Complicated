function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = function () {
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
    elem.textContent = "Новый элемент";
    document.body.appendChild(elem);
  };
}

const square = new DomElement(".block", "100", "100", "lightblue", "20");
square.createElem();
