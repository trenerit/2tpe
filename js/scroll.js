const nav = document.querySelector('header nav');

const windowScroll = () => {

    const positionY = window.scrollY;

    if(positionY > 200) {
        nav.classList.add('nav-small');
    } else {
        nav.classList.remove('nav-small');
    }
}

window.addEventListener('scroll', windowScroll);
