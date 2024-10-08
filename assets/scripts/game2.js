// Rock, paper, scissors
let userChoice
let computerChoice

// Get user selection from pictures, being eiher rock, paper, or scissors
document.getElementById("rock").addEventListener("click", userSelectedRock)
document.getElementById("paper").addEventListener("click", userSelectedPaper)
document.getElementById("scissors").addEventListener("click", userSelectedScissors)

// Compare user's selection with the computer's to determine result
function compare(choiceOne, choiceTwo) {
    // Note: choiceOne = user; choiceTwo = computer
    if (choiceOne === choiceTwo) {
        document.getElementById("overallResult").innerHTML = "It's a tie!"
    } else if(choiceOne === "rock" && choiceTwo === "scissors") {
        document.getElementById("overallResult").innerHTML = "Rock beat scissors - you win!"
    } else if(choiceOne === "scissors" && choiceTwo === "rock") {
        document.getElementById("overallResult").innerHTML = "Rock beat scissors - you lose!"
    } else if(choiceOne === "rock" && choiceTwo === "paper") {
        document.getElementById("overallResult").innerHTML = "Paper beat rock - you lose!"
    } else if(choiceOne === "paper" && choiceTwo === "rock") {
        document.getElementById("overallResult").innerHTML = "Paper beat rock - you win!"
    } else if(choiceOne === "scissors" && choiceTwo === "paper") {
        document.getElementById("overallResult").innerHTML = "Scissors beat paper - you win!"
    } else if(choiceOne === "paper" && choiceTwo === "scissors") {
        document.getElementById("overallResult").innerHTML = "Scissors beat paper - you lose!"
    } else {
        document.getElementById("overallResult").innerHTML = "Something went wrong - invalid values."
    }
}

// Generates a random selection for the computer and then compares with the user's
function computerRoll() {
    computerChoice = Math.random()

    if(computerChoice < 0.3333) {
        document.getElementById("compPick").innerHTML = "Computer chose: Rock"
        computerChoice = "rock"

        compare(userChoice, computerChoice)
    } else if(computerChoice <= 0.6667) {
        document.getElementById("compPick").innerHTML = "Computer chose: Paper"
        computerChoice = "paper"

        compare(userChoice, computerChoice)
    } else {
        document.getElementById("compPick").innerHTML = "Computer chose: Scissors"
        computerChoice = "scissors"

        compare(userChoice, computerChoice)
    }
}

// Functions called to update userPick, sets userChoice and computer roll
function userSelectedRock() {
    document.getElementById("userPick").innerHTML = "You selected: Rock"
    userChoice = "rock"

    computerRoll()
}

function userSelectedPaper() {
    document.getElementById("userPick").innerHTML = "You selected: Paper"
    userChoice = "paper"

    computerRoll()
}

function userSelectedScissors() {
    document.getElementById("userPick").innerHTML = "You selected: Scissors"
    userChoice = "scissors"

    computerRoll()
}