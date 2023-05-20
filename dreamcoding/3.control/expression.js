// let b;  //선언문
// b = 2; // 표햔식, 할당문

// let a = (b = 2);



// + 연산자 주의점 !
let text = '두개의 문자' + '두개의문지';
console.log(text);
text = '1' + 1;
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨


// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
//let b = a++;
console.log(a++);
console.log(a);