const startBtn = document.querySelector(".start-btn");
const restartBtn = document.querySelector(".restart-btn");
const moles = document.querySelectorAll(".mole");
const scoreBox = document.querySelector(".score");
const timerBox = document.querySelector(".timer");

let score = 0;
let gameStarted = false;
let timeLeft = 30; 
let gameInterval;
let timerInterval;

startBtn.addEventListener("click", () => {
  if (gameStarted) return;
  gameStarted = true;
  startGame();
});

restartBtn.addEventListener("click", restartGame);

function startGame() {
  render();

  timerInterval = setInterval(() => {
    timeLeft--;
    render();
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  gameInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    mole.clicked = false;

    mole.style.top = "0%";

    setTimeout(() => {
    //   if (!mole.clicked) {
    //     score--;
    //     render();
    //   }
      mole.style.top = "100%";
      mole.clicked = true;
    }, 1000);
  }, 800);
}

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    if (!mole.clicked) {
      mole.clicked = true;
      score++;
      render();
      mole.style.top = "100%"; 
    }
  });
});

function render() {
  scoreBox.textContent = `Score: ${score}`;
  timerBox.textContent = `Time: ${timeLeft}s`;
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  alert(`⏰ Тоглоом дууслаа!\nТаны оноо: ${score}`);
  gameStarted = false;
}

function restartGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  score = 0;
  timeLeft = 60;
  gameStarted = false;
  render();
}
