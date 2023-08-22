//Disables every screen except the one passed in
function TryEnableScreen(toEnable)
{
    document.getElementById("Game").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Settings").style.display = "none";
    document.getElementById("Info").style.display = "none";
    document.getElementById(toEnable).style.display = "block";
}


document.getElementById("GameButton").addEventListener("click", () => {TryEnableScreen("Game")});
document.getElementById("ShopButton").addEventListener("click", () => {TryEnableScreen("Shop")});
document.getElementById("SettingsButton").addEventListener("click", () => {TryEnableScreen("Settings")});
document.getElementById("InfoButton").addEventListener("click", () => {TryEnableScreen("Info")});

