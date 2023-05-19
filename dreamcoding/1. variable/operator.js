'use strict';
// 6. Logical operators : || , && , !
const value1 = true;
const value2 = 4 < 2;

// ||(or) , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);   // 가볍고 간단한 애들을 맨 앞에 


function check() {
    for (let i = 0; i < 10; i ++) {
        console.log('fdf');
    }
    return true;
}



// break, continue

for (let i = 0; i < 11; i++) {
    if(i % 2 != 0) {
        continue;
    }
    console.log(`q1. ${i}`); 
}


//2.
for (let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
