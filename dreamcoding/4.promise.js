// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자
function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if(!seconds || seconds < 0){
            reject(new Error('seconds기 0보다 작음'))
        }
        setTimeout(resolve, seconds * 1000);
    });
};

runInDelay(2)
.then(() => console.log('타이머 완료')) // 필요한 일을 수행
.catch(console.error) // 에러를 처리 (error 인자를 받아서 처리)
.finally(()=>console.log('끝낫다'))