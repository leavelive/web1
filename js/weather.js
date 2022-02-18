const weather=document.querySelector("#weather span:first-child");
const city=document.querySelector("#weather span:last-child");

function weatherSuccess(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url='http://api.openweathermap.org/data/2.5/weather?lat={37.576092}&lon={127.0262447}&appid={d78d05887dcc091933081a78d2af6f90}&units=metric';
    fetch(url)
        .then((reponse)=>reponse.json())
        .then((data) =>{
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
        });    
}


function weatherError(){
    alert("Sorry, I cannot get you position");
}


navigator.geolocation.getCurrentPosition(weatherSuccess,weatherError); 
//왼쪽 arg가 success callback, 오른쪽이 error callback.