// 함수 내부에서 외부로부터 주어진 인자값을 변경 하는것은 안좋음
// 상태변경이 필요한 경우, 새로운 상태 (오브젝트, 값)를 만들어서 반환.
// 원시값 - 값에 의한 복사ㅣ
// 객체값 - 참조에 의한 복사 (메모리 주소)

function display (num) {
    num = 1;  // XXXXXX
    console.log(num);
};
const value = 4;
display(value);
console.log(value);

///// 이렇게 하면 안됨1

// function displayObj (obj) {
//     obj.name = 'jack';   // XXXXXXX 외부로부터 주어진 인자 (오브젝트) 내부에서 변경  X
//     console.log(obj);
// }
// const sliva = {name : 'sliva'};
// displayObj(sliva);
// console.log(sliva);
// 안됨2



// 좋은 방법
function changeName (obj) {   // 이름부터 변경하는 느낌을 주도록 함
    return {...obj,name : 'jack'} // 반환 할때는 새로운 오브젝트 만들기!
};
const kevin = {name : 'kevin'};
changeName(kevin);
console.log(kevin);