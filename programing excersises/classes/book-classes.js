class Book{
    constructor(book, author, genre, read,){
        this.book = book;
        this.author = author;
        this.read = read;
        this.genre = genre;
    }
    library(){
        console.log(`${this.book} by ${this.author} and has it been read: ${this.read}` )
    }
    
}
const THRILLER = 'Thriller'
const FANTASY = 'Fantasy'
const BIOGRAPHY = 'Biography'

let book1 = new Book('American Phsyco', 'Bret Easton Ellis', , true)

book1.library()

