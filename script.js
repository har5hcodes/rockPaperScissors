let yourChoiceValue, computerChoiceValue;
let roundNum = 1;
let yourScore = 0,
  computerScore = 0;
let roundResult;
let gameResult;

const chooseboard = document.querySelector(".chooseboard");
const playboard = document.querySelector(".playboard");

const rockHand = document.querySelector(".rockHand");
const paperHand = document.querySelector(".paperHand");
const scissorHand = document.querySelector(".scissorHand");

const rulesContainer = document.querySelector(".rulesContainer");
const rulesBtn = document.querySelector(".rulesBtn");
const rulesCloseBtn = document.querySelector(".rulesCloseBtn");

function checkRoundWinner(player1, player2) {
  if (player1 === player2) {
    return 0;
  } else if (
    (player1 === 0 && player2 === 2) ||
    (player1 === 1 && player2 === 0) ||
    (player1 === 2 && player2 === 1)
  ) {
    return -1;
  } else {
    return 1;
  }
}

rockHand.addEventListener("click", () => {
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 0;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);
  } else {
    return undefined;
  }
});

paperHand.addEventListener("click", () => {
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 1;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);
  } else {
    return undefined;
  }
});

scissorHand.addEventListener("click", () => {
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 2;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);
  } else {
    return undefined;
  }
});

rulesBtn.addEventListener("click", () => {
  rulesContainer.style.display = "block";
});
rulesCloseBtn.addEventListener("click", () => {
  rulesContainer.style.display = "none";
});
