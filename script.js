var play = document.getElementById("play-btn");
var pause = document.getElementById("pause-btn");
var myMusic = document.getElementById("music");

function playing(){
    // myMusic.play();
    alert('playing');
    pause.style.display = "inline-block";
    play.style.display = "none";
};
function paused(){
    // myMusic.pause();
    alert('paused');
    pause.style.display = "none";
    play.style.display = "inline-block";
};