// Funciton
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello!');
log(1234); 
// JavaScript는 data type이 정해지지 않아서 난해할 때 있음
    // typescript는 function의 입력값, 그 데이터 타입, 그리고 반환값이 분명히 명시됨

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'undefined') { 
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
    // 원래는 if 조건문으로 from 입력값 없을 시 'unknown' 출력한다 라고 길게 써줬어야 함

// 4. Rest parameters (added in ES6)
function printAll(...args) { //arg는 배열 형태로 만들겠다는 뜻
    for (let i = 0; i < args.length; i++) {
        console.log(args(i));
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
    // 밖에서는 안이 안 보임, 안에서는 밖이 보임
        // 부모자식 관계의 함수이든, block scope이든

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it
const print = function () { // anonymous function. if named, function __name__()
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes()
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); --> 계속 실행되다가 에러
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const add = function (a, b) {
    return a + b;
}; // 기능은 완전히 동일
const simpleMultiple = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();