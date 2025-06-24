// CLASS EXERCISE
// function Book(title, author, pages, read){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function(){
//         return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "I have read it" : "not read yet"} `
//     }
// }

// const theBbok = new Book("Ogbori Ode", "Ka kan fo", 187, false)

// console.log(theBbok.info()) // Ogbori Ode by Ka kan fo, 187 pages, not read yet 


// ASSIGNMENT

// array to store each book object
const myLibrary = []
const myBooks = []
const continueReadingBox = document.querySelector("#continue-reading")
const booksBox = document.createElement("div")
booksBox.id = "books-box"
continueReadingBox.appendChild(booksBox)
const addBookBtn = document.querySelector("#add-book-btn")
const newBookDialog = document.querySelector("#new-book-dialog")
const newBookSubmit = document.querySelector("#new-book-submit")

const newBookTitleInput = document.querySelector("#new-book-title")
const newBookAuthorInput = document.querySelector("#new-book-author")
const newBookPagesInput = document.querySelector("#new-book-pages")
const newBookReadInput = document.querySelector("#new-book-read")


addBookBtn.addEventListener("click", () => {
    newBookDialog.showModal()
})

newBookSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    booksBox.textContent = ""
    addBookToLibrary(newBookTitleInput.value, newBookAuthorInput.value, newBookPagesInput.value, newBookReadInput.checked)
    makeTheDivBook() // makeTheDivBook from the library
    newBookTitleInput.value = ""
    newBookAuthorInput.value = ""
    newBookPagesInput.value = ""
    newBookReadInput.checked = false
    newBookDialog.close()
})

// A solution i am thinking about with the duplicate of books
// create the books.box div from js
// remove and re-add it when a new is about to be pushed to the page



// constructor for each book template
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword while to create the object")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.uuid = self.crypto.randomUUID()
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "I have read it" : "not read yet"} and its UUID is ${this.uuid}`
    }
}

// fn to create a book obj and add it to the array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

// addBookToLibrary("Ogbori Ode", "Ka kan fo", 187, false)
// addBookToLibrary("Think and Grow Rich", "Tom Hill", 302, true)
// addBookToLibrary("Mindset", "Katherine", 504, false)


// ASS. QUESTION 3 - Write a function that loops through the array and displays each book on the page.

// store the book data in an array first
// when developing applications, we want the flexibility to recreate elements... 
// ...(like our library and its books) in various ways using the same underlying data.
// you should think of these responsibilities separately

// CREATE ALL THE HTML ELEMENTS
// PUT THEIR CLASSES AND IDS
// PUT IN THE VALUES FROM USER
// PUSH THE CONTAINER ELEMENT TO SCREEN

// function createdBook(){
//     // CREATE ALL THE HTML ELEMENTS
//     const container = document.createElement("div")
//     const imgContainer = document.createElement("div")
//     const imgItself = document.createElement("img")
//     const bookTitle = document.createElement("h5")
//     const bookAuthor = document.createElement("span")
//     const readDeleteContainer = document.createElement("div")
//     const readDeleteLabel = document.createElement("label")
//     const readDeleteInput = document.createElement("input")
//     const readDeleteButton = document.createElement("button")

//     // PUT THEIR CLASSES AND IDS
//     imgContainer.classList.add("cover")
//     imgItself.src = "/images/eegu-alare.jpg"
//     imgItself.alt = "Eegun-Alare"
//     imgContainer.appendChild(imgItself)

//     bookTitle.innerText = 
// }

function makeTheDivBook() {
    myLibrary.forEach(function (book) {
        // console.log(book)
        // CREATE ALL THE HTML ELEMENTS
        const container = document.createElement("div")
        const imgContainer = document.createElement("div")
        const imgItself = document.createElement("img")
        const bookTitle = document.createElement("h5")
        const bookAuthor = document.createElement("span")
        const readDeleteContainer = document.createElement("div")
        const readDeleteLabel = document.createElement("label")
        const readDeleteInput = document.createElement("input")
        const readDeleteButton = document.createElement("button")

        // PUT THEIR CLASSES AND IDS
        imgContainer.classList.add("cover")
        imgItself.src = "/images/eegu-alare.jpg"
        imgItself.alt = "Eegun-Alare"
        imgContainer.appendChild(imgItself)

        bookTitle.innerText = book.title

        bookAuthor.classList.add("book-author")
        bookAuthor.innerText = book.author

        readDeleteContainer.setAttribute("id", "read-delete")
        readDeleteLabel.textContent = "Read? "
        readDeleteLabel.for = "read"
        readDeleteInput.type = "checkbox"
        readDeleteInput.id = "read"
        readDeleteInput.checked = book.read
        readDeleteButton.textContent = "❌"
        readDeleteLabel.appendChild(readDeleteInput)
        readDeleteContainer.appendChild(readDeleteLabel)
        readDeleteContainer.appendChild(readDeleteButton)

        container.classList.add("book")

        // PUT EVERYELEMENT IN THE BOOK CONATAINER
        readDeleteButton.dataset.uuid = book.uuid // this gives the conatiner an attr of data-uuid = uuid number...
        // ... i use this number to track each conatiner
        // ... the track is use in this proj when deleting 
        readDeleteButton.addEventListener("click", (e)=>{
            // at first i didnt knw how to go abt this, so i read the ass which says i shld use data- in html
            // it adds another layer of complexity which i had to learn
            // data- is good to have individual uuid on the DOM and bring it to js when needed
            // i thought i am now ready to remove the obj from myLibrary app and re call makeTheDivBook
            // but you cant call the function that is creating you, abi?
            // 
            // i had to figure out another way
            // remove the clickedBtn div from the DOM
            // then use splice to modify the myLibrary array
            // arr.splice uses index in its inputs
            // 
            // At first i looked for arr mthod to remove element of the array with modu=yfication
            // i strugled to find arr that removes an ement snd modifies the array too
            // then i got some answer in stack 
            // i looked how to use .splice in my screeenshot note
            // 


            container.remove() // remove from the DOM
            const indexToRemove = function(){
                for (let i = 0; i < myLibrary.length; i++){
                    if (myLibrary[i].uuid === e.target.dataset.uuid){
                        return i
                    }
                }
            }
            myLibrary.splice(indexToRemove, 1) // remove from the library array

            // WHAT I FIRST TRIED
            // myLibrary.forEach(function(abook){
            //     if(abook.uuid === e.target.dataset.uuid){
            //         console.log("We found it!")
            //         myLibrary.splice(0, 1)
            //        console.log(myLibrary) 
                   
            //     }
            // })
            // // console.log(myLibrary)
            // //  myLibrary.splice(0, 1)
            // // makeTheDivBook()
            // console.log(makeTheDivBook()) // undefined makeDiv is its parent fn
        })

        container.appendChild(imgContainer)
        container.appendChild(bookTitle)
        container.appendChild(bookAuthor)
        container.appendChild(readDeleteContainer)
        // container.appendChild(uuidValue)

        // PUSH THE CONTAINER DIV INTO THE ARRAY OF MYBOOKS
        booksBox.appendChild(container)
    })
}



// function pushBookToPage() {
//     myBooks.forEach(function (abook) {
//         booksBox.appendChild(abook)
//     })
// }
