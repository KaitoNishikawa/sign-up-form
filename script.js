const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const phoneNumber = document.getElementById('phoneNumber')
const numberError = document.getElementById('numberError')
const matchError = document.getElementById('matchError')
const form = document.getElementById('input-container')

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value !== password.value){
        matchError.textContent = '*Does does match password'
    }

    else{
        matchError.textContent = ''
    }
})

phoneNumber.addEventListener('input', () => {
    if(!/^\d+$/.test(phoneNumber.value) || phoneNumber.value.length != 10){
        numberError.textContent = '*Must be 10 digit number'
    }

    else{
        numberError.textContent = ''
    }
})

form.addEventListener('submit', (e) => {
    if(confirmPassword.value !== password.value){
        matchError.textContent = '*Does does match password'
        e.preventDefault()
    }
})

