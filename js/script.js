const nav = document.querySelector('header nav');

const windowScroll = () => {

    const positionY = this.scrollY;

    if(positionY > 200) {
        nav.classList.add('nav-small');
    } else {
        nav.classList.remove('nav-small');
    }

}

window.addEventListener('scroll', windowScroll);


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
