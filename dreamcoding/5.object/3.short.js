const x = 0;
const y = 0;
const coordinate = {x,y}; // {x :x, y: y};
console.log(coordinate);

function makeObj (name, age) {
    return {
        name : name,
        age : age,
        //아래처럼 축약
        name,
        age
    }
 }

console.log(makeObj('hwang','32'));