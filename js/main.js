'use strict';

const numberInput = document.querySelector('.js_input');
const button = document.querySelector('.js_button');

const clue = document.querySelector('.js_clue');
const tried = document.querySelector('.js_tried');
const form =document.querySelector('.js_form');
const resetBttn = document.querySelector('.js_reset');

//random number function
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const random = getRandomNumber(100); 
console.log('mi numero aleatorio es ' + random);


function writeClue (message){
    clue.innerHTML = message;
}
function updateMessages(){
    const inputValue= parseInt(numberInput.value);

    if(inputValue === random){
        writeClue ('<p>Has ganado campeona!!!</p>');
    }else if(isNaN(inputValue)){
        writeClue ('<p>Tienes que escribir un número entero.</p>')
    }else if(inputValue<=0 || inputValue>100){
        writeClue ('<p>El número debe estar entre 1 y 100</p>');
    }else if(inputValue > random){
        writeClue ('<p>Demasiado alto</p>');
    }else if( inputValue < random){
        writeClue ('<p>Demasiado bajo</p>');
    }
}

let clickButton=0;
function updateTries(){
    clickButton+= 1;
    tried.innerHTML = `<p>Número de intentos: ${clickButton} </p>`;
}

function handledStartButton(){
  
    updateMessages(); 
    
    updateTries();
}

//BUTTON EVENT
button.addEventListener( 'click'  ,  handledStartButton );

// PREVENTDEFAULT
function handleSubmit(ev) {
    ev.preventDefault();
  }
  
  form.addEventListener('submit', handleSubmit);

// RESSET
const reset=()=>location.reload();

resetBttn.addEventListener('click', reset);