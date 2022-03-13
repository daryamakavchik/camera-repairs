const repairButtons = document.querySelectorAll(".button");

function buttonChange(evt) {
  evt.target.closest(".button").textContent =
    "Круто, спасибо за доверие!";
}

repairButtons.forEach((item) => item.addEventListener("click", buttonChange));
