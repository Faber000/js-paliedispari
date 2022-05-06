const word = prompt("inserisci una parola");
if(isPalindroma(word)) {
    alert("è palindroma")
}
else {
    alert("non è palindroma");
}

function isPalindroma(word) {
    let newWord="";
    for(let i=0; i < word.length; i++) {
        newWord = newWord + word[word.length - 1 - i];
    }

    if(word==newWord) {
        return true;
    }
    else {
        return false;        
    }
}