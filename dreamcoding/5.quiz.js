const fruits = ['🍏','🍓','🍇','🍓'];


function change (fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if(fruits[i]=='🍓') {
            fruits[i] = '🥝'
        }
    }
    return fruits;
}

const quiz1A = change(fruits);
console.log(quiz1A);


const fruits2 = Array.from(fruits);
console.log(fruits2);
function count (array,item) {
    let conuntNumber = [];    
    for(let i = 0; i < array.length; i++) {
        if(array[i]==item) {
            conuntNumber+=1;
        }
    }
    return conuntNumber;
}

const quiz2A = count(fruits2,'🥝');
console.log(quiz2A);
