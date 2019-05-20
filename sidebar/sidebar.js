// sidebar class

class SideBar {
    constructor(menu) {
        this.menu = menu;
        this.sideMenu = document.querySelector('.side-bar');
        
        this.menu.addEventListener('click', () => {
            this.toggleMenu();
        })
        this.isOpen = false;
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        if(this.isOpen) {
            this.sideMenu.style.width = "100%";
        } else {
            this.sideMenu.style.width = "0%";
        }
        
    }
}

const sidemenuElement = document.querySelector('.sidemenu-bar');
const sideBar = new SideBar(sidemenuElement);
