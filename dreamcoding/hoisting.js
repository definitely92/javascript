//함수의 호이스팅은 함수의 선언문 전에 호출이 가능
//함수의 선언문은 선언 이전에도 호출이 가능

print();
function print() {
    console.log('Hello');
}

// 변수(let,const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화전 변수에 접근하면 컴파일(빌드) 에러가 발생

// 에러1
console.log(hi);
let hi = 'hi';

// // 에러2
console.log(func1);
let func1 = function name(params) {
    
}

// // 에러3
const cat = new Cat();
class Cat {}

// // 에러4
let x =1;
{
    console.log(x);
    let x = 2; // 블럭안에서 선언 되었기떄문에 호이스팅 되어 위로 올라가고,
}