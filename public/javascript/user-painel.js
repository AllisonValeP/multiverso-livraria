
const allForms = document.querySelectorAll('.userInformation form')
const actionsForm = document.querySelectorAll('.container-actions li button')
actionsForm.forEach((item, index) => {
    item.addEventListener('click', () => {
        allForms.forEach(item => item.classList.remove('form-show'))
        allForms[index].classList.add('form-show')
    })
})

const forms = document.querySelectorAll('#form-item')
const radios = document.querySelectorAll('.tab')
radios.forEach((item, index) => {
    item.addEventListener('click', () => {
        forms.forEach(item => item.classList.remove('open-form'))
        forms[index].classList.add('open-form')
    })
})
