let books = [
    {
        title: "American Physco",
        author: "Brett Easton Ellis",
        read: true
    },
    {
        title: "Harrasment Architecture",
        author: "Mike Ma",
        read: false
    },
    {
        title: "Career of evil",
        author: "Robert Galbraith",
        read:false
    }

]

for(let i = 0; i < books.length; i++){
    let book = book[i];
    let bookInfo = book.title + 'by' + book.author;
    if(book.read){
        console.log("You have read " + book.title + " by "+ book.author)
    }else{
        console.log("You have not read " + book.title + " by "+ book.author)
    }
}