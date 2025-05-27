function updateTime() {
    const currentDate = new Date();
    document.querySelector(".hour").innerHTML = currentDate.getHours();
    document.querySelector(".minute").innerHTML = currentDate.getMinutes();
    document.querySelector(".second").innerHTML = currentDate.getSeconds();
}
updateTime();
setInterval(updateTime, 1000);
