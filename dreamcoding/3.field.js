class Fruit {
    //접근 제어자 - 캡슐화
    // private(#), public(기본), protected
    // # 비공개로 접근 제어

    #type = '과일';
    constructor (name,emoji) {
        this.#name = name; 
        this.#emoji = emoji;
    }
    #display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }
}
console.log(Fruit);
// const banana = Fruit.makeRandomFruit();
// console.log(banana);
// console.log(Fruit.MAx_Fruit);


// apple은 FRuit의 인스턴스 이다.
const _apple = new Fruit('apple','🍎');
_apple.#name = 'orange'; // #field는 외부에서 접근이 불가능
console.log(_apple);