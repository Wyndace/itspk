const smoothScroll = (target, duration) => {
  const topOffset = getComputedStyle(document.querySelector(".header__body")).position === "fixed" || getComputedStyle(document.querySelector(".header__body")).position === "sticky" ? document.querySelector(".header__body").offsetHeight : 0;

  const targetPosition = target.getBoundingClientRect().top;

  const startPositon = window.scrollY;

  const distance = targetPosition - topOffset;

  let startTime = null;

  const SmoothScrollAnim = (currentTime) => smoothScrollAnimation(currentTime, distance, duration, startTime, startPositon);

  requestAnimationFrame(SmoothScrollAnim);
};

const smoothScrollers = document.querySelectorAll("[data-scroll_to]");
if (smoothScrollers.length > 0) {
  smoothScrollers.forEach((smoothScroller) => {
    if (smoothScroller.dataset.scroll_to !== "") {
      smoothScroller.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(smoothScroller.dataset.scroll_to);
        smoothScroll(target, 1000);
      });
    } else {
      console.log("You must type selector in data-scroll_to");
    }
  });
}
