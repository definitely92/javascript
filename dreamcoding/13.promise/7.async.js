function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
//   .then(console.log);

// function fetchFruit() {
//   return getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
// }

async function fetchFruit() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana,apple];
  
}

fetchFruit()
  .then(fruit => console.log(fruit))

