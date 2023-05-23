// 접근자 프로퍼티 (Accessor Property)
class Student {
   constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
   }
    get fullName () {
    return `${this.firstName} + ${this.lastName}`;
   }

   set fullName(value) {
    console.log('set',value);
   }
}

const Student1 = new Student('수지','김');
Student1.firstName = '수현';
console.log(Student1.firstName);
console.log(Student1.lastName);
Student1.fullName = "김철수";
console.log(Student1.fullName);
