const menuMobile = document.getElementById("menu")
const btnClose = document.getElementById("btnClose")
const btnOpen = document.getElementById("btnOpen")

function openMenu() {
  menuMobile.classList.remove("hidden")
  menuMobile.classList.add("flex")
}
function closeMenu() {
  menuMobile.classList.remove("flex")
  menuMobile.classList.add("hidden")
}