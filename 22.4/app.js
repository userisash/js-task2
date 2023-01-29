const player1Race = document.querySelector("#player1-race");
const player2Race = document.querySelector("#player2-race");
let winner = null;

document.addEventListener("keyup", (event) => {
  if (winner) return;
  if (event.code === "KeyA") {
    moveCar(player1Race);
  } else if (event.code === "KeyL") {
    moveCar(player2Race);
  }
});

function moveCar(playerRace) {
  const activeCell = playerRace.querySelector(".active");
  if (activeCell.nextElementSibling.classList.contains("finish")) {
    winner = playerRace.id;
    announceWinner();
  } else {
    activeCell.classList.remove("active");
    activeCell.nextElementSibling.classList.add("active");
  }
}

function announceWinner() {
  alert(`Player ${winner.split("-")[0].substr(-1)} won!`);
}

function restartGame() {
  player1Race.querySelectorAll("td").forEach((cell) => {
    cell.classList.remove("active");
  });
  player2Race.querySelectorAll("td").forEach((cell) => {
    cell.classList.remove('active');
  });
}

document.getElementById("reset-game-button").addEventListener("click", resetGame);

function resetGame() {
    document.getElementById("player1-race").querySelectorAll("td").forEach(td => {
      td.classList.remove("active");
    });
    document.getElementById("player2-race").querySelectorAll("td").forEach(td => {
      td.classList.remove("active");
    });
    document.getElementById("player1-race").querySelector("td").classList.add("active");
    document.getElementById("player2-race").querySelector("td").classList.add("active");
  }
  