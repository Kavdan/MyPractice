const speedOptions = document.querySelector(".playbackContent button");
const speed = document.querySelector(".speedOptions");
document.body.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.className !== 'settings'){
        speed.classList.remove('show');
    }
})
speedOptions.addEventListener("click", () => speed.classList.toggle("show"));

const formatTime = time => {
    let seconds = Math.floor(time % 60),
    minutes = Math.floor((time / 60) % 60),
    hours = Math.floor((time / 3600));
    
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    if (hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

const videoPlayer = document.querySelector("video");
const playBtn = document.querySelector(".play-pause");
const skipBack = document.querySelector(".skip-backward");
const skipForw = document.querySelector(".skip-forward");
const progressBar = document.querySelector(".progressBar");
const volume = document.querySelector(".optionsLeft input");
const volumeOff = document.querySelector(".optionsLeft button");
const speedMeans = document.querySelectorAll(".speedOptions li");
const currTime = document.querySelector('.currentTime');
const videoDuration = document.querySelector('.videoDuration');
videoDuration.textContent = formatTime(videoPlayer.duration);
const PicInPick = document.querySelector('.picInPic');
const fullScreen = document.querySelector('.fullScreen');
const container = document.querySelector('.container');
const videoTimeLine = document.querySelector('.videoTimeline');
const wrapper = document.querySelector('.wrapper');

playBtn.addEventListener("click", () => {
  videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
});

videoPlayer.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  console.log(percent);
  progressBar.style.width = `${percent}%`;
  currTime.textContent = formatTime(currentTime);
  videoDuration.textContent = formatTime(duration);
});

skipBack.addEventListener("click", () => {
  videoPlayer.currentTime -= 3;
});

skipForw.addEventListener("click", () => {
  videoPlayer.currentTime += 3;
});

volume.addEventListener("input", (e) => {
  console.log("34");
  videoPlayer.volume = e.target.value;
});

volumeOff.addEventListener("click", () => {
  volumeOff.classList.toggle("active");
  if (volumeOff.classList.contains("active")) {
    videoPlayer.volume = 0;
    volume.disabled = true;
  } else {
    volume.disabled = false;
    videoPlayer.volume = volume.value;
  }
});

speedMeans.forEach((speedEl) => {
  speedEl.addEventListener("click", () => {
    speed.querySelector(".active").classList.remove("active");
    speedEl.classList.add("active");
    videoPlayer.playbackRate = speedEl.dataset.speed;
  });
});

PicInPick.addEventListener('click', () => {
    videoPlayer.requestPictureInPicture();
})

fullScreen.addEventListener('click', () => {
    container.requestFullscreen()
})

videoTimeLine.addEventListener('click', e => {
    let timeLineWidth = videoTimeLine.clientWidth;
    videoPlayer.currentTime = (e.offsetX / timeLineWidth) * videoPlayer.duration;
})

const dragTimeLine = e => {
    let timeLineWidth = videoTimeLine.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
    videoPlayer.currentTime = (e.offsetX / timeLineWidth) * videoPlayer.duration;
    videoDuration.textContent = formatTime(videoPlayer.duration);
}

videoTimeLine.addEventListener('mousedown', () => {
    videoTimeLine.addEventListener('mousemove', dragTimeLine)
});

container.addEventListener('mouseup', () => {
    videoTimeLine.removeEventListener('mousemove', dragTimeLine)
});

videoTimeLine.addEventListener('mousemove', e => {
    let time = videoTimeLine.querySelector('span');
    let offsetX = e.offsetX;
    time.style.left = `${offsetX-15}px`;
    let timeLineWidth = videoTimeLine.clientWidth;
    let percent = (e.offsetX / timeLineWidth) * videoPlayer.duration;
    time.textContent = formatTime(percent);
})

container.addEventListener('mousemove', () => {
    wrapper.classList.remove('hiden');
    setTimeout(() => {
        wrapper.classList.add('hiden');
    }, 5000)
})
