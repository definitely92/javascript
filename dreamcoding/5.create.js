// const apple = {
//     name : 'apple',
//     display : function() {
//         console.log(`${this.name} : 🍎`);
//     }
// }

// const orange = {
//     name : 'orange',
//     display : function() {
//         console.log(`${this.name} : 🍊`);
//     }
// }
// apple.display();
// console.log(orange);
// 위코드를 아래로 변경


function Fruit(name,emoji) {
    this.name = name; 
    this.emoji = emoji;
    this.display = function(){
        console.log(`${this.name} : ${this.emoji}`);
    }
    return this // 생략가능
}

const _apple = new Fruit('apple','🍎');
const _orange = new Fruit('apple','🍊');

console.log(_apple);
console.log(_orange);