'use strict';

var sounds = {
  a: "./crash.mp3",
  s: "./snare.mp3",
  d: "./kick-bass.mp3",
  f: "./tom-1.mp3",
  g: "./tom-2.mp3",
  h: "./tom-3.mp3",
  j: "./tom-4.mp3"
};

function playSound(key) {
  if (sounds[key]) {
    var audio = new Audio(sounds[key]);
    audio.currentTime = 0;
    audio.play();

    var drum = document.querySelector('.drum[data-key="' + key + '"]');
    if (drum) {
      drum.classList.add("active");
      setTimeout(function () {
        drum.classList.remove("active");
      }, 200);
    }
  }
}

function handleKeyDown(event) {
  var key = event.key.toLowerCase();
  playSound(key);
}

function handleClick() {
  var key = this.getAttribute("data-key");
  playSound(key);
}

document.addEventListener("keydown", handleKeyDown);

var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}