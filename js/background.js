const images=["img1.png","img2.jpeg","img3.jpeg"];

const chosenImage=images[Math.floor(Math.random()*images.length)] //Math.random()은 0과1 사이의 랜덤넘버를 가져다 준다.

const bgImage=document.createElement("img");

bgImage.src=`images/${chosenImage}`;

document.body.appendChild(bgImage);