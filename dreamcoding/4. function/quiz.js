// 주어진 숫자 만큼 0 부터 순회하는 함수
// 순회 하면서 주어진 특정한 일을 수행해야 함
// 예를 들어 주어진 숫자가 5이면 순회하는 숫자를 다 출력 하고 싶음
// 예를 들어 주어진 숫자가 5이면 순회하는 숫자의 두배값을 다 출력하고 싶음

function iterate(max,action) {
    for(let i = 0; i < max; i++) {
        action(i);
        console.log(action); 
    }
}

function printNUm (num){
    console.log(num);
}
function printdoubleNUm (num){
    console.log(num);
}

iterate(5,printNUm);
iterate(5,printdoubleNUm);


setTimeout(() => {
     console.log('3초 뒤 이 함수가 실행');
},3000);
