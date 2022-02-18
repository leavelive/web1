const clock=document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

/*
setInterval(sayHello,5000); //5000은 5초를 의미. interval은 반복
setTimeout(sayHello,5000); //timeout은 한 번 하고 끝.
*/

function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0"); //padStart의 1st arg는 length, 2nd는 length를 맞추기 위해 넣을 문자
    const minutes=String(date.getMinutes()).padStart(2,"0"); //padStart는 대상의 앞에 문자를 붙이고 padEnd는 뒤에 붙인다.
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000); //시작되고 1초가 지난 뒤부터 getClock이 실행된다.그래서 위에 getClock 넣어준거.