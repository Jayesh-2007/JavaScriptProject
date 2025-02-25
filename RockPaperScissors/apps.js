let userScore = 0;
let comptScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let user = document.querySelector("#score-you");
let compt = document.querySelector("#score-comp"); 

const randomChoiceGen = () => {
    const option = ["Rock","Paper","Scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}

//DRAW GAME DEFINATATION
const drawGame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

//IF USER OR COMPUTER WIN
const showWinner = (userWin,userChoice,comptChoice) => {
    if (userWin) {
        userScore++;
        user.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beat ${comptChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        comptScore++;
        compt.innerText=comptScore;
        msg.innerText =  `You Lost, ${comptChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// GAME PLAY HERE
const playGame = (userChoice) => {
    const comptChoice = randomChoiceGen();

    //DRAW GAME
    if (userChoice === comptChoice) {
        drawGame();//DRAW GAME FUNCTION
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //Scissors,paper
            userWin = comptChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //Rock,scissor
            userWin = comptChoice === "Rock" ? true : false;
        } else  {
            //rock,paper
            userWin = comptChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,comptChoice);
    }
}
//user choice input
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})