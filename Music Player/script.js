// SONG LIST
let songs = [
    {
        name: 'Tera Zikr',
        author: 'Darshan Raval',
        image: 'https://www.pagalworld.us/_big/tera-zikr-darshan-raval-250.jpg',
        src:'music/teraZikr.mp3'
    },
    {
        name: 'Barishon Mein',
        author: 'Darshan Raval',
        image: 'https://c.saavncdn.com/476/Baarishon-Mein-Hindi-2022-20220707173221-500x500.jpg',
        src:'music/baarishonMein.mp3'

    },
    {
        name: 'Phir Aur Kya Chahiye',
        author: 'Arijit Singh',
        image: 'https://i.scdn.co/image/ab67616d0000b2735a5d10c4aaf47bd743df4ed9',
        src:'music/tuHaiTo.mp3'

    },
    {
        name: 'Mann Meri Jaan',
        author: 'King',
        image: 'https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854',
        src:'music/maanMeriJaan.mp3'

    },
    {
        name: 'Manike',
        author: 'Jubin Nautiyal',
        image: 'https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg',
        src:'music/manike.mp3'

    },
    {
        name: 'Ram Siya Ram',
        author: 'Sachet Tandon',
        image: 'https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg',
        src:'music/ramSiyaRam.mp3'

    },
    {
        name: 'Raatan Lambiyan',
        author: 'Jubin Nautiyal',
        image: 'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
        src:'music/raatanLambiyan.mp3'

    },
    {
        name: 'Sawan Aaya Hai',
        author: 'Arijit Singh',
        image: 'https://c.saavncdn.com/244/Creature-3D-Hindi-2014-500x500.jpg',
        src:'music/sawanAayaHai.mp3'

    }
]


let listSongs = document.getElementById('listSongs');
let MusicCard = document.getElementById('card');

let floatingMusic = document.getElementById('floatingMusic');
let closeButton = document.getElementById('closeButton');

//flaoting music section
let nowPlayingImg = document.getElementById('nowPlayingImg');
let nowPlayingName = document.getElementById('nowPlayingName');
let nowPlayingAuthor = document.getElementById('nowPlayingAuthor');

let musicProgress = document.getElementById('musicProgress');

let playPause = document.getElementById('playPause');
let prevTrack = document.getElementById('prevTrack');
let nextTrack = document.getElementById('nextTrack');

let indexPlaying = 0;

//current playing status and audioElement
let currentPlaying = false;
let audioElement;


//EVENT LISTENERS
listSongs.addEventListener('click',(dets)=>{
    if(dets.target.classList.contains('ri-play-circle-fill')){
        indexPlaying = dets.target.id;
        animateFloatCard();
        playMusic();
    }
})
musicProgress.addEventListener('change',()=>{
    if(audioElement){
        audioElement.currentTime = musicProgress.value / 100 * audioElement.duration;
    }
})
nextTrack.addEventListener('click',()=>{
    playNextMusic();
})
prevTrack.addEventListener('click',()=>{
    playPrevMusic();
})
playPause.addEventListener('click',()=>{
    switchPlayPause();
})
closeButton.addEventListener('click',()=>{
    stopMusic();
    gsap.to(floatingMusic,{
        x:'100%',
        duration:0.3,
        delay:0,
        stagger:1
    })
})

// FUNCTIONS
function animateFloatCard(){
    gsap.to(floatingMusic,{
        x:0,
        duration:0.5,
        delay:0,
        stagger:1
    })
    
}
function setEventListener(){
    audioElement.addEventListener('timeupdate',()=>{
        let duration = parseInt(audioElement.currentTime/audioElement.duration*100);
        musicProgress.value = duration;
    })

    audioElement.addEventListener('ended',()=>{
        playNextMusic();
    })
}

function stopMusic(){
    if(audioElement) audioElement.pause();
}
function setMusic(){
    nowPlayingName.innerText = songs[indexPlaying].name
    nowPlayingAuthor.innerText =  songs[indexPlaying].author
    nowPlayingImg.src = songs[indexPlaying].image
}
function playMusic(){
    //if already playing do not change playing status and symbol
    if(currentPlaying) audioElement.pause();
    else{
        currentPlaying=true;
        changePlayPauseLogo();
    }
    setMusic();
    audioElement = new Audio(songs[indexPlaying].src)
    setEventListener();
    audioElement.volume = 0.5;
    audioElement.play();
}
function switchPlayPause(){
    if(audioElement==undefined) return;
    if(currentPlaying)  audioElement.pause();
    else                audioElement.play();
    changePlayPauseLogo();
    currentPlaying=!currentPlaying;
}
function changePlayPauseLogo(){
    playPause.classList.toggle('ri-pause-fill')
    playPause.classList.toggle('ri-play-fill')
}


function playNextMusic(){
    indexPlaying++;
    if(indexPlaying===songs.length)   indexPlaying=0;
    playMusic();
}
function playPrevMusic(){
    indexPlaying--;
    if(indexPlaying===-1)   indexPlaying=songs.length-1;
    playMusic();
}


document.addEventListener('keyup',(event)=>{
    if(event.keyCode == '32'){
        switchPlayPause();
    }
})


//adding music from above songs List
function setMusicList(){
    let clutter = '<div><h1>Spotify</h1> <img src="https://static.vecteezy.com/system/resources/previews/018/930/750/non_2x/spotify-app-logo-spotify-icon-transparent-free-png.png" alt=""> </div> <tr><th>Title</th> <th>Album</th> <th></th> </tr> ' 
    for(let i=0;i<songs.length;i++){
        clutter += `<tr><td>${songs[i].name}</td> <td>${songs[i].author}</td> <td><i id="${i}" class="ri-play-circle-fill"></i></td> </tr>`
    }
    listSongs.innerHTML  = clutter
}

setMusicList();

//set width of image equal to the height of the image
nowPlayingImg.style.width = `${nowPlayingImg.getBoundingClientRect().height}px`;
