//Pointer für das Speichern der Theme Einstellung 0=sun; 1 = moon
let checkPointer =0;
//addEventlistener für click auf slider

document.getElementById("themeCheck").addEventListener("click",() => {themeChange()});






//Theme Default on Start


//Change Theme
function themeChange(){
    if(checkPointer ==0){
        document.documentElement.style.setProperty('--themeGrayBackgound', '#444849');
        document.documentElement.style.setProperty('--themeBlueBackground','#3a6470');
        document.documentElement.style.setProperty('--themeTextColor','#aab1b3');
        document.documentElement.style.setProperty('--imageGrayScale','grayscale(100%)');
        document.getElementById("GameButton").src ="assets/monitor_gray.svg";
        document.getElementById("ShopButton").src ="assets/shopping-cart_gray.svg";
        document.getElementById("SettingsButton").src ="assets/settings_gray.svg";
        document.getElementById("InfoButton").src ="assets/info_gray.svg";
        document.getElementById("Sun").src ="assets/sun_gray.svg";
        document.getElementById("Moon").src ="assets/moon_gray.svg";


        checkPointer =1;
    }
    else if(checkPointer != 0){
        document.documentElement.style.setProperty('--themeGrayBackgound', '#aab1b3');
        document.documentElement.style.setProperty('--themeBlueBackground','#5d9fb1');
        document.documentElement.style.setProperty('--themeTextColor','black');
        document.documentElement.style.setProperty('--imageGrayScale','none');
        document.getElementById("GameButton").src ="assets/monitor.svg";
        document.getElementById("ShopButton").src ="assets/shopping-cart.svg";
        document.getElementById("SettingsButton").src ="assets/settings.svg";
        document.getElementById("InfoButton").src ="assets/info.svg";
        document.getElementById("Sun").src ="assets/sun.svg";
        document.getElementById("Moon").src ="assets/moon.svg";
        checkPointer =0;
    }
    
}