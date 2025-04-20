const frame = document.getElementById("frame");
const buttonShowVideo = document.getElementById("show-video");

frame.style.display = "none";

buttonShowVideo.addEventListener("click", () => {
  buttonShowVideo.style.display = "none";
  frame.style.display = "block";

  setTimeout(() => {
    buttonShowVideo.style.display = "flex";
    frame.style.display = "none";
  }, 7000);
});
