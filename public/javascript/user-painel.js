
// pegando em formato de lista todos os #form-item 
const forms = document.querySelectorAll('#form-item')
// pegando em formato de lista todos os tab 
const radios = document.querySelectorAll('.tab')

//iterando o click para todos
radios.forEach((item, index) => {
    // console.log("radio:",item)
    item.addEventListener('click', () => {
//      
        forms.forEach(item => item.classList.remove('open-form'))
//    
        forms[index].classList.add('open-form')
    })
})
