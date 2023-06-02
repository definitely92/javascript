const map = new Map();

map.set('one',1); // 문자형
map.set(2,'two'); // 숫자형
map.set([1,2,3], 'three elements'); // 배열
map.set({a: 'A',b:'B'}, 'object elements'); // 객체
map.set(function(){}, 'function elements'); // 함수


console.log(map.size);  // size속성으로 변수 map 요소개수를 확인할수있음.