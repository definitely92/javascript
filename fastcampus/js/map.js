const array = [1,2,3,4,5,6,7,8];

//const squared = [];

// for
// for(let i =0; i < array.length; i++) {
//     squared.push(array[i] * array[i]);
// }
// console.log(squared);

//forEach
// array.forEach(n => {
//     squared.push(n * n);
// });
// console.log(squared);


// map
const squared = array.map(n => n * n);
console.log(squared);


const items = [
    {
        id : 1,
        text: 'hello',
    },
    {
        id : 2,
        text : 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);



const superheroes = ['아이언맨','캡틴아메리카','토르','닥터스트레인지'];
const index = superheroes.indexOf('닥터스트레인지');
console.log(index);