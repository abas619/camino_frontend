AOS.init();

var body = document.querySelector("body");

if (document.querySelector(".btn-mobile-menu") != null) {
  var btnMobileMenu = document.querySelector(".btn-mobile-menu");
  var sidebarMenu = document.getElementById("sidebar-menu");
  var menuOverlay = document.querySelector(".overlay-back");
  var btnCloseSidebar = document.querySelector(".btn-close-menu");
  btnMobileMenu.onclick = () => {
    menuOverlay.classList.add("active");
    sidebarMenu.classList.add("active");
  };
  menuOverlay.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
  btnCloseSidebar.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
}

// Modal Sign Check
var signCurrentSection = 0;
if (document.getElementById("modal-signin") != null) {
  changeSignModalScreen(signCurrentSection);
}
function changeSignModalScreen(n) {
  var sectionSign = document.querySelectorAll(".login-section");
  for (var i = 0; i < sectionSign.length; i++) {
    sectionSign[i].style.display = "none";
  }
  sectionSign[n].style.display = "block";
}

if (document.querySelector(".user-dashboard-section") != null) {
  var userMenu = document.querySelector(".grid-user-menu");
  var overlayUserMenu = document.querySelector(".overlay-userMenu");
  var btnUserMenu = document.querySelector(".btn-usermenu");
  var btnCloseprofileMenu = document.querySelector(".btn-closeprofileMenu");

  btnUserMenu.onclick = () => {
    userMenu.classList.add("active");
    overlayUserMenu.classList.add("active");
  };
  overlayUserMenu.onclick = () => {
    userMenu.classList.remove("active");
    overlayUserMenu.classList.remove("active");
  };
  btnCloseprofileMenu.onclick = () => {
    userMenu.classList.remove("active");
    overlayUserMenu.classList.remove("active");
  };
}

function showDialog() {
  let dialog = document.getElementById("dialog");

  dialog.classList.remove("hidden");

  body.classList.add("fixed-position");
  setTimeout(() => {
    dialog.classList.remove("opacity-0");
  }, 20);
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.add("opacity-0");
  body.classList.remove("fixed-position");
  setTimeout(() => {
    dialog.classList.add("hidden");
  }, 500);
}

// انتخاب روز‌های استاد
if (document.querySelector(".card-bookmark") != null) {
  var cardBookmark = document.querySelectorAll(".card-bookmark");

  cardBookmark.forEach((cardbook, i) => {
    cardbook.onclick = () => {
      for (var i = 0; i < cardBookmark.length; i++) {
        cardBookmark[i].classList.remove("active");
      }
      cardbook.classList.add("active");
    };
  });
}

// جابجایی مراحل انتخاب استاد
let currentSectionIndex = 1;
if (document.querySelector(".bookmark-content-section") != null) {
  const BookmarkAllSections = document.querySelectorAll(
    ".bookmark-content-section"
  );
  var btnPrevBookmark = document.getElementById("btn-prev-bookmark");
  var btnNextBookmark = document.getElementById("btn-next-bookmark");

  btnPrevBookmark.addEventListener("click", () => {
    currentSectionIndex = Math.max(0, currentSectionIndex - 1);
    showSection(currentSectionIndex);
  });

  btnNextBookmark.addEventListener("click", () => {
    currentSectionIndex = Math.min(
      BookmarkAllSections.length - 1,
      currentSectionIndex + 1
    );
    showSection(currentSectionIndex);
  });
}

showSection(currentSectionIndex);

function showSection(index) {
  const BookmarkAllSections = document.querySelectorAll(
    ".bookmark-content-section"
  );

  if (index == 0) {
    btnPrevBookmark.style.display = "none";
  } else {
    btnPrevBookmark.style.display = "block";
  }

  BookmarkAllSections.forEach((section, i) => {
    if (i === index) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}
