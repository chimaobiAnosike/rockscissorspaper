const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
let playerScoreParagraph = document.querySelector('.playerScore');
let computerScoreParagraph = document.querySelector('.computerScore');
const result = document.querySelector('.result');
let gameStarted = false;
let computerScore = 0;
let playerScore = 0;



function getComputerChoice (){
    let computerChoiceOptions = ['rock','paper','scissors'];
    let index = Math.floor(3 * (Math.random()));
    return computerChoiceOptions[index];
}
startBtn.addEventListener("click",()=>{
    if(!gameStarted){
    gameStarted = true;
    result.textContent = "Game Started";
    startBtn.disabled = true;
    stopBtn.disabled = false;

}

})
stopBtn.addEventListener("click",()=>{
    if(gameStarted){
        gameStarted = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        result.textContent = "Game Ended";
    }
})
function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        result.textContent = `Player selected ${playerSelection} and computer selected ${computerSelection}.
        It is a tie`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "paper" && computerSelection === "rock") ||(playerSelection === "scissors" && computerSelection === "paper")){
        playerScore += 1;
        playerScoreParagraph.textContent = `${playerScore}`
        result.textContent = `Player selected ${playerSelection} and computer selected ${computerSelection}.
        You win`;
    }
    else{
        computerScore += 1;
        computerScoreParagraph += `${computerScore}`
        result.textContent = `Player selected ${playerSelection} and computer selected ${computerSelection}.
        You lose`;
    }

    if(playerScore === 5){
        result.textContent += `Player Wins`;
        gameStarted = false;
    }
    else if(computerScore === 5){
        result.textContent += `. `Computer Wins`;
        gameStarted = false;
    }
}

rockBtn.addEventListener('click', () => {
    if (gameStarted) {
      const computerSelection = getComputerChoice();
      playRound('rock', computerSelection);
    }
  });
  
  paperBtn.addEventListener('click', () => {
    if (gameStarted) {
      const computerSelection = getComputerChoice();
      playRound('paper', computerSelection);
    }
  });
  
  scissorsBtn.addEventListener('click', () => {
    if (gameStarted) {
      const computerSelection = getComputerChoice();
      playRound('scissors', computerSelection);
    }
  });
