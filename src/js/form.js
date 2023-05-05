// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import emailjs from "@emailjs/browser";
import IMask from "imask";

/**
  variables----------------------------------------------------------------------
*/

const modal = document.querySelector("[data-modal]");
const form = document.querySelector("form");
const spiner = document.querySelector("[data-spiner]");
const resolve = document.querySelector("[data-resolve]");
const errorText = document.querySelector("[data-error]");
const closeBtn = document.querySelector("[data-modal-close]");

/**
  Mask for telephone----------------------------------------------------------------------
*/

var element = document.getElementById("phone");
var maskOptions = {
    mask: "+{38}(000)000-00-00",
    lazy: false,
};
var mask = new IMask(element, maskOptions);

/**
  SHOW/HIDDEN MODAL----------------------------------------------------------------------
*/

closeBtn.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.add("is-hidden");
    closeBtn.classList.add("is-hidden");
    resolve.classList.add("is-hidden");
    errorText.classList.add("is-hidden");
}

/**
 First option of EmailSend----------------------------------------------------------------------
*/

// window.onload = function () {
//     document.getElementById("contact-form").addEventListener("submit", function (e) {
//         e.preventDefault();
//         // generate a five digit number for the contact_number variable
//         // this.contact_number.value = (Math.random() * 100000) | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm("service_fje974l", "template_ibkoj2", "#contact-form", "xmlBchw7yqEYG683_").then(
//             function () {
//                 console.log("SUCCESS!");
//                 modal.classList.remove("is-hidden");
//             },
//             function (error) {
//                 console.log("FAILED...", error);
//             }
//         );
//     });
// };

/**
  Second option of EmailSend----------------------------------------------------------------------
*/

form.addEventListener("submit", getAllvalues);

function getAllvalues(e) {
    e.preventDefault();
    const { name, phone, training, date, email } = e.currentTarget.elements;
    const dateValue = new Date(date.value);
    const formattedDate = `${(dateValue.getMonth() + 1).toString().padStart(2, "0")}-${dateValue.getDate().toString().padStart(2, "0")}-${dateValue.getFullYear()}`;

    const formObj = {
        name: name.value,
        phone: phone.value,
        training: training.value,
        date: formattedDate,
        email: email.value,
    };
    form.reset();
    modal.classList.remove("is-hidden");
    spiner.classList.remove("is-hidden");

    emailjs.send("service_fje974l", "template_ibkoj24", formObj, "xmlBchw7yqEYG683_").then(
        function () {
            spiner.classList.add("is-hidden");
            closeBtn.classList.remove("is-hidden");
            resolve.classList.remove("is-hidden");
            console.log("Success");
        },
        function (error) {
            spiner.classList.add("is-hidden");
            closeBtn.classList.remove("is-hidden");
            errorText.classList.remove("is-hidden");
            console.log("Error");
        }
    );
}
