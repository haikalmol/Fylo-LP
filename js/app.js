import { default as formValidation } from "./formValidation.js";
import { default as lazyLoadAnimations } from "./lazyLoadAnimations.js";

new formValidation("data-form-1", "data-input-1", "data-cta-1");
new formValidation("data-form-2", "data-input-2", "data-cta-2");
new lazyLoadAnimations();
