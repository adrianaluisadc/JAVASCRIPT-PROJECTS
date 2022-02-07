//IMPORTATIONS

import { CAR_POSITION, KEY_DOWN } from "./constants.js";

// CREATING ELEMENTS

const carPlayer = document.createElement('div');

// ADDING CLASSLIST

carPlayer.classList.add("car-player");


//APPENDING CREATED ELEMENTS

document.body.querySelector(".game").append(carPlayer);



// FUNCTION FOR HIGHWAY MOVEMENT FROM TOP TO BOTTOM

let highwayPosition = 0; 
let gameSituation = true;

function highwayMovement() {
    if (gameSituation == true) {
        highwayPosition = highwayPosition + 25;
        document.body.querySelector(".game").style.backgroundPositionY = highwayPosition + "px";
    }
}



//FUNCTION FOR MOVING PLAYER'S CAR

let carPosition = 56;



function playerMovement(event) {

    if (carPosition == 167) {
        switch (event.key) {
            case KEY_DOWN.toRight:
                carPosition = carPosition + CAR_POSITION;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
            case KEY_DOWN.toLeft:
                carPosition = carPosition - CAR_POSITION;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    } else if (carPosition == 278) {
        switch (event.key) {
            case KEY_DOWN.toLeft:
                carPosition = carPosition - CAR_POSITION;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    } else if (carPosition == 56) {
        switch (event.key) {
            case KEY_DOWN.toRight:
                carPosition = carPosition + CAR_POSITION;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    }
}

//Invocation
document.addEventListener('keydown', playerMovement);

setInterval(highwayMovement, 120); // Invoking highwayMovement
