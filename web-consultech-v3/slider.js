const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
let contenedor2 = document.querySelectorAll(".contenedor2");
let contenedor3 = document.querySelectorAll(".contenedor3");

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function() {
    Prev();
});

btnLeft.addEventListener('click', function() {
    Next();
});

setInterval(function() {
    Next();
}, 5000);

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let screenSize = window.innerHeight;
    for (var i = 0; i < contenedor2.length; i++) {
        let alturaContenedor2 = contenedor2[i].offsetTop;
        if (alturaContenedor2 - 500 < scrollTop) {
            contenedor2[i].style.opacity = 1;
            contenedor2[i].classList.add("mostrarArriba");




        } else if (contenedor2[i].getBoundingClientRect().top > screenSize) {
            contenedor2[i].style.opacity = 0;
            contenedor2[i].classList.remove('mostrarArriba');

        }
    }

}


//let contenedor2 = document.querySelectorAll("#contenedor2");
/*var intro = document.getElementById("imgs2");
aumentar = 0;


for (var j = 0; j < 200; j++) {
    task(j);
}

function task(j) {
    setTimeout(function() {
        aumentar += 1;
        //console.log(aumentar);
        if (aumentar < 200) {
            intro.style.width = aumentar + "px";
        }
    }, 2.2 * j);
}*/
//console.log("Hello");
//setTimeout(() => { console.log("World!"); }, 2000);

window.addEventListener('scroll', mostrarScroll);