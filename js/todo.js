const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

let toDos=[];

const toDos_Key="todos";

function saveToDo(){
    localStorage.setItem(toDos_Key,JSON.stringify(toDos)); //localstrorage는 string만 저장. json.stringify는 array 형태로 저장하기 위함.
}

function deletToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((element)=> {return element.id !== parseInt(li.id)});
    saveToDo();
}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    li.id=newToDoObj.id;
    const span=document.createElement("span");
    span.innerText=newToDoObj.text;
    const button=document.createElement("button");
    button.innerText="😀";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    li.addEventListener("click",deletToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDoObj={
        text:toDoInput.value,
        id:Date.now(), //1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환.
    };
    toDos.push(newToDoObj);
    toDoInput.value=""; //input을 비워주는 역할
    paintToDo(newToDoObj);   
    saveToDo(newToDoObj);
}

toDoForm.addEventListener("submit",handleToDoSubmit); 

const savedToDos=localStorage.getItem(toDos_Key);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos); //JSON.parse()는 문자열을 object로 변환,여기서는 array로 변환
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo); 
    //forEach()안에 함수를 넣을 때는 자동으로 인자 입력됨.
    //parsedToDos.forEach((element) => {console.log("this is turn of",element)}); 
    //arrow function 사용한거
}



