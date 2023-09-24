const container = document.querySelector('.container')

const bigNum = document.createElement('div')
bigNum.classList.add('bigNum')

const keepTrack = document.createElement('div')
keepTrack.classList.add('tracking')
bigNum.appendChild(keepTrack)

const screen = document.createElement('div')
screen.classList.add('screen')
bigNum.appendChild(screen)

const buttons = document.createElement('div')
buttons.classList.add('btns')
const numbers = document.createElement('div')
numbers.classList.add('nums')

const butoClear = document.createElement('button')
butoClear.classList.add('butoClear', 'top')
butoClear.textContent = 'C'
numbers.appendChild(butoClear)

const del = document.createElement('button');
del.classList.add('del', 'top');
del.textContent = 'del'
numbers.appendChild(del)

const percent = document.createElement('button');
percent.classList.add('percent', 'oper', 'top');
percent.textContent = ' % ';
numbers.appendChild(percent);

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
butoNumPoint.classList.add('numBut', 'numPoint')
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

const footer = document.createElement('div')
footer.classList.add('footer')
footer.textContent = 'Gaviobm © 2023'


container.appendChild(bigNum);
container.appendChild(buttons);
buttons.appendChild(numbers);
buttons.appendChild(functions);
document.body.appendChild(footer)
document.body.style.backgroundColor = '#FEC5E5'



let clickCounter = 0;
let clickCounterx = 0;
let displayValue = [];
let num1;
let num2; 
let operator;
let str1 = ''
let arr1;

document.addEventListener('keydown', (e) => {
  
    if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == 0) {
    if (clickCounter < 1) {
            screen.textContent = '';
    }

    keepTrack.textContent += e.key;
    screen.textContent += e.key;
    clickCounter++;
    }
   
    if (e.key == '*'){ 
    if (displayValue.length >= 2) {
    keepTrack.textContent += ' x ';
    displayValue.push(screen.textContent);
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);
    clickCounter = 0; 
    } else { 
    keepTrack.textContent += ' x ';
    clickCounter = 0;
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);  
    clickCounter = 0;
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    }     
    }}

    if (e.key == '+'){ 
    if (displayValue.length >= 2) {
    keepTrack.textContent += ' + ';
    displayValue.push(screen.textContent);
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);
    clickCounter = 0; 
    } else { 
    keepTrack.textContent += ' + ';
    clickCounter = 0;
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);  
    clickCounter = 0;
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    }    
    }}

    if (e.key == '-'){ 
    if (displayValue.length >= 2) {
    keepTrack.textContent += ' - ';
    displayValue.push(screen.textContent);
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);
    clickCounter = 0; 
    } else { 
    keepTrack.textContent += ' - ';
    clickCounter = 0;
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);  
    clickCounter = 0;  
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    }   
    }}

    if (e.key == '/'){ 
    if (displayValue.length >= 2) {
    keepTrack.textContent += ' ÷ ';
    displayValue.push(screen.textContent);
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);
    clickCounter = 0; 
    } else { 
    keepTrack.textContent += ' ÷ ';
    clickCounter = 0;
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);  
    clickCounter = 0;     
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    }
    }}

    if (e.key == '%') {
    if (displayValue.length >= 2) {
    keepTrack.textContent += ' % ';
    displayValue.push(screen.textContent);
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);
    clickCounter = 0; 
    } else { 
    keepTrack.textContent += ' % ';
    clickCounter = 0;
    displayValue.push(screen.textContent);
    displayValue.push(` ${e.key} `);  
    clickCounter = 0; 
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    }    
    }}
   
   if (e.key == 'c') {
    keepTrack.textContent = '';
    screen.textContent = '';
    displayValue = [];
   }
 
   if (e.key == 'Backspace') {
   screen.textContent = screen.textContent.slice(0, -1);
   keepTrack.textContent = keepTrack.textContent.slice(0, -1);
   }

   
   if (e.key == 'Enter') {
   displayValue.push(screen.textContent)
   str1=  displayValue.join('');
   arr1= str1.split(' ');
   num1 = arr1[0];
   num2 = arr1[2];
   operator = arr1 [1];
   screen.textContent = operate(num1, num2, operator);
   displayValue = [];
   displayValue.push(screen.textContent);
   }
   if (e.key == '.') {
   if (screen.textContent.includes('.')) {
    butoNumPoint = null;
   }
   screen.textContent += butoNumPoint.textContent;
   keepTrack.textContent += butoNumPoint.textContent
   }

   
   
})
   


const className = document.querySelectorAll('.buto').forEach((button) => button.addEventListener('click', () => {
    keepTrack.textContent += button.textContent
    if (clickCounter < 1) {
        screen.textContent = '';
    }
    document.querySelectorAll('.oper').forEach((button) => button.style.border ='none')
    screen.textContent += button.textContent;
    clickCounter++;
}))


const screenContent = document.querySelectorAll('.oper').forEach((button) => button.addEventListener('click', () => {
    
   if (displayValue.length >= 2) {
        keepTrack.textContent += button.textContent
        button.style.border = '5px solid black';
        displayValue.push(screen.textContent);
        str1=  displayValue.join('');
        arr1= str1.split(' ');
        num1 = arr1[0];
        num2 = arr1[2];
        operator = arr1 [1];
        screen.textContent = operate(num1, num2, operator);
        displayValue = [];
        displayValue.push(screen.textContent);
        displayValue.push(button.textContent);
        clickCounter = 0; 
        clickCounterx = 0;
    } else {
    keepTrack.textContent += button.textContent
    clickCounter = 0; 
    clickCounterx = 0;
    displayValue.push(screen.textContent);
    displayValue.push(button.textContent);
    button.style.border = '5px solid black';
    screen.textContent = displayValue[0];
    if (displayValue[0] == displayValue[1]) {
        displayValue.splice(0,1);
    } }
        
}))

const getResult = document.querySelector('.equal').addEventListener('click', () => {
    
    displayValue.push(screen.textContent)
    str1=  displayValue.join('');
    arr1= str1.split(' ');
    num1 = arr1[0];
    num2 = arr1[2];
    operator = arr1 [1];
    screen.textContent = operate(num1, num2, operator);
    displayValue = [];
    displayValue.push(screen.textContent);
 })

const upperCalc = document.querySelector('.tracking').addEventListener('click', () => upperCalc.textContent = displayValue)

const clear = document.querySelector('.butoClear').addEventListener('click', () => {
    keepTrack.textContent = '';
    screen.textContent = '';
    displayValue = [];
    document.querySelectorAll('.oper').forEach((button) => button.style.border ='none')
})

const onePoint = document.querySelector('.numPoint').addEventListener('click', () => {
    if (screen.textContent.includes('.')) {
        butoNumPoint = null;
}
    screen.textContent += butoNumPoint.textContent;
    keepTrack.textContent += butoNumPoint.textContent
    
})

const negyPosy = document.querySelector('.del').addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    keepTrack.textContent = keepTrack.textContent.slice(0, -1);

})

function addUp (a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return a-=b;
}

function multiply (a, b) {
    return a*=b;
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

function operate (a, b, c) {
    if (c == '+') {
          return  addUp(a, b);
    }
    if (c == '-') {
           return subtract(a, b);
    }
    if (c == 'x' || c == '*') {
           return multiply(a, b);
    }
    if ( c == '÷' || c == '/') {
            return divide(a, b);
    }
    if (c == '%') {
        return percentage(a, b); 
    }
}





