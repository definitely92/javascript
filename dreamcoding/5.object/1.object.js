// Object leteral {key : value}
// new Object()  클래스를 이용해서 객체를 만들 수  있음.
// Object.create(); object라는 클래스 객체 안에 create라는 함수를 넣어서 만들 수 있음.
// key - 문자, 숫자, 문자열 , 심볼
// value - 원시값, 객체(함수)

let apple = {
    name : 'apple',
    'hello-bye' : '🤲',
    0 : 1,
    ['hello-bye']: '🤙',
}


//속성 데이터에 접근 하기 위해서는
apple.name;
console.log(apple['hello-bye1']);
apple['name'];


//속성 추가
apple.emoji = 'orange';
console.log(apple['emoji']);
console.log(apple.emoji);


//속성 제거
delete apple.emoji;