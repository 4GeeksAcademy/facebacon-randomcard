/* eslint-disable */
import "./style.css";

//My super COOL indexes
const suits = ["♠", "♥", "♦", "♣"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

//Create these undefined var, since I randomize them in the start they don't give me troubles because they dont remain undefined
let currentSuitIndex;
let currentRankIndex;

//This section defines the card update function, and three variables to update. The arrays are chosen randomly and it puts some constrains around color
function updateCard() {
  const suit = suits[currentSuitIndex];
  const rank = ranks[currentRankIndex];
  const color = suit === "♥" || suit === "♦" ? "red" : "black";

  //This updates the card suit and color in the HTML
  document.querySelectorAll(".suit").forEach(element => {
    element.textContent = suit;
    element.style.color = color;
  });

  //This updates the card rank in the HTML
  const rankElement = document.querySelector(".rank");
  rankElement.textContent = rank;
  console.log(`Random Card: ${rank} of ${suit}`);
}

//These next three sections are the buttons and their functionality and it changes the card based on the logic below

document.getElementById("previous-rank").addEventListener("click", () => {
  if (currentRankIndex > 0) {
    currentRankIndex--;
  } else {
    currentRankIndex = ranks.length - 1;
  }
  updateCard();
});

document.getElementById("next-rank").addEventListener("click", () => {
  if (currentRankIndex < ranks.length - 1) {
    currentRankIndex++;
  } else {
    currentRankIndex = 0;
  }
  updateCard();
});

document.getElementById("cycle-suit").addEventListener("click", () => {
  if (currentSuitIndex < suits.length - 1) {
    currentSuitIndex++;
  } else {
    currentSuitIndex = 0;
  }
  updateCard();
});

// This loads the random #s as soon as the window loads and chooses a random Suit and Rank from the arrays and places it in the current variable which runs and displays above
window.onload = () => {
  currentSuitIndex = Math.floor(Math.random() * suits.length);
  currentRankIndex = Math.floor(Math.random() * ranks.length);
  updateCard();
};
