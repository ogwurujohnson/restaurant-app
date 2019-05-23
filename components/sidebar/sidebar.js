// sidebar class

/**
 *
 *
 * @class SideBar
 */
class SideBar {

  /**
   *Creates an instance of SideBar.
   * @param {*} menu
   * @memberof SideBar
   */
  constructor(menu) {
    this.menu = menu;
    this.logo = document.querySelector(".logo");
    this.mainHeader = document.querySelector(".main-header");
    this.navLinks = document.querySelectorAll(".link");

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


  /**
   *
   *
   * @memberof SideBar
   */
  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      let timeline = new TimelineMax();
      timeline.timeScale(4);
      timeline.to(this.sideMenu, .5, {width: "100%", opacity: 100});
      this.sideMenuIcon.classList.replace("fa-bars", "fa-times");
      this.mainHeader.style.backgroundColor = "black";
      
    } else {
      let timeline = new TimelineMax();
      timeline.timeScale(6);
      timeline.to(this.sideMenu, .5, {width: "0%", opacity: 0});
      this.sideMenuIcon.classList.replace("fa-times", "fa-bars");
      this.mainHeader.style.backgroundColor = "#6200EE";
    }
  }
}


/**
 *
 *
 * @class StyleNav
 */
class StyleNav {

  /**
   *Creates an instance of StyleNav.
   * @param {*} element
   * @memberof StyleNav
   */
  constructor(element) {
    this.nav = element;

    this.nav.addEventListener('click', (e) => {
      this.add(this.nav);
      this.nav.style.backgroundColor = "white";
      this.nav.style.color = "#6200EE"
    });
    
  }


  /**
   *
   *
   * @param {*} nav
   * @memberof StyleNav
   */
  add(nav) {
    this.allNav = document.querySelectorAll('.link');
    this.allNav.forEach(aNav => {
      this.remove(aNav);
    });
    nav.classList.add('active');
  }


  /**
   *
   *
   * @param {*} nav
   * @memberof StyleNav
   */
  remove(nav) {
    nav.classList.remove('active');
    nav.style.background = "transparent";
    nav.style.color = "white";
  }


  /**
   *
   *
   * @param {*} nav
   * @memberof StyleNav
   */
  selectHover(nav) {
    nav.classList.add('active');
  }
}




const sidemenuElement = document.querySelector(".sidemenu-bar");
const sideBar = new SideBar(sidemenuElement);


const navElements = document.querySelectorAll(".link");
navElements.forEach(nav => new StyleNav(nav));
