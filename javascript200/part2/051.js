class Cart {
    constructor(){  // 생성자 함수(constructor)에서는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로 한다.
        this.store = {}; // store 속성의 빈 객체를 추가
    }
    addProduct (product){  // 전달받은 product 객체의 id를 store객체의 key로하여 객체 자체를 값으로 저장,// 전달받은 id인자에 해당하는 product값을 반환
        this.store[product.id] = product; // store 속성에 1이라는 키에 해당 상품 객체가 값으로 추가 됩니다.
    }

    getProduct (id){    
        return this.store[id];
    }
}

const cart1 = new Cart();
const cart2 = new Cart();

cart1.addProduct({id:1, name : '노트북'});
cart2.addProduct({id:2, name : '아이패드'});
console.log(cart1.store);
console.log(cart2.store);

const p = cart1.getProduct(1); // 아이디 1에 해당하는 상품객체를 반환받는다.
console.log(p);