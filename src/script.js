function light(){
    document.getElementById("bodymain").className = "dark:bg-white dark:text-black"
    document.getElementById("sunIcon").classList.toggle("hidden");
    document.getElementById("moonIcon").classList.toggle("opacity-100");
}

function dark(){
    document.getElementById("bodymain").className = "dark:bg-black dark:text-white"
    document.getElementById("sunIcon").classList.toggle("visible");
    document.getElementById("moonIcon").classList.toggle("hidden");
}