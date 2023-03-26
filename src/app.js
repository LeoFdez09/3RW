let toggle = document.getElementById("toggle");
let viewport = document.querySelector(".viewport");
let nav = document.querySelector(".nav");
let num = 0;
let body = document.getElementsByTagName("body");
let nightNumber = 0;
let navA = document.querySelector(".a");


function toggleNight() {
    nightNumber++;
    if (nightNumber % 2 == 0) {
        nav.classList.remove("oscuro");
        nav.classList.add("claro");

        viewport.classList.remove("oscuro");
        viewport.classList.add("claro");
   
        navA.classList.remove("text-oscuro"); 
    } else {
        viewport.classList.remove("claro");
        viewport.classList.add("oscuro");

        nav.classList.remove("claro");
        nav.classList.add("oscuro");

        navA.classList.add("text-oscuro");
    }
}

toggle.addEventListener("click", () => {
    num++;
    if (num % 2 == 0){
        toggleNight()
    }
})




