let player = JSON.parse(localStorage.getItem("player")) || {
  screen: "welcome",
  playerName: "",
  yourScore: 0,
  computerScore: 0,
  roundNum: 1,
  totalRounds: 0,
  gameResultMsg1: "",
  gameResultMsg2: "",
  history: [],
};

let yourChoiceValue, computerChoiceValue;
let roundResult;
let gameResult;

const usernameInput = document.querySelector("#usernameInput");
const roundsInput = document.querySelector("#roundsInput");

const playerNameDisplay = document.querySelector(".playerNameDisplay");

const scoreBoard = document.querySelector(".scoreBoard");
const playground = document.querySelector(".playground");
const chooseboard = document.querySelector(".chooseboard");
const playboard = document.querySelector(".playboard");
const modal = document.querySelector(".modal");

const rockHand = document.querySelector(".rockHand");
const paperHand = document.querySelector(".paperHand");
const scissorHand = document.querySelector(".scissorHand");

const rockHandLeft = document.querySelector(".rockHandLeft");
const paperHandLeft = document.querySelector(".paperHandLeft");
const scissorHandLeft = document.querySelector(".scissorHandLeft");

const rockHandRight = document.querySelector(".rockHandRight");
const paperHandRight = document.querySelector(".paperHandRight");
const scissorHandRight = document.querySelector(".scissorHandRight");

const rulesContainer = document.querySelector(".rulesContainer");
const rulesBtn = document.querySelector(".rulesBtn");
const rulesCloseBtn = document.querySelector(".rulesCloseBtn");

const nextBtn = document.querySelector(".nextBtn");
const replayBtn = document.querySelector(".replayBtn");

const yourScoreDisplay = document.querySelector(".yourScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
const roundResultDisplay = document.querySelector(".roundResultDisplay");
const roundNumDisplay = document.querySelector(".roundNumDisplay");

const startGameForm = document.querySelector(".startGameForm");

const gameResult1 = document.querySelector(".gameResult1");
const gameResult2 = document.querySelector(".gameResult2");

const modalResume = document.getElementById("modalResume");

function welcomeScreen() {
  startGameForm.style.display = "flex";
  playground.style.display = "none";
  scoreBoard.style.display = "none";
  playboard.style.display = "none";
  rulesBtn.style.display = "flex";
  modal.style.display = "none";

  player.roundNum = 1;
  player.yourScore = 0;
  player.computerScore = 0;
  yourScoreDisplay.textContent = player.yourScore;
  computerScoreDisplay.textContent = player.computerScore;
  localStorage.setItem("player", JSON.stringify(player));
}

function gameplayScreen() {
  rockHandLeft.style.boxShadow = "";
  paperHandLeft.style.boxShadow = "";
  scissorHandLeft.style.boxShadow = "";
  rockHandRight.style.boxShadow = "";
  paperHandRight.style.boxShadow = "";
  scissorHandRight.style.boxShadow = "";

  startGameForm.style.display = "none";
  playground.style.display = "block";
  scoreBoard.style.display = "flex";
  chooseboard.style.display = "flex";
  playboard.style.display = "none";
  nextBtn.style.display = "none";
  replayBtn.style.display = "none";
  roundResultDisplay.textContent = "";
  rulesContainer.style.display = "none";
  modal.style.display = "none";

  roundNumDisplay.textContent = player.roundNum;
  playerNameDisplay.textContent = player.playerName;
  yourScoreDisplay.textContent = player.yourScore;
  computerScoreDisplay.textContent = player.computerScore;

  modalResume.style.display = "flex";
}

function gameoverScreen() {
  gameResult1.textContent = player.gameResultMsg1;
  gameResult2.textContent = player.gameResultMsg2;
  startGameForm.style.display = "none";
  playground.style.display = "none";
  chooseboard.style.display = "none";
  scoreBoard.style.display = "none";
  playboard.style.display = "none";
  rulesBtn.style.display = "none";
  modal.style.display = "flex";
}

if (player.screen == "welcome") {
  welcomeScreen();
} else if (player.screen == "gameplay") {
  gameplayScreen();
} else {
  gameoverScreen();
}

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

function displayButton() {
  if (roundResult === -1) {
    player.yourScore++;
    yourScoreDisplay.textContent = player.yourScore;
    roundResultDisplay.textContent = "You Win!";
    replayBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else if (roundResult === 1) {
    player.computerScore++;
    computerScoreDisplay.textContent = player.computerScore;
    roundResultDisplay.textContent = "You Lose!";
    replayBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else {
    replayBtn.style.display = "block";
    nextBtn.style.display = "none";
    roundResultDisplay.textContent = "Draw!";
  }
  localStorage.setItem("player", JSON.stringify(player));
}

function endGame() {
  player.screen = "gameover";

  startGameForm.style.display = "none";
  playground.style.display = "none";
  chooseboard.style.display = "none";
  scoreBoard.style.display = "none";
  playboard.style.display = "none";
  rulesBtn.style.display = "none";
  modal.style.display = "flex";

  if (player.yourScore > player.computerScore) {
    player.gameResultMsg1 = "Hurray!!!";
    player.gameResultMsg2 = "You Won the Game.";
    gameResult1.textContent = "Hurray!!!";
    gameResult2.textContent = "You Won the Game.";
  } else if (player.yourScore < player.computerScore) {
    player.gameResultMsg1 = "Sorry!!!";
    player.gameResultMsg2 = "You Lost the Game.";
    gameResult1.textContent = "Sorry!!!";
    gameResult2.textContent = "You Lost the Game.";
  } else {
    player.gameResultMsg1 = "Draw!!!";
    player.gameResultMsg2 = "You Tied the Game.";
    gameResult1.textContent = "Draw!!!";
    gameResult2.textContent = "You Tied the Game.";
  }
  localStorage.setItem("player", JSON.stringify(player));
}

function startGame() {
  if (player.roundNum === player.totalRounds + 1) {
    endGame();
    return;
  }

  rockHandLeft.style.boxShadow = "";
  paperHandLeft.style.boxShadow = "";
  scissorHandLeft.style.boxShadow = "";
  rockHandRight.style.boxShadow = "";
  paperHandRight.style.boxShadow = "";
  scissorHandRight.style.boxShadow = "";

  playground.style.display = "block";
  chooseboard.style.display = "flex";
  playboard.style.display = "none";
  nextBtn.style.display = "none";
  replayBtn.style.display = "none";
  roundResultDisplay.textContent = "";
  roundNumDisplay.textContent = player.roundNum;
  rulesContainer.style.display = "none";
}

function spinWheelAnimation() {
  rockHandRight.style.display = "flex";
  paperHandRight.style.display = "none";
  scissorHandRight.style.display = "none";

  const spinwheelAudio = new Audio("./assets/spinwheel.wav");
  spinwheelAudio.play();
  const randomInterval = setInterval(() => {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
      rockHandRight.style.display = "flex";
      paperHandRight.style.display = "none";
      scissorHandRight.style.display = "none";
    } else if (randomChoice === 1) {
      rockHandRight.style.display = "none";
      paperHandRight.style.display = "flex";
      scissorHandRight.style.display = "none";
    } else {
      rockHandRight.style.display = "none";
      paperHandRight.style.display = "none";
      scissorHandRight.style.display = "flex";
    }
  }, 20);

  setTimeout(() => {
    clearInterval(randomInterval);
    spinwheelAudio.pause();
    if (computerChoiceValue === 0) {
      rockHandRight.style.display = "flex";
      paperHandRight.style.display = "none";
      scissorHandRight.style.display = "none";

      if (roundResult === 1) {
        rockHandRight.style.cssText =
          "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
      }
    } else if (computerChoiceValue === 1) {
      rockHandRight.style.display = "none";
      paperHandRight.style.display = "flex";
      scissorHandRight.style.display = "none";

      if (roundResult === 1) {
        paperHandRight.style.cssText =
          "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
      }
    } else {
      rockHandRight.style.display = "none";
      paperHandRight.style.display = "none";
      scissorHandRight.style.display = "flex";

      if (roundResult === 1) {
        scissorHandRight.style.cssText =
          "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
      }
    }
    displayButton();
  }, 3000);
}

rockHand.addEventListener("click", () => {
  rulesContainer.style.display = "none";
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 0;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);

    player.history.push([yourChoiceValue, computerChoiceValue, roundResult]);

    rockHandLeft.style.display = "flex";
    paperHandLeft.style.display = "none";
    scissorHandLeft.style.display = "none";

    if (roundResult === -1) {
      rockHandLeft.style.cssText =
        "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
    }
    spinWheelAnimation();

    localStorage.setItem("player", JSON.stringify(player));
  } else {
    return undefined;
  }
});

paperHand.addEventListener("click", () => {
  rulesContainer.style.display = "none";
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 1;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);

    player.history.push([yourChoiceValue, computerChoiceValue, roundResult]);

    rockHandLeft.style.display = "none";
    paperHandLeft.style.display = "flex";
    scissorHandLeft.style.display = "none";

    if (roundResult === -1) {
      paperHandLeft.style.cssText =
        "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
    }

    spinWheelAnimation();

    localStorage.setItem("player", JSON.stringify(player));
  } else {
    return undefined;
  }
});

scissorHand.addEventListener("click", () => {
  rulesContainer.style.display = "none";
  if (chooseboard.style.display !== "none") {
    chooseboard.style.display = "none";
    playboard.style.display = "flex";
    yourChoiceValue = 2;
    computerChoiceValue = Math.floor(Math.random() * 3);
    roundResult = checkRoundWinner(yourChoiceValue, computerChoiceValue);

    player.history.push([yourChoiceValue, computerChoiceValue, roundResult]);

    rockHandLeft.style.display = "none";
    paperHandLeft.style.display = "none";
    scissorHandLeft.style.display = "flex";

    if (roundResult === -1) {
      scissorHandLeft.style.cssText =
        "box-shadow: 0 0 0 30px rgba(59, 103, 32, 0.15), 0 0 0 50px rgba(29, 168, 43, 0.3), 0 0 0 75px rgba(46, 154, 37, 0.2);";
    }

    spinWheelAnimation();

    localStorage.setItem("player", JSON.stringify(player));
  } else {
    return undefined;
  }
});

nextBtn.addEventListener("click", () => {
  player.roundNum++;
  localStorage.setItem("player", JSON.stringify(player));
  startGame();
});
replayBtn.addEventListener("click", () => {
  startGame();
});

const playAgainBtn = document.querySelector(".playAgainBtn");
playAgainBtn.addEventListener("click", () => {
  modal.style.display = "none";
  scoreBoard.style.display = "flex";
  playboard.style.display = "flex";

  player.yourScore = 0;
  player.computerScore = 0;
  player.roundNum = 1;
  player.gameResultMsg1 = "";
  player.gameResultMsg2 = "";
  player.history = [];
  player.screen = "gameplay";
  localStorage.setItem("player", JSON.stringify(player));

  playerNameDisplay.textContent = player.playerName;
  yourScoreDisplay.textContent = player.yourScore;
  computerScoreDisplay.textContent = player.computerScore;
  roundNumDisplay.textContent = player.roundNum;

  startGame();
});

rulesBtn.addEventListener("click", () => {
  rulesContainer.style.display = "block";
});
rulesCloseBtn.addEventListener("click", () => {
  rulesContainer.style.display = "none";
});

const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", () => {
  if (
    usernameInput.value !== "" &&
    roundsInput.value > 0 &&
    usernameInput.value.length < 10
  ) {
    startGameForm.style.display = "none";
    playground.style.display = "none";
    scoreBoard.style.display = "flex";
    playboard.style.display = "flex";
    rulesBtn.style.display = "flex";
    modal.style.display = "none";

    player.totalRounds = Number(roundsInput.value);
    player.roundNum = 1;
    player.yourScore = 0;
    player.computerScore = 0;
    yourScoreDisplay.textContent = player.yourScore;
    computerScoreDisplay.textContent = player.computerScore;
    player.playerName = usernameInput.value;
    playerNameDisplay.textContent = player.playerName;
    startGame();
    player.screen = "gameplay";

    localStorage.setItem("player", JSON.stringify(player));

    roundsInput.value = "";
    usernameInput.value = "";
  } else {
    alert(
      "Please enter username (<10 characters) and the no. of rounds>0, you want to play"
    );
  }
});

modalResume.addEventListener("click", function (event) {
  if (event.target === modalResume) {
    modalResume.style.display = "none";
  }
});

const resumeBtn = document.querySelector(".resumeBtn");
resumeBtn.addEventListener("click", () => {
  player.screen = "gameplay";

  localStorage.setItem("player", JSON.stringify(player));
  startGame();
  modalResume.style.display = "none";
});

const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener("click", () => {
  player.yourScore = 0;
  player.computerScore = 0;
  player.roundNum = 1;
  player.gameResultMsg1 = "";
  player.gameResultMsg2 = "";
  player.history = [];
  player.screen = "gameplay";

  localStorage.setItem("player", JSON.stringify(player));

  yourScoreDisplay.textContent = player.yourScore;
  computerScoreDisplay.textContent = player.computerScore;
  roundNumDisplay.textContent = player.roundNum;

  startGame();
  modalResume.style.display = "none";
});

const exitBtn = document.querySelector(".exitBtn");
exitBtn.addEventListener("click", () => {
  welcomeScreen();

  player.screen = "welcome";
  player.playerName = "";
  player.totalRounds = 0;
  player.yourScore = 0;
  player.computerScore = 0;
  player.roundNum = 1;
  player.gameResultMsg1 = "";
  player.gameResultMsg2 = "";
  player.history = [];
  localStorage.setItem("player", JSON.stringify(player));
  modalResume.style.display = "none";
});

const exitGameBtn = document.querySelector(".exitGameBtn");
exitGameBtn.addEventListener("click", () => {
  welcomeScreen();

  player.screen = "welcome";
  player.playerName = "";
  player.totalRounds = 0;
  player.yourScore = 0;
  player.computerScore = 0;
  player.roundNum = 1;
  player.gameResultMsg1 = "";
  player.gameResultMsg2 = "";
  player.history = [];
  localStorage.setItem("player", JSON.stringify(player));
  modalResume.style.display = "none";
});
