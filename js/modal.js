const ruleBtn = document.getElementById("rule-btn");
const modalPage = document.querySelector(".modal-page");
const overlay = document.getElementById("overlay");
const gameBtn = document.getElementById("game-btn");
const closeBtn = document.getElementById("close-btn");
ruleBtn.addEventListener("click", () => {
  modalPage.classList.remove("hidden");
  overlay.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modalPage.classList.add("hidden");
    overlay.style.display = "none";
  });
});
