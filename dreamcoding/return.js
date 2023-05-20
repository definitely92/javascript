// return을 명시적으로 하지 않으면 자동으로 undefined
function add (a,b) {
    // return a + b;
    //return undefined
}
const result = add(1,2);
console.log(add);


function print(text) {
    console.log(text); // 반환할 값이 없는 경우 return 사용하지 않음
}
print('블라블라');

// return을 함수 중간에 사용하면 함수가 종료됨
// 사용예 : 조건이 맞지 않는경우 함수 도입부분에서 함수를 일찍이 종료함!
function numPrint(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
}
numPrint(3);
numPrint(-4);