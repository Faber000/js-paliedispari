const answer = prompt("pari o dispari?");
const userNumber = Number(prompt("scegli un numero da 1 a 5"));
const computerNumber = myRandom();
let somma = userNumber + computerNumber;

if(evenOrOdd(somma)==answer) {
    alert("hai vinto!");
} else {
    alert("hai perso!");
}

function myRandom() {
    return Math.floor(Math.random() * 6);
}

function evenOrOdd(number) {
    if(number%2==0) {
        return "pari";
    } else {
        return "dispari";
    }
}