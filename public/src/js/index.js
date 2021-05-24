
const navAnimation = () =>{
  const navigation = document.getElementById("navigation");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navigation.classList.add("anim-nav");
    } else {
      navigation.classList.remove("anim-nav");
    }
  });
}

const app =()=>{
  navAnimation();
}
app();
