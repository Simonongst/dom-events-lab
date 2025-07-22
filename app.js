/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const equals = document.querySelector('.equals')
const inputArray = [];

/*-------------------------------- Variables --------------------------------*/
let input = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText);

  if (event.target.classList.contains('number')) {
    input = event.target.innerText;
    displayElement.innerText += input;
    inputArray.push(input);
    console.log(inputArray);
  }

  if (event.target.innerText === '+') {
      operation(event);
  }else if (event.target.innerText === '-') {
      operation(event);
  } else if (event.target.innerText === '*') {
      operation(event);
  } else if (event.target.innerText === '/') {
      operation(event);
  } else if (event.target.innerText === 'C') {
      reset();
  } 

  if (event.target.classList.contains('equals')) {
      displayElement.innerText = calculate(inputArray);
      inputArray.length = 0;
  }
});

/*-------------------------------- Functions --------------------------------*/

function calculate(arrayValue){
  
  const operatorIndex = arrayValue.findIndex(element =>
    typeof element === 'string' && ['+', '-', '*', '/'].includes(element));
  const left = arrayValue.slice(0, operatorIndex).map(String).join('');
  const right = arrayValue.slice(operatorIndex + 1).map(String).join('');
  const op = arrayValue[operatorIndex];

  if(op === '+'){
    return (Number(left) + Number(right));
  } else if(op === '-'){
    return (Number(left) - Number(right));
  } else if(op === '*'){
    return (Number(left) * Number(right));
  } else if(op === '/'){
    return (Number(left) / Number(right));
  }
}

function reset(){
  displayElement.innerText = '';
  inputArray.length = 0;
}

function operation(event){
  operator = event.target.innerText;
  inputArray.push(operator);
  displayElement.innerText += operator;
}