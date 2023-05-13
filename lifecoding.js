var le = ['a','b','c','d','e'];
le.splice(2,0,'B');
console.log(le);


var grades = {
    'list' : {'A' : 1, 'B': 2, 'C':4},
    'show' : function(){
        for(var name in this.list) {
            document.write(name+':'+this.list[name]+"<br/>");
        }
    }
}

grades.show();


//정적 유효범위
// a,b,c, 값은?
var a = 10;
var b = 20;
var c = 30;
function outer_func() {
    var b = 200;
    var c = 300;

    inner_func();
}
function inner_func() {
    var c = 3000;
    document.write(a + "<br />");
    document.write(b + "<br />"); //b 값이 20이 출력됨
    document.write(c + "<br />");
}
outer_func()

//a,b,c 의 값은?
var a =10;
var b=20;
var c=30;
function outer_func(){
    var b=200;
    var c=300;
    function inner_func(){
        var c=3000;
        document.write(a+"<br />");10
        document.write(b+ "<br />"); //b값이 200 이 출력됨 200
        document.write(c + "<br />");    300
    }
    inner_func();
}
outer_func();



//클로저
function factory_movie(title) {
    return {
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            if (typeof _title === 'String'){
                title = _title;
            } else {
                //alert('제목은 문자열이어야 합니다.');
            }
            
        }
    }
}

const ghost = factory_movie('Ghost in the shell');
const matrix = factory_movie('Matrix');

//alert(ghost.get_title());
//alert(matrix.get_title());

ghost.set_title(1);

//alert(ghost.get_title());
//alert(matrix.get_title());


var arr = []
for(i =0; i < 5 ; i++) {
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
    
}

for(var index in arr) {
    console.log(arr[index]());
}


var arr = []
for (i = 0; i < 5; i++) {
    arr[i] = function (id) { //2. 매개변수 id에 인자값 전역변수 i들어옴
        return function () {
            return id;//5. 내부함수 호출되면서 지역변수 id값 반환
        }; //=> 3. 배열이 내부함수정의를 가리킴
    }(i); //=> 1. 외부함수 호출하면서 전연변수 인자전달
}

for (var index in arr) {
    console.log(arr[index]()); //4. 배열에서 내부함수 호출(외부함수는 1에서 종료되었음)
}


//arguments
function sun (){
    var i, _sun = 0;
    for (i=0; i < arguments.length; i++) {
        document.write(i+':'+arguments[i]+'<br/>');
        _sun += arguments[i]
    }
    return _sun;
}

document.write('result : '+sun(1,2,3,4));