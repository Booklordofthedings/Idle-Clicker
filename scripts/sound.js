//Remember that if you want to play the sound in a content 
//script (or anywhere else that is not under a chrome://extension URL) 
//you'll have to declare the audio file in the web_accessible_resources 
//manifest field:

web_accessible_resources: [
    "../assets/audio/itemBought.mp3",
    "../assets/audio/bugHit.mp3"
]


// Variable für Volume
let volume = document.getElementById("myNumber").value/100;

// Audioobjekte
var bugHitAudio = new Audio("../assets/audio/bugHit.mp3");
var itemBoughtAudio = new Audio("../assets/audio/itemBought.mp3");

//Volumeeinstellung durch Regler
document.getElementById("myNumber").oninput = function(){
    volume = this.value/100;
}

//Object copy function: Damit die Audios mehr mals abgespielt werden können;
function audioCopyPlayBugHit(){
    var copy = bugHitAudio.cloneNode();
    copy.volume = volume;
    copy.play();
}



function audioCopyPlayItemBought(){
    var copy = bugHitAudio.cloneNode();
    copy.volume = volume;
    copy.play();
}

