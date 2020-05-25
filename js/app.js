const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const emailInput = document.querySelector('.email')
const password = document.querySelector('.password')
const erroIcon = document.querySelectorAll('.error-icon')
const smallMsg = document.querySelectorAll('small')
const btn = document.querySelector('button')
const form = document.querySelector('form')

firstName.addEventListener('click', () => {
    // console.log('Input Clicked')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputes()
})


function validateInputes() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailInputValue = emailInput.value.trim()
    const passwordValue = password.value.trim()
    

    if (firstNameValue === "") {
        console.log('value is empty')
        setError(firstName, 'First name cannot be empty') 
    } 

    if (lastNameValue === "") {
        setError(lastName, 'Last name cannot be empty')
    } 

    if (emailInputValue === "") {
        setError(emailInput, 'Email name cannot be empty')
    } else if (!validEmail(emailInputValue)){
        setError(emailInput, 'Looks like this is not an Email')
    }

    if (passwordValue === "") {
        setError(password, 'Password cannot be empty')
    } 
    
}

function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message

    formControl.className = 'form-control error'
}

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}