// const btnSearch = document.querySelector('#btn-search');

// btnSearch.addEventListener('click', () => {
//     alert('search');
// });

const zm1 = [];

zm1.push('Piotr', 'Adam', 'Anna', 'Aleksander');

console.log(zm1);
console.log(zm1[0]);

zm1.forEach(name => {
    console.log(name);
});

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

const btns = document.querySelectorAll('.button-header span');

btns.forEach((elem, i) => {
    i++;
    elem.addEventListener('click', () => {
        alert(`przycisk nr ${i}`);
    });
});
