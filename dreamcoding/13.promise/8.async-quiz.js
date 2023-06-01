function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //return Promise.resolve(`🪴 => 🐓`);
}

async function makeFriedEgg() {
   let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
makeFriedEgg().then(console.log)




async function makeFriedEgg(){
  const get = await getChicken();
  const chicken = await fetchEgg();
  const egg = await fryEgg();
  return [chicken,egg];
  // return getChicken()
  //   .catch(() => '🐔')
  //   .then(fetchEgg)
  //   .then(fryEgg)
  //   .then(console.log);
}

makeFriedEgg()
 .then(resultEgg =>console.log(resultEgg));
