const header = document.querySelector(".header");

document.addEventListener("scroll", async () => {
    if (window.scrollY > 0) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});