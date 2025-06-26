const display = document.getElementById('count');
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const reset = document.getElementById('reset')

let count = 0;

function countDisplay() {
    display.textContent = count;
}

increment.addEventListener('click',function(){
    count++;
    countDisplay();
})
decrement.addEventListener('click',function(){
    count--;
    countDisplay();
})
reset.addEventListener('click',function(){
    count = 0 
    countDisplay();
})