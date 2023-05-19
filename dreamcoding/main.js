'use strict';

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('ex1');
const gSymbol2 = Symbol.for('ex1');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}, type: ${typeof symbol1.description}`); // .description 으로 type을 string으로 변환




// 5. dynamic typing : dynamically typed language
let text = 'hello';
console.log(`values: ${text},type : ${typeof text}`);
text = 1;
console.log(`values: ${text},type : ${typeof text}`);
text = '7' + 5;
console.log(`values: ${text},type : ${typeof text}`);
text = '8'/'2';
console.log(`values: ${text},type : ${typeof text}`);