// Smooth Scrolling

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      const targetElement = document.querySelector(hash);
      const targetOffsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    }
  });
});
