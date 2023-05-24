// 정직원과 파트타임직원을 나타낼수있ㅇ는 클래스
// 직원들의 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달월급을 계산할수있다
// 정직원은 시ㄴ당 10000원
// 파트타임 직ㅝ은 시ㄴ당 8000원

class Staff {
    constructor (name, partName, monthTime,hourPay) {
        this.name = name;
        this.partName = partName;
        this.monthTime = monthTime;
        this.hourPay = hourPay;
    }
    monthlyPay = () => {
        return this.monthTime * this.hourPay;
    }
}

class FullTime extends Staff {
    static PAY = 10000;
    constructor (name, partName, monthTime) {
        super (name, partName, monthTime, FullTime.PAY);
    }
}

class PartTime extends Staff {
    static PAY = 8000;
    constructor (name, partName, monthTime) {
        super (name, partName, monthTime, FullTime.PAY);
    }
    
}


const staffA = new FullTime('kun','partTime',30);
const staffB = new FullTime('silva','fullTime',20);

console.log(staffA.monthlyPay());
console.log(staffA.monthlyPay());






class Employee {
    constructor (name, department, houstPerMonth,payRate) {
        this.name = name;
        this.department = department;
        this.houstPerMonth = houstPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.houstPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor (name, department, houstPerMonth) {
        super(name, department, houstPerMonth, FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor (name, department, houstPerMonth) {
        super(name, department, houstPerMonth, PartTimeEmployee.PAY_RATE);
    }
    
}

const kun = new FullTimeEmployee('쿤','s/w',30);
const david = new PartTimeEmployee('다비드','md',30);
console.log(kun.calculatePay());
console.log(david.calculatePay());

