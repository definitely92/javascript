const fruit = ['🍏','🍊','🍋','🍉','🍇'];

// 배열 아이템을 참조하는 방법
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit.length);

//
for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// 추가 및 삭제 하는 좋지 않은 방법
fruit[4] = '🍒';
console.log(fruit);

delete fruit[1];
console.log(fruit);