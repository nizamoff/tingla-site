const theHeader = document.querySelector(".header");
const mainVideo = document.querySelector(".player__video");
const playBtn = document.querySelector(".player__buttons--play");
const pauseBtn = document.querySelector(".player__buttons--pause");
const playerController = document.querySelector(".player__controller");
const volumeOn = document.querySelector(".player__volume--on");
const volumeOf = document.querySelector(".player__volume--of");
const playerSound = document.querySelector("player__sound");
const videoControl = document.querySelector(".player__control");

window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    theHeader.style.background = "rgba(255, 255, 255, 0.87)";
    theHeader.style.paddingTop = "30px";
    theHeader.style.paddingBottom = "30px";
    theHeader.style.backdropFilter = "blur(15px)";
  } else {
    theHeader.style.background = "transparent";
    theHeader.style.paddingTop = "50px";
    theHeader.style.paddingBottom = "50px";
    theHeader.style.backdropFilter = "blur(0px)";
  }
});

playBtn.addEventListener("click", function () {
  mainVideo.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  playerController.display = "block";
});

pauseBtn.addEventListener("click", function () {
  mainVideo.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
});
