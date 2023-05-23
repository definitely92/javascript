//단축 속성명
var adress = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age,name};
};
var getHeadCount= function(){
    return Object.keys(this.members).length;
}

var family = {adress,members,addFamily,getHeadCount};

family.addFamily(30,'seong','aunt');
family.addFamily(40,'geug','niece');
family.addFamily(20,'kang','dig');
console.log(family.getHeadCount());