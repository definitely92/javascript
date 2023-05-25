// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruit = ['banana','사과','레몬'];

// 특정 오브젝트가 배열인지 확인
console.log(Array.isArray(fruit));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruit.indexOf('banana'));

// 배열안에 특정한 아이템이 있는 지 확인
console.log(fruit.includes('banana'));

// 추가 - 제일 뒤
let length = fruit.push('orange'); // 배열자체를 수정
console.log(fruit);
console.log(length);


// 추가 - 제일 앞
length = fruit.unshift('orange'); // 배열자체를 수정
console.log(fruit);
console.log(length);

// 제거 제일 뒤
let lastItem = fruit.pop();    // 배열 자체를 수정
console.log(fruit);
console.log(lastItem);

// 제거 제일 앞
lastItem = fruit.shift();  // 배열 자체를 수정
console.log(fruit);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted =  fruit.splice(1,1)
console.log(fruit);
console.log(deleted);
fruit.splice(1,1,'grape','melon');
console.log(fruit);

// 잘라진 새로운 배열을 만듬
let newArr = fruit.slice(0,2)
console.log(newArr);
console.log(fruit);

newArr = fruit.slice(-1)
console.log(newArr);
console.log(fruit);

// 여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]],
];
console.log(arr);
console.log(arr.flat(3)); // (3)은 3단계 세번 중첩 배열까지 재배열 가능
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s',1,6);   // 's'문자를 1인덱스와 5인덱스까지 넣기
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' + ');
console.log(text);
