//Global constants
const Sprite = "assets/bug.png";
const Game = document.getElementById("Game");
const Edges = {
    x: 8,
    y: 8,
    width: Game.offsetWidth - 40,
    height: Game.offsetHeight - 40
};
const Buyables = [
    "Coffee",
    "Debugging_Duck"
];



var Difficulty = 0;
var Score = 0;

//Disables every screen except the one passed in
function TryEnableScreen(toEnable) {
    document.getElementById("Game").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Settings").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById(toEnable).style.display = "block";
}

//Returns a random integer between min and max
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

//Creates an enemy object
function makeEnemy(difficulty) {
    if(difficulty === null  || difficulty === undefined)
        difficulty = 1; //So we dont need to error check

    var enemy = {
        health: 1 + difficulty,
        x: random(Edges.x, Edges.width),
        y: random(Edges.y, Edges.height),
        r: random(0, 360),
        draw: function(parent) {
            var img = new Image(32,32);
            img.src = Sprite;
            img.style.position = "absolute";
            img.style.top = `${this.y}px`;
            img.style.left = `${this.x}px`;
            img.style.transform = `rotate(${this.r}deg)`;
            img.addEventListener("click", async () => {
                Score++;
                document.getElementById("Points").innerHTML = Score;
                await chrome.storage.session.set({ Score: Score});
                img.remove();
            });
            parent.appendChild(img);
        }
    };

    return enemy;
}

//The game loop
async function runGame()
{
    var enemies = [];
    var Game = document.getElementById("Game");

    Score = (await chrome.storage.session.get(["Score"]))["Score"];
    console.log(Score);
    if(Score === undefined || Score === null || isNaN(Score))
        Score = 0;
    document.getElementById("Points").innerHTML = Score;


    //Retrieve data from storage
    //Set data if available, otherwise create new data
    //Retrive strenght data
    //save data every x seconds

    //Loop and create a new enemy every x seconds
    const run = true;
    while(run) {
        await new Promise(r => setTimeout(r, 2000)); //Delay TODO: Retrive delay from store
        var e = makeEnemy(1);
        enemies.push(e);
        e.draw(Game);
    }

}


document.getElementById("GameButton").addEventListener("click", () => {TryEnableScreen("Game")});
document.getElementById("ShopButton").addEventListener("click", () => {TryEnableScreen("Shop")});
document.getElementById("SettingsButton").addEventListener("click", () => {TryEnableScreen("Settings")});
document.getElementById("InfoButton").addEventListener("click", () => {TryEnableScreen("Info")});
runGame()
