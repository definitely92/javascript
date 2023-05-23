// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기


class Counter {
    #value; //내부에서만 사용하는 프라이빗
    constructor (startValue){ // 외부에서 초기값을 받는데, 
        if(isNaN(startValue) || startValue < 0) {  //초기값이 숫자가 아니거나, 0보다 작으면 0으로,
            this.#value = 0;  
        } else {     // 초기값이 0보다 크면 그숫자부터 카운팅이 가능
            this.#value = startValue;
        }
        
    }

    // 외부에서 value값에 접근하면 내부에 있는 value값을 리턴한다. 외부에서 읽기만 가능하다
    get value() {
        return this.#value;   
    }

    increase(){ 
        this.#value++;
    }
}

const makeCounter = new Counter(0);
makeCounter.increase(); //1
makeCounter.increase(); //2
console.log(makeCounter.value);