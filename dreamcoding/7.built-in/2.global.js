console.log(globalThis); // 전역객체
console.log(this); // 전역객체

// js를 한줄씩 표현할수ㅡ있ㅇ는 eval
eval('const num =2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열 안에 있지만 숫자로 변환
console.log(parseFloat('12.43')); // 문자열 안에 있는 숫자를 정수로 변환  실수를 정수로

//URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성
// 한글이나 특수문자는 이스케이프 처리 해야함
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
