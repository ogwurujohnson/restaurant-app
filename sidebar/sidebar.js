// sidebar class

class SideBar {
    constructor(menu) {
        this.menu = menu;
        this.sideMenu = document.querySelector('.side-bar');
        this.sideMenuIcon = document.querySelector('.sidemenu-bar');
        this.logo = document.querySelector('.logo')

        this.menu.addEventListener('click', () => {
            this.toggleMenu();
        })
        this.isOpen = false;
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        if(this.isOpen) {
            this.sideMenu.style.width = "100%";
            this.sideMenuIcon.style.color = "white";
            this.sideMenuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            this.sideMenuIcon.style.color = "black";
            this.sideMenuIcon.classList.replace('fa-times', 'fa-bars');
            this.sideMenu.style.width = "0%";
        }
        
    }
}

const sidemenuElement = document.querySelector('.sidemenu-bar');
const sideBar = new SideBar(sidemenuElement);
