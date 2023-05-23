// 속성 계산명

let obj = {}  // 객체를 변수 obj에 대입
for (let i = 0; i < 4; i++) {     // 변수 i가 0 부터 3까지 반복
    obj['key'+i] = i;   // 객체 obj에 속성을 추가 . 속성 접근자 []를 활용하여 계산된 속성명을 정의. 속성명은 key0, key1, key2, key3으로 증가
}
console.log(obj);

let profile = 'chloe:30';
let person = {     //  profile 문자열을 키값으로 하는 속성을 정의. []안에 profile 변수를 넣으면 해당 변수값이 속성명으로 정의.
    [profile] : true,
    [profile.split(':')[0]] : profile.split(':')[1]   // split(':')[0]은 문자 ":"를 중심으로 profile 문자열을 나누고 나워진 부분중 왼쪽  문자열 chloe, split(':')[1]은 오른쪽 문자열 30을 의미
}

console.log(person);