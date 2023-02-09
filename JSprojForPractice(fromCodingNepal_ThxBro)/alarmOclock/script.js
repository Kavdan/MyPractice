const time = document.querySelector('.time h1'),
hour = document.querySelector('.hour'),
minute = document.querySelector('.minute'),
btn = document.querySelector('.setup'),
stopBtn = document.querySelector('.stop'),
ringtone = new Audio('./fuck-you.mp3'),
ul = document.querySelector('.alarms');
let isAlarm = true;

setInterval(() => {
    let date = new Date();
    let hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    time.innerText = `${hour < 10? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10? '0' + seconds : seconds}`;
    if (isAlarm && localStorage.getItem('time') && localStorage.getItem('time') === `${hour}:${minutes}`) {
        ringtone.play();
    }else {
        ringtone.pause();
    }
}, 1000)

const addAlarmIntoList = (string) => {
    ul.innerHTML += `<li><span>${string}</span></li>`;
}

const setAlarm = () => {
    isAlarm = true;
    let _hour = hour.value,
    _minute = minute.value;
    stopBtn.hidden = false;
    hour.value = 0;
    minute.value = 0;

    if (_hour && _minute) {
        try{
            _hour = parseInt(_hour);
            _minute = parseInt(_minute);
            addAlarmIntoList(`${_hour <= 10 ? '0' + _hour : _hour}:${_minute <= 10 ? '0' + _minute : _minute}`)
            localStorage.setItem("time", `${_hour}:${_minute}`);
        }catch(e){
            alert('Please enter a valid number');
            return;
        }        
    }

}



btn.addEventListener('click', setAlarm)
stopBtn.addEventListener('click', () => {
    isAlarm = false;
    this.hidden = true;
});