
        const searchListenner = document.querySelector(".search-button")
        const searchModal = document.querySelector("#search-modal")
        const closeSearchModal = document.querySelector("#close-searching")


        searchListenner.addEventListener("click", ()=>{
          searchModal.classList.add("searching-content-show");
        })

        closeSearchModal.addEventListener("click", ()=>{
          searchModal.classList.remove("searching-content-show");
        })
    