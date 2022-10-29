function balanced(string){
    let word1 = string.match(/y/g);
    let word2 = string.match(/x/g);
    console.log(word1);
    console.log(word2);
    return word1.length == word2.length;
}
console.log(balanced("xxxyyy"));

function letterSum (string){
    let alphabet = " abcdefghijklmnopqrstuvqxyz";
    let sum = 0;
    for(let i = 0; i < string.length; i++){
        sum += alphabet.indexOf(string[i]);
    }
    return sum;
}
console.log(letterSum("cab"));

function smorse (string) {
let code = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";
let morseCode = code.split(" ");
let alphabet = "abcdefghijklmnopqrstuvqxyz";
const alphaObject = {};
for(i = 0; i < morseCode.length; i++){
    alphaObject[alphabet[i]] = morseCode[i]
}
return string.split("").map(char => alphaObject[char]).join("") ;

}
console.log(smorse("daily"));
