const newStudent = document.querySelector(".newStudent")
const closeBtn = document.querySelector(".close")
const modal = document.querySelector(".modal-overlay")
const form = document.querySelector("form[name='formulario'")
let modalActive = false

newStudent.addEventListener("click", () => {
  if (!modalActive) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
    modalActive = true
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active")
    form.reset()
    document.body.style.overflowY = "auto"
    modalActive = false
  })

  modal.addEventListener("click", (e) => {
    if (e.target.classList[0]) {
      modal.classList.remove("active")
      form.reset()
      document.body.style.overflowY = "auto"
      modalActive = false
    }
  })
})
