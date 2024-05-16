// Rock, paper, scissors.
let userChoice
let computerChoice

// Get user selection from pictures, being eiher rock, paper, or scissors.
document.getElementById("rock").addEventListener("click", userSelectedRock)
document.getElementById("paper").addEventListener("click", userSelectedPaper)
document.getElementById("scissors").addEventListener("click", userSelectedScissors)

// Generates a random selection for the computer and then compares with the user's.
function computerRoll() {
    computerChoice = Math.random()

    if(computerChoice < 0.3333) {
        document.getElementById("compPick").innerHTML("Computer chose: Rock")
        computerChoice = "rock"
        compare(userChoice, computerChoice)
    } else if(computerChoice <= 0.6667) {
        document.getElementById("compPick").innerHTML("Computer chose: Paper")
        computerChoice = "paper"
        compare(userChoice, computerChoice)
    } else {
        document.getElementById("compPick").innerHTML("Computer chose: Scissors")
        computerChoice = "scissors"
        compare(userChoice, computerChoice)
    }
}

// Compare user's selection with the computer's to determine result.
function compare(choice1, choice2) {
    // choice1 = user; choice2 = computer
    if (choice1 === choice2) {
        document.getElementById("overallResult").innerHTML = "It's a tie!"
    } else if(choice1 === "rock" && choice2 === "scissors") {
        document.getElementById("overallResult").innerHTML = "Rock beat scissors - you win!"
    } else if(choice1 === "scissors" && choice2 === "rock") {
        document.getElementById("overallResult").innerHTML = "Rock beat scissors - you lose!"
    } else if(choice1 === "rock" && choice2 === "paper") {
        document.getElementById("overallResult").innerHTML = "Paper beat rock - you lose!"
    } else if(choice1 === "paper" && choice2 === "rock") {
        document.getElementById("overallResult").innerHTML = "Paper beat rock - you win!"
    } else if(choice1 === "scissors" && choice2 === "paper") {
        document.getElementById("overallResult").innerHTML = "Scissors beat paper - you win!"
    } else if(choice1 === "paper" && choice2 === "scissors") {
        document.getElementById("overallResult").innerHTML = "Scissors beat paper - you lose!"
    } else {
        document.getElementById("overallResult").innerHTML = "Something went wrong - invalid values."
    }
}