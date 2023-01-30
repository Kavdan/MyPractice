const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const nameInp = document.querySelector('.nameOfCard');
const cardDiscr = document.querySelector('.dcsr');
const cardList = document.querySelector('.cardsList')

function generateColor() {
	return '#' + Math.floor(Math.random()*16777150).toString(16);
}

function lG (name, dscr) {
	let card = document.querySelector('.card').cloneNode(true),
		colorG = generateColor();

		card.style.visibility = 'visible';
		card.querySelector('h3').innerText = name;
		card.querySelector('p').innerText = dscr;
		cardList.appendChild(card);
		card.style.background = colorG;
		card.hidden = false;
		card.addEventListener('click', () => {
			card.classList.add('done');
			card.addEventListener('click', () => {
				cardList.removeChild(card);
			})
		})
		card.addEventListener('dblclick', () => {
			console.log('dfdf')
			cardList.removeChild(card);
		})
}

const addCard = () => {
	if (nameInp.value && cardDiscr.value) {
		let card = document.querySelector('.card').cloneNode(true),
		colorG = generateColor();
		card.style.visibility = 'visible';
		card.querySelector('h3').innerText = nameInp.value;
		card.querySelector('p').innerText = cardDiscr.value;
		cardList.appendChild(card);
		card.style.background = colorG;
		card.hidden = false;
		card.addEventListener('click', () => {
			card.classList.add('done');
			card.addEventListener('click', () => {
				cardList.removeChild(card);
			})
		})
		card.addEventListener('dblclick', () => {
			console.log('dfdf')
			cardList.removeChild(card);
		})
	} else {
		nameInp.ariaPlaceholder = 'dsfsdffsd';
	}
}

add.addEventListener('click', addCard)
clear.addEventListener('click', () => {
	cardList.innerHTML = '<div class="card" hidden>\
	\<img src="./istockphoto-1131230925-612x612.jpg" alt="" srcset="" >\
	\<h3>Name</h3>\
	\<p>Discribe</p>\
    \</div>';
})