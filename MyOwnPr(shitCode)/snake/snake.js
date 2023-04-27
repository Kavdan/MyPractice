const blockSize = 20;
const rows = 30;
const cols = 30;
const head = [rows*blockSize / 2, cols*blockSize / 2];
let food = []
let snakeBody = [head, [head[0], head[1] - 25], [head[0], head[1] - 50]];
let prevStart = false;
let score = 0;

let velocityX = 0;
let velocityY = -1;

setTimeout(() => {
    prevStart = true
}, 5000)

document.addEventListener("keyup", changeDirection);
foodGenerator()

setInterval(() => {
    const canvas = document.getElementById("board");
    canvas.height = rows * blockSize;
    canvas.width = cols * blockSize;
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    head[0] += velocityX * blockSize;
    head[1] += velocityY * blockSize;


    if (head[0] < 0) head[0] = rows * blockSize;
    if (head[1] < 0) head[1] = cols * blockSize;
    if (head[0] > rows * blockSize) head[0] = 0;
    if (head[1] > cols * blockSize) head[1] = 0;

    ctx.fillStyle = "black";
    ctx.fillRect(...head, blockSize, blockSize)

    
    if (food[0] === head[0] && food[1] === head[1]) {
        snakeBody.push([...food])
        foodGenerator();
        score++;
        const scoreSpan = document.getElementById("score");
        console.log(scoreSpan)
        scoreSpan.textContent=score;

    }
    // for (let i = snakeBody.length-1; i > 0; i--) {
    //     snakeBody[i] = snakeBody[i-1];
    // }
    if (snakeBody.length) {
         snakeBody.unshift([...head]);
         snakeBody.pop();
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (prevStart && head[0] === snakeBody[i][0] && head[1] === snakeBody[i][1] && i > 1){
            alert("lose")
        }
        if (i === 0) {
           ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    ctx.fillStyle = "orange";
    ctx.fillRect(...food, blockSize, blockSize)
}, 100)



function foodGenerator () {
    const foodX = Math.floor(Math.random() * cols) * blockSize;
    const foodY = Math.floor(Math.random() * rows) * blockSize;
    food = [foodX, foodY];
}



function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}
