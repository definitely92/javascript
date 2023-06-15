//Object.freeze : 추가 ,삭제 , 쓰기, 속성 재정의 모두 안된다
// (단, 얕은 꽁꽁 얼림)
const hwang = { name : '엘리'};
const dog = { name : '와우', emoji: '🐶', owner : hwang};
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
// dog.age = '4';
console.log(dog);
// delete dog.name;
console.log(dog);

hwang.name = '황';
console.log(dog);

// 밀봉 Object.seal : 값의 수정은 가능, 추가 x, 삭제x 속성 재정의 x
//const cat = {};
Object.assign(cat,dog); // cat에 dog를 복사

// 위에꺼와 동일
const cat = {...dog};
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';


console.log(Object.isFrozen(dog));  // frozen 되었는지
console.log(Object.isSealed(cat));  // Sealed 되었는지 확인

// 확장 금지 PreventExtensions : 추가 x
const tiger = { name: ' 어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // 확장이 가능한지 확인
tiger.name = '어훙';
console.log(tiger); //확장이 가능한 오브젝트는 내용 변경이 가능
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);