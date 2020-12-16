function findAuthorById(authors, id) {}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks =  books.filter(book=> book.borrows[0].returned==false);
  let returnedBooks =  books.filter(book=>{
   
    return book.borrows[0].returned==true;
})
 return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers =[];
  accounts.forEach(account=>{
    book.borrows.forEach(transaction=>{
        if(transaction.id === account.id){
          let accountObj = {...account};
          accountObj.returned= transaction.returned;
          borrowers.push(accountObj);
        }
    })
  })
  return borrowers.slice(0,10);


}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
