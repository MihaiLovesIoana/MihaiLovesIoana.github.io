let timeLeft = 3;
let downloadTimer = setInterval(function () {
    document.querySelector(".earth").innerHTML = timeLeft--;
    if (timeLeft === 0)
        clearInterval(downloadTimer);
}, 1000);
