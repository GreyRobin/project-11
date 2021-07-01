
  function preload(){
    //pre-load images
    var runner, runnerani
    var path, pathani
    runnerani = loadAnimation("Runner-1.png" , "Runner-2.png")
    pathani = loadAnimation("path.png")
    var leftwall
    var rightwall
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
    runner = createSprite(200,300,50,50)
    runner = addAnimation(runnerani)
    path = createSprite(200,200,200,200)
    path = addAnimation(pathani)
  }

  function draw() {
    background(0);
    ground.velocityY = -2
    if(path.y<0){
      path.y=path.height/2
      runnerani.x = World.mouseX

  }
