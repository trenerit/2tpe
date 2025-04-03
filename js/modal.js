const modalBg = document.querySelector('#modal');
const modalWindow = document.querySelector('#modal-window');
const modalClose = document.querySelector('#modal-window .material-symbols-outlined');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-window');
});

modalWindow.addEventListener('click', (e) => {
    // console.log(e);
    e.stopPropagation();
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('modal-window');
});
