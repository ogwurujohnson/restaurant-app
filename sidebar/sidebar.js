// sidebar class

class SideBar {
  constructor(menu) {
    this.menu = menu;
    this.logo = document.querySelector(".logo");
    this.mainHeader = document.querySelector(".main-header");

    window.addEventListener('load', () => {
      TweenMax.from(this.logo, 1, { ease: Circ.easeIn, x: -200  });
    });

    this.sideMenu = document.querySelector(".side-bar");
    this.sideMenuIcon = document.querySelector(".sidemenu-bar");
    

    this.menu.addEventListener("click", () => {
      this.toggleMenu();
    });

   
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      TweenMax.to(this.sideMenu, 1, {
        width: "100%",
        onComplete: () => {
          this.sideMenuIcon.style.color = "white";
          this.sideMenuIcon.classList.replace("fa-bars", "fa-times");
          this.logo.style.color = "white";
          this.mainHeader.style.backgroundColor = "black";
        }, opacity: 100
      });
    } else {
      TweenMax.to(this.sideMenu, 1, {
        width: "0%",
        onComplete: () => {
          this.sideMenuIcon.style.color = "white";
          this.sideMenuIcon.classList.replace("fa-times", "fa-bars");
          this.logo.style.color = "white";
          this.mainHeader.style.backgroundColor = "#6200EE";
        }, opacity: 0
      });
    }
  }
}


class StyleNav {
  constructor(element) {
    this.nav = element;

    this.nav
  }

  encloseNav(nav) {

  }
}




const sidemenuElement = document.querySelector(".sidemenu-bar");
const sideBar = new SideBar(sidemenuElement);


const navElements = document.querySelectorAll(".link");
navElements.forEach(nav => new StyleNav(nav));
