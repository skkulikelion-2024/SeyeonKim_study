'use strict';

// Promise is a JavaScript object for asynchronous operation.
// Promise에서 유의해야 할 점:
    // State: pending -> fulfilled or rejected
    // Producer vs Consumer

// 1. Producer
// 주의! when new Promise is created, the executer runs automatically.
    // 네트워크 통신 위한 콜백 함수 사용할 경우, 사용자가 요청할 때만 네트워크 연결해야 한다면 promise 부적합
const promise = new Promise((resolve, reject) => { // promise는 resolve, reject를 받는 execute(call back 함수) 필요로 함
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie'); // 성공
        reject(new Error('no network')); // 실패
    }, 2000);
});

// 2. Consumers: then, catch, finally
    // then-성공적, catch-에러 있을때, finally-성공/실패 상관없이 무조건 호출
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error) // 에러 핸들링, catch 쓰지 않으면 promise에서 reject/실패일 경우 Uncaught 에러 뜸
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber //
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));
    // 다른 asynchronous 애들 then으로 전부 묶어서 실행

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
        // resolve(`${hen} => 🥚`);
        reject(new Error(`error! ${hen} => 🥚`)); 
        }, 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(hen => getEgg(hen)) // hen을 받아와서 그대로 getEgg의 인자로 쓰는 경우, hen 생략하고 getEgg만 써도 됨
.catch(error => {
    return '🥖';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);
    // 에러 생길 경우 대비해 catch, catch의 위치에 따라 어떤 step의 에러 방지하는지 달라짐
