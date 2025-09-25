let h2 = document.querySelector(".counting h2");
function countIncrease() {
    let count = parseInt(h2.innerText);  //string -> number
    console.log( "Before count :  " +count)
    count = count+1;
    console.log( "After count :  " + count)
    h2.innerText = count;
}

function restartCount() {
    h2.innerText = 0;
}

function delayedIncresed(){
    setTimeout(() => {
        countIncrease();
    }, 3000); 
}





