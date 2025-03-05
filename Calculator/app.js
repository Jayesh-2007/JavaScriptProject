let num = document.querySelector("#one");
let num2 = document.querySelector("#two");
let num3 = document.querySelector("#three");
let num4 = document.querySelector("#four");
let num5 = document.querySelector("#five");
let num6 = document.querySelector("#six");
let num7 = document.querySelector("#seven");
let num8 = document.querySelector("#eight");
let num9 = document.querySelector("#nine");
let num0 = document.querySelector("#zero");
let msg = document.querySelector("#msg");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let divide =document.querySelector("#divide");
let percentage= document.querySelector("#percentage");
let decimal= document.querySelector("#decimal");
msg.placeholder="";
let ans=0;

let stringtoNum= (expression) => {
    let result = eval(expression);
    console.log(result); 
    ans = result;
}
num.addEventListener("click",()=> { 
    console.log("1");
    msg.placeholder= msg.placeholder+1;
    stringtoNum(msg.placeholder);
})

num2.addEventListener("click",()=> {  
    console.log("2");
    msg.placeholder= msg.placeholder+2;
    stringtoNum(msg.placeholder);
})

num3.addEventListener("click",()=> {  
    console.log("3");
    msg.placeholder= msg.placeholder+3;
    stringtoNum(msg.placeholder);
})
num4.addEventListener("click",()=> {  
    console.log("4");
    msg.placeholder= msg.placeholder+4;
    stringtoNum(msg.placeholder);   
})
num5.addEventListener("click",()=> {  
    console.log("5");
    msg.placeholder= msg.placeholder+5;
    stringtoNum(msg.placeholder);   
})
num6.addEventListener("click",()=> {  
    console.log("6");
    msg.placeholder= msg.placeholder+6;
    stringtoNum(msg.placeholder);   
})
num7.addEventListener("click",()=> {  
    console.log("7");
    msg.placeholder= msg.placeholder+7;
    stringtoNum(msg.placeholder);   
})
num8.addEventListener("click",()=> {  
    console.log("8");
    msg.placeholder= msg.placeholder+8;
    stringtoNum(msg.placeholder);   
})
num9.addEventListener("click",()=> {  
    console.log("9");
    msg.placeholder= msg.placeholder+9;
    stringtoNum(msg.placeholder);   
})
num0.addEventListener("click",()=> {  
    console.log("0");
    msg.placeholder= msg.placeholder+0;
    stringtoNum(msg.placeholder);   
})


plus.addEventListener("click",()=> { 
    console.log("+");
    msg.placeholder= msg.placeholder+'+';
})

minus.addEventListener("click",()=> { 
    console.log("-");
    msg.placeholder= msg.placeholder+'-';
})

multiplication.addEventListener("click",()=> {
    console.log("*");
    msg.placeholder= msg.placeholder+'*';
})

divide.addEventListener("click",()=> { 
    console.log("/");
    msg.placeholder= msg.placeholder+'/';
})
percentage.addEventListener("click",()=> {
    console.log("%");
    let expression = msg.placeholder;
    let result = eval(expression);
    msg.placeholder= msg.placeholder+'%';
    result /=100;
    console.log(result); 
    ans = result;
})

decimal.addEventListener("click",()=> { 
    console.log(".");
    msg.placeholder= msg.placeholder+'.';
})
