// swich
//if else if else if else......반복
//정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 8;
let dayNmae;

switch (day) {
    case 0 :
        dayNmae = 'mon';
        break;
    case 1 :
        dayNmae = 'tue';
        break;
    case 2 :
        dayNmae = 'wed';
        break;
    case 3 :
        dayNmae = 'thu';
        break;
    case 4 :
        dayNmae = 'fri';
        break;
    case 5 :
        dayNmae = 'sat';
        break;
     case 6 :
        dayNmae = 'sun';
        break;
    default :
        console.log('해당 요일이 없음');
}
console.log(dayNmae);

let condition = 'okay';
let print;
switch (condition) {
    case 'okay' :
    case 'good' :
        print = '좋음';
        break;
    case 'bad' :
        print = '나쁨';
}
console.log(print);