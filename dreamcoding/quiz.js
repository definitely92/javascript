// num 숫자가 짝수이면 👍, 홀수라면 👎을 출력

let num = 3;
//  1. if
if (num%2 != 0) {
    console.log('👎');
} else {
    console.log('👍');
}

let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);


for(let i = 0; i < 10; i++) {
    if(i%2 === 0) {
        console.log('👍 짝수' + i);
    } else {
        console.log('👎 홀수' + i);
    }
};



