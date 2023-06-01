// 스코프 체인

var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerprint() {
        console.log(person);
        console.log(person2);
    }

    innerprint();

    console.log('print finished');
}

print();
console.log('finished');