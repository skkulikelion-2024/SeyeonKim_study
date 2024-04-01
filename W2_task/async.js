// async & await
// clear style of using promise

// 1. async
    // promise 필요했던 이유: heavy work 수행할 때 밑에 있는 코드들은 수행되지 않아 데이터 제공이 비효율적
    // 이때 promise를 번거롭게 쓰지 않아도 async 키워드를 function 앞에 붙여주면 자동으로 code block이 promise로 변경됨
async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

function pickFruits() { // await 안 썼을 때, 콜백 지옥
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    });
}

async function pickFruits2() { // await 썼을 때, 훨씬 깔끔
    const applePromise = getApple(); // getApple과 getBanana 순서대로 말고 동시에 실행하기 위해 promise 생성
    const bananaPromise = getBanana();
    try {
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    } catch(error) {
        console.log('error'); // 에러 핸들링도 용이
    }
}

pickFruits2().then(console.log);

// 3. Useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // all -- 동시에 실행하려는 함수를 배열 형태로 받아와서 promise 생성
    .then(fruits => fruits.join(' + ')); // 배열 형태로 받아온 과일을 join 통해 string으로 묶어움
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // race -- 배열로 받은 promise 중 먼저 실행된 것만 받아옴
}

pickOnlyOne().then(console.log);