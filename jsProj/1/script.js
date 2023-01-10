const div = document.querySelector('.myApp');
const list = document.querySelector('.myApp--list');
const checkb = document.querySelectorAll('.checkbox');
let count = 0;

const dict = {
    butons:[
        {class: "first Btn", text: 'Success'},
        {class: "second Btn", text: 'Warning'},
        {class: "third Btn", text: 'Error'},
        {class: "fourth Btn", text: 'Info'}
    ],
    
    windows: [
        {class: "firstWin", text: 'Success'},
        {class: "secondWin", text: 'Warning'},
        {class: "thirdWin", text: 'Error'},
        {class: "fourthWin", text: 'Info'}
    ]
}

const removeItem = (id) => {
    list.querySelector('#'+id).remove();
    count--;
}

const addWin = (e) => {
    count++;
    const listItem = document.createElement('li');
    const btn = document.createElement('button');

    listItem.id = 'n' + count;
    listItem.addEventListener('click', () => removeItem(listItem.id))
    listItem.className = e + ' Item';
    listItem.innerHTML = e;

    list.appendChild(listItem);
    if (checkb[0].checked){
        setTimeout(() => removeItem(listItem.id), 5000);
    }
} 

dict.butons.forEach((button) => {
    const elem = document.createElement('button');
    elem.classList = button.class;
    elem.innerHTML = button.text;
    elem.addEventListener('click', () => addWin(button.text));

    if (dict.butons.indexOf(button) === dict.butons.length - 1){
        elem.classList = button.class + ' last';
    }

    div.appendChild(elem);
})