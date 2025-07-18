class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu())
  }

  toggleMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }
}

export default MobileMenu
