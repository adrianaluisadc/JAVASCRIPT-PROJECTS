//IMPORTATIONS

import { CAR_POSITION, DISTANCE } from "./constants.js"
import { numberRandomizer } from "./helper.js";

// CREATING ELEMENTS

// ADDING CLASSLIST ON THE ELEMENTS



//APPENDING THE ELEMENTS



// ----------------------------------------------



//FUNCTION FOR GENERATING RANDOM CAR

const positionArray = [CAR_POSITION.left, CAR_POSITION.center, CAR_POSITION.right];
const obstacleArray = ["car-obstacle1", "car-obstacle2", "car-obstacle3"];

// FUNCTION FOR OBSTACLE CAR MOVEMENT;

let currentSpeed = 200;
function produceObstacle() {

    let obstaclePosition = 580;
    const obstacle_car = document.createElement('div'); //CREATING THE OBSTACLE
    document.body.querySelector(".game").append(obstacle_car);
    obstacle_car.classList.add("obstacle-car"); //ADDING CLASSLIST TO THE OBSTACLE

    // console.log(positionRandom);
    const positionRandom = numberRandomizer(2, 0);
    const carRandom = numberRandomizer(2, 0);

    obstacle_car.style.left = positionArray[positionRandom] + "px";
    obstacle_car.style.backgroundImage = `url(../CarLaneGame/images/${obstacleArray[carRandom]}.png)`;
    // console.log(obstacleArray[positionRandom]);

    setInterval(() => {

        obstaclePosition = obstaclePosition - 25;
        obstacle_car.style.bottom = obstaclePosition + "px";

    }, currentSpeed);// Invoking highwayMovement

    if (currentSpeed > 30) {
        currentSpeed = currentSpeed - 10;
        console.log(currentSpeed);
    } else if (currentSpeed >= 10 && currentSpeed <= 30) {
        currentSpeed = currentSpeed - 1;
        console.log(currentSpeed);
    }
    console.log(obstaclePosition);


}



export { produceObstacle };

