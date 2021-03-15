function getSong(moodID) {

    if (moodID < 0 || moodID > 2) { invalidInput(); return; }
    var randomNum = randomizer(0, 2);

    console.log(moodID + " " + randomNum);
    var playlistPicked = playlistList(moodID, randomNum);
    var link = "https://open.spotify.com/playlist/" + playlistPicked;

    document.getElementById("link").innerHTML = link;
    alert("Redirecting to " + link);
    window.location.replace(link);
}

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function invalidInput() {
    alert("Not a valid Input");
}

function francisFunction() {
    console.log('Hello! This is Francis\'s function!')
}