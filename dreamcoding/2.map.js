 const map = new Map([
    ['key1','apple'],
    ['key2','banana'],
 ]);
 console.log(map);

 // 사이즈 확인
 console.log(map.size);
 
 // 존재 확인
console.log(map.has('key1'));
 
//순회
map.forEach((key,value) => console.log(key,value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

 // 추가
 map.set('key3','strawberry');
 console.log(map);

 // 찾기
 console.log(map.get('key2'));

 // 삭제
 map.delete('key3');
console.log(map);

 // 전부 삭제
map.clear();
console.log(map);


// 오브젝트와의 큰 차이점
const key = {name : 'milk', price : 10};
const milk = {name : 'milk', price : 10, decription:'맛있는 우유'};
const obj = {
    [key] : milk,
}
console.log(obj);
const map2 = new Map([[key,milk]]);
console.log(map2);

console.log(obj[key]);
console.log(map2[key]); // undefined

console.log(map2.get(key));