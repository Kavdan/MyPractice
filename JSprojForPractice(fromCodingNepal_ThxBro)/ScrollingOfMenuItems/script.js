const list = document.querySelector('.list');
const icons = document.querySelectorAll('.icon');

let itemNames = ['Java', 'C++', 'CSS', 'HTML',
                 'Perl', 'C#', 'Assembler',
                 'Scratch', 'Python', 'Kotlin',
                 'Style', 'Tech', 'Google', 
                 'Usa', 'Russia', 'Lists', 
                 'Classes', 'Child', 'Men', 
                 'Durable'];

for(let i = 0; i < itemNames.length; i++){
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.textContent = itemNames[i];
    list.appendChild(listItem);
}

let isDragging = false;

list.addEventListener('mousedown', () => {
    isDragging = true
});
document.addEventListener('mouseup', () => {
    isDragging = false;
    list.classList.remove('dragging');
})
list.addEventListener ('mousemove', (e) => {
    if (!isDragging) return;
    list.classList.add('dragging');
    list.scrollLeft -= e.movementX
})

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        let maxw = list.scrollWidth - list.clientWidth;
        icons[0].style.display = list.scrollLeft > 0 ? 'flex' : 'none';
        icons[1].style.display = maxw > list.scrollLeft ? 'flex' : 'none';  
        list.scrollLeft -= icon.classList.contains('Left') ? 100 : -100
    })
})

let listItems = document.querySelectorAll('.list li');
listItems[0].classList.add('active');

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        item.classList.add('active');
    })
})
