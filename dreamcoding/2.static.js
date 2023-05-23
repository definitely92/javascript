// static  정적 프로퍼티, 메서드
class Fruit {
    // 생성자 : new 키워드로 객체를 생성할때 호출 되는 함수
    constructor (name,emoji) {
        this.name = name; 
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할수없음
        return new Fruit('banana','🍌');
    }
    static MAx_Fruit = 4;
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }
}
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAx_Fruit);


// apple은 FRuit의 인스턴스 이다.
const _apple = new Fruit('apple','🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const _orange = new Fruit('apple','🍊');
console.log(_apple);
