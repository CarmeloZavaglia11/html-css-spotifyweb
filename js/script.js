document.getElementById("playAudio").addEventListener("click", function(){
    var audio = document.getElementById('testAudio');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = "<i class='far fa-play-circle'></i>"
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = "<i class='far fa-pause-circle'></i>";
    audio.play();
  }
});
