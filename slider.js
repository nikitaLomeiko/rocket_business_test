const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");

function scrollToSlide(index) {
  const slide = track.children[index];
  track.scrollTo({
    left: slide.offsetLeft - 16, // учёт padding-left
    behavior: "smooth",
  });
}

track.addEventListener("scroll", () => {
  let index = 0;
  const slides = Array.from(track.children);
  const scrollLeft = track.scrollLeft;
  slides.forEach((slide, i) => {
    if (scrollLeft >= slide.offsetLeft - slide.offsetWidth / 2) {
      index = i;
    }
  });
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index]?.classList.add("active");
});

dots[0].classList.add("active");
