// rock = 0
// paper = 1
// scissor = 2

// 0 beats 2
// 1 beats 0
// 2 beats 1

function getComputerChoice()
{
    return Math.random() * 3;

}

function getHumanChoice()
{
    const button = document.querySelector("button")

    for (i in button)
    {
        button[i].addEventListener("click", () => 
        {
            alert(i);
        })
    }
}

function playRound(humanChoice, computerChoice)
{
    if (computerChoice == 0)
        alert("The computer's choice is Rock! " +  winDecider(humanChoice, computerChoice))

    if (computerChoice == 1)
        alert("The computer's choice is Paper! " +  winDecider(humanChoice, computerChoice))

    if (computerChoice == 2)
        alert("The computer's choice is Scizzors! " +  winDecider(humanChoice, computerChoice))
}


function winDecider(humanChoice, computerChoice)
{
    if ((humanChoice == 0 && computerChoice == 2) || (humanChoice == 1 && computerChoice == 0 ) || (humanChoice == 2 && computerChoice == 1 ))
    {
        
        humanScore++
        return "You won!"
    }

    else if (humanChoice == computerChoice)
        return "It's a tie!"

    else 
    {
        computerScore++
        return "Computer Won!"
    }
}

function playGame()
{
    // for(let i = 0; i < 5; i++)
    // {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = Math.trunc(getComputerChoice());

    //     playRound(humanSelection, computerSelection);
    // }
}

function result(humanScore, computerScore)
{
    console.log("Your score = " + humanScore)
    console.log("Computer score = " + computerScore)

    // if (computerScore > humanScore)
    //     alert("Computer won the game!")

    // else if (computerScore == humanScore)
    //     alert("The game is a Tie!")

    // else if (humanScore > computerScore)
    //     alert("You won the game!")
}

let humanScore = 0;
let computerScore = 0;

playGame()
result(humanScore, computerScore)


