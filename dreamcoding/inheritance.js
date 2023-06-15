// 프로토타입을 베이스로 한 객체지향 프로그램

function Animal (name , emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function() {
    console.log(`${this.name}  + ${this.emoji}`);
}

function Dog (name, emoji , owner) {
}

Dog.prototypep.play = () => {
    console.log('같이 ㅁㄹㅁㅇㄴㄹ');
}
const dog1 = new Dog(멍멍,'🐶' ,'hwamg')