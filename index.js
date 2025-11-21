document.querySelector("h1").style.opacity = 0;

setTimeout(() => {
  document.querySelector("h1").style.transition = "1s";
  document.querySelector("h1").style.opacity = 1;
}, 200);
