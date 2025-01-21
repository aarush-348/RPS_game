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
    const resultDiv = document.querySelector(".result");

    const resultText = document.createElement("h3");

    const winDeciderText = winDecider(hmnChoice, compChoice);

    // if (compChoice == 0)
    resultText.textContent = `The computer's choice is ${choices[compChoice]}! ${winDeciderText}`;

    resultText.style.display = "flex";
    resultText.style.justifyContent = "center";

    if (winDeciderText == "You won!")
        resultText.style.color = "green";

    else if (winDeciderText == "You lose")
        resultText.style.color = "red";

     resultDiv.appendChild(resultText);
}


function winDecider(hmnChoice, compChoice)
{
    const hmn = document.querySelector(".human");
    const comp = document.querySelector(".comp");

    const hmnChoiceP = document.createElement("h4")
    const compChoiceP = document.createElement("h4")

    hmnChoiceP.textContent = choices[hmnChoice]
    compChoiceP.textContent = choices[compChoice]

    hmn.appendChild(hmnChoiceP)
    comp.appendChild(compChoiceP)    

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
        return "You lose";
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
    const hmn = document.querySelector(".human");
    const comp = document.querySelector(".comp");

    const hmnScoreP = document.createElement("p");
    const compScoreP = document.createElement("p");

    hmnScoreP.classList.add("humanScore")
    compScoreP.classList.add("CompScore")

    hmnScoreP.textContent = hmnScore;
    compScoreP.textContent = compScore;

    hmn.appendChild(hmnScoreP)
    comp.appendChild(compScoreP)

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

const choices = ["Rock", "Paper", "Scizzors"]

playGame();


