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
console.log(family.getHeadCount());