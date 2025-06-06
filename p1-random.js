/*
    CIT 281 Project 1
    Name: Jack Baca
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const length = getRandomInteger(5, 26);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0; i < length; i++) {
    result += alphabet[getRandomInteger(0, alphabet.length)];
}

console.log(`${length} lowercase letters: ${result}`);