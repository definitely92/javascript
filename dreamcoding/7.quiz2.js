// 호출 할때마다 카운트를 하나씩 올리는 클래스
// 5의 배수가 될때마다 알려주는 기능


class Counter {
    constructor (fiveTimes){   // constructor 에서 콜백함수를 받는다
        this.counter = 0;
        this.callback = fiveTimes;
    }

    increase () {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback();
        }
    }
}

function print() {
    console.log('5의배수');
}

const counter = new Counter(print);  // 생성자에 콜백함수 전달

counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();