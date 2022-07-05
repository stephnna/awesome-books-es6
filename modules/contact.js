export default function displayContact() {
  const contactLink = document.getElementById('contact-link');

  const addButtonContainer = document.getElementById('add-btn-container');
  const awesomeBookContainer = document.getElementById('list');
  const contact = document.getElementById('contact');

  contactLink.addEventListener('click', () => {
    awesomeBookContainer.style.display = 'none';
    addButtonContainer.style.display = 'none';
    contact.style.display = 'block';
  });
}
