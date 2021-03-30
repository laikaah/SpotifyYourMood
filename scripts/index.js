function currentTime() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    
    document.getElementById("clock").innerText = formatTime(date);
    document.getElementById("date").innerText = formateDate(date);
}

setTimeout(currentTime, 1000);

function humanizeTime(time) {
    if (time < 10) return "0" + time;
    else return time;
}

function formatTime(date){
    let hour = humanizeTime(date.getHours());
    let minute = humanizeTime(date.getMinutes());
    let second = humanizeTime(date.getSeconds());
    let midday = hour >= 12 ? "PM" : "AM";
    
    return `${hour}:${minute}:${second} ${midday}`;
}

function formatDate(date){
    let day = date.getUTCDate();
    let month = date.getMonth();
    let year = date.getUTCFullYear();   
    
    return `${months[month+1]} ${day}, ${year}`;
}
