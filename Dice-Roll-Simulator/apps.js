const selectDice = document.querySelector(".dice");
const btn = document.querySelector(".dice-roll");
const historyEl = document.querySelector(".history-dice");
let historyList= [];

function rollDice() {
  let rollresult = Math.floor(Math.random() * 6) + 1; //math.random function generate the random number between 0 and 1 if math.random multipy by 6 that means genrate number between 1 to 6
  // console.log(randomnum);//for the checking random number is working or not
  let diceFace = getDiceFace(rollresult);
  // console.log(diceFace);//for the checking right number is connected with the code
  selectDice.innerHTML = `${diceFace}`; //change the innerhtml of dice
  historyList.push(rollresult);
  updateRollHistory();
}

function updateRollHistory() {
  historyEl.innerHTML="";
  for(let i=0; i<historyList.length; i++ ) {
    historyEl.innerHTML+=`<li>
    Roll ${i+1}:
    <span>${getDiceFace(historyList[i])}</span>
  </li>`;
  }
  historyEl.appendChild(result);
}

function getDiceFace(rollresult) {
  //get dice face using switch case
  switch (rollresult) {
    case 1:
      return "&#9856;"; //return the 1-->html code
    case 2:
      return "&#9857;"; //return the 2-->html code
    case 3:
      return "&#9858;"; //return the 3-->html code
    case 4:
      return "&#9859;"; //return the 4-->html code
    case 5:
      return "&#9860;"; //return the 5-->html code
    case 6:
      return "&#9861;"; //return the 6-->html code
  }
}

btn.addEventListener("click", () => {//add eventlistner on the button
  selectDice.classList.add("roll-animation");
  setTimeout(() => {
    selectDice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
