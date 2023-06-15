{
    const x = 1;
    {
      const y = 2;  
      console.log(x);  // 1
    }
    console.log(x);   // 1
    console.log(y);    //undefined
}


const text = 'global';  // 전역 변수 , 전역 스코프 , 글로벌 변수 , 글로벌 스코프
{
    const text = 'inside block1'; // 지역 변수 (로컬 변수), 지역 스코프(로컬 스코프)
    {
        console.log(text);
    }
}

const global = 1; // 글로벌 변수는 앱이 종료될떄까지 계속 메모리에 유지됨!
{
    // 블럭 내부에서만 존내 ,블력이 ㄱ끝나면 자동으로 소멸
    const local = 1;
}

function print(params) {
    // 함수 내부에서도 블럭 안에서 필요한 경우에는
    // 필요환 곳에서! 블럭 안에서 변수를 선언하고 사용해야함
    if(true) {
        let temp = 0;
    }
}