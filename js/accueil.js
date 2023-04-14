// animations

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
  


// 2 - scroll playliste

document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('.aside li');
    
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      for (let i = 0; i < list.length; i++) {
        const positionTop = list[i].getBoundingClientRect().top;
        if (positionTop < windowHeight - 50) {
          list[i].classList.add('visible');
          list[i].classList.remove('hidden');
        } else {
          list[i].classList.remove('visible');
          list[i].classList.add('hidden');
        }
      }
    });
  });
  