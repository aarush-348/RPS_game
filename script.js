// rock = 0
// paper = 1
// scissor = 2

// 0 beats 2
// 1 beats 0
// 2 beats 1

function getcompChoice()
{
    return Math.random() * 3;
}

function gethmnChoice()
{

    return new Promise((resolve, reject) => 
    {
        const rock = document.querySelector("#rock")
        const paper = document.querySelector("#paper")
        const scizzors = document.querySelector("#scizzors")
        
        rock.addEventListener("click", () => 
            {
                console.log("rock");
                resolve(0);
            });
        
            paper.addEventListener("click", () => 
            {
                console.log("paper");
                resolve(1);
            });
        
            scizzors.addEventListener("click", () => 
            {
                console.log("scizzors");
                resolve(2);
            });
    })
}

function playRound(hmnChoice, compChoice)
{
    // if (compChoice == 0)
    //     alert("The computer's choice is Rock! " +  winDecider(hmnChoice, compChoice));

    // if (compChoice == 1)
    //     alert("The computer's choice is Paper! " +  winDecider(hmnChoice, compChoice));

    // if (compChoice == 2)
    //     alert("The computer's choice is Scizzors! " +  winDecider(hmnChoice, compChoice));
}


function winDecider(hmnChoice, compChoice)
{
    if ((hmnChoice == 0 && compChoice == 2) || (hmnChoice == 1 && compChoice == 0 ) || (hmnChoice == 2 && compChoice == 1 ))
    {
        hmnScore++;
        return "You won!";
    }

    else if (hmnChoice == compChoice)
        return "It's a tie!";

    else 
    {
        compScore++;
        return "comp Won!";
    }

}

function playGame()
{
    //while (hmnScore != 5 || compScore != 5)
    {
        gethmnChoice().then((choice) => {
            const hmnSelection = choice;

            const compSelection = Math.trunc(getcompChoice());

            playRound(hmnSelection, compSelection);

            result(hmnScore, compScore);
        });
    }
}

function result(hmnScore, compScore)
{
    console.log("Your score = " + hmnScore);
    console.log("comp score = " + compScore);

    if (hmnScore == 5)
    {
        return "You won the game!"
    }
    
    else if (compScore == 5)
    {
        return "you lost the game!"
    }
}

let hmnScore = 0;
let compScore = 0;

playGame();


