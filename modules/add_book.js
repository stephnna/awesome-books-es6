const addBook = () => {
  const addNewLink = document.getElementById('add-link');

  const addButtonContainer = document.getElementById('add-btn-container');
  const awesomeBookContainer = document.getElementById('list');
  const contact = document.getElementById('contact');

  addNewLink.addEventListener('click', () => {
    awesomeBookContainer.style.display = 'none';
    addButtonContainer.style.display = 'block';
    contact.style.display = 'none';
  });
};
export default addBook;
