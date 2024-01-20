const pianoKeys = document.querySelectorAll (".pianoKeys .key");

let audio = new Audio("tunes")

const playTune = () =>{};

pianoKeys.forEach ((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click",() => playTune(key.dataset.key));
});  