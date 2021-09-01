'use strict';

const numberInput = document.querySelector('.js_input');
const button = document.querySelector('.js_button');

const clue = document.querySelector('.js_clue');
const tried = document.querySelector('.js_tried');





function updateMessages(){

const random = getRandomNumber(5);    
console.log('mi numero aleatorio es ' + random);
    if(numberInput.value == random){
        clue.innerHTML = 'Has ganado campeona!!!';

    }else if(numberInput.value > random){
        clue.innerHTML = 'Demasiado alto';

    }else if( numberInput.value < random){
        clue.innerHTML = 'Demasiado bajo';

    }else if(numberInput.value > 100){
        clue.innerHTML = 'El número debe estar entre 1 y 100';

    }

}
let clickButton=0;
function updateTries(){
    clickButton+= 1;
    tried.innerHTML = `<p>Número de intentos: ${clickButton} </p>`;



}


function handledStartButton(event){
    getRandomNumber(5);
  
    updateMessages(); 
    
    updateTries();
    
}

//random number function
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 5);
  }

//BUTTON EVENT
button.addEventListener( 'click'  ,  handledStartButton );







