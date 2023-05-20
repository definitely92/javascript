//매개변수의 기본값은 undefined.
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장
// 매개변수 기본값 dafault parameters a =1, b =1 (매개변수가 지정 안되면 기본값 우선, 지정 되면 지정된 값을 우선시)
function add (a=1 , b=1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
}
add(1,2,3);


//rest 매개변수
function sum (a,... numbers) {
    console.log(a);
    console.log(numbers);
}
sum(1,2,3,4,5);
