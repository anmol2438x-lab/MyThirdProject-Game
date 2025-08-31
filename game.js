let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userChoicePara = document.querySelector("#user-choice");
const compChoicePara = document.querySelector("#comp-choice");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const tieGame = () => {
  console.log("It's a tie!");
  msg.innerText = "It's a tie! Try again.🙂";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userwins, userChoice, computerChoice) => {
  if (userwins) {
    msg.innerText = "You Win!😁";
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msg.innerText = "You Lose! 😔";
    msg.style.backgroundColor = "red";
    computerScore++;
    computerScorePara.innerText = computerScore; // ✅ value assign karo
  }
  userChoicePara.innerText = `${userChoice}`;
  compChoicePara.innerText = `${computerChoice}`;
};

const playGame = (userChoice) => {
  console.log("User Choice:", userChoice);
  const computerChoice = gencompChoice();
  console.log("Computer Choice:", computerChoice);
  if (userChoice === computerChoice) {
    tieGame();
  } else {
    let userwins = true;
    if (userChoice === "rock") {
      userwins = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwins = computerChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userwins = computerChoice === "rock" ? false : true;
    }
    showWinner(userwins, userChoice, computerChoice);
  }
  console.log(`User: ${userScore} - Computer: ${computerScore}`);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
