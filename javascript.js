//Esercizio 1
const formElement = document.querySelector('form.text-end');
const aElement = formElement.querySelector('a.btn.btn-primary');
const divQuantity = document.querySelectorAll('div')
const idDiv = document.getElementById('accordionEsercizi')
const containerClass= document.getElementsByClassName('container')

aElement.addEventListener('click', handleBtnFirst);

function handleBtnFirst (event) {
    console.log(`Tag DIV sono: ${divQuantity.length} 
Al interno dell'accordion di id=acccordionEsercizi sono ${idDiv.children.length} tag DIV 
Le classe container hanno ${containerClass.length} tag
Il numero di tag con classe "container" che hanno più di 10 elementi figli è: ${count}`)

}


const containerWithChildren = document.querySelectorAll('.container')
let count = 0;

containerWithChildren.forEach(item => {
    if(item.childElementCount > 10) {
        count ++;
    }
})
//Esercizio 2

const input = document.querySelector('.form-control')

input.addEventListener('change', onChangeInput);

function onChangeInput(event) {
    alert(event.currentTarget.value)
}
//Esercizio 3
const btnIncrement = document.getElementById('buttonIncrement')
const btnDecrement = document.getElementById('buttonDecrement')
const result = document.getElementById('contatore');

let counter = 0;

btnIncrement.addEventListener('click', onClickIncrement);
btnDecrement.addEventListener('click', onClickDecrement)

function onClickIncrement() {
    counter += 1;
    result.innerHTML = counter;
}
function onClickDecrement() {
    counter -= 1;
    result.innerHTML = counter
}

//Esercizio 4
const btnEvidenzia = document.getElementById('evidenzia');
const btnRemuovereEv = document.getElementById('rimuovi-evidenziazione');
const testo = document.querySelector('.paragrafo')

btnEvidenzia.addEventListener('click', onClickEvidenza);
btnRemuovereEv.addEventListener('click', onClickRemove);

function onClickEvidenza() {
    const str = testo.textContent.split(' ')

    for( let i = 0; i < str.length; i++) {
        if  (str[i].length > 8) {
            str[i] = `<span class="evidenziato">${str[i]}</span>`
        }
    }
    testo.innerHTML = str.join(' ');
}

function onClickRemove() {
    const strRemove = testo.querySelectorAll('.evidenziato')
    strRemove.forEach(item => {
        item.classList.remove('evidenziato')
    })
}
//Esercizio 5
const textToChange = document.getElementById('textToChange')
const btnLight = document.getElementById('light');
const btnDark = document.getElementById('dark');

btnLight.addEventListener('click', onLightModeClick);
btnDark.addEventListener('click', onDarkModeClick);

function onLightModeClick() {
   textToChange.classList.add('bg-light');
   textToChange.classList.remove('bg-dark');
   textToChange.classList.add('text-dark');
   textToChange.classList.remove('text-light');
   btnLight.style.display = 'none';
   btnDark.style.display = 'inline-block';
}   
function onDarkModeClick() {
   textToChange.classList.add('bg-dark');
   textToChange.classList.remove('bg-light');
   textToChange.classList.add('text-light');
   textToChange.classList.remove('text-dark');
   btnDark.style.display = 'none';
   btnLight.style.display = 'inline-block';
}

//Esercizio 6
const inputTable = document.getElementById('inputTable');
const table = document.querySelector('table');


inputTable.addEventListener('change', handleInputTable);

function handleInputTable(event) {
   const newRow = table.insertRow();
   const newCel = newRow.insertCell();
   newCel.innerHTML = inputTable.value;
   reset();
}

function reset() {
    inputTable.value = '';
}



