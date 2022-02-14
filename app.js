const grid = document.querySelector("#main");

function createSquares(numSquares) {
  grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement("div");
    square.className = "square";
    let calculateWidth = 60 / numSquares;
    let calculateHeight = 60 / numSquares;
    square.style.width = `${calculateWidth}rem`;
    square.style.height = `${calculateHeight}rem`;
    grid.appendChild(square);
  }
}

createSquares(4);
