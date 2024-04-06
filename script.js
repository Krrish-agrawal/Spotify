console.log("Welcome to My Spotify")
//Initialize the Variables

let songIndex = 1
let audioElement = new Audio("./Songs/1.mp3")
let masterplay = document.getElementById("masterplay")
let progressBar = document.getElementById("progressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songTitle=document.getElementById("songTitle")
let songs = [
  {
    songName: "7years",
    filepath: "Songs/7years.mp3",
    coverPath: "Images/cover.jpg",
  },
  {
    songName: "295",
    filepath: "Songs/295.mp3",
    coverPath: "Images/cover.jpg",
  },
  {
    songName: "Check",
    filepath: "Songs/Check.mp3",
    coverPath: "Images/cover.jpg",
  },
  {
    songName: "Cheques",
    filepath: "Songs/Cheques.mp3",
    coverPath: "Images/cover.jpg",
  },
  {
    songName: "soHigh",
    filepath: "Songs/soHigh.mp3",
    coverPath: "Images/cover.jpg",
  },
]
songItems.forEach((element, i)=>{
  element.getElementsByTagName("span")[0].innerText=songs[i].songName
})
//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-pause-circle")
    gif.style.opacity = 1
  } else {
    audioElement.pause()
    masterplay.classList.add("fa-circle-play")
    masterplay.classList.remove("fa-pause-circle")
    gif.style.opacity = 0
  }
})

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seek Bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

  progressBar.value = progress //value is in percentage
})

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100
})

const makeAllplay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle")
      element.classList.add("fa-circle-play")
    }
  )
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener('click', (e) => {
      
      makeAllplay()
     songIndex=parseInt(e.target.id)
      e.target.classList.remove("fa-circle-play")
      e.target.classList.add("fa-pause-circle")
      audioElement.src = `Songs/${songIndex}.mp3`
       songTitle.innerText=songs[songIndex-1].songName
      audioElement.currentTime = 0
      audioElement.play()
       masterplay.classList.remove("fa-circle-play")
      masterplay.classList.add("fa-pause-circle")
       gif.style.opacity = 1
      
    })
  }
)

document.getElementById('next').addEventListener('click', () =>
{
  if (songIndex >= 5) {
    songIndex=1
  }
  else {
    songIndex+=1
  }
 
  audioElement.src = `Songs/${songIndex}.mp3`
  audioElement.currentTime = 0
      audioElement.play()
       masterplay.classList.remove("fa-circle-play")
  masterplay.classList.add("fa-pause-circle")
  songTitle.innerText = songs[songIndex - 1].songName
   gif.style.opacity = 1
})

document.getElementById('prev').addEventListener('click', () =>
{
  if (songIndex <= 1) {
    songIndex=5
  }
  else {
    songIndex-=1
  }
  audioElement.src = `Songs/${songIndex}.mp3`
  audioElement.currentTime = 0
      audioElement.play()
       masterplay.classList.remove("fa-circle-play")
  masterplay.classList.add("fa-pause-circle")
  songTitle.innerText = songs[songIndex - 1].songName
   gif.style.opacity = 1
})