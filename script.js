const Sprites = ["assets/bug.png"]
const Game = document.getElementById("Game");
var Difficulty = 0;

//Disables every screen except the one passed in
function TryEnableScreen(toEnable) {
    document.getElementById("Game").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Settings").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById(toEnable).style.display = "block";
}

function randomIntFromInterval(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

//spawn a new enemy
async function SpawnEnemy() {
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("Game").appendChild(makeEnemy());
}

//Creates an enemy object
function makeEnemy(difficulty, sprites) {
    if(difficulty === null  || difficulty === undefined)
        difficulty = 1; //So we dont need to error check

    var enemy = {
        health: 1 + difficulty,
        x: randomIntFromInterval(8, Game.offsetWidth - 40),
        y: randomIntFromInterval(8, Game.offsetHeight - 40),
        r: randomIntFromInterval(0, 360),
        draw: function(parent) {
            var img = new Image(32,32);
            img.src = sprites[this.health > sprites.lenght ? sprites.lenght : this.health];
            img.style.position = "absolute";
            img.style.top = `${this.y}px`;
            img.style.left = `${this.x}px`;
            img.style.transform = `rotate(${this.r}deg)`;
            parent.appendChild(img);
        }
    };

    return enemy;
}

//The game loop
async function runGame(sprites)
{
    //Retrieve data from storage
    //Set data if available, otherwise create new data
    //Retrive strenght data
    //Spawn new enemies
    //display new score
    //save data every x seconds

    //Loop and create a new enemy every x seconds
    const run = true;
    while(run) {
        await new Promise(r => setTimeout(r, 2000)); //Delay TODO: Retrive delay from store
        var e = makeEnemy(1,Sprites);
    }

}


document.getElementById("GameButton").addEventListener("click", () => {TryEnableScreen("Game")});
document.getElementById("ShopButton").addEventListener("click", () => {TryEnableScreen("Shop")});
document.getElementById("SettingsButton").addEventListener("click", () => {TryEnableScreen("Settings")});
document.getElementById("InfoButton").addEventListener("click", () => {TryEnableScreen("Info")});

