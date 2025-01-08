// rock = 0
// paper = 1
// scissor = 2

// 0 beats 2
// 1 beats 0
// 2 beats 1

function getComputerChoice()
{
    return Math.random() * 3
}

function getHumanChoice()
{
    let choice = prompt("Rock, Paper, Scizzors!")

    if(choice.toLowerCase() == "rock" ||  ||  )
    {
        return 0
    }

    else if (choice.toLowerCase() == "paper")
    {
        return 1
    }

    else if (choice.toLowerCase() == "scizzor")
    {
        return 2
    }

    else 
    {
        getHumanChoice()
    }
}

getHumanChoice()

if ()