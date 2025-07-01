let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener(".click", function () {
  const gues = number(document.querySelector(".guess").value);
});

if (!guess) {
  displayMessage("No number!");
} else if (guess === secretNumber) {
  displayMessage("Correct number!");
  document.querySelector(".number").textContent = secretNumber;
  document.body.style.backgroundColor = "green";

  if (score > highscore) {
    highscore = score;
  }
}
