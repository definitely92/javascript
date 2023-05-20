const add = function(a,b) {
    return a + b;
}
console.log(add(1,2));


// 화살표 함수 const name = () => {}
const add2 = (a,b) => {
    return a + b;
};
console.log(add2(1,2));
// 함수 안에서 바로 리턴 하는 경우 괄호도 제외
const add3 = (a,b) => a+b;
console.log(add3(1,2));


// IIFF 바로 실행되는 함수
(function run() {
    console.log('gkgkgkgk');
})();