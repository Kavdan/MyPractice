const checkConnection = document.querySelector('.checkConnection');
const checkHeader = checkConnection.querySelector('h2');
const checkDiscr = checkConnection.querySelector('p');


let isOnline = true;
let timer = 10; let intervalId;
const checkConnect = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                isOnline = response.status >= 200 && response.status <= 300;
    } catch {
        isOnline = false;
    }
     timer = 10;
    clearInterval(intervalId);
    handlePopup(isOnline);

}

const handlePopup = (status) => {
    if(status) {
        checkConnection.classList.remove('show');
        checkConnection.classList.add('hidden');      
    } else {
        checkConnection.classList.remove('hidden');
        checkConnection.classList.add('show');
    }
    
    intervalId = setInterval(() => {
        timer--;
        if(timer === 0) checkConnect();
        document.querySelector("b").innerText = timer;
    }, 1000);
}

setInterval(() => isOnline && checkConnect(), 3000);

