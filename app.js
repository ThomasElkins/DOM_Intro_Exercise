console.log("Javascript is alive!");

document.getElementById("greeting").textContent="Hello, World!"

document.getElementById("essentials").style.backgroundColor="yellow"

var ralphGif = document.createElement("img")
ralphGif.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"

document.getElementById("greeting").append(ralphGif)
