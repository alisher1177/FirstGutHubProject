const sprite1 = document.getElementById("sprite1")
const sprite2 = document.getElementById("sprite2")
const message = document.getElementById("message")

const finishLine = document.querySelector(".game-container").offsetWidth - 60

let sprite1Postion = 0;
let sprite2Postion = 0;

document.addEventistener("keydown", (e) => {
        if(message.textContent) return; //Stop input after winner is declared

        if(e.key === "ArrowRight") {
        sprite1Position += 10;
        sprite1.style.left = sprite1Position + "px"
        } else if (e.key === "d") {
    sprite2Position +=10;
    sprite2.style.left = sprite1Position + "px"
    }

})