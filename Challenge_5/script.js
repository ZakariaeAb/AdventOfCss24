const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (documentHeight - scrollPosition < 100) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});