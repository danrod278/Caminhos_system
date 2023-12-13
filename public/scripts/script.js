/* Good Morning, Afternoon and Evening System */

const container = document.querySelector(
  ".hero .container .text p:first-child span"
)

const now = new Date()
const hour = now.getHours()

if (hour < 12) {
  container.innerHTML = "Bom dia"
} else if (hour < 18) {
  container.innerHTML = "Boa tarde"
} else {
  container.innerHTML = "Boa noite"
}

/* Burguer Menu */

const burguer = document.querySelector("header .container .burguer")
const burguerOverlay = document.querySelector(".burguer-overlay")
let menuActive = false

burguer.addEventListener("click", () => {
  if (menuActive) {
    burguerOverlay.classList.remove("active")
    burguerOverlay.style.display = "none"
    burguer.classList.remove("on")
    document.body.style.overflowY = "scroll"
    menuActive = !menuActive
  } else {
    burguerOverlay.classList.add("active")
    burguerOverlay.style.display = "flex"
    burguer.classList.add("on")
    document.body.style.overflow = "hidden"
    menuActive = !menuActive
  }
})
