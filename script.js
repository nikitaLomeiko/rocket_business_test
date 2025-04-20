const usernameGroup = document.getElementById('username-group')
const phoneGroup = document.getElementById('phone-group')
const usernameField = document.getElementById("username");
const phoneField = document.getElementById("phone");

const buttonSubmit = document.getElementById("form-submit");

const usernameError = document.getElementById('username-error')
const phoneError = document.getElementById('phone-error')

const checkbox = document.getElementById('checkbox')
const checkboxLabel = document.getElementById('checkbox-label')

const mask = IMask(phoneField, { mask: "+{7} (000) 000-00-00" });

const showError = (groupElem, errorElem, message) => {
    groupElem.classList.add('input-group-error')
    errorElem.style.display = 'block'
    errorElem.textContent = message
}

buttonSubmit.addEventListener("click", () => {
    usernameGroup.classList.remove('input-group-error')
    phoneGroup.classList.remove('input-group-error')
    usernameError.style.display = 'none'
    phoneError.style.display = 'none'
    checkboxLabel.style.color = '#444444'

    let isError = false

    const username = usernameField.value
    const phone = phoneField.value

    if(username.trim().length === 0){
        showError(usernameGroup, usernameError, 'Поле не заполнено')
        isError = true
    }

    if(phone.length !== 18){
        showError(phoneGroup, phoneError, 'Поле не заполнено')
        isError = true
    }

    if(!checkbox.checked){
        checkboxLabel.style.color = '#E44B4B'
    }
});
