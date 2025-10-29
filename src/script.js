
const light = document.getElementById("sunIcon");
const dark = document.getElementById("moonIcon");
const bodymain = document.getElementById("bodymain");
const menu = document.getElementById("menu");
const img = document.getElementById("imgg");

function toggole() {
    light.classList.toggle("hidden");
    light.classList.toggle("block");

    dark.classList.toggle("hidden");
    dark.classList.toggle("block");
    if (bodymain.classList.contains("dark:bg-black")) {
        bodymain.classList.remove("dark:bg-black", "dark:text-white");
        bodymain.classList.add("dark:bg-white", "dark:text-black");
    }
    else {
        bodymain.classList.remove("dark:bg-white", "dark:text-black");
        bodymain.classList.add("dark:bg-black", "dark:text-white");
    }
}

function menu1() {

    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    }
    else {

        menu.classList.add("hidden")
    }
    if (img.src.includes("img/menu.png")) {
        img.setAttribute("src", "img/cross.png");
        // alert("nn")
    }
    else {
        img.setAttribute("src", "img/menu.png")
    }
}

// const box = document.querySelector(".class3");
// const target = document.querySelectorAll(".class4");

// box.addEventListener("mouseenter", () => {
//   target.classList.add("hidden");  // hide text
// });

// box.addEventListener("mouseleave", () => {
//   text.style.display = "block";  // show text again
// });

// const box1 = document.querySelector(".class31"); // your card 1 
// const box2 = document.querySelector(".class32"); // your card 1 
// const target1 = document.querySelector(".class4");
// const target2 = document.querySelector(".class5");

// box1.addEventListener("mouseenter", () => {
//     target1.classList.add("hidden"); // hide text

// });

// box1.addEventListener("mouseleave", () => {
//     target1.classList.remove("hidden"); // show text again
// });


// box2.addEventListener("mouseenter", () => {
//     target2.classList.add("hidden"); // hide text

// });

// box2.addEventListener("mouseleave", () => {
//     target2.classList.remove("hidden"); // show text again
// });



const box1 = document.querySelector(".show_project_card");



const target1 = document.querySelector(".project_p");
box1.addEventListener("mouseenter", () => {
    target1.classList.add("hidden"); // show text again
});
box1.addEventListener("mouseleave", () => {
    target1.classList.remove("hidden"); // show text again
});