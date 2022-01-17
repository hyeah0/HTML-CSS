let mainText = document.querySelector('h1');

window.addEventListener("scroll",function() {
    let value = window.scrollY; //스크롤의 높이
    console.log("scrollY : " , value);

    if(value>200){
        mainText.style.animation="disappear 1s ease-out forwards";

        //forwards 사라지기 유지
    }
    else{
        mainText.style.animation="slide 1s ease-out"
    }
});