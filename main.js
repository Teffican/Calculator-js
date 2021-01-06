'use strict';

window.addEventListener('DOMContentLoaded', () => {

   let signs = [
      '(', ')', 'c', 'del',
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '.', '0', '=', '+'
      
   ];

   const calc = document.querySelector('.calc__btns'),
         calcInput = document.querySelector('.calc__input');

   signs.forEach(item => {
      let signElement = document.createElement('div');

      signElement.className = 'btn';
      signElement.innerHTML = item;
      calc.appendChild(signElement);
   });

   document.querySelectorAll('.calc .btn').forEach(item => {
      item.addEventListener('click',  onButtonClick);
   });

   function onButtonClick(e) {
      if(e.target.innerHTML === 'c'){
         calcInput.innerHTML = '';
      } else if (e.target.innerHTML === '=') {
         calcInput.innerHTML = eval(calcInput.innerHTML);
      } else if(e.target.innerHTML === 'del'){
         calcInput.innerHTML = calcInput.innerHTML.slice(0,-1);
      } else {
         calcInput.innerHTML += e.target.innerHTML;
      }
   }
});