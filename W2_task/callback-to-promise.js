// Callback Hell example --> converted into promise
class UserStorage {
    loginUser(id, password) { // promise는 call back 함수 전달받을 필요 ㄴ
        return new Promise((resolve, reject) => { // new promise 생성해서 setTimeout 집어넣어주기
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id); // resolve로 변경
                } else {
                    reject(new Error('not found')); // reject로 변경
                }
            }, 2000);    
        });
    }

    getRoles(user) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' }); // resolve로 변경
                } else {
                    reject(new Error('no access')); // reject로 변경
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles) // 받아오는 인자, 입력하는 인자 둘다 user이므로 생략
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);