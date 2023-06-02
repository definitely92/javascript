const map = new Map();

map.set('one',1);
map.set('two',2);

console.log(map.get('one')); // key가 'one'인 요쇼값을 가져온다  ->  1반환
console.log(map.has('one')); // key가 one인 요소를 확인한다. 해당 키 정보가 있는지 확인.  -> true
map.delete('one'); // key가 one인 요소를 삭제

console.log(map.has('one')); 
console.log(map.has('two'));