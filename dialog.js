const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")

// SHOW DIALOG
showButton.addEventListener("click", () => {
    dialog.showModal()
})

// CLOSE DIALOG
closeButton.addEventListener("click", ()=>{
    dialog.close()
})