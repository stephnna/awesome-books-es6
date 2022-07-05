import listBooks from './modules/navigation.js';
import addBook from './modules/add_book.js';
import displayContact from './modules/contact.js';
import AwesomeBooks from './modules/awesome_books.js';
import { DateTime } from './modules/luxon.js';

const currentDate = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date-time').innerHTML = date;
  setTimeout(currentDate, 1000);
};
window.onload = currentDate();

listBooks();
addBook();
displayContact();
const newBooks = new AwesomeBooks();
newBooks.getBooks();
newBooks.AddOnClick();
newBooks.deleteBook();
