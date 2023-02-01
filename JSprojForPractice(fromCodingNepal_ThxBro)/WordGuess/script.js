const lettersList = document.querySelector('.letters'),
hintEl = document.querySelector('.hint span'),
remGuesses = document.querySelector('.remainingGuesses span'),
wrongLetters = document.querySelector('.wrongLetters span'),
resetGame = document.querySelector('button');

let word = '',
wR = [],
rG = 0,
rQ = 0,
InputedWords = [];


const changeHint = (hintContent) => hintEl.innerText = hintContent;
const changeRG = (rmContent) => remGuesses.innerText = rmContent;
const changeWL = (wrongLetter) => {
    wrongLetters.innerText = wrongLetters.innerText 
    + `, ${wrongLetter}`; 
}



const randomWord = () => {

    let ranObj = wordList[Math.floor(Math.random() * wordList.length)],
    {hint} = ranObj;
    word = ranObj.word;
    wR.length = 0;
    rQ = 0;
    rG = word.length;
    InputedWords.length = 0;
    remGuesses.innerText = rG;

    const el = [];

    for(let letter in word){
        el.push('<li class="letter"></li>');
    }
    lettersList.innerHTML = el.join('')
    hintEl.innerText = changeHint(hint);
}
randomWord()

document.addEventListener('keydown', (e) => {
    let key = e.key.toLowerCase();

    if (rQ === word.length-1) {
        resetGame.click();
    }

    if (key.match(/^[A-Za-z]+$/)){
        for (let i = 0; i < word.length; i++){
            if (key === word[i].toLowerCase()){
                lettersList.querySelectorAll('.letter')[i].innerText = word[i];
                rQ++;
                remGuesses.innerText = rG;
            }
        }
        if (!word.includes(key)){
            wR.push(key);
            if(rG === 1) resetGame.click();
            else {rG--; remGuesses.innerText = rG;}
            
        }
        wrongLetters.innerText = wR.join(',');
    }
})
resetGame.addEventListener('click', randomWord);


