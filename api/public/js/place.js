const d = document,
  openModal = d.querySelectorAll(".open-card"),
  modal = d.querySelector(".modal-card"),
  $comments = d.querySelector(".comment-container"),
  $form = d.querySelector(".place-form");
let place = "";

d.addEventListener("click", (e) => {
  if (e.target == modal && !e.target.matches(".open-card")) {
    modal.classList.remove("modal--show");
  }
  if (e.target.closest(".open-card")) {
    modal.classList.add("modal--show");
  }
});
