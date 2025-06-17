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

const myLibrary = []

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' keyword while to create the object")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "I have read it" : "not read yet"} `
    }
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

addBookToLibrary("Ogbori Ode", "Ka kan fo", 187, false)
addBookToLibrary("Think and Grow Rich", "Tom Hill", 302, true)
addBookToLibrary("Mindset", "Katherine", 504, false)
console.log(myLibrary)
console.log(myLibrary[1].info())