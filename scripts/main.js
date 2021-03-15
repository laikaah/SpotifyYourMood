document.addEventListener("DOMContentLoaded", () => {
    const happy_button = document.getElementById("happy");
    const sad_button = document.getElementById("sad");
    const studious_button = document.getElementById("studious");

    happy_button.onclick = () => {
        getSong(0);
    };
    sad_button.onclick = () => {
        getSong(1);
    };
    studious_button.onclick = () => {
        getSong(2);
    };
});

function getSong(moodID) {
    if (moodID < 0 || moodID > 2) {
        invalidInput();
        return;
    }
    var randomNum = randomizer(0, 2);

    console.log(moodID + " " + randomNum);
    var playlistPicked = playlistList(moodID, randomNum);
    var link = "https://open.spotify.com/playlist/" + playlistPicked;

    document.getElementById("link").innerHTML = link;
    alert("Redirecting to " + link);
    window.location.replace(link);
}

const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};