const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});
function redirectToHome(event) {
  event.preventDefault(); // Prevent the form from submitting in the default way
  window.location.href = 'index.html'; // Replace 'home.html' with the URL of your home page
  return false;}