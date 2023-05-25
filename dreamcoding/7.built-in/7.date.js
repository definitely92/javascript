// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2024'));  // 날짜 지정
console.log(new Date('2023-12-01T03:45:01'));  // 날짜, 시간 지정

console.log(Date.now());  // 1970년 1월 1일 UTC 자정과의 시간차이를 밀리초 단위로 표기
console.log(Date.parse('2023-05-25T02:34:06'));   // 지정 시간을 밀리초단위로 표기

const now = new Date();
now.setFullYear(2023);  // 연도 지정
now.setMonth(0);   // 월 지정 (0 인덱스가 1월)
console.log(now.getFullYear()); 
console.log(now.getDate()); // 0부터 1월  
console.log(now.getDay()); // 요일을 가져오기 (0은 일요일 ..... 6은 토요일)
console.log(now.getSeconds()); // 초를 가져오기
console.log(now.getTime()); // 시간울 가져오기


console.log(now.toString());  // 전체적인 날짜와 시간을 문자로 표기
console.log(now.toDateString());  // 날짜만
console.log(now.toTimeString());  // 시간만
console.log(now.toISOString());  // ISO 8601 형식
console.log(now.toLocaleString('en-US'));  // en-US 형식
console.log(now.toLocaleString('ko-KR'));  // en-US 형식