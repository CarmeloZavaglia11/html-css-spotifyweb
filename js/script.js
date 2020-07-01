document.getElementById("playAudio").addEventListener("click", function(){
    var audio = document.getElementById('testAudio');
    var barra = document.getElementById('barra');
  if(this.className == 'is-playing'){
    this.className = "";
    barra.classList.remove("playing")
    this.innerHTML = "<i class='far fa-play-circle'></i>"
    audio.pause();
  }else{
    this.className = "is-playing";
    barra.classList.add("playing");
    this.innerHTML = "<i class='far fa-pause-circle'></i>";
    audio.play();
  }
});
