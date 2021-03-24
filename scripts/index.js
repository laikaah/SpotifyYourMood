function currentTime() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var midday = "AM";
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getUTCDate();
    var month = date.getMonth()
    var year = date.getUTCFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    midday = (hour >= 12) ? "PM" : "AM";
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
    document.getElementById("date").innerText = months[month+1]+ " " +day+ ", " +year; 
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(x) {
    if (x < 10) return "0" + x;
    else return x
}

currentTime();