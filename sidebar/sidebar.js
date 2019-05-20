// sidebar class

class SideBar {
  constructor(menu) {
    this.menu = menu;
    this.logo = document.querySelector(".logo");

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
        }
      });
    } else {
      TweenMax.to(this.sideMenu, 1, {
        width: "0%",
        onComplete: () => {
          this.sideMenuIcon.style.color = "black";
          this.sideMenuIcon.classList.replace("fa-times", "fa-bars");
          this.logo.style.color = "black";
        }
      });
    }
  }
}

const sidemenuElement = document.querySelector(".sidemenu-bar");
const sideBar = new SideBar(sidemenuElement);
