//함수
function add(a,b) {
    return a + b;
    console.log('호출되지 않는 코드!');
}

const sum = add(1,2);
console.log(sum);

// ES6 템플릿 리터럴
function hello(name) {
    console.log(`hello ${name}!`);
}
hello('sophie');


//화살표 함수
const addd = (a,b) => {
    return a +b;
}
console.log(addd(1,2));

const add3 = (a,b) => a + b;
console.log(add3(1,2));

//객체
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print({alias,name,actor}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);

  //객체 안에 함수 넣기
  const dog = {
    name : '멍멍이',
    sound : '멍멍',
    say : function(){
        console.log(this.sound);
    }
  }

  const cat = {
    name: '야옹이',
    sound:'야옹'
  }

  cat.say = dog.say;
  dog.say();
  cat.say();

  const catSay = cat.say;
  catSay();


  //get set
  const numbers = {
    a : 1,
    b : 2,
    get sum() {
        console.log('sum 함수가 시작됩니다!');
        return this.a + this.b;
    }
  };
  console.log(numbers.sum);
  numbers.b = 5;
  console.log(numbers.sum);

  const Numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log("calculate");
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
      },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀜');
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀜');
        this._b = value;
        this.calculate();
    }
  };
  console.log(Numbers.sum); //3
  Numbers.a =5;   //a가바뀜, calculate, 7
  Numbers.b = 7;   //b가 바뀜, calculate, 9
  Numbers.a = 9;    //a가 바뀜, claculate, 16
  console.log(Numbers.sum);



//반복문
const names = ['덕배','베살바','홀란드'];
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const doggy = {
    name : '코코',
    sound : '왕',
    age : 2
}

for (let key in doggy) {
    console.log(`${key}:${doggy[key]}`);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


function winterOf(numbers) {
  let win = 0;
  for (let i = 0; i < numbers.length; i++) {
    win += numbers[i];
  }
  return win;
}

const result = winterOf([1,2,3,4,5]);
console.log(result);


//forEach
const superheros = ['A','B','C','D'];
/*function print(hero){
  console.log(hero);
}*/

superheros.forEach(function (hero) {
  console.log(hero);
})

//map
const items = [
  {
    id : 1,
    text : 'haha'
  },
  {
    id: 2,
    text : 'hoho'
  }
];

const onlyTetxt = items.map(item => item.text);
console.log(onlyTetxt);



const numberss = [1,2,3,4,5];
let suv = 0;
numberss.forEach(num => {
  suv += num;
});
console.log(suv);


//reduce
const alphabets = ['a','a','a','b','c', 'c', 'd' ,'e'];
const counts = alphabets.reduce((acu,current) => {
  if(acu[current]) {
    acu[current] += 1;
  } else {
    acu[current] = 1;
  }
  return acu;
},{})
console.log(counts);




function countBiggerThanSeven(numbers){
  //filter
  //return numbers.filter( num => num >7).length;
  

  //forEach
  /*let count = 0;
  numbers.forEach( n => {
    if ( n > 7) {
      count ++;
    }
  })
  return count;*/


  //reduce
 
  return numbers.reduce((arr,crr) => {
    if(crr > 7) {
      return arr +1;
    } else {
      return arr;
    }
  } ,0)
  
}

const count = countBiggerThanSeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(count);




//프로토 타입
function Animal (type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}
Animal.prototype.shredValue = 1;

const lion = new Animal('개', '멍멍이', '멍멍');
const tiger = new Animal('고양이', '야옹이', '야옹');

lion.say();
tiger.say();

console.log(lion.shredValue);
console.log(tiger.shredValue);


//클래스
class AAnimals {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Coco extends AAnimals {
  constructor(name,sound) {
    super('개',name,sound);
  }
}

class CCat extends AAnimals {
  constructor(name, sound) {
    super('고양이',name, sound);
  }
}


const ddog = new Coco('코코', '왈왈');
const ccat = new CCat('나비', '야옹');

ddog.say();
ccat.say();



class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 사람들:`);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

pizza.print();