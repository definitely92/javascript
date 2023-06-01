// 새로운 할일이 등록될 때 li 요소를 만들고 클래스를 지정
// 닫기 버튼 추가하고 닫기 버튼에 onclick 이벤트에 다한 처리를 추가
// ul에 새롭게 만들어진 li를 추가
// 입력칸을 비우고 마우스 포커스를 이동시켜 새로운 할일을 바로 입력 가능

function addItem() {
    // ul 요소 가져오기
    let list = document.getElementById('todolist');
    // input 가져오기
    let todo = document.getElementById('item');
    // 새로운 li 생성
    let listItem = document.createElement('li');
    // li에 들어갈 닫기 버튼 생성
    let xbtn = document.createElement('button');

    listItem.className = 'list-group-item list-group-item-action list-group-item-warning';
    xbtn.className = 'close';
    xbtn.innerHTML = '&times;';


    // close 버튼에 이벤트 처리
    xbtn.onclick = function(e){
        // 닫기 이벤트가 발생한 li 요소를 구해서 ul에서 제거
        let pnode = e.target.parentNode;
        list.removeChild(pnode)
    }

    // li 요소 구성
    listItem.innerText = todo.value; // 인풋에 적은 투두 내용
    listItem.appendChild(xbtn); // li 안에 버튼을 추가
    //ul 요소에 li 요소를 추가
    list.appendChild(listItem);

    // 입력칸 비우기 및 포커스 이동
    todo.value = ''; // 인풋에 입력한 텍스트를 비우기
    todo.focus(); // 인풋에 포커스 이동
}