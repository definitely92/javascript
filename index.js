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
  

