function findAccountById(accounts, id) {

  console.log(accounts);
  console.log(id);
}

function sortAccountsByLastName(accounts) {

  console.log(accounts);
}

function numberOfBorrows(account, books) {}

function booksInPossession(account, books, authors) {
    let possessedBooks = [];

    for(let i =0; i < books.length;i++){
      let book = books[i];
      const {id, title, genre, borrows}=book;
      for(let j = 0; j< borrows.length; j++){
        if(borrows[j].id === account.id && borrows[j].returned===false ){
          for(let k=0; k<authors.length;k++){
            let author = authors[k];
            if(author.id ==book.authorId){
              let tempBook ={ id, title,genre,author, borrows};
              possessedBooks.push(tempBook);
            }
          }

        }
      }
    }
    return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
