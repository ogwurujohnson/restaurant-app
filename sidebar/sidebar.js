// sidebar class

class SideBar {
    constructor(menu) {
        this.menu = menu;
        this.sideMenu = document.querySelector('')
        this.menu.addEventListener('click', () => {
            this.toggleMenu();
        })
        this.isOpen = false;
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        console.log(this.isOpen);
    }
}

const sidemenuElement = document.querySelector('.sidemenu-bar');
const sideBar = new SideBar(sidemenuElement);
