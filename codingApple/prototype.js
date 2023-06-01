function machine () {
    this.q = 'strike';
    this.w = 'snowball';
}

machine.prototype.name = 'hwang';

var bla = new machine();
console.log(bla.name);


var array = [4,3,2];
var array = new Array(4,2,1);

Array.prototype.함수 = function(){}

var array = [1,2,3,4,5];
console.log(array.함수());