export default class LazyLoadAnimation {
  constructor() {
    if (!this.vars()) return false;
    this.setupEvents();
  }

  vars() {
    this.selectors = {
      elementToAnim: "data-anim",
      activeClass: "active",
    };

    this.elementToAnim = document.querySelectorAll(`[${this.selectors.elementToAnim}]`);

    if (!this.elementToAnim) return false;
    return true;
  }

  setupEvents() {
    this.elementToAnim.forEach((element) => {
      this.animationObserver(element);
    });
  }

  animationObserver(element) {
    this.options = {
      rootMargin: "0px",
      threshold: 0.4,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add(`${this.selectors.activeClass}`) : false;
      });
    }, this.options);

    this.observer.observe(element);
  }
}
