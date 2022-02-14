const squareDiv = document.createElement("div");
squareDiv.className = "single-square";

for (let i = 0; i <= 32; i++) {
  document.getElementById("main").appendChild(squareDiv);
}
