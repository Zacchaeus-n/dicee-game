// generating random numbers to select images
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// displaying the left side image
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

//   displaying the right side image
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

//   Showing the winner for each round
randomNumber1 > randomNumber2
  ? (document.querySelector("h1").textContent = "Player 1 Wins 🚩")
  : randomNumber1 < randomNumber2
  ? (document.querySelector("h1").textContent = "Player 2 Wins 🚩")
  : (document.querySelector("h1").textContent = "There was a draw!");
