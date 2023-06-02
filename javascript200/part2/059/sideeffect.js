console.log('hello!');
if(typeof window !== 'undefined') {
    window.hello = function hello(name) {
        console.log('hello' + name);
    }    
}