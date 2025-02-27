// Randomly selects the choice for the computer
function getcompChoice()
{
    return Math.trunc(Math.random() * 3);
}

// Function to get the choice from the user
function gethmnChoice()
{
    // Have to use a promise as it is a async fucntion
    return new Promise((resolve, reject) => 
    {
        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scizzors = document.querySelector("#scizzors");

        //Listens to the click of the buttons
        rock.addEventListener("click", () => {resolve(0)});
        paper.addEventListener("click", () => {resolve(1)});
        scizzors.addEventListener("click", () => {resolve(2)});
    });
}

// Plays a round
function playRound(hmnChoice, compChoice)
{
    const winDeciderText = winDecider(hmnChoice, compChoice);

    resultText.textContent = `The computer's choice is ${choices[compChoice]}! ${winDeciderText}`;

    resultText.style.display = "flex";
    resultText.style.justifyContent = "center";

    if (winDeciderText == "You won!")
        resultText.style.color = "green";

    else if (winDeciderText == "You lose")
        resultText.style.color = "red";

     resultDiv.appendChild(resultText);
}

// Decides the winner of the round
function winDecider(hmnChoice, compChoice)
{
    const hmn = document.querySelector(".human");
    const comp = document.querySelector(".comp");

    hmnChoiceP.textContent = choices[hmnChoice];
    compChoiceP.textContent = choices[compChoice];

    hmn.appendChild(hmnChoiceP);
    comp.appendChild(compChoiceP);

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

// Plays the game recursivley till the result
function playGame()
{
    if(hmnScore == 5 || compScore == 5)
    {
        finalResult.textContent = (hmnScore == 5 ? "You won the game!" : "You lost the game!");
        finalResult.style.color = (hmnScore == 5 ? "green" : "red");

        resultDiv.appendChild(finalResult);
        return;
    }

    gethmnChoice().then((choice) => {
        hmnSelection = choice;
        compSelection = getcompChoice();

        playRound(hmnSelection, compSelection);
        result(hmnScore, compScore);

        playGame()
    });
}

// Returns the result of the round
function result(hmnScore, compScore)
{
    const hmn = document.querySelector(".human");
    const comp = document.querySelector(".comp");

    hmnScoreP.classList.add("humanScore");
    compScoreP.classList.add("CompScore");

    hmnScoreP.textContent = hmnScore;
    compScoreP.textContent = compScore;

    hmn.appendChild(hmnScoreP);
    comp.appendChild(compScoreP);

    console.log("Your score = " + hmnScore);
    console.log("comp score = " + compScore);

    if (hmnScore == 5)
        return "You won the game!";
    
    else if (compScore == 5)
        return "you lost the game!";
}

let hmnScore = 0;
let compScore = 0;

let hmnSelection, compSelection;

const choices = ["Rock", "Paper", "Scizzors"]

const resultDiv = document.querySelector(".result");
const resultText = document.createElement("h3");

const hmnChoiceP = document.createElement("h4");
const compChoiceP = document.createElement("h4");

const hmnScoreP = document.createElement("p");
const compScoreP = document.createElement("p");
 
const finalResult = document.createElement("h2");

playGame();


