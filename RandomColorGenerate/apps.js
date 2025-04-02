let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click",()=>{
    let randomColor = getRamdomColor();
    h3.innerText = randomColor;
    // console.log("value updated");
    div.style.backgroundColor = randomColor;
})

function getRamdomColor() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let color = `rgb(${red},${blue},${green})`;    
    return color;
}