const music = document.querySelector(".songw5");
const song = document.querySelector(".songw5 audio");
const role = document.querySelector(".songw5:nth-child(1)");

song.addEventListener('palying',function(){
    let i = 0;
    setInterval(function(){
        role.style.transform = `rotate(${i}deg)`;
        i++;
    },10);
})