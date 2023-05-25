const textobj = new String('Hello World!'); // 이렇게도 쓰지만
const text = 'Hello World!'; // 보통 이렇게 쓴다
console.log(textobj);  // 객체
console.log(text);    // 문자열


console.log(text[0]);  //0 인덱스  // 배열 인덱스로 접근
console.log(text[1]);  //1 인덱스
console.log(text[2]);  //2 인덱스
console.log(text.charAt(0));  //0 인덱스   // 함수로 접근
console.log(text.charAt(1));  //1 인덱스
console.log(text.charAt(2));  //2 인덱스

console.log(text.indexOf('l'));   // 처음부터 시작해서 찾는다 몇번쨰 인덱스인지
console.log(text.lastIndexOf('l'));   // 뒤부터 시작해서 찾는다 몇번쨰 인덱스인지


console.log(text.includes('tx')); //

console.log(text.startsWith('He'));  // He로 시작하는지 안하는지 확인
console.log(text.endsWith('!'));  // !로 끝나는지 안하는지 확인


console.log(text.toUpperCase());   // 대문자로 반환
console.log(text.toLowerCase());    // 소문자로 반환

console.log(text.substring(0,2));  // 0부터 2까지  2는 포함하지 않으니까 0,1 인덱스만
console.log(text.slice(2));  // 인덱스 2부터 잘라낸다
console.log(text.slice(-2));  // 뒤에서부터 2번째부터 잘라낸다

const space = '          spave        ';
console.log(space.trim());   // 공백을 제거

const longTxt = 'Get to the point';
console.log(longTxt.split(' '));  // 스페이스 별로 끊어서
console.log(longTxt.split(' ',6));    // 스페이스 별로 두덩이로 끊는다