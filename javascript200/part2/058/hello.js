// 모듈을 여러 이름으로 내보내고 가져오기

export const version = 'v1.0';

export var personA = {
    name : 'a'
};

export function add (a,b) {
    return a + b;    
}

export class Person {
    constructor(name) {
        this.name = name;
    }
}