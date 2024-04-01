'use strict';

 // JavaScript is synchronous.
    // Execute the code block in order after hoisting.
    // hoisting: var, function declaration 자동으로 맨 위로 올라감

// (비동기) 콜백의 예시
console.log('1');
setTimeout(() => console.log('2'), 1000); // web browser에서 지원하는 api, 지정한 시간(in millisecond)이 지나면 전달받은 콜백 함수 호출
    // ( function () { console ~~~ }, 1000 ) 할 필요 없이 콜백 함수 바로 불러옴
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) { // 원래는 로그인할때 유저 정보 백엔드에서 전부 받아와야 함
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
// 1. id, pass 받아옴 2. login 3. roles 요청해서 받아옴 4. 사용자 object 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
            console.log(error);
            }
        );
    }, 
    error => {console.log(error);
    }
);

// 콜백 체인의 문제점
    // 1. 가독성 너무 떨어짐 (연결 관계, 비즈니스 로직 이해하기 어려움)
    // 2. 디버깅, 유지 보수 어려움 (체인 길어질수록)