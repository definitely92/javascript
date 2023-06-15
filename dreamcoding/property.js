const dog = {name : '와유', emoji : 'dog'};

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

Object.defineProperty(dog, 'name', {
    value: '멍멍',
    writable : false,
    enumerable : false,
    configurable : false,
});

console.log(dog.name);
console.log(Object.keys(dog));


const student = {};
Object.defineProperties(student,{
    fistName : {
        value : '영희',
        writable : true,
        enumerable : true,
        configurable : true,
    },
    lastName : {
        value : '김',
        writable : true,
        enumerable : true,
        configurable : true,
    },
    fullName : {
        get() {
            return `${lastName} ${firstName}`;
        },
        set (name) {
            [this.lastName, this.firstName] = name.split('');
        },
        configurable : true,
    },
});
console.log(student);