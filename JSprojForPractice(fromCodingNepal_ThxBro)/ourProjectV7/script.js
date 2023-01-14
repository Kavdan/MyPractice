const list = document.querySelector('.wrapper');

for(let i = 0; i < 50; i++) {
    const elem = document.querySelector('.mark').cloneNode(true);
    list.appendChild(elem)
}
