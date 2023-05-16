import emailjs from '@emailjs/browser';
import validator from 'validator';
import formatDate from './formatDate';

/**
  variables----------------------------------------------------------------------
*/

const modal = document.querySelector('[data-modal]');
const form = document.querySelector('form');
const spiner = document.querySelector('[data-spiner]');
const resolve = document.querySelector('[data-resolve]');
const errorText = document.querySelector('[data-error]');
const closeBtn = document.querySelector('[data-modal-close]');
const emailInput = document.getElementById('email');
const validMessage = document.querySelector('.form-error-message');
const trainingBtn = document.querySelector('[data-training]');

/**
  SHOW/HIDDEN MODAL----------------------------------------------------------------------
*/

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('is-hidden');
  closeBtn.classList.add('is-hidden');
  resolve.classList.add('is-hidden');
  errorText.classList.add('is-hidden');
}

form.addEventListener('submit', getAllvalues);

function getAllvalues(e) {
  e.preventDefault();
  const { name, phone, training, date, email } = e.currentTarget.elements;
  const emailLable = emailInput.parentNode;

  //validate email
  const isValidEmail = validator.isEmail(email.value);
  if (!isValidEmail) {
    emailLable.style.borderBottomColor = '#ed1332';
    validMessage.innerHTML = 'невалідний Email';
  } else {
    //Format date
    validMessage.innerHTML = '';
    const formObj = formatDate(name, phone, training, date, email);

    form.reset();
    emailLable.style.borderBottomColor = '#e2e001';
    modal.classList.remove('is-hidden');
    spiner.classList.remove('is-hidden');

    // send email
    emailjs
      .send('service_i0hyi9f', 'template_lxiirpx', formObj, 'T3jPomcN80veILDDH')
      .then(
        function () {
          spiner.classList.add('is-hidden');
          closeBtn.classList.remove('is-hidden');
          resolve.classList.remove('is-hidden');
          console.log('Success');
        },
        function (error) {
          spiner.classList.add('is-hidden');
          closeBtn.classList.remove('is-hidden');
          errorText.classList.remove('is-hidden');
          console.log('Error');
        }
      );
  }
}

/**
  Scroll----------------------------------------------------------------------
*/

trainingBtn.addEventListener('click', handleScroll);

function handleScroll(e) {
  e.preventDefault();
  const formSection = document.querySelector('.send-form');
  formSection.scrollIntoView({ behavior: 'smooth' });
}
