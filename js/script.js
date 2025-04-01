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


const btns = document.querySelectorAll('.button-header span');

const body = document.querySelector('body');

btns.forEach((elem, i) => {
    i++;
    
    elem.addEventListener('click', () => {
    
        const title = document.querySelector(`#descriptionTitle${i}`).innerText;
        const description = document.querySelector(`#description${i}`).innerText;

        body.classList.add('modal-window');

        alert(title);
    });
});
