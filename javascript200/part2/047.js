//화살표 함수

// 매개변수가 하나일 경우에는 인자를 정의할때 괄홀를 생략 가능
// 매개변수가 없거나 둘 이상일 경우에는 괄호를 작성해야한다
// 화살표함수 코드 블록을 지정하지 않고 한문장으로 작성시 return 문을 사용하지 않아도 화살표 오른쪽 표현식의 계산 결과 값이 반환.
// 화살표 함수 코드 블록을 지정헸을 경우 반환하고자 하는 값에 return문을 작상해야 함, return문이 없을시에는 undefined

const double = x => x + x;
console.log(double(2));

const add = (a,b) => a + b;
console.log(add(1,2));

const printArguments = () => {
    console.log(arguments);
}
printArguments(1,2,3);


const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1,2,3));


setTimeout(() => {
    console.log('화살표함수');
},10);