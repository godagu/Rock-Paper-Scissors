
function getComputerChoice(){
    choiceNumber = Math.random();
    if(choiceNumber < 0.33){
        return "rock"
    }
    else if(choiceNumber >= 0.33 && choiceNumber < 0.66){
        return "scissors"
    }
    else{
        return "paper"
    }
}

function getHumanChoice(){

    do{
        number = Number(prompt("Please write a number for your option: 1 - rock, 2 - paper, 3 - scissors"))
    }
    while(!(number >= 0 && number <= 3 && Number.isInteger(number)))

    if(number == 1){
        return "rock"
    }
    else if(number == 2){
        return "paper"
    }
    else if(number == 3){
        return "scissors"
    }
    
}


function playGame(){
    humanScore = 0
    computerScore = 0
    
    for(i = 0; i < 5; ++i){
        console.log("Round " + (i + 1))

        playRound(getHumanChoice(), getComputerChoice())

        console.log("Human: " + humanScore)
        console.log("Computer: " + computerScore)
        console.log("")
    }

    if(humanScore > computerScore){
        console.log("Congrats, You won!")
    }
    else if(humanScore < computerScore){
        console.log("This time the computer won... :(")
    }
    else{
        console.log("It's a draw!")
    }

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock"){
            if(computerChoice == "rock"){
                console.log("Nobody wins! Rock against Rock")
                return
            }
            else if(computerChoice == "paper"){
                console.log("You lose! Paper beats Rock")
                ++computerScore
                return
            }
            else if(computerChoice == "scissors"){
                console.log("You win! Rock beats Scissors")
                ++humanScore
                return
            }
        }
    
        if(humanChoice == "paper"){
            if(computerChoice == "paper"){
                console.log("Nobody wins! Paper against Paper")
                return
            }
            else if(computerChoice == "rock"){
                console.log("You win! Paper beats Rock")
                ++humanScore
                return
            }
            else if(computerChoice == "rock"){
                console.log("You lose! Scissor beats Paper")
                ++computerScore
                return
            }
        }
    
        if(humanChoice == "scissors"){
            if(computerChoice == "scissors"){
                console.log("Nobody wins! Scissor against Scissors")
                return
            }
            else if(computerChoice == "rock"){
                console.log("You lose! Rock beats Scissor")
                ++computerScore
                return
            }
            else if(computerChoice == "paper"){
                console.log("You win! Scissor beats Paper")
                ++humanScore
                return
            }
        }

        return "something is really not right..."
    }


}

playGame()