//1 - anim nav


document.addEventListener("DOMContentLoaded", function() {
    const navList = document.getElementById("nav-list");
    const navLinks = navList.getElementsByTagName("a");
  
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("mouseover", function() {
        this.getElementsByTagName("li")[0].classList.add("nav-border");
      });
  
      navLinks[i].addEventListener("mouseout", function() {
        this.getElementsByTagName("li")[0].classList.remove("nav-border");
      });
    }
  });
  