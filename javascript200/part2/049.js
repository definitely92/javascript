// 생성자 함수 이해하기

function Teacher (name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(sutudent) {
        console.log(sutudent + '에게' + this.subject + '를 가르칩니다.');
    }
}

const jay = new Teacher('jay',30, 'Js');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor); // 이 속성은 객체를 만든 생성자 함수를 가리킨다. 그러므로 Teacher 생성자 함수를 가리킨다.
console.log(jay instanceof Teacher); // 

const jay2 = Teacher('jay',30, 'Js');
console.log(jay2);
console.log(age);