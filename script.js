let numbers = [];
let maxNumbers = 6;

function addNumber(){

if(numbers.length >= maxNumbers){
return;
}

let num;

do{
num = Math.floor(Math.random()*49)+1;
}
while(numbers.includes(num));

numbers.push(num);

document.getElementById("n"+numbers.length).innerText = num;

document.getElementById("left").innerText = maxNumbers - numbers.length;

if(numbers.length === maxNumbers){
document.getElementById("message").innerText =
"WSZYSTKIE NUMERY ZOSTAŁY WYLOSOWANE";
}

}

function clearNumbers(){

numbers = [];

for(let i=1;i<=6;i++){
document.getElementById("n"+i).innerText = "";
}

document.getElementById("left").innerText = maxNumbers;

document.getElementById("message").innerText = "";

}