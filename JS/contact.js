const contactForm = document.querySelector("#contact-form");
const submit = document.querySelector("#submit-button");

submit.addEventListener("click", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const nameInput = document.querySelector("#name-input");
    const nameErr = document.querySelector("#name-error");
    const nameValue = nameInput.value;

    if (checkInputLength(nameValue) === true) {
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "block";
    }

    const emailInput = document.querySelector("#email-input");
    const emailErr = document.querySelector("#email-error");
    const invalidEmailErr = document.querySelector("#inv-email-error");

    const emailValue = emailInput.value;

    if (checkInputLength(emailValue) === true) {
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "block";
    }

    if (validateEmail(emailValue) === true) {
        invalidEmailErr.style.display = "none";
    } else {
        invalidEmailErr.style.display = "block";
    }
}

function checkInputLength(value) {

    const trimmedValue = value.trim();

    
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailInput) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(emailInput);
}


        


    
    
   