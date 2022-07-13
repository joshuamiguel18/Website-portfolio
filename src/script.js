/*function copyEmail() {
    navigator.clipboard.writeText("joshuamigueltoribio18@gmail.com")
    document.querySelector('h3').style.opacity = '1';
    setTimeout(() => {
        
}*/

var imgs = document.getElementsByTagName("img");
setInterval(() => {
    if(window.scrollY > 200) {

        document.querySelector('.skill').style.opacity = 1;
        document.querySelector('.skill').style.left = "20%";

    }else {
        document.querySelector('.skill').style.left = "80%";
        document.querySelector('.skill').style.opacity = 0;
    }
    console.log(window.scrollY)

},200);
var services = document.getElementsByClassName('service-hub');
setInterval(() => {
    if(window.scrollY > 400) {
        document.getElementById('techs').style.left = "15%";
        document.getElementById('techs').style.opacity = 1;
        for(service of services) { 
            service.style.transform = "scale(1)"
            service.style.opacity = 1;
        }
        for(img of imgs) {
            img.style.transform = "rotate(360deg)"
        }

    }else {
        document.getElementById('techs').style.left = "-60%";
        for(service of services) { 
            service.style.transform = "scale(.5)"
            service.style.opacity = 0;
        }
        for(img of imgs) {
            
            img.style.transform= "rotate(0deg)";
        }
    }
    console.log(window.scrollY)

},200);
setInterval(() => {
    if(window.scrollY > 800) {
        document.querySelector('.about .container').style.opacity = window.scrollY * .001;

    }else {
        document.querySelector('.about .container').style.opacity = 0;
    }
    console.log(window.scrollY)
    if(window.scrollY > 3300) {
        document.querySelector(".arrow").style.opacity = 1;
    }

},200);

function move() {
    document.getElementById('contact').scrollIntoView();
}
document.querySelector('.arrow').addEventListener('click', ()=> {
    window.scrollTo(0,0);
});