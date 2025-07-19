import "../styles/styles.css"

import MobileMenu from "./modules/MobileMenu"
import ReavealOnScroll from "./modules/RevealOnScroll"

new MobileMenu()
new ReavealOnScroll(document.querySelectorAll(".service-item"), 75)
new ReavealOnScroll(document.querySelectorAll(".pricing-item"), 75)

if (module.hot) {
  module.hot.accept()
}
