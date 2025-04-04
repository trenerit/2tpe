const form = document.querySelector('#contact form');

const formSubmit = (e) => {
    
    e.preventDefault();
    const inp1 = document.querySelector('input:nth-of-type(1)').value;
    const inp2 = document.querySelector('input:nth-of-type(2)').value;
    const inp3 = document.querySelector('textarea').value;

    console.log(inp1, inp2, inp3);
}

form.addEventListener('submit', formSubmit);