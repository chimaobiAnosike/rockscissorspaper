function playRound(humanChoice,computerChoice){

    let currentWinner = "";
     if (humanChoice === computerChoice){
        console.log(`you chose ${humanChoice} and computer chose ${computerChoice}. It is a tie`);
        currentWinner = "tie";
       
     }
     else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`you chose ${humanChoice} and computer chose ${computerChoice}. You win!`);
        currentWinner = "human";
        
     }
     else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`you chose ${humanChoice} and computer chose ${computerChoice}. You win!`);
        currentWinner = "human";
        
     }
     else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`you chose ${humanChoice} and computer chose ${computerChoice}. You win!`);
        currentWinner = "human";
        
     }
     else{
        console.log(`you chose ${humanChoice} and computer chose ${computerChoice}. You Lose!`);
        currentWinner = "computer";
        
     }

     return currentWinner;
}
function getComputerChoice(){
    let compChoice = Math.floor((3*Math.random())+1);
    let computerSelection ="";
    switch(compChoice){
        case 1:
            computerSelection = "rock";
            break;
        case 2: 
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
    }
    return computerSelection;
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = "";
    let computerSelection = getComputerChoice();
    for(let i = 1;i < 6; i++){
        humanSelection = prompt("choose either a rock, paper, scissors: ").toLowerCase();
        let winner = playRound(humanSelection,computerSelection);
        winner === "human" ? humanScore++ : computerScore++;
    }

    console.log(`The winner of the 5 rounds is ${humanScore > computerScore ? "Player" : "Computer"}`);
}

playGame();

