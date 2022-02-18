const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";


function clickLoginButton() {
    const username=loginInput.value;
    if(username===""){
        alert("write ur name");
    }else if(username.length>15){
        alert("your name is too long");//html에서 <input required maxlength="15" type="text"...>으로도 해결가능
    }
    console.log("hello,", loginInput.value);
}

function onLoginSubmit(tomato){
    tomato.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    localStorage.setItem("username",loginInput.value);//앞에가 key 값, 뒤에가 value 값
    paintGreeting();
}

function paintGreeting() {
    const username=localStorage.getItem("username");
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
}

const savedUsername=localStorage.getItem("username");

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}
