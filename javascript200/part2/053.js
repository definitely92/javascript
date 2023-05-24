class Product {
    static build (name,price) {
        const id = Math.floor(Math.random() * 1000)  // Math.random함수를 호출하면 0부터 1까지의 난수가 반환. 반환된 값에 1000을 곱하고 그 결과를 Math.floor 함수의 인자로 전달하면 소수점을 버려서 0~1000의 난수 값을 얻는다.
        return new Product (id,name,price);
    }

    static getTaxPrice (product) {
        return (product.price * 0.1) + product.price;
    }

    constructor (id,name,price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class DeposableProduct extends Product {
    depose () {
        this.deposed = true;
    }
}

const gum = Product.build('껌',1000);
console.log(gum);

const clothes = new DeposableProduct (1,'옷',2000);
console.log(clothes);

const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);




// get
class ProductWithCode {
    static get CODE_PREFIX () {
        return "PRODUCT-"
    }

    constructor(id) {
        this.id
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);