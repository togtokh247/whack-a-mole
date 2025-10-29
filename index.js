const startBtn = document.querySelector("button");
const moles = document.querySelectorAll(".mole");
const scoreBox = document.querySelector(".score");
let score = 0;

startBtn.addEventListener("click", () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];

    mole.style.top = "0%"; 
    setTimeout(() => {
      mole.style.top = "100%"; 
    }, 1000);
  }, 1500);
});

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    score++;       
    render();      
  });
});

function render() {
  scoreBox.textContent = `Score: ${score}`;
}
