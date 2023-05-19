console.log('visual studio code로 코드 실행해보기 1');
var a = 5;
var b = 2;
console.log(a + b);


//10. if
var result = true;
if(result) console.log('result가 참입니다');
if(!result) console.log('실행되지 않습니다');
if(result) {
    console.log('result의 결과')
    console.log('>> 참 입니다.')
}


//13. for
// var hometown = [
//     {name : 'A', place : '일산',city : '고양'},
//     {name : 'B', place : '과천'},
//     {name : 'C', place : '광주',city : '전라도'},
//     {name : 'D', place : '부산',city : '경상도'},
// ];

// for (var i = 0; i < hometown.length; i++) {
//     var h = hometown[i];
//     if(!h || !h.city) continue;

//     console.log(i + '번쨰 실행입니다.');

//     if (h.name === 'C') {
//         console.log(h.name + '의 고향은' + h.city + '' + h.place + '입니다.');
//         break;
//     }
// }

//14. for in 
var store = {snack : 1000, flower : 5000, beverage : 2000};

for (var item in store) {
    if(!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이' + store[item] + '입니다.');
}

// 15. while
var hometown2 = [
    {name : '진', place : '고양'},
    {name : '남준', place : '일산',city : '고양'},
    {name : '호석', place : '광주',city : '전라도'},
    {name : '지민', place : '부산',city : '경상도'},
];

var isHometown = function(o,name) {
    console.log(`함수가 실행되었습니다. ${o.city} 도시에서 ${name} 을 찾습니다.`);

    if (o.name === name) {
        console.log(`${o.name} 의 고향은 ${o.city} ${o.place} 입니다.`);
        return true;
    }
    return false;
}

var o;
while (o = hometown2.shift()) {
    if (!o.name || !o.place || !o.city) continue;

    var result2 = isHometown(o,'호석');
    if(result2) break;
}

var i = 0;
var names = ['남준','정국','윤기','호섭'];
var cities = ['경기','부산','대구','광주'];
do {
    hometown2[i] = {name : names[i], city : cities[i]};
    i++;
} while (i < 4);

console.log(hometown2);

// 26. 자료형 변환
console.log("5"+1);
console.log("5"-1);
console.log("5"*2);
console.log("There is"+5);
console.log("Five"*2);

console.log('- 연산자를 활용한 자료형 변형');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num);
console.log(typeof num)

console.log('-함수를 활용한 자료형 변환'); 

str = String(num);
console.log(str);
console.log(typeof str);


num = Number(str);
console.log(num);
console.log(typeof num);


// 객체
// var family = {
//     'adress' : 'Seoul',
//     members : {},
//     addFamily : function(age,name,role){
//         this.members[role] = {
//             age : age,
//             name : name
//         };
//     },
//     getHeadcount : function(){
//         return Object.keys(this.members).length;
//     }
// }

var adress = 'SEOul';
var members = {};
var addFamily = function(age,name,role){
    this.members[role] = {age,name};
};
var getHeadcount = function(){
    return Object.keys(this.members).length;
};
var family = {adress,members,addFamily,getHeadcount};

family.addFamily(30,'choe','aunt');
family.addFamily(3,'lyn','niece');
family.addFamily(10,'dangdangi','dog');
console.log(family.getHeadcount());


var printMembers = function() {
    var members = family.members;
    for (role in members) {
        console.log('role => ' + role + ', name => '+members[role].name +', age => ' +members[role].age);
    }
};
printMembers();

var members = family.members;
members['nephew'] = {age:3, name:'hyun'};
members.niece = {age:5, name:'lyn'};
delete members.aunt;
delete members['dog'];
printMembers();


// 31. 속성 계산명
var obj = {};
for (var i = 0; i<4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);

// 32. 비구조화 할당
var obj = {a:1, b:2, c:30, d:44, e:5};

var {a,c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA = 10, f:newF=5} = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);



var arr = [1,2,30,44,5];

var [b,c, ...rest] = arr;    // b=1,c=2, rest = 30,44,5
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1];   // a변수에 첫번째 요소 1이 할당, 두번째f 변수에는 해당 순서의 요소가 없으므로 기본값 9
console.log(`1) a >>> ${a}`); //1
console.log(`1) f >>> ${f}`);  //9

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);    //9
console.log(`2) f >>> ${f}`);     //1

function getArr () {
    return [1,2,3,4,5,6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);    //1
console.log(`3) f >>> ${f}`);     //6




// 33. 심볼형
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name : 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]);

for(let key in user) {
    console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

// 35. 예외 처리하기
function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 되었습니다.');
}

try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`에러가 발생했습니다 >>> ${e}`);
} finally {
    console.log('완료');
}
