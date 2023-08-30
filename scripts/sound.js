// Variable für Volume
let volume = document.getElementById("myNumber").value/100;

// Audioobjekte
var bugHitAudio = new Audio("bugHit.mp3");
var itemBoughtAudio = new Audio("itemBought.mp3");

//Volumeeinstellung durch Regler
document.getElementById("myNumber").oninput = function(){
    volume = this.value/100;
}

//Object copy function: Damit die Audios mehr mals abgespielt werden können;
function audioCopyPlayBugHit(){
    var copy = bugHitAudio.cloneNode();
    copy.volume = volume;
    copy.play;
}

function audioCopyPlayItemBought(){
    var copy = bugHitAudio.cloneNode();
    copy.volume = volume;
    copy.play;
}

