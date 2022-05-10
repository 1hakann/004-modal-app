// variables
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
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
    modalContent.classList.add('slide-up');

    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove('slide-up');
    }, 500);

}