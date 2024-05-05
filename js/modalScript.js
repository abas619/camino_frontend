var body = document.querySelector("body");

if (document.querySelector("[data-modal-name]") != null) {
  const modalButtons = document.querySelectorAll("[data-modal-name]");
  const modalBackdrops = document.querySelectorAll(".modal-backdrop");
  modalButtons.forEach((modalBtn) => {
    const modalName = modalBtn.getAttribute("data-modal-name");
    modalBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showModalDialog(modalName);
    });
  });
}

function showModalDialog(modalName) {
  let modal = document.getElementById(modalName);
  modal.classList.remove("hidden");
  body.classList.add("fixed-position");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
  }, 20);
}

function hideModalDialog(modalid) {
  let modal = document.getElementById(modalid);
  modal.classList.add("opacity-0");
  body.classList.remove("fixed-position");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500);
}
