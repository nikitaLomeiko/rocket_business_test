function onYouTubeIframeAPIReady() {
    const player = new YT.Player('frame', {
      events: {
        'onStateChange': onPlayerStateChange 
      }
    });
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      frame.style.display = 'none'
      buttonShowVideo.style.display = 'flex'
      frame.src = ''
    }
  }

const frame = document.getElementById("frame");
const buttonShowVideo = document.getElementById("show-video");

frame.style.display = "none";

buttonShowVideo.addEventListener("click", () => {
  frame.src =
    "https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&mute=0&rel=0&controls=1&modestbranding=1&showinfo=0";
  buttonShowVideo.style.display = "none";
  frame.style.display = "block";
});
