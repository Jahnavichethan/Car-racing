var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var carI1, carI2, carI3, carI4, track, ground;
var cars, car1, car2, car3, car4;

var count=0;

var check;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  var databaseref=database.ref("gameState");
  databaseref.on("value",gamestatecheck);


}

function preload(){
carI1=loadImage("images/car1.png")
carI3=loadImage("images/car3.png")
carI4=loadImage("images/car4.png")
carI2=loadImage("images/car2.png")
track=loadImage("images/track.png")
ground=loadImage("images/ground.png")

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2&&player.rank==4){
    game.end();
  }

  console.log(count)
  if(check===3&&count===1)
 window.location.reload();
 
}

function gamestatecheck(data){
 check=data.val();
 console.log(check)

}



