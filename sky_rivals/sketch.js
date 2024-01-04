var bg_img;
var playbutton, aboutbutton;
var health = 300, max_health = 300;

var gameState = 'wait'



function preload() {
    bg_img = loadImage("sky_rivals.gif");

}

function setup() {
    createCanvas(900, 700);
    //playbutton = createButton('Play');
    playbutton = createImg("play_button.png");
    playbutton.position(250, 563);
    playbutton.size(140, 140);
    //playbutton.class("customButton")
    playbutton.hide()



    aboutbutton = createImg("about.png");
    aboutbutton.position(450, 563);
    aboutbutton.size(140, 140);
    aboutbutton.hide()
}

function draw() {
    if (gameState == "wait") {
        //createCanvas(windowWidth, windowHeight);
        background(bg_img);
        playbutton.show()
        aboutbutton.show()
    }

    // arrow function =>
    // ()=>{write the entire task here}
    playbutton.mousePressed(() => {
        playbutton.hide()
        aboutbutton.hide()
        gameState = "play"
    })

    aboutbutton.mousePressed(() => {
        playbutton.hide()
        aboutbutton.hide()
        gameState = "about"


    })

    if (gameState == "about") {

        aboutgame()
    }





    if (gameState == "play") {

        background("pink")
        healthlevel1()
    }


}


function aboutgame() {

    swal({
        title: "About Game=== How to Play!!",
        text: "shoot the enemies !!",
        textAlign: "center",
        imageUrl: "sky_rivals.gif",
        imageSize: "200x200",
        confirmButton: "lets Kill  the Enemy!!",
        confirmButtonColor: "brown",
    },
        function () {
            gameState = "wait"
        }

    )



}


function healthlevel1() {

    stroke("gold")
    strokeWeight(7)
    noFill()
    rectMode(CENTER)
    rect(200, 80, 200, 20)

    noStroke()
    fill("red")
    rectMode(CENTER)
    rect(200, 80, map(health, 0, max_health, 0, 200), 20)



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}