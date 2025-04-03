const btns = document.querySelectorAll('.button-header');

const modal = document.querySelector('#modal');

btns.forEach((elem, i) => {
    i++;
    
    elem.addEventListener('click', () => {
        
        const modalTitle = document.querySelector('#title');
        const modalDescription = document.querySelector('#description');

        const title = document.querySelector(`#descriptionTitle${i}`).innerText;
        const description = document.querySelector(`#description${i}`).innerText;

        modalTitle.innerText = title;
        modalDescription.innerText = description;
        
        modal.classList.add('modal-window');
        
        // alert(title);
    });
});