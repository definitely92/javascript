//원시 타입은 값이 복사되어 전달됨
let a = 1;
let b = a;   //1
b = 2;
console.log(b); //2

// 객체 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달
let apple = {
    name : '사과',
};
let orange = apple;
orange.name = '오렌지';
apple.name = '블라블라';
console.log(apple);
console.log(orange);