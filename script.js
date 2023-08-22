function SelectGame()
{
    const game = document.getElementById("Game");
    const shop = document.getElementById("Shop");
    const settings = document.getElementById("Settings");

    game.style.display = "block";
    shop.style.display = "none";
    settings.style.display = "none";
}

function SelectShop()
{
    const game = document.getElementById("Game");
    const shop = document.getElementById("Shop");
    const settings = document.getElementById("Settings");

    game.style.display = "none";
    shop.style.display = "block";
    settings.style.display = "none";
}

document.getElementById("GameButton").addEventListener("click", SelectGame);
document.getElementById("ShopButton").addEventListener("click", SelectShop);