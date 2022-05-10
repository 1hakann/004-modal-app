// variables
const modal = document.querySelector('.modal');
const button = document.querySelector('.modal-btn');
const close = document.querySelector('.close');

// functions
button.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// open modal
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// close modal
function closeModal(e) {
    e.preventDefault();
    modal.style.display = "none";
}