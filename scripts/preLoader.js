let scrollEd = document.getElementById('scroll-container');

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");

    scrollEd.style.display = 'flex';
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});