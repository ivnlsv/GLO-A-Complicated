const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let requestId;
let isPaused = false;
let x = 0;
let direction = 1;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, 200, 50, 50);

  x += direction;

  if (x > canvas.width - 50 || x < 0) {
    direction *= -1;
  }

  if (!isPaused) {
    requestId = requestAnimationFrame(animate);
  }
};

document.getElementById("toggleBtn").addEventListener("click", () => {
  isPaused = !isPaused;
  document.getElementById("toggleBtn").textContent = isPaused
    ? "Продолжить"
    : "Пауза";
  if (!isPaused) {
    requestId = requestAnimationFrame(animate);
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  isPaused = false;
  x = 0;
  direction = 1;
  document.getElementById("toggleBtn").textContent = "Пауза";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestId = requestAnimationFrame(animate);
});

requestId = requestAnimationFrame(animate);

