`use strict`;


const changeButton = document.querySelector("#changer-btn");
const hexValue = document.querySelector('.color-value');
const buttons = document.querySelector('button');

const  rgb = (r, g, b) => {
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  };

const changeBG = () => {
    function randomizeValue () {
         return Math.floor(Math.random() * (256 - 0) + 0);
      };
    let r = randomizeValue();
    let g = randomizeValue();
    let b = randomizeValue();
    hexValue.textContent = `#${rgb(r, g, b)}`;
    document.body.style.backgroundColor = `#${rgb(r, g, b)}`
   
};

changeButton.addEventListener('click', changeBG);


let touchStart = e =>{
   buttons.classList.add('touch');
};
let touchEnd= e =>{
  buttons.classList.remove('touch');
};;

buttons.addEventListener('touchstart', touchStart);
buttons.addEventListener('touchend', touchEnd);


