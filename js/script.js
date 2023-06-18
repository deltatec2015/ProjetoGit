
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
// const pipe2 = document.querySelector('.pipe2');
const score = document.querySelector('.score')
let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump') 
    }, 500);

    

}

const  loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // const pipePosition2 = pipe2.offsetLeft
    
    if (pipePosition <=90 && pipePosition > 0 &&  marioPosition < 90 ) {

        
        

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '250px' 

        mariosom.src = './musica/gameover.wav'

        alert(`Game Over! Seu Score foi : ${count}`);

        clearInterval(loop)

        
    }

    // if (pipePosition2 <=90 && pipePosition2 > 0 &&  marioPosition < 90 ) {

    //     pipe2.style.animation = 'none';
    //     pipe2.style.left = `${pipePosition2}px`;

    //     mario.style.animation = 'none';
    //     mario.style.bottom = `${marioPosition}px`;

    //     mario.src = './images/game-over.png';
    //     mario.style.width = '250px' 

    //     mariosom.src = './musica/gameover.wav'

    //     clearInterval(loop)
    // }

    count++;
    score.innerHTML = `SCORE: ${count}`;

    

    

}, 10);

window.onload = function() {

    document.getElementById('mariosom').play();
}

var audio = document.createElement('audio');
audio.src = './musica/jump-small.wav';

document.addEventListener('keydown', function (e) {
    audio.play();
});


document.addEventListener('keydown', (e) => {
    if((e.code === "ArrowUp") | (e.code === "Space")){
        jump()
    }
});


