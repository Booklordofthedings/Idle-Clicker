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

//Create a enemy html object with random settings
function makeEnemy() {
    var game = document.getElementById("Game")

    var enemy = new Image(32,32);
    enemy.src = "assets/bug.png";
    enemy.style.position = "absolute";
    enemy.style.top = `${randomIntFromInterval(8, game.offsetHeight - 40)}px`;
    enemy.style.left = `${randomIntFromInterval(8, game.offsetWidth - 40)}px`;
    return enemy;
}

//spawn a new enemy
async function SpawnEnemy() {
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("Game").appendChild(makeEnemy());
}


document.getElementById("GameButton").addEventListener("click", () => {TryEnableScreen("Game")});
document.getElementById("ShopButton").addEventListener("click", () => {TryEnableScreen("Shop")});
document.getElementById("SettingsButton").addEventListener("click", () => {TryEnableScreen("Settings")});
document.getElementById("InfoButton").addEventListener("click", () => {TryEnableScreen("Info")});

for(var i = 0; i < 10; i++) {
    SpawnEnemy();
}

