const mixWord = (word, _hint, wordEl, hintEl) => {
    let charArr = [...word];
  
    for (let i = charArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [charArr[i], charArr[j]] = [charArr[j], charArr[i]];
    }
    let newWord = charArr.join("");
    
    hintEl.innerText = _hint;
    if (newWord !== word) wordEl.innerText = newWord;
    else mixWord(word, _hint, wordEl, hintEl);
  };

const ranIndexGenerator = (lenOfArray, preMathRanIndex) => {
  let ranIndex = Math.floor(Math.random() * lenOfArray);
  if (ranIndex === preMathRanIndex) ranIndexGenerator();
  preMathRanIndex = ranIndex;
  return ranIndex;
};

export {mixWord, ranIndexGenerator};