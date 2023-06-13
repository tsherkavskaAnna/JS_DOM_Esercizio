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

