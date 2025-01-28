const inputField = document.getElementById("textInput");
const displayParagraph = document.getElementById("displayText");
let timeoutId;

inputField.addEventListener("input", () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    displayParagraph.textContent = inputField.value;
  }, 300);
});
