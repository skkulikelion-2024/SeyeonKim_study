'use strict';

// 자바스크립트 3. 데이터타입

// 2. variable, rw(read/write)    
// let (added in ES6) 
    // ES6에서 현대적 코드 많이 추가됨

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
// block scope: block 안에 있는 거 열람할 수 없도록 함, 단 global은 열람 가능
console.log(name);
console.log(globalName);

// var (don't ever use this!)
    // var hoisting -- 어디 선언했든 상관 없이 항상 선언 순서 끌어올려줌 
        // 변수 정의 전에도 출력 가능
    // has no block scope

{
    console.log(age);
    age = 4;
    console.log(age)
    var age;
}

//console.log(age2);
//age2 = 4
//console.log(age2);
//let age2;

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default in JS

// favor immutable data type always for a few reasons:
    // - security
    // - thread safety
    // - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item: number (데이터 할당할 필요 X, unlike C), string, boolean, null, undefined, symbol
    // value가 memory에 바로 저장됨
// object, box container
    // 너무 커서 한번에 저장 불가, reference 통해서 실제 object 담겨있는 메모리 가리킴
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
    // integer이든 decimal number이든 똑같이 number type으로 자동 저장됨

// number-special numeric values: infinity, -infinity, NaN
    // DOM 이용할 때 숫자인지 확인하고 연산하지 않으면 error
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 124141353524634753756245123n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: S{greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals/strings -- either `` or --
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // same result as above line, but much inconvenient

// boolean
// false: 0, null, undefined, NaN, ''
// True: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
    // null은 텅텅 비어있음 <-> undefined는 정의만 돼서 비어있는지 아닌지도 모름
let x = undefined; // or let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
    // e.g. concurrent하게 실행되는 코드들 각각 순서 부여하고 싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false --> 같은 string 넣고 symbol 만들어도 고유하게 취급
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(symbol1 == symbol2); // true --> 이번에는 같은 symbol로 저장됨
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol 출력할 때 .description 으로 string화 해줘야 함

// object, real-life object, data structure
    // ellie 자체는 const, but ellie 안의 요소는 changable
const ellie = { name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
    // <==> statically typed language
let text = 'hello';
console.log(text.charAt(0)); // h 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 5를 string화 
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 8과 2를 number화
console.log(text.charAt(0)); // error
    // 거대한 다인 프로젝트에서 애로사항 많음 --> 훗날 typescript가 이 문제 해소

