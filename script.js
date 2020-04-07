//Walking animation
function walking() {
    var i=0;
    var characterMovements = ['assets/character-1.png', 'assets/character-2.png'];
    window.setInterval( function() {
        document.getElementById('character-image').src= characterMovements[i];
        i++;
        if (i === characterMovements.length) { i=0; }
}, 200);
}
window.onload = function start() {
    walking();
    this.moveObstacle();
}

//generate obstacles
function generateObstacles() {
    var arrayOfObstacles = ['a', 'b', 'c', 'd', 'e'];
    var randomObstacle = arrayOfObstacles[Math.floor(Math.random()*arrayOfObstacles.length)];
    return randomObstacle;
}

// moves obstacle towards the character
function moveObstacle() 
{
    var enemy = generateObstacles();
    console.log(enemy);
    obstacle = document.getElementById('obstacle');
    document.getElementById('obstacle').innerHTML = enemy;
    obstacle.style.left = "500px";
    var leftPos = parseInt(obstacle.style.left);
    setInterval( function() {
        if (leftPos >0) {
        leftPos = leftPos - 10;
        obstacle.style.left = leftPos + 'px';
        leftPos= parseInt(obstacle.style.left);
        } else {
            obstacle.style.display = "none";
        }
    }, getSpeed());
}

//Character jumps when space key is pressed
function jump() {

}

//returns varrying speed depending upon the level of game
function getSpeed() {
    return 100;
}

function getDistance() {
    let randomVariable = Math.floor(Math.random()*2);
    if(randomVariable == 0) { return 10;}
    else { return 15;}
}

//On space key event

// document.body.onkeydown = function(e){
//     if(e.keyCode == 32){
//          console.log("space bar pressed");
//          resetUI();
//     }
// }
