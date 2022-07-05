const listBooks = () => {
  const listLink = document.getElementById('list-link');

  const addButtonContainer = document.getElementById('add-btn-container');
  const awesomeBookContainer = document.getElementById('list');
  const contact = document.getElementById('contact');

  listLink.addEventListener('click', () => {
    awesomeBookContainer.style.display = 'block';
    addButtonContainer.style.display = 'none';
    contact.style.display = 'none';
  });
};
export default listBooks;
