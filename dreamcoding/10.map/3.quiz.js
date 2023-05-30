// 주어진 배열에서 중복을 제거
const fruits = ['바나나','사과','포도','바나나','사과','복숭아'];
const set = Array.from(new Set(fruits));
console.log([...new Set(fruits)]); // ... 을 사용하면 배열로 만들어준다





// 주어진 두세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);

function findInteresection(set1,set2){
    const array = [...set1].filter((item) => set2.has(item)); // [...set1] : set1으로부터 배열을 만든다. 
    return new Set(array);
}
console.log(findInteresection(set1,set2));