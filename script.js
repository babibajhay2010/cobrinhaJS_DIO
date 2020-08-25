let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') // renderiza o desenho dentro do canvas
let box = 32
let snake = []
snake[0]={
    x: 8*box,
    y: 8*box
}
let direction='right'
let food={
    x: Math.floor(Math.random()*15+1)*box, //math.floor retira a parte float do numero
    y: Math.floor(Math.random()*15+1)*box
}

function criarbackground(){
    context.fillStyle='lightgreen'
    context.fillRect(0,0,16*box, 16*box) // desenha onde vai acontecer o jogo (posição x e y, altura e largura)
}

function criarSnake(){
    for (i=0; i<snake.length; i++){
        context.fillStyle='blue'
        context.fillRect(snake[i].x,snake[i].y,box, box)
    }
}

function comer(){
    context.fillStyle="red"
    context.fillRect(food.x, food.y,box,box)
}

document.addEventListener('keydown', update) // para a cobrinha andar
function update(event){
    if(event.keyCode ==37 && direction !="right"){
        direction='left'
    } 
    if(event.keyCode ==38 && direction !="down"){
        direction='up'
    }
    if(event.keyCode ==39 && direction !="left"){
        direction='right'
    }
    if(event.keyCode ==40 && direction !="up"){
        direction='down'
    }
}


function initjogo(){

    


    if(snake[0].x >15 && direction=="right"){
        snake[0].x=0
    }
    if(snake[0].x <0 && direction=="left"){
        snake[0].x=16*box
    }
    if(snake[0].y >15 && direction=="down"){
        snake[0].y=0
    }
    if(snake[0].y >15 && direction=="up"){
        snake[0].y=16*box
    }

    criarbackground()
    criarSnake()
    comer()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction=="right"){ //condições para a cobrinha se mexer no jogo
        snakeX+=box 
    }
    if(direction=="left"){
        snakeX-=box
    }
    if(direction=="up"){
        snakeX-=box
    }
    if(direction=="down"){
        snakey+=box
    }

    if(snakeX!=food.x || snakeY!=food.y){
        snake.pop()
    }
    else{
        food.x= Math.floor(Math.random()*15+1)*box  //math.floor retira a parte float do numero
        food.y= Math.floor(Math.random()*15+1)*box
    }

    snake.pop() // tira o ultimo elemento do array para a cobrinha se mover
    let newhead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newhead) // faz a nova cabeça da cobrinha
}

let jogo=setInterval(initjogo,100) //tempo em milisegundos

