console.log("main.js loaded");

const navbarToggler = document.querySelector(".navbar-toggler")
navbarToggler.addEventListener("click", navbarChange)

let loaded = sessionStorage.getItem("loadedKey")
checkLoadingscreen(loaded);

function checkLoadingscreen(loaded) {
    
    if(loaded == 'true') {
        document.querySelector(".page").classList.remove("hidden")
        document.querySelector(".loading-screen").classList.add("hidden")
        console.log("You have seen loading screen already")
    } else {
        setTimeout(removeDN, 3000)
        loaded = true;
        sessionStorage.setItem("loadedKey", loaded)
    }
    
}

function removeDN() {
    document.querySelector(".page").classList.remove("hidden")
    document.querySelector(".loading-screen").classList.add("hidden")
}

function navbarChange() {
    document.querySelector(".navbar-toggler-custom-icon").classList.toggle("change");
}