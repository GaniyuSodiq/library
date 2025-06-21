// const dialog = document.querySelector("dialog")
// const showButton = document.querySelector("dialog + button")
// const closeButton = document.querySelector("dialog button")

// // SHOW DIALOG
// showButton.addEventListener("click", () => {
//     dialog.showModal()
// })

// // CLOSE DIALOG
// closeButton.addEventListener("click", ()=>{
//     dialog.close()
// })

const showButton = document.getElementById("showDialog")
const favDialog = document.getElementById("favDialog")
const outputBox = document.querySelector("output")
const selectEl = favDialog.querySelector("select")
const confirmBtn = favDialog.querySelector("#confirmBtn")

// 'show the dialog' button opens the dialog modally
showButton.addEventListener("click", () => {
    favDialog.showModal()
})


// 3 WAYS TO CLOSE MODAL DIALOGS

// 'Cancel' closes the dialog without submitting bcs of the [formmethod="dialog"]
// but the dialog will close and the data retainined. trigger a close event

// 1 USING ESC KEY


// 2
favDialog.addEventListener("close", (e) => {
    outputBox.value = favDialog.returnValue === "default"
        ? "No return value."
        : `ReturnValue = ${favDialog.returnValue}` // have to check for 'deault' rather than empty string
})

// 3
confirmBtn.addEventListener("click", (event)=>{
    event.preventDefault() // We dont want to submit this fake form
    favDialog.close(selectEl.value) // Have to send the select box value here
})