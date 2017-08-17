let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');

    if(attempt === '' || answer === '') {
        setHiddenFields();
    }

    if(!validateInput(input.value)) {
        return false;
    } else {
        attempt++;
    }

    // scope, wrap all within guess()?
}

function setHiddenFields() {
    attempt = 0;
    answer = math.floor(math.random() * 10000).toString();

    while(answer.length < 4) {
        answer = 0 + answer;
    }
}

function setMessage(text) {
    message = text.innerHTML;
}

function validateInput(input) {
    if(input.length === 4) {
        return true;
    } else {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
}