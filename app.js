const submit = document.querySelector('.submit');
const emailInput = document.querySelector('#email');

submit.addEventListener('click', () => {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        console.log('Bullshit email, bitch');
        emailInput.style.borderColor = "hsl(0, 93%, 68%)"
        document.querySelector('.error').style.display = "flex"
        document.querySelector('.error-msg').innerHTML = "Please provide a valid email"
    }
    else {
        emailInput.style.borderColor = "hsl(0, 6%, 85%)"
        document.querySelector('.error').style.display = "none"
    }
})

emailInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submit.click();
    }
})

const validateEmail = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}