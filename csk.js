function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Counter animation
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let timer = setInterval(function () {
    current += increment;
    obj.innerText = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.onload = () => {
  animateValue("runs", 0, 17000, 2000);
  animateValue("matches", 0, 538, 2000);
  animateValue("centuries", 0, 16, 2000);
};
