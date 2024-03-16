document.getElementById("rule-btn").addEventListener("click", () => {
  document.querySelector(".modal-page").classList.remove("hidden");
  document.getElementById("overlay").style.display = "block";
  document.getElementById("close-btn").addEventListener("click", () => {
    document.querySelector(".modal-page").classList.add("hidden");
    document.getElementById("overlay").style.display = "none";
  });
});
