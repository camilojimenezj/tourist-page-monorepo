import {
  loadComments,
  saveComment,
  onNewComment,
  requireComments,
} from "./socket.js";

const d = document,
  openModal = d.querySelectorAll(".hero__cta"),
  modal = d.querySelector(".modal"),
  $comments = d.querySelector(".comment-container"),
  $form = d.querySelector(".comment-form");
let place = "";

loadComments(renderData);
onNewComment(appendData);

d.addEventListener("click", (e) => {
  if (e.target == modal && !e.target.matches(".hero__cta")) {
    modal.classList.remove("modal--show");
  }
  if (e.target.matches(".hero__cta")) {
    e.preventDefault();
    place = e.target.dataset.place;
    requireComments(place);
    modal.classList.add("modal--show");
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveComment($form["comment"].dataset.name, $form["comment"].value, place);
  $form.reset();
});

function renderData(comments) {
  $comments.innerHTML = "";
  /*   console.log(comments[1].place == place); */
  comments.forEach((el) => {
    $comments.innerHTML += `<div class="comment-card">
                        <div class="user">
                          <p class="name"><b>${el.name}</b></p>
                        </div>
                        <div class="text">
                          <p class="comment">${el.comment}</p>

                        </div>
                      </div>`;
  });
}

function appendData(comment) {
  $comments.innerHTML += `<div class="comment-card">
                        <div class="user">
                          <p class="name"><b>${comment.name}</b></p>
                        </div>
                        <div class="text">
                          <p class="comment">${comment.comment}</p>

                        </div>
                      </div>`;
}
