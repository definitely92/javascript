class Tiger {
    constructor (color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep(){
        console.log('자자');
    }
}

class Dog {
    constructor (color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep(){
        console.log('자자');
    }
    play(){
        console.log('놀자');
    }
}

// 아래 소스로 변경 가능

class Animal {
    constructor (color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep(){
        console.log('자자');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
    constructor(color,ownerName) {
        super(color);  // super는 상속하고있는 부모
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀자');
    }
    eat(){
        super.eat();  // super는 상속하고있는 부모
        console.log('강아지가 먹는디ㅏ');
    }
}
const dog = new Dog('흰색','수현');
console.log(dog);
dog.play();
dog.eat();