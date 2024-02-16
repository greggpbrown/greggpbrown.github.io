for (let i = 0; i < 100; i++) {
    let stars = document.createElement('div');
    stars.classList.add('star');
    let size = Math.random() * 20;
    stars.style.fontSize = 10 + size+'px';
    stars.style.left = Math.random() *+ innerWidth + 'px';
    stars.style.top = Math.random() *+ innerHeight + 'px';
    stars.style.filter = `hue-rotate(${i*5}deg)`;
    stars.style.transform = `rotate(${i*5}deg)`;
    document.body.appendChild(stars);
}

function animateStars() {
    let AllStars = document.querySelectorAll('.star');
    let num = Math.floor(Math.random()*AllStars.length);
    AllStars[num].classList.toggle('animate');
}
setInterval(animateStars,45);