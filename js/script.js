const form = document.getElementById("answers-form");
const inputNumber = document.querySelectorAll("#input-group input");
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const message = document.getElementById("message");


const numbers = generateRandomNumbers(1, 50);


let items = "";


for (let i = 0; i < 5; i++) {
    items += `<li>${numbers[i]}</li>`;
}

numbersList.innerHTML = items;


let seconds = 30;


countdown.innerHTML = seconds;


const timer = setInterval( () => {
    if (seconds === 0) {
        clearInterval(timer);
        instructions.innerHTML = "Inserisci i numeri visualizzati in ordine casuale";
        countdown.innerHTML = "";
        numbersList.classList.add("d-none")
        form.classList.remove("d-none")
    } else {
        seconds = seconds - 1;
        countdown.innerHTML = seconds;
    }
}, 30000);


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const chosenNumbers = [];

    for (let i = 0; i < inputNumber.length; i++) {
        const numberValue = parseInt(inputNumber[i].value.trim());
        chosenNumbers.push(numberValue);
    }
});


function generateRandomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumbers = [];

for (let i = 0; randomNumbers.length < totalNumbers; i++) {
    const singleNumber = generateRandomNumbers (min, max);

    if (!randomNumbers.includes(singleNumber)) {
        randomNumbers.push(singleNumber);
        
    }
    
return randomNumbers;
};