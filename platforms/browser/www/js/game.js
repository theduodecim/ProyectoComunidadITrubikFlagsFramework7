var $$ = Dom7;
$$(document).on('deviceready', function() { 
//there are more methods in the scene life-cycle (*render,shutdown,destroy*);

// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
//life cycle
// Some parameters for our scene ( Our own customer variables - these are NOT part of the Phaser API)
gameScene.init = function () { //  init
    //Place to defined custom var
    this.enemySpeed = 2;
    this.enemyMaxY = 280;
    this.enemyMinY = 80;
};




gameScene.preload = function() {                                   //preload
   //Load images
    this.load.image('background', 'http://i63.tinypic.com/o5x3xf.png');
    this.load.image('cubeblue', 'Assets/cubeblue.png');
    this.load.image('cubewhite', 'Assets/cubewhite.png');
    this.load.image('cubegreen', 'Assets/cubegreen.png');
    this.load.image('cubeyellow', 'Assets/cubeyellow.png');
    this.load.image('cubeorange', 'Assets/cubeorange.png');
    this.load.image('cubered', 'Assets/cubered.png');
};




//Executed once, after assets were loaded
gameScene.create = function() {                                        //create


 //Background
 let bg = this.add.sprite(0,0, 'background'); // Origin default center
 //Change origin to the top-left of the sprite
  bg.setOrigin(0,0);
  

    this.cubeblue = this.add.group({
        key: 'cubeblue',
        repeat: 2,
        setXY: {
            x: 10,
            y: 100,
            stepX: 80,
            stepY: 20
        }
    });
    this.cubered = this.add.group({
        key: 'cubered',
        repeat: 2,
        setXY: {
            x: 35,
            y: 100,
            stepX: 100,
            stepY: 20
        }
    });
    this.cubeyellow = this.add.group({
        key: 'cubeyellow',
        repeat: 2,
        setXY: {
            x: 60,
            y: 100,
            stepX: 110,
            stepY: 20
        }
    });
    this.cubegreen = this.add.group({
        key: 'cubegreen',
        repeat: 2,
        setXY: {
            x: 85,
            y: 100,
            stepX: 130,
            stepY: 20
        }
    });

    this.cubewhite = this.add.group({
        key: 'cubewhite',
        repeat: 2,
        setXY: {
            x: 105,
            y: 100,
            stepX: 140,
            stepY: 20
        }
    });
    this.cubeorange = this.add.group({
        key: 'cubeorange',
        repeat: 2,
        setXY: {
            x: 130,
            y: 100,
            stepX: 150,
            stepY: 20
        }
    });

    //scale background
    //Scale cube
    Phaser.Actions.ScaleXY(this.cubeblue.getChildren(), -0.7, -0.7);
    Phaser.Actions.ScaleXY(this.cubered.getChildren(), -0.7, -0.7);
    Phaser.Actions.ScaleXY(this.cubeyellow.getChildren(), -0.7, -0.7);
    Phaser.Actions.ScaleXY(this.cubegreen.getChildren(), -0.7, -0.7);
    Phaser.Actions.ScaleXY(this.cubewhite.getChildren(), -0.7, -0.7);
    Phaser.Actions.ScaleXY(this.cubeorange.getChildren(), -0.7, -0.7);
    //Scale enemies
   /* Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);*/

    //Set Speeds
  /*  Phaser.Actions.Call(this.enemies.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);*/

    //Set Speeds
    Phaser.Actions.Call(this.cubeblue.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);
    Phaser.Actions.Call(this.cubered.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);

    Phaser.Actions.Call(this.cubeyellow.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);
    Phaser.Actions.Call(this.cubewhite.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);
    Phaser.Actions.Call(this.cubegreen.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);
    Phaser.Actions.Call(this.cubeorange.getChildren(), function(enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);

};
//Executed on every frame (60 time per second)
gameScene.update = function() {

  let cubeBlue = this.cubeblue.getChildren();
  let numcubeBlue = cubeBlue.length;

  for(let i = 0; i < numcubeBlue; i++) {


      cubeBlue[i].y += cubeBlue[i].speed;

      if(cubeBlue[i].y >= this.enemyMaxY && cubeBlue[i].speed > 0) {
          cubeBlue[i].speed *= -1;
      }
      else if(cubeBlue[i].y <= this.enemyMinY && cubeBlue[i].speed < 0) {
          cubeBlue[i].speed *= -1;
      }
  }

    let cubeRed = this.cubered.getChildren();
    let numcubeRed = cubeRed.length;

    for(let i = 0; i < numcubeRed; i++) {

        cubeRed[i].y += cubeRed[i].speed;

        if(cubeRed[i].y >= this.enemyMaxY && cubeRed[i].speed > 0) {
            cubeRed[i].speed *= -1;
        }
        else if(cubeRed[i].y <= this.enemyMinY && cubeRed[i].speed < 0) {
            cubeRed[i].speed *= -1;
        }
    }

    let cubeYellow = this.cubeyellow.getChildren();
    let numcubeYellow = cubeYellow.length;

    for(let i = 0; i < numcubeYellow; i++) {

        cubeYellow[i].y += cubeYellow[i].speed;

        if(cubeYellow[i].y >= this.enemyMaxY && cubeYellow[i].speed > 0) {
            cubeYellow[i].speed *= -1;
        }
        else if(cubeYellow[i].y <= this.enemyMinY && cubeYellow[i].speed < 0) {
            cubeYellow[i].speed *= -1;
        }
    }


    let cubeWhite = this.cubewhite.getChildren();
    let numcubeWhite = cubeWhite.length;

    for(let i = 0; i < numcubeWhite; i++) {

        cubeWhite[i].y += cubeWhite[i].speed;

        if(cubeWhite[i].y >= this.enemyMaxY && cubeWhite[i].speed > 0) {
            cubeWhite[i].speed *= -1;
        }
        else if(cubeWhite[i].y <= this.enemyMinY && cubeWhite[i].speed < 0) {
            cubeWhite[i].speed *= -1;
        }
    }

    let cubeOrange = this.cubeorange.getChildren();
    let numcubeOrange = cubeOrange.length;

    for(let i = 0; i < numcubeOrange; i++){


        cubeOrange[i].y += cubeOrange[i].speed;

        if(cubeOrange[i].y >= this.enemyMaxY && cubeOrange[i].speed > 0) {
            cubeOrange[i].speed *= -1;
        }
        else if(cubeOrange[i].y <= this.enemyMinY && cubeOrange[i].speed < 0) {
            cubeOrange[i].speed *= -1;
        }
    }

    let cubeGreen = this.cubegreen.getChildren();
    let numcubeGreen = cubeGreen.length;

    for(let i = 0; i < numcubeGreen; i++){


        cubeGreen[i].y += cubeGreen[i].speed;

        if(cubeGreen[i].y >= this.enemyMaxY && cubeGreen[i].speed > 0) {
            cubeGreen[i].speed *= -1;
        }
        else if(cubeGreen[i].y <= this.enemyMinY && cubeGreen[i].speed < 0) {
            cubeGreen[i].speed *= -1;
        }
    }



};
// Custom Methods can be outside of the update

//End the game
gameScene.gameOver = function () {
  //Flag to set player is dead
    this.isPlayerAlive = false;

    // shake the camera
    this.cameras.main.shake(500);

    //Fade Camera
    this.time.delayedCall(250, function() { // start of the effect
    /* ?? */ this.cameras.main.fade(250); // time duration of this effect
    }, [], this);



    // restart game
    this.time.delayedCall(500, function() {
     this.scene.restart();
    }, [], this );

};

gameScene.winGame = function () {
    this.time.delayedCall(2600, function() {
        this.scene.restart();
    }, [], this );

};



//our game's configuration
let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 640, // game width
    height: 360, // game height
    scene: gameScene // our newly created scene
    
};

//create the game, and pass it the configuration
let game = new Phaser.Game(config);

})