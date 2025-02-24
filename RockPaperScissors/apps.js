let userScore = 0;
let comptScore = 0;

const choices = document.querySelectorAll(".choice");


const randomChoiceGen = () => {
    const option = ["Rock","Paper","Scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    console.log(randomIdx);
}

const playGame = (userChoice) => {

}



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})