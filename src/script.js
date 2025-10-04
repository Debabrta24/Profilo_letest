
const light = document.getElementById("sunIcon");
const dark = document.getElementById("moonIcon");
const bodymain = document.getElementById("bodymain");


function toggole() {
    light.classList.toggle("hidden");
    light.classList.toggle("block");

    dark.classList.toggle("hidden");
    dark.classList.toggle("block");
    if (bodymain.classList.contains("dark:bg-black")) {
        bodymain.classList.remove("dark:bg-black", "dark:text-white");
        bodymain.classList.add("dark:bg-white", "dark:text-black")
    }
    else {
        bodymain.classList.remove("dark:bg-white", "dark:text-black")
        bodymain.classList.add("dark:bg-black", "dark:text-white");
    }

}

