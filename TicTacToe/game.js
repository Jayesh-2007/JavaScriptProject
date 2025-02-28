let boxes = document.querySelectorAll(".box"); //accesing boxes
let resetBtn = document.querySelector(".reset"); //accesing reset button
let newBtn = document.querySelector("#newGame");//accesing new button
let msg = document.querySelector("#msg");//accesing msg
let msgCon = document.querySelector(".msg-container");//accessing msg container

let turn0 = true;

const winPatterns = [
    [0, 1, 2], //Defining winning pattern
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=> {//add eventlistner 
        if(turn0) {
            box.innerText="O";//if condition is true then on the box print "O"
            turn0= false;
        } else {
            box.innerText="X";//if condition is false then on the box print "X"
            turn0= true;
        }
        box.disabled =true;
        checkWinner();//check winner
    });
});

const resetGame = () => {//reset game fun.
    turn0 = true;
    enableBoxes();
    msgCon.classList.add("hide");
} 

const disableBoxes = () => {//after disabling boxes you do not right on it 
    for (let box of boxes) {
        console.log("disabled");
        box.disabled = true;
        
    }
}

const enableBoxes = () => {//after enabling boxes you right on it
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {//show winner fun. declare winner
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCon.classList.remove("hide");    
    disableBoxes();
}

const checkWinner = () => {//checking winner 
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val!=="" && pos2Val!=="" && pos3Val!=="") {
            if (pos1Val === pos2Val && pos2Val==pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);