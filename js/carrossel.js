const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
function carrossel(){

    id++;

    if(idx > img.length -1){

        idx = 0;
    }

    imgs.style.transform = `translatex(${-idx * 200}px)`

}

setInterval(carrossel, 1800);