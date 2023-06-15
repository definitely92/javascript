// const dog1 = { name : '뭉치', emoji : '🐶'};
// const dog2 = { name : '코코', emoji : '🐻'};

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 함수
    // this.printName = () => {
    //     console.log(`${this.name} ${this.emoji}`);
    // }
}


// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
}
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐻');
console.log(dog1,dog2);
dog1.printName();
dog2.printName();
dog1.printName = function () {
    console.log('dfdf');
} 
