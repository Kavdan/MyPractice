import {mixWord, ranIndexGenerator} from "./randomAndRefresh.js";

const scrambledWord = document.querySelector(".ScrambledWord");
const hintEl = document.querySelector(".hint span");
const timer = document.querySelector(".leftedTime span");
const inputWord = document.querySelector("input");
const refreshWord = document.querySelector("button:first-child");
const checkWord = document.querySelector("button:last-child");

const wordsForGame = [
  {
    word: "Game",
    hint: "Process of geting enjoy from playing",
  },
  {
    word: "Heroes",
    hint: "Respectictive people",
  },
  {
    word: "Chechnya",
    hint: "!943",
  },
  {
    word: "gay",
    hint: "dfsdfsdf",
  },
];

let preMathRanIndex = 0,
    prevIndexArr = [],
  startIndex = Math.floor(Math.random() * wordsForGame.length),
  startWord = wordsForGame[startIndex],
  currArrayIndex = startIndex,
  interval;
  
mixWord(startWord.word, 
    startWord.hint, 
    scrambledWord, 
    hintEl); //start Word
startTimer(timer)

const refWord = (arrayOfWords) => {
    let arrayOfWordslen = arrayOfWords.length,
    ranIndex = ranIndexGenerator(arrayOfWordslen, preMathRanIndex);
    let { word, hint } = arrayOfWords[ranIndex];
    currArrayIndex = ranIndex;
    mixWord(word, hint, scrambledWord, hintEl);
    clearInterval(interval);
    timer.innerText = 30;
    startTimer(timer)
    inputWord.value = '';
};

function startTimer (timer) {
    const intr = setInterval( () => {
        console.log(timer.textContent)
    timer.innerText = +timer.textContent - 1;
    if (+timer.textContent < 0) {
        clearInterval(intr);
        alert("You lose!")
        timer.innerText = 30;
        refWord(wordsForGame);
    }
    }, 1000);
    interval = intr;
}


const checkWordF = (curInd, arr) => {
    if (inputWord.value && arr && wordsForGame[curInd] && inputWord.value.toLowerCase() === arr[curInd].word.toLowerCase()){
        alert("You Won");
        refWord(arr);
    }else {
        alert("You lose");
        refWord(arr);
    }
}

checkWord.addEventListener('click', () => checkWordF(currArrayIndex, wordsForGame))
refreshWord.addEventListener('click', () => refWord(wordsForGame))
