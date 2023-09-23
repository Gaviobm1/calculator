const container = document.querySelector('.container')

const screen = document.createElement('div')
screen.classList.add('screen')

const buttons = document.createElement('div')
buttons.classList.add('btns')
const numbers = document.createElement('div')
numbers.classList.add('nums')

const butoClear = document.createElement('button')
butoClear.classList.add('butoClear', 'top')
butoClear.textContent = 'C'
numbers.appendChild(butoClear)

const percent = document.createElement('button');
percent.classList.add('oper', 'percent', 'buto', 'top');
percent.textContent = ' % ';
numbers.appendChild(percent);

const negPosi = document.createElement('button');
negPosi.classList.add('oper', 'negPosi', 'top');
negPosi.textContent = '- / +'
numbers.appendChild(negPosi)

const butoNum1 = document.createElement('button')
butoNum1.classList.add('numBut', 'num1', 'buto')
butoNum1.textContent = '1';
numbers.appendChild(butoNum1)

const butoNum2 = document.createElement('button')
butoNum2.classList.add('numBut', 'num2', 'buto')
butoNum2.textContent = '2';
numbers.appendChild(butoNum2)

const butoNum3 = document.createElement('button')
butoNum3.classList.add('numBut', 'num3', 'buto')
butoNum3.textContent = '3';
numbers.appendChild(butoNum3)

const butoNum4 = document.createElement('button')
butoNum4.classList.add('numBut', 'num4', 'buto')
butoNum4.textContent = '4';
numbers.appendChild(butoNum4)

const butoNum5 = document.createElement('button')
butoNum5.classList.add('numBut', 'num5', 'buto')
butoNum5.textContent = '5';
numbers.appendChild(butoNum5)

const butoNum6 = document.createElement('button')
butoNum6.classList.add('numBut', 'num6', 'buto')
butoNum6.textContent = '6';
numbers.appendChild(butoNum6)

const butoNum7 = document.createElement('button')
butoNum7.classList.add('numBut', 'num7', 'buto')
butoNum7.textContent = '7';
numbers.appendChild(butoNum7)

const butoNum8 = document.createElement('button')
butoNum8.classList.add('numBut', 'num8', 'buto')
butoNum8.textContent = '8';
numbers.appendChild(butoNum8)

const butoNum9 = document.createElement('button')
butoNum9.classList.add('numBut', 'num9', 'buto')
butoNum9.textContent = '9';
numbers.appendChild(butoNum9)

const butoNum0 = document.createElement('button')
butoNum0.classList.add('numBut', 'num0', 'buto')
butoNum0.textContent = '0';
numbers.appendChild(butoNum0)

const butoNumPoint = document.createElement('button')
butoNumPoint.classList.add('numBut', 'numPoint', 'buto')
butoNumPoint.textContent = '.';
numbers.appendChild(butoNumPoint)



const functions = document.createElement('div')
functions.classList.add('funcs')

const add = document.createElement('button')
add.classList.add('oper', 'add')
add.textContent = ' + ';
functions.appendChild(add);

const subtr = document.createElement('button')
subtr.classList.add('oper', 'minus')
subtr.textContent = ' - ';
functions.appendChild(subtr);

const multi = document.createElement('button')
multi.classList.add('oper', 'multiply')
multi.textContent = ' x ';
functions.appendChild(multi);

const divy = document.createElement('button')
divy.classList.add('oper', 'divide')
divy.textContent = ' ÷ ';
functions.appendChild(divy);


const equals = document.createElement('button')
equals.classList.add('equal')
equals.textContent = ' = ';
functions.appendChild(equals);


container.appendChild(screen);
container.appendChild(buttons);
buttons.appendChild(numbers);
buttons.appendChild(functions);

const clear = document.querySelector('.butoClear').addEventListener('click', () => {
    screen.textContent = '';
    displayValue = [];
})

let displayValue = [];
const className = document.querySelectorAll('.buto').forEach((button) => button.addEventListener('click', () => {
   
    screen.textContent += button.textContent;
}
)) 
    
    /*
    if a button containing an operator is clicked, it doesn't appear on screen but pushes the current number to the displayValue array and also pushes itself to the array. upon the next click the old number is replaced with the new 
    */
    


const screenContent = document.querySelectorAll('.oper').forEach((button) => button.addEventListener('click', () => {
    button.style.opacity = '0.5'
    displayValue.push(screen.textContent);
    displayValue.push(button.textContent);
    screen.textContent = '';

}))

let str1 = ''
const getResult = document.querySelector('.equal').addEventListener('click', () => {
   
   displayValue.push(screen.textContent);
   let arr1 = displayValue
   num1 = displayValue[0];
   
   num2 = displayValue[2];
  
   operator = displayValue[1];
   
   screen.textContent = operate(num1, num2, operator);
   
   
})


const negyPosy = document.querySelector('.negPosi').addEventListener('click', () => {
     screen.textContent = screen.textContent.replace(/^/,'-')
})

let num1;
let num2; 
let operator;
   

function addUp (a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return a-=b;
}

function multiply (a, b) {
    return (a*=b);
}

function divide (a, b) {
    if (b === '0') {
      return  screen.textContent = "Try again stupid.";
    }
    else {return (a/=b).toFixed(2).replace(/[.,]00$/, "");
}
}

function percentage(a, b) {
    return (a/b*100).toFixed(2).replace(/[.,]00$/, "");
}
/*
function negPos (a) {
    if (a > 0) {
     a - (a * 2)
    }
    if (a < 0) {
        return a + (a * -2);
    }
    else {
        return a
    }
}
*/
function operate (a, b, c) {
    if (c == '+') {
          return  addUp(a, b);
    }
    if (c == '-') {
           return subtract(a, b);
    }
    if (c == 'x') {
           return multiply(a, b);
    }
    if ( c == '÷') {
            return divide(a, b);
    }
    if (c == '%') {
        return percentage(a, b); 
    }
}


