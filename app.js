const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Na ready tha <br>
        <div class="subtitle">Joseph vijay</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Uthunghada sangu <br>
        <div class="subtitle">Dhanush</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Osaka <br>
        <div class="subtitle">Mirchi Siva</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Un paarvaiyil <br><div class="subtitle">Jayam ravi, Trisha</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Asku maro <br>
        <div class="subtitle">Kavin,Teja</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Aval <br>
        <div class="subtitle">Udhayanithi stalin, Hansika</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"26",
        songName: `Mayilaanjiye <br>
        <div class="subtitle">Siddharth</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"28",
        songName: `Naan nee <br>
        <div class="subtitle">Karthik,Cathrine terasa</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"7",
        songName: `Ava enna <br>
        <div class="subtitle">Surya</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Bae<br>
        <div class="subtitle">SK,Priya mohan</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Vaa vaathi <br><div class="subtitle">Dhanush</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Kutty pattas<br><div class="subtitle">Ashwin</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Seramal ponal<br><div class="subtitle">Prabhu Deva,Hansika</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Theethiriyaai <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Vilambara Idaiveli <br><div class="subtitle">Aaatharva,Raashi khanna</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Kokkorako<br><div class="subtitle">Joseph vijay, Trisha</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: 'Idhu dhaan <br><div class="subtitle">G.V.Prakash</div>',
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: 'Kanna veesi<br><div class="subtitle">Nakshtara</div>',
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: 'Nira<br><div class="subtitle">Siddharth</div>',
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: 'Sandakaari neethaan<br><div class="subtitle">Vijay sethupathi,Nivedha Bethuraj</div>',
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: 'En jeevan<br><div class="subtitle">Vijay sethupathi,Nivedha Bethuraj</div>',
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: 'Idazhin oram<br><div class="subtitle">Dhanush,Shruthi hasan</div>',
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: 'Un vizhigalil<br><div class="subtitle">Sivakarthikeyan</div>',
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: 'Thooriga<br><div class="subtitle">Surya</div>',
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: 'Un vizhigalil<br><div class="subtitle">Jai,Nazriya</div>',
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: 'Vizhi moodi Yosithaal<br><div class="subtitle">Surya,Thamana</div>',
        poster: "img/25.jpg",
    },
    {
        id:"27",
        songName: 'Minnalai pidithu<br><div class="subtitle">Vijay</div>',
        poster: "img/27.jpg",
    },
    {
        id:"29",
        songName: 'Nattu koothu<br><div class="subtitle">Ramcharan,NTR</div>',
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: 'Nenjukulle nee<br><div class="subtitle">Jai</div>',
        poster: "img/30.jpg",
    },
   
    {
        id:"31",
        songName: 'Ayyayo neju<br><div class="subtitle">Dhanush,Tapsee</div>',
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: 'Manwa lagae<br><div class="subtitle">Sharukhaan ,Deepika padukon </div>',
        poster: "img/32.jpg",
    },
   
   
    {
        id:"34",
        songName: 'India Waalae<br><div class="subtitle">Sharukhaan ,Deepika padukon </div>',
        poster: "img/34.jpg",
    },
   
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
// --- SEARCH FUNCTIONALITY ---

const searchInput = document.getElementById("search");

function searchAndPlaySong() {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) return;

  // Find song in list
  const foundIndex = songs.findIndex(song =>
    song.songName.toLowerCase().includes(query)
  );

  if (foundIndex !== -1) {
    songIndex = foundIndex;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    makeAllPlays();
    const playBtn = document.getElementsByClassName("songItemPlay")[songIndex];
    playBtn.classList.remove("fa-play-circle");
    playBtn.classList.add("fa-pause-circle");
  } else {
    alert("No song found with that name.");
  }
}

// Trigger search when pressing Enter
searchInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    searchAndPlaySong();
  }
});
