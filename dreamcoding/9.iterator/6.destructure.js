// 구조 분해 할당
// 데이터 뭉치(그룹화)를 쉽게 만들 수  있다.
const fruits = ['🍏','🍐','🍊','🍓'];
console.log(fruits[0]);
const [one, two, ... othes] = fruits;
console.log(one);

const point = [1,2];
const [x,y,z=1] = point;
console.log(x);
console.log(z);

function createEmoji (){
    return ['apple','🍎'];
}
const [title,emoji] = createEmoji();
console.log(title);

const hwang = { name: 'Hwang', age: 32, job:'publusher'};
function display({name,age,job}) {// name, age, job을 바로 넣는다
    console.log(name);
    console.log(age);
    console.log(job);
}
display(hwang);


//quiz
const prop = {
    name : 'Button',
    styles : {
        size : 20,
        color : 'black',
    },
};
const {size,color} = prop.styles;
const {name} = prop;
const props = {name,size,color}

function changeColor ({name,size,color}) {
    console.log(color);
};
function changeColor2 ({styles : {color}}) {
    console.log(color);
};
changeColor(props);
changeColor2(prop);