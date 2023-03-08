const modalBtn = document.querySelector('.modal__open');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

function openModal() {
	modal.classList.add('active');
}

function closeModal() {
	modal.classList.remove('active');
}

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


