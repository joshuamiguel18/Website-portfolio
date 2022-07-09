
function copyEmail() {
    navigator.clipboard.writeText("joshuamigueltoribio18@gmail.com")
    document.querySelector('h3').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('h3').style.opacity = '0';},500);
}

setInterval(() => {
    if(window.scrollY > 100) {
        document.querySelector('.skills .container').style.opacity = 1;
        document.querySelector('.skill').style.opacity = 1;
        document.querySelector('.skill').style.left = "45%";


    }else {
        document.querySelector('.skill').style.left = "80%";
        document.querySelector('.skills .container').style.opacity = 0;
    }
    console.log(window.scrollY)

},200);

setInterval(() => {
    if(window.scrollY > 800) {
        document.querySelector('.about .container').style.opacity = 1;

    }else {
        document.querySelector('.about .container').style.opacity = 0;
    }
    console.log(window.scrollY)

},200);