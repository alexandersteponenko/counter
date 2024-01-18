const counterText = document.querySelector('.counter');
const addButton = document.querySelector('.addButton');
const resetButton = document.querySelector('.resetButton');
  
let counter = 0;

addButton.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter
});

resetButton.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter
});