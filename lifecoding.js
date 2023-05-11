var li = ['a','b','c','d','e'];
li.splice(2,0,'B');
console.log(li);


var grades = {
    'list' : {'A' : 1, 'B': 2, 'C':4},
    'show' : function(){
        for(var name in this.list) {
            document.write(name+':'+this.list[name]+"<br/>");
        }
    }
}

grades.show();

