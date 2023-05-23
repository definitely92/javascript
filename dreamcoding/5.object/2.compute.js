const obj = {
    name : 'hwang',
    age : 32,
};

// 코딩하는 시점에, 정적으로 접근이 확장됨
obj.name;
obj.age;


//동적으로 속성에 접근하고 싶을때 대괄호 사용!
function getValue (obj,key){
    return obj[key];
}

console.log(getValue(obj,'age'));


function addKey (obj,key, value) {
    obj[key] = value;
}
addKey(obj,'job','developer');
console.log(obj);

function deleteKey (obj,key,value){
    delete obj[key];
}
deleteKey(obj,'job','developer')
console.log(obj);