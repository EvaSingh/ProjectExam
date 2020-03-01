const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const submitButton = document.querySelector("#submit-button");



emailInput.addEventListener("input", function (event) {
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Hmm....");
    } else {
        emailInput.setCustomValidity("");
    }
});
  
    
    
   