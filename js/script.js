// My custom JavaScript goes here

let date = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

document.querySelector('.time').innerHTML = formattedDate;