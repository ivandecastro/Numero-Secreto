let chosenNumbers = [];
let limitNumber = 100;
let secretNumber = generateRandomNumber();
let tries = 1;
console.log (secretNumber);

function showText(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function firstMenssage() {
    showText('h1', 'Secret Number Game');
    showText('p', 'chose a number between 1 and 100');
}

firstMenssage();

function verifyChose() {
    let chose = document.querySelector('input').value;
    
    if (chose == secretNumber) {
        showText('h1', '!');
        let wordTry = tries > 1 ? 'try' : 'tries';
        let wordTries = `you ${tries} ${wordTry}!`;
        showText('p', wordTries);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (chose > secretNumber) {
            showText('p', 'the secret number is lower');
        } else {
            showText('p', 'the secret number is bigger');
        }
        tries++;
        clearField();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let elementsInList = chosenSecreNumbersList.length;

    if (elementsInList == limitNumber) {
        chosenSecreNumbersList = [];
    }
    if (chosenSecreNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        chosenSecreNumbersList.push(chosenNumber);
        console.log(chosenSecreNumbersList)
        return chosenNumber;
    }
}

function clearField() {
    chose = document.querySelector('input');
    chose.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    clearField();
    tries = 1;
    firstMenssage();
    document.getElementById('Restart').setAttribute('disabled', true)
}







