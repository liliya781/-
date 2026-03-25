const time = document.querySelector("#time");
let date = new Date();
time.innerHTML = date.toLocaleString();
setInterval(function(){
    date = new Date();
    time.innerHTML = date.toLocaleString();
},1000)