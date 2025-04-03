const hamburger = document.querySelector('.menu span');

hamburger.addEventListener('click', () => {
    const ul = document.querySelector('.menu ul');
    ul.classList.remove('hide');
    ul.classList.add('menu-small');
});