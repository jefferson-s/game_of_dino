//query selects the entire page and selects dino

const dino = document.querySelector('.dino');
let isJumping = false;

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
    let position = 0;

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
document.addEventListener('keyup', handleKeyUp);



