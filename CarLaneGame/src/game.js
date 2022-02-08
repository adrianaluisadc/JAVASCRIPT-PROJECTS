//IMPORTATIONS

import { DISTANCE, KEY_DOWN, CAR_POSITION } from "./constants.js";
import { produceObstacle } from "./obstacles.js";;

// CREATING ELEMENTS

const carPlayer = document.createElement('div');

// ADDING CLASSLIST

carPlayer.classList.add("car-player");

//APPENDING CREATED ELEMENTS

document.body.querySelector(".game").append(carPlayer);



// ----------------------------------------------------


// FUNCTION FOR HIGHWAY MOVEMENT FROM TOP TO BOTTOM



//FUNCTION FOR MOVING PLAYER'S CAR

let carPosition = 56; //initialize car position value

function playerMovement(event) {

    if (carPosition == CAR_POSITION.center) { //if the carPosition is in the center it will render the following
        switch (event.key) {
            case KEY_DOWN.toRight: //if key is pressed "d"
                carPosition = carPosition + DISTANCE; //current position value will add the next distance
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
            case KEY_DOWN.toLeft:
                carPosition = carPosition - DISTANCE;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    } else if (carPosition == CAR_POSITION.right) { //if the carPosition is in the right it will render the following
        switch (event.key) {
            case KEY_DOWN.toLeft:
                carPosition = carPosition - DISTANCE;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    } else if (carPosition == CAR_POSITION.left) { //if the carPosition is in the left it will render the following
        switch (event.key) {
            case KEY_DOWN.toRight:
                carPosition = carPosition + DISTANCE;
                document.body.querySelector(".car-player").style.left = carPosition + "px";
                console.log(carPosition);
                break;
        }
    }
}



// ----------------------------------------------------

//Invocation

document.addEventListener('keydown', playerMovement);

let highwayPosition = 0; 
let gameSituation = true;



function highwayMovement() {
  
    if (gameSituation == true) {
        highwayPosition = highwayPosition + 25;
        document.body.querySelector(".game").style.backgroundPositionY = highwayPosition + "px";
        }
}

 // Invoking highwayMovement
setInterval(produceObstacle, 2000);
setInterval(highwayMovement, 200)
