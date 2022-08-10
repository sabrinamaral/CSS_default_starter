const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const barsBtn = document.querySelector(".sidebar-toggle");

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
barsBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
