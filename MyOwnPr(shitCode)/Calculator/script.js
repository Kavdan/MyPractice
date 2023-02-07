const btnsText = ['CE', '+/-', '%', '/', 
                  '7', '8', '9', '*', 
                  '4', '5', '6', '+', 
                  '1', '2', '3', '-', 
                  '0', '.', '='],
buttons = document.querySelector('ul');

for(let sym of btnsText) {
    let el = `<li>
                <button class="btn" id="b${sym}">
                    ${sym}</button>
              </li>`
    buttons.innerHTML += el;
}

const btns = document.querySelectorAll('button'),
numberInput = document.querySelector('.number h3'),
fullExpression = document.querySelector('.expression .exp');

const calculate = (expression) => {
    return expression ? new Function(`return ${expression}`)() : "";
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(['b+/-', 'bCE', 'bC', 'b='].includes(btn.id) || numberInput.textContent.length > 27) return;
        if ('*/+-'.includes(btn.id[1])) {
            fullExpression.innerText = fullExpression.innerText.replace(/[\+\-\*/]+/g, v=>v[0]);
            fullExpression.innerText += (numberInput.innerText + btn.id[1]);
            numberInput.innerText = ""
        }else numberInput.innerText += btn.id[1];
    })
})

const result = document.querySelector('.expression .result'),
exp = document.querySelector('.expression .exp');

document.querySelector('li:last-child button').addEventListener('click', () => {
    result.innerText = "Result: " + calculate(fullExpression.textContent + numberInput.textContent);
    numberInput.innerText = "";
    exp.innerText = "";
})

document.querySelector('#bCE').addEventListener('click', (e) => {
    let el = e.target;
    if (el.classList.contains('clearAll')) {
        result.innerText = "";
        exp.innerText = "";
        el.innerText = "CE";
        el.classList.remove('clearAll');
    }else {
        numberInput.innerText = "";
        if (result.textContent.length > 0 || exp.textContent.length > 0) {
            el.innerText = "C";
            el.classList.toggle('clearAll'); 
        }
    }
    
})

buttons.querySelectorAll('li button')[1].addEventListener('click', (e) => {
    let text = numberInput.textContent;
    if (text[0] === '-') {
        text = text.slice(1);
    }else {
        text = '-'+text;
    }
    numberInput.innerText = text;
})