const input = document.getElementById("input");
const confirm = document.getElementById("confirm");
const result = document.getElementById("result");
const guessed = document.getElementById("guessed");

let correctLetter;
let guessedLetters = [];

// Generate random letter
function randomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

// Start game
function startGame() {
  correctLetter = randomLetter();
  guessedLetters = [];
  input.value = "";
  result.innerHTML = "";
  guessed.innerHTML = "Keys Guessed: ";
  input.removeAttribute("disabled");
  confirm.style.display = "none";
}

// Handle user guess
function handleGuess() {
  const guess = input.value.toLowerCase();


  // Check if the letter is valid
  if (!/^[a-zA-Z]$/.test(guess)) {
    result.innerHTML = "Not a valid letter. Try again.";
    result.style.color = "red";
    return;
  }

  // Check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    result.innerHTML = "You already guessed this letter. Try again.";
    result.style.color = "red";
    return;
  }

  // Update list of guessed letters
  guessedLetters.push(guess);
  guessed.innerHTML = "Keys Guessed: " + guessedLetters.join(", ");

  // Check if the guess is correct
  if (guess === correctLetter) {
    result.innerHTML = "You are correct! The key is " + correctLetter;
    result.style.color = "green";
    input.setAttribute("disabled", "disabled");
    confirm.style.display = "inline-block";
  } else {
    result.innerHTML = "Wrong guess. Try again.";
    result.style.color = "red";
  }
}

// Confirm button event listener
confirm.addEventListener("click", startGame);

// Input field event listener
input.addEventListener("input", handleGuess);

// Start the game
startGame();
