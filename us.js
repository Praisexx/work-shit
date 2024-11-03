document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hammenu =document.querySelector('.ham-menu');
const navlinks =document.querySelector('.nav-links');
hammenu.addEventListener('click',() => {
    hammenu.classList.toggle("active");
    navlinks.classList.toggle("active");
});
