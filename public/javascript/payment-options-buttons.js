const paymentOptions = document.querySelectorAll(".container-payment-options div")
const creditCardInfo = document.querySelector(".credit-card-info")
// const hideCredeitCard = document.querySelector(".hide-credit-card-info")
const creditCardButton = document.querySelector("#credit-card-button")
const pixButton = document.querySelector("#pix-button")



creditCardButton.addEventListener("click", ()=>{
    paymentOptions.forEach(option => option.classList.add("hide-payment-info"))
    creditCardInfo.classList.remove("hide-payment-info")
})

pixButton.addEventListener("click", ()=>{
    paymentOptions.forEach(option => option.classList.add("hide-payment-info"))
    paymentOptions[1].classList.remove("hide-payment-info")
    console.log("clicou pixButton",paymentOptions )
    console.log(paymentOptions[1])
})