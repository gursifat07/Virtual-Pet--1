var pet,Dog,happyDog;
var database,foodS;

function preload()
{
  Dog = loadImage("Dog.png");
  happyDog = loadImage("happyDog.png");
}

function setup() {
  database = firebase.database();
  food =foodstockref;
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(Dog);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
  drawSprites();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  foodS = foodS-1;
  pet.addImage(happyDog);
}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  pet.addImage(Dog);
  foodS = foodS+1;
}
fill("white")
textSize(25)
text("Note: Press UP Arrow to feed the dog",50,50);
text("Press Down Arrow to add food",50,100);
text("Food Remaining:"+foodS ,50,150)

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
 
}