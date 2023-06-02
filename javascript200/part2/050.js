// 프로토타입 기반 상속 이해
function Storage () {
    this.datastorage = {};
}

Storage.prototype.put= function(key, data) {
    this.datastorage[key] = data;
}
Storage.prototype.getData = function(key) {
    return this.datastorage[key];
}

const productStorage = new Storage();
productStorage.put('id001',{name:'키보드', price: 2000});
console.log(productStorage.getData('id001'));
console.log(productStorage);

function RemovableStorage() {
    Storage.call(this);
}
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
    this.dataSore = {};
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id002',{name:'키보드',price : 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);