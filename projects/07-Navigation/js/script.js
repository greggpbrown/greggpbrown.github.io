const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

indicator = document.createElement('div');
indicator.classList.add('indicator');
document.querySelector('ul').appendChild(indicator);
list.forEach((item) => item.addEventListener('click', activeLink))