var family = {
    'adresss' : 'seoul',
    members : {},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age : age,
            name : name,
        };
    },
    getHeadCount : function () {
        return Object.keys(this.members).length;
    }
}

family.addFamily(31,'kevin','CAM');
family.addFamily(22,'holland','ST');
family.addFamily(29,'silva','RW');

var printmembers = function(){
    var members = family.members;
    for (role in members) {
        console.log('role :' + role + ', name :' + members[role].name + ', age :' + members[role].age);
    }
}



 var members = family.members;
 members['nephew'] = {age:3, name : 'jyin'};
 
 console.log(members);
 members.ST = {age:4, name: 'lua'};
 //printmembers();
 delete members.CAM;
 delete members['RW'];
 printmembers();