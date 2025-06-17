function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "I have read it" : "not read yet"} `
    }
}

const theBbok = new Book("Ogbori Ode", "Ka kan fo", 187, false)

console.log(theBbok.info())