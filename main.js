const keys = Array.from(document.querySelectorAll(".key"));
     function removeTransitioned (e){
    if(e.propertyName!== "transform")return
    e.target.classList.remove("playing");
}
keys.forEach(key => key.addEventListener("transitionend",removeTransitioned));
function playingSound(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    if(!key)return
    key.classList.add("playing");
}
window.addEventListener("keydown", playingSound);
