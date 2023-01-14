let audio = new Audio();
const pianoKeysList = document.querySelector('.piano--keys');
const alphabit = 'asdfghjklprueiwoq';
const showKeys = document.querySelector('.piano--keysShow input');
const volumeSlider = document.querySelector('.volumeSlider');

for (let i = 1; i < 18; i++){
    const key = document.createElement('li');

    if (i % 2 == 0) key.classList = 'blackKey key';
    else key.classList = 'whiteKey key';

    key.id = alphabit[i - 1];
    key.innerHTML = `<span>${alphabit[i - 1]}</span>`;
    pianoKeysList.appendChild(key);
}

showKeys.addEventListener('click', () => {
    pianoKeysList.querySelectorAll('li').forEach(key => key.classList.toggle('hide'))
})

const playTune = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`#${key}`);
    console.log(clickedKey);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}


const pianoKeys = pianoKeysList.querySelectorAll('.key');

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playTune(key.id))
})

document.body.addEventListener('keyup', (e) => {
    if(alphabit.includes(e.key)) playTune(e.key);
})

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
})


