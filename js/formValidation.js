export default class FormValidation {
  constructor(form, input, cta) {
    this.formSelector = form;
    this.inputSelector = input;
    this.ctaSelector = cta;

    if (!this.vars()) return false;
    this.setupEvents();
  }

  vars() {
    this.selectors = {
      form: this.formSelector,
      input: this.inputSelector,
      submit: this.ctaSelector,
      activeClass: "active",
    };

    this.form = document.querySelector(`[${this.selectors.form}]`);
    this.input = document.querySelector(`[${this.selectors.input}]`);
    this.submit = document.querySelector(`[${this.selectors.submit}]`);

    if (!this.form || !this.input || !this.submit) return false;

    this.inputValue;
    this.regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return true;
  }

  setupEvents() {
    this.submit.addEventListener("click", () => this.formValidation(event));
  }

  formValidation(event) {
    event.preventDefault();
    this.inputValue = this.input.value;
    !this.emailValidation(this.inputValue) ? this.form.classList.add(this.selectors.activeClass) : this.form.submit();
  }

  emailValidation(email) {
    return this.regex.test(email);
  }
}
