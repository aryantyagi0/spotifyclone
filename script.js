console.log('welcome to spotify');
let songindex = 0;
let audioelement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');
let gif = document.getElementById('gif');

// let songitems=document.getElementsByClassName('songitem');
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
]
// audioelement.play();
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 1;

    }
});
audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;

});
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
});
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // makeallplays;
        songindex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        if (audioelement.paused || audioelement.currentTime <= 0) {
            audioelement.src = `songs/${songindex + 1}.mp3`;
            mastersongname.innerHTML = songs[songindex].songName;
            audioelement.currentTime = 0;
            audioelement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
        else{
            // audioelement.src = `songs/${songindex + 1}.mp3`;
            // mastersongname.innerHTML = songs[songindex].songName;
            // audioelement.currentTime = 0;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioelement.pause();
            gif.style.opacity = 0;
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            
        }

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 6) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerHTML = songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 0;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerHTML = songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
