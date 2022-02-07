//initialization and creating the elements

const box = document.createElement('div');
const ball = document.createElement('div');
const congrats = document.createElement('h2');
const bounce = document.createElement('h2');
const hiScore = document.createElement('h3');

// naming the Ids
box.id = "box-wrap";
ball.id = "ball-wrap";
congrats.id = "congrats";
bounce.id = "bounce";
hiScore.id = "high-score"

// appending the elements created
document.body.append(box);
box.append(ball);
document.body.append(bounce);



// innertext 
let bounceCount = 0;
let storageScore = localStorage.getItem("hScore") || null;



congrats.innerText = "CONGRATULATIONS ON KILLING PAKER!"
bounce.innerText = `${bounceCount}`;


// function for jumping the ball

let position = 0;
let paker = "coco";

function jumping() {
    if (paker === "coco") {
        position = position + 25;
        ball.style.top = position + "px";

        if (position === 275) {
            paker = "caca";
            bounceCount += 1;
            bounce.innerText = `${bounceCount}`;
        }
    } else if (paker === "caca") {
        position = position - 25;
        ball.style.top = position + "px";


        if (position === 0) {
            paker = "coco";
        }
    }

}

//function for removing the ball

function removethis() {

    ball.remove();
    clearInterval(one);
    box.append(congrats);

    if (storageScore === null) {
        localStorage.setItem("hScore", bounceCount);
        hiScore.innerText = `Highscore: No Highscore`;
        document.body.append(hiScore);
    } else if (bounceCount <= storageScore) {

        localStorage.setItem("hScore", bounceCount);
        hiScore.innerText = `Highscore: ${bounceCount}`;
        document.body.append(hiScore);
    } else if (bounceCount > storageScore){
        hiScore.innerText = `Highscore: ${storageScore}`;
        document.body.append(hiScore);
    }

}

// console.log(storageScore); -- checking the storedscore
ball.onclick = removethis;

var one = setInterval(jumping, 91);