const navigation = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navigation.classList.add("anim-nav");
  } else {
    navigation.classList.remove("anim-nav");
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
}

navSlide();