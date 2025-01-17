const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const responsiveNavbar = document.getElementById("responsiveNavbar")
const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")

openNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "100%"
})

closeNav.addEventListener('click', () => {
    responsiveNavbar.style.width = "0%"
})
