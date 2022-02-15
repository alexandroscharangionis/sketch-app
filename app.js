const grid = document.querySelector("#main");

function createSquares() {
  let warningPara = document.getElementById("warningPara");
  warningPara.textContent = "";
  grid.innerHTML = "";
  let input = Number(document.getElementById("userInput").value);
  if (input > 100 || input < 0) {
    warningPara.textContent = `${input} is an invalid number. Please choose from 1 to 100.`;
    return;
  }

  grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  for (let i = 0; i < input * input; i++) {
    const square = document.createElement("div");
    square.className = "square";
    let calculateWidth = 60 / input;
    let calculateHeight = 60 / input;
    square.style.width = `${calculateWidth}rem`;
    square.style.height = `${calculateHeight}rem`;
    grid.appendChild(square);
    square.addEventListener("mouseenter", () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      square.style.backgroundColor = `${color}`;
    });
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", createSquares);

let input = document.getElementById("userInput");
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    btn.click();
  }
});
