//INITIAL DATA
let currentColor = 'black';
let drawMode = false;
let screen = document.querySelector('#tela');
let screenCtx = screen.getContext('2d');
let mouseX = 0;
let mouseY = 0;
//EVENTS
document.querySelectorAll('.colorArea .color').forEach(item=>{
    item.addEventListener('click', colorClickEvent);
})

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen)

//FUNCTIONS
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
   currentColor = color;

   document.querySelector('.color.active').classList.remove('active');
   e.target.classList.add('active');
}

function mouseDownEvent(e){
    drawMode = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
  if(drawMode){
    // console.log(e.pageX, e.pageY); //exibe as posições horizontais e verticais do mouse
    draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    drawMode = false;
}

function draw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    screenCtx.beginPath();
    screenCtx.lineWidth = 5;
    screenCtx.lineJoin = "round";
    screenCtx.moveTo(mouseX, mouseY);
    screenCtx.lineTo(pointX, pointY);
    screenCtx.closePath();
    screenCtx.strokeStyle = currentColor;
    screenCtx.stroke();

    mouseX = pointX
    mouseY = pointY
}

function clearScreen(){
    screenCtx.setTransform(1,0,0,1,0,0);
    screenCtx.clearRect(0,0,screenCtx.canvas.width, screenCtx.canvas.height)
}