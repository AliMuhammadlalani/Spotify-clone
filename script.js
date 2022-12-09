console.log("Welcome to spotify");
//Initialization of variables
let songIndex = 0;
let audioElement = new Audio("/songs/song1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let v=document.getElementById('0');
let b=document.getElementById('1');
let c=document.getElementById('2');
let d=document.getElementById('3');
let e=document.getElementById('4');
let f=document.getElementById('5');
let g=document.getElementById('6');
let h=document.getElementById('7');
let i=document.getElementById('8');
let j=document.getElementById('9');


let songs = [
    { songName: "Bikhra-Abdul Hannan", filePath: "/songs/song1bikhra.mp3", coverPath: "song1.png", duration: "2:48" },
    { songName: "Pasoori-Coke Studio", filePath: "/songs/song2pasoori.mp3", coverPath: "song2.jpg", duration: "3:44" },
    { songName: "Ek lamha-Azaan Sami", filePath: "/songs/song3ek lamha.mp3", coverPath: "song3.jpg", duration: "4:24" },
    { songName: "Iraaday-Abdul Hannan", filePath: "/songs/song4Iraaday.mp3", coverPath: "song4.jpg", duration: "2:13" },
    { songName: "Excuses-Ap Dillon", filePath: "/songs/song5Excuses.mp3", coverPath: "song5.jpg", duration: "2:56" },
    { songName: "WHY-YoungStunners", filePath: "/songs/song6WHY.mp3", coverPath: "song6.jpg" },
    { songName: "Gumaan-YoungStunners", filePath: "/songs/song7gumaan.mp3", coverPath: "song7.jpg" },
    { songName: "Ranjish Hi Sahi-Ali Sethi", filePath: "/songs/song8ranjish.mp3", coverPath: "song8.jpg" },
    { songName: "Jo Tu Na Mila-Asim Azhar", filePath: "/songs/song9jotunamila.mp3", coverPath: "song9.jpg" },
    { songName: "Kana Yari-Coke Studio", filePath: "/songs/song10.mp3", coverPath: "song10.png" }
]
let songItems =Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((items, i) => {
    console.log(items, i);
    items.getElementsByTagName("img")[0].src = songs[i].coverPath;
    items.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click',function(){
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log("Updating time..");
    progress = ((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if(audioElement.currentTime==audioElement.duration)
{
    songIndex++;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src = `songs/song${songIndex + 1}.mp3`;
    audioElement.play();
}
})


myProgressBar.addEventListener('change', () => {
    console.log("changing Progress bar...");
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    
})
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (elem) => {
//         makeAllPlays();
//         console.log(elem.target);
//         songIndex = parseInt(elem.target.id);
//         elem.target.classList.remove('fa-circle-play');
//         elem.target.classList.add('fa-circle-pause');
//         audioElement.src = `songs/song${songIndex + 1}.mp3`;
//         audioElement.play();
//         masterSongName.innerText=songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         gif.style.opacity=1;
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
   
//     })
// })

v.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song1.mp3`;
        var src1=audioElement.src;
        audioElement.play();
        masterSongName.innerText=songs[0].songName;
        v.classList.remove('fa-circle-play');
        v.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        v.classList.remove("fa-circle-pause");
        v.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
b.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        
        audioElement.src = `songs/song2.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[1].songName;
        b.classList.remove('fa-circle-play');
        b.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        b.classList.remove("fa-circle-pause");
        b.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
c.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song3.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[2].songName;
        c.classList.remove('fa-circle-play');
        c.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        c.classList.remove("fa-circle-pause");
        c.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
d.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song4.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[3].songName;
        d.classList.remove('fa-circle-play');
        d.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        d.classList.remove("fa-circle-pause");
        d.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
e.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song5.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[4].songName;
        e.classList.remove('fa-circle-play');
        e.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        e.classList.remove("fa-circle-pause");
        e.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
f.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song6.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[5].songName;
        f.classList.remove('fa-circle-play');
        f.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        f.classList.remove("fa-circle-pause");
        f.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
g.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song7.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[6].songName;
        g.classList.remove('fa-circle-play');
        g.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        g.classList.remove("fa-circle-pause");
        g.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
h.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song8.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[7].songName;
        h.classList.remove('fa-circle-play');
        h.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        h.classList.remove("fa-circle-pause");
        h.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
i.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song9.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[8].songName;
        i.classList.remove('fa-circle-play');
        i.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        i.classList.remove("fa-circle-pause");
        i.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
j.addEventListener('click',function(){
    makeAllPlays();
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/song10.mp3`;
        audioElement.play();
        masterSongName.innerText=songs[9].songName;
        j.classList.remove('fa-circle-play');
        j.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        j.classList.remove("fa-circle-pause");
        j.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

// document.getElementById('next').addEventListener('click', () => {
//     if (songIndex >= 9) {
//         songIndex = 0;
//     }
//     else {
//         songIndex += 1;
//     }
//     audioElement.src = `songs/song${songIndex + 1}.mp3`;
//     masterSongName.innerText=songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
// })
document.getElementById('next').addEventListener('click',function(){
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/song${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/song${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})