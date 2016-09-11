var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";
var towerImg = document.createElement("img");
towerImg.src = "images/tower-btn.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var slime = {
  x:0,
  y:0,
};
function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(enemyImg,slime.x,slime.y);
  ctx.drawImage(towerImg,608,448,32,32);
}
setInterval(draw,16);
