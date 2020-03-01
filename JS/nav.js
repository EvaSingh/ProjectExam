const displayNav = () => {
    const menuBtn = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav-elements");
    
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        menuBtn.classList.toggle("close");
    });
}

displayNav();
