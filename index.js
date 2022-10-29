
var squareRoot = document.getElementById('squareRoot');
var openParenthesis = document.getElementById('openPar');
var closeParenthesis = document.getElementById('closingPar');
var percent = document.getElementById('percent');
var divide = document.getElementById('divide');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('times');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var subtract = document.getElementById('minus');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var add = document.getElementById('plus');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');
var display = document.getElementById('display');

// Event Listeners

squareRoot.addEventListener('click', squareRootFunction);
openParenthesis.addEventListener('click', displayFunction);
closeParenthesis.addEventListener('click', displayFunction);
percent.addEventListener('click', displayFunction);
divide.addEventListener('click', displayFunction);
seven.addEventListener('click', displayFunction);
eight.addEventListener('click', displayFunction);
nine.addEventListener('click', displayFunction);
multiply.addEventListener('click', displayFunction);
four.addEventListener('click', displayFunction);
five.addEventListener('click', displayFunction);
six.addEventListener('click', displayFunction);
subtract.addEventListener('click', displayFunction);
one.addEventListener('click', displayFunction);
two.addEventListener('click', displayFunction);
three.addEventListener('click', displayFunction);
add.addEventListener('click', displayFunction);
zero.addEventListener('click', displayFunction);
decimal.addEventListener('click', displayFunction);
equals.addEventListener('click', calculateFunction);
clear.addEventListener('click', clearFunction);
display.addEventListener('click', displayFunction);

function displayFunction() {
    display.value += this.value;
    
}
function calculateFunction() {
    display.value = eval(display.value);
}
function squareRootFunction() {
    display.value = Math.sqrt(display.value);
}

function clearFunction() {
    display.value = "";
}


