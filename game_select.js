let sa = document.getElementById("game-medium");
let _00 = document.getElementById("game-hard");

function gameInDev(event) {
  event.preventDefault();
  alert("Game mode still in development!");
}

sa.addEventListener("click", gameInDev);
_00.addEventListener("click", gameInDev);