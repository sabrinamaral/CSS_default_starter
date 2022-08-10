const openModalBtn = document.querySelector(".open-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("show-modal");
});
