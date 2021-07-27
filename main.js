const inputDisplay = document.querySelector("#inputScore");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const clrBtn = document.querySelector("#clrBtn");
const resultText = document.querySelector("#resultText");
const showRandNumber = document.querySelector(".showRandNumber");


let randomNumber = '';
let userInput = '';

p1Btn.addEventListener('click', guessNumber);

function guessNumber(){
       randomNumber = Math.floor(Math.random() * 6);
       userInput = Number(inputDisplay.value);

       if(userInput = ''){
           alert("Please enter your guess number");
            }
        else{

            if(userInput === randomNumber){
                resultText.textContent = "Congratulations you win";
                inputDisplay.value = '';
            }
            else{
                resultText.textContent = "You failed"; 
                showRandNumber.textContent="Random Number: "+randomNumber;
                inputDisplay.value = '';
            }
        }
}
clrBtn.addEventListener('click',()=>{
   randomNumber = '';
   userInput = '';
   inputDisplay.value = '';
});