// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (옛날 방식)
// 2. 클래스

// 셍성자 함수
function Fruit(name,emoji) {
    this.name = name; 
    this.emoji = emoji;
    this.display = function(){
        console.log(`${this.name} : ${this.emoji}`);
    }
    return this // 생략가능
}

// 클래스
class Fruit {
    // 생성자 : new 키워드로 객체를 생성할때 호출 되는 함수
    constructor (name,emoji) {
        this.name = name; 
        this.emoji = emoji;
    }
    // 함수는 보통 생성자 밖에서  
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }

    // function display(){  // function 은 쓰면 안됨
    //     console.log(`${this.name} : ${this.emoji}`);
    // }

}

// apple은 FRuit의 인스턴스 이다.
const _apple = new Fruit('apple','🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const _orange = new Fruit('apple','🍊');

console.log(_apple);
console.log(_orange);
_apple.display();