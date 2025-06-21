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
const booksBox = document.querySelector("#books-box")

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

addBookToLibrary("Ogbori Ode", "Ka kan fo", 187, false)
addBookToLibrary("Think and Grow Rich", "Tom Hill", 302, true)
addBookToLibrary("Mindset", "Katherine", 504, false)


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

function displayBook() {
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
        readDeleteButton.textContent = "❌"
        readDeleteLabel.appendChild(readDeleteInput)
        readDeleteContainer.appendChild(readDeleteLabel)
        readDeleteContainer.appendChild(readDeleteButton)

        container.classList.add("book")

        // PUT EVERYELEMENT IN THE BOOK CONATAINER
        container.appendChild(imgContainer)
        container.appendChild(bookTitle)
        container.appendChild(bookAuthor)
        container.appendChild(readDeleteContainer)

        // PUT THE CONTAINER IN THE ARRAY OF MYBOOKS
        myBooks.push(container)
    })
}

function createdBook(){
    myBooks.forEach(function(abook){
        booksBox.appendChild(abook)
    })
}

displayBook()
createdBook()