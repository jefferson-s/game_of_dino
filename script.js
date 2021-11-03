//query selects the entire page and selects dino

const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
 

//adding events to keyboard buttons to control the dino
//function to know which key the user is typing and 32 is the spacebar code

function handleKeyUp(event) {
    if (event.keyCode === 32){
        if( !isJumping ) {
        jump();
        }
    }
}
//function for jump 

function jump() {
  
    isJumping = true;

    let upInterval = setInterval(() => {
        if( position >= 150) {
            clearInterval(upInterval);
        //going down
        let downInterval = setInterval(() => {
            if( position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            } else {
            position -= 20;
            dino.style.bottom = position + 'px'; 
            }
        },20);
        }else {
        //going up
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

// funçtion for create cactus
function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
        //game over
        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class= "game-over">Game Over</h1><h2 class= "game-over2">Press F5 to restart the Game</h2>'
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);

    setTimeout(createCactus, randomTime); 
}

createCactus();
document.addEventListener('keyup', handleKeyUp);



