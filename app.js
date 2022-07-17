let CountDisplay = document.querySelector('.CountedNumber');
let CountReset = document.querySelector('.btnReset');
let CountDecrease = document.querySelector('.btnDecrease');
let CountIncrease = document.querySelector('.btnIncrease');

let count = 0;


CountIncrease.addEventListener("click", ()=>{
    count+=1;
    CountDisplay.innerHTML = count;
})

CountDecrease.addEventListener("click", ()=>{
    count-=1;
    CountDisplay.innerHTML = count;
})

CountReset.addEventListener("click", ()=>{
    count=0;
    CountDisplay.innerHTML = count;
})