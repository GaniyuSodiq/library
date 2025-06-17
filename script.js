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
// console.log(myLibrary)
// console.log(myLibrary[1].info())
// let uuid = self.crypto.randomUUID();
// console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"

// fn to display each book on the page
function displayBook() {
    myLibrary.forEach(function(book){
        console.log(book)
    })
}

displayBook()