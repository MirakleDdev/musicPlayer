var play = document.getElementById("play-btn");
var pause = document.getElementById("pause-btn");
var myMusic = document.getElementById("music");

function playing(){
    // myMusic.play();
    // alert('playing');
    play.classList.add("none");
    pause.classList.remove("none");
};
function paused(){
    // myMusic.pause();
    alert('paused');
};