const songs = [
  {
    title: "Laalijo",
    artist: "Laalijo Soundtrack",
    src: "songs/song1.mp3.mp3",
    cover: "images/cover1.jpg.jpg"
  }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
let currentSong = 0;
let isPlaying = false;

// Load song
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

loadSong(songs[currentSong]);

// Play / Pause
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }

  isPlaying = !isPlaying;
});

// Show total duration
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent =
    Math.floor(audio.duration / 60) + ":" +
    String(Math.floor(audio.duration % 60)).padStart(2, "0");
});

// Progress update + current time
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent =
    Math.floor(audio.currentTime / 60) + ":" +
    String(Math.floor(audio.currentTime % 60)).padStart(2, "0");

  const progressPercent =
    (audio.currentTime / audio.duration) * 100;

  progress.value = progressPercent || 0;
});

// Seek song
progress.addEventListener("input", () => {
  audio.currentTime =
    (progress.value / 100) * audio.duration;
});

// Volume
const volume = document.getElementById("volume");

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});