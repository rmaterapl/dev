class Modal {
  constructor() {
    this.injectHtml()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // Listen for close click
    this.closeIcon.addEventListener("click", () => this.closeModal())
    // Pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal()
    }
  }

  openModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHtml() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin">
            <img src="assets/images/icons/contact-icon.svg" class="section-title__icon icon" /> Get in <strong>Touch</strong>
          </h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">You can contact me via email or WhatsApp, and I’ll get back to you as soon as possible. Taking that first step is important to start shaping your idea or project into something real. Once I receive your message, I’ll reach out to schedule a free remote meeting where we can discuss your goals in detail. This will allow me to understand your needs and provide you with a personalized quote.</p>
          </div>

          <div class="social-icons">
            <a href="mailto:rmaterapay@gmail.com" class="social-icons__icon"><img src="assets/images/icons/email-icon.svg" alt="Email" /></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/whatsapp-icon.svg" alt="WhatsApp" /></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
    `
    )
  }
}

export default Modal
