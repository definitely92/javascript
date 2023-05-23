// 비구조화 할당

var obj = {a:1, b:2, c:30, d:44, e:5};

var {a,c} = obj; // 중괄호 안에 원하는 속성명을 넣으면 obj객체를 비구조화 하여 해당 속성명에 따은 값을 각 변수에 할당
console.log(`a >>>>> ${a}`);
console.log(`a >>>>> ${c}`);

let {a:newA=10, f:newF=5} = obj;   // a:newA=10은 객체의 a 속성값을 새로은 변수 newA로 다시 할당하되, undefined로 깂이 없는 경우에는 기본값 10을 할당한다.따라서 f 속성은 없는 솏성이기 떄문에 newF에는 기본값 5가 할당.
console.log(`a >>>>> ${newA}`);
console.log(`a >>>>> ${a}`);
console.log(`f >>>> ${newF}`);


// 배열 비구조화 할당

var arr = [1,2,30, 44, 5];

var [b,c, ... rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [3];  // 배열값 30을 비구조화 하면 a변수에 첫번쨰 요소 1이 할당, f변수에는 해당 순서 요소가 없으므로 기본값 9 가 할당
console.log(`1) a >>>>  ${a}`);
console.log(`1) f >>>>  ${f}`);

[a,f] = [f,a]
console.log(`2)  a >>> ${a}`);
console.log(`2)  f >>> ${f}`);

function getArr() {
    return [1,2,3,4,5,6];
}
[a,,,,,f] = getArr();  // 중간에 4개를 반환하고 싶ㅈ디 않을떄 해당 위치의 요소는 콤마 사이에 공백
console.log(`3)  a >>>> ${a}`);
console.log(`3)  f >>>> ${f}`);

