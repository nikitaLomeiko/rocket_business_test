const frame = document.getElementById("frame");
const buttonShowVideo = document.getElementById("show-video");

frame.style.display = "none";

buttonShowVideo.addEventListener("click", () => {
  buttonShowVideo.style.display = "none";
  frame.style.display = "block";

  setTimeout(() => {
    buttonShowVideo.style.display = "flex";
    frame.style.display = "none";
    frame.src = 'https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&mute=0&rel=0&controls=1&modestbranding=1&showinfo=0'
  }, 7000);
});
