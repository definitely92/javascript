//1.

const text = 'Hello World!';
console.log(text.length);

for (let i = 0; i < text.length; i++) {
    const textCharacter = text.charAt(i);
    console.log(textCharacter);
}




//2. 

const ids = 'user1, user2, user3, user4';
console.log(ids.split(','));



//3. 

setInterval(()=>{
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
},1000);