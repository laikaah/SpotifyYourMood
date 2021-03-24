document.addEventListener("DOMContentLoaded", () => {

    const happy_button = document.getElementById("happy");
    const sad_button = document.getElementById("sad");
    const love_button = document.getElementById("love");
    const contented_button = document.getElementById("contented");
    const stressed_button = document.getElementById("stressed");
    const angry_button = document.getElementById("angry");
    const studious_button = document.getElementById("studious");

    happy_button.onclick = () => {
        getSong(0);
    };
    sad_button.onclick = () => {
        getSong(1);
    };
    love_button.onclick = () => {
        getSong(2);
    };
    contented_button.onclick = () => {
        getSong(3);
    };
    stressed_button.onclick = () => {
        getSong(4);
    };
    angry_button.onclick = () => {
        getSong(5);
    };
    studious_button.onclick = () => {
        getSong(6);
    };
});

function getSong(moodID) {
    if (moodID < 0 || moodID > 7) {
        invalidInput();
        return;
    }
    var randomNum = randomizer(0, 7);

    console.log(moodID + " " + randomNum);
    var playlistPicked = playlistList(moodID, randomNum);
    var link = "https://open.spotify.com/playlist/" + playlistPicked;

    alert("Redirecting to " + link);
    window.location.replace(link);
}

const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getButton = () => {
    
}