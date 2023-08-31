//Pointer für das Speichern der Theme Einstellung 0=sun; 1 = moon
let checkPointer =0;
//addEventlistener für click auf slider

document.getElementById("themeCheck").addEventListener("click",() => {themeChange()});






//Theme Default on Start
function loadTheme(){
    document.documentElement.style.setProperty('--themeGrayBackgound', '#aab1b3');
    document.documentElement.style.setProperty('--themeBlueBackground','#5d9fb1');
    document.documentElement.style.setProperty('--themeTextColor','black');
    document.documentElement.style.setProperty('--imageGrayScale','none');
}

//Change Theme
function themeChange(){
    if(checkPointer ==0){
        document.documentElement.style.setProperty('--themeGrayBackgound', '#444849');
        document.documentElement.style.setProperty('--themeBlueBackground','#3a6470');
        document.documentElement.style.setProperty('--themeTextColor','#aab1b3');
        document.documentElement.style.setProperty('--imageGrayScale','grayscale(100%)');
        document.getElementById("GameButton").src ="assets\monitor_gray.svg";
        document.getElementById("ShopButton").src ="assets\shopping-cart_gray.svg";
        document.getElementById("SettingsButton").src ="assets\settings_gray.svg";
        document.getElementById("InfoButton").src ="assets\info_gray.svg";


        checkPointer =1;
    }
    else if(checkPointer != 0){
        document.documentElement.style.setProperty('--themeGrayBackgound', '#aab1b3');
        document.documentElement.style.setProperty('--themeBlueBackground','#5d9fb1');
        document.documentElement.style.setProperty('--themeTextColor','black');
        document.documentElement.style.setProperty('--imageGrayScale','none');

        checkPointer =0;
    }
    
}