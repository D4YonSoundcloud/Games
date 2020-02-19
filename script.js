const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;
// Rules + close event handlers

rulesBtn.addEventListener("click", () => rules.classList.add("show"));
closeBtn.addEventListener("click", () => rules.classList.remove("show"));

//create/draw ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4
};


function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
  ctx.fillStyle = "#f367c4";
  ctx.fill();
  ctx.closePath();
}

//create/draw paddle
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  width: 80,
  height: 10,
  speed: 8,
  dx: 0
};

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = "#f367c4";
  ctx.fill();
  ctx.closePath();
}

//create/draw bricks array
const brickInfo = {
    width: 70,
    height: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

const bricks = [];
for(let i = 0; i < brickRowCount; i++){
    bricks[i] = [];
    for(let j=0; j < brickColumnCount; j++){
        const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x,y, ...brickInfo } 
    }
}

function drawBricks () {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.width, brick.height);
            ctx.fillStyle = brick.visible ? '#f367c4' : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}
//draw score
function drawScore(){
    ctx.font ='20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

//add update function - animation - requestAnimationFrame

//move paddle
function movePaddle() {
    paddle.x += paddle.dx;
    //wall detection
    if(paddle.x + paddle.width > canvas.width) {
        paddle.x = canvas.width = paddle.width;
    }
    if (paddle.x < 0) {
        paddle.x = 0;
    }
}



// keyboard event handlers to move paddle

// Move ball

// Add wall bounderies

// Increase score when bricks break

// Lose function, redraw bricks and reset score, keep playing


//Draw the game
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}


function update() {
    movePaddle();

    draw();

    requestAnimationFrame(update);
}

update();

//keyboard event handlers
document.addEventListener('keydown', keyDown)

rulesBtn.addEventListener("click", () => rules.classList.add("show"));
closeBtn.addEventListener("click", () => rules.classList.remove("show"));
