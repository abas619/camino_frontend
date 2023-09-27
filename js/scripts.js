AOS.init();

var body = document.querySelector('body');

if (document.querySelector('.btn-mobile-menu') != null) {
    var btnMobileMenu = document.querySelector('.btn-mobile-menu');
    var sidebarMenu = document.getElementById('sidebar-menu');
    var menuOverlay = document.querySelector('.overlay-back');
    var btnCloseSidebar = document.querySelector('.btn-close-menu');
    btnMobileMenu.onclick = () => {
        menuOverlay.classList.add('active');
        sidebarMenu.classList.add('active');
    }
    menuOverlay.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
    btnCloseSidebar.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
}
// Show Desktop Search
if (document.getElementById('btn-desktop-search') !== null) {
    var desktopSearch = document.getElementById('desktop-search-content');
    var btnDesktopSearch = document.getElementById('btn-desktop-search');
    var searchContent = document.querySelector('.search-content');
    var searchInput = document.getElementById('search-input');
    var searchResult = document.getElementById('search-result');
    var btnClearClose = document.querySelector('.btn-search-close');
    var btnSearchBack = document.querySelector('.btn-search-back');

    btnDesktopSearch.onclick = () => {
        searchContent.style.display = "block";
        btnSearchBack.style.display = "flex";
        searchInput.focus();
    }
    btnSearchBack.onclick = () => {
        searchContent.style.display = "none";
        btnSearchBack.style.display = "none";
        searchInput.value = '';
    }

    searchInput.addEventListener('input', input => {
        if (input.target.value.length > 0) {
            searchResult.classList.add('active')
            btnClearClose.style.display = 'block'
        } else {
            searchResult.classList.remove('active')
            btnClearClose.style.display = 'none'
        }
    });

    btnClearClose.onclick = () => {
        searchInput.value = '';
        searchResult.classList.remove('active')
        btnClearClose.style.display = 'none'
    }

    document.addEventListener('click', function (event) {
        var isClickInside = desktopSearch.contains(event.target);
        if (isClickInside) { null }
        else {
            searchResult.classList.remove('active')
        }
    });
}

if (document.getElementById('video-src-aboutus') != null) {
    var VideoAboutus = document.getElementById('video-src-aboutus');
    var videoOverlay = document.querySelector('.video-overlay');
    var btnVideo = document.getElementById('btn-playvideo');
    btnVideo.onclick = () => {
        VideoAboutus.play();
        videoOverlay.style.display = 'none'

    }
}

// Modal Sign Check
var signCurrentSection = 0;
if (document.getElementById('modal-signin') != null) {
    changeSignModalScreen(signCurrentSection);
}
function changeSignModalScreen(n) {
    var sectionSign = document.querySelectorAll('.login-section')
    for (var i = 0; i < sectionSign.length; i++) {
        sectionSign[i].style.display = 'none'
    }
    sectionSign[n].style.display = 'block'
}

if (document.querySelector('.user-dashboard-section') != null) {
    var userMenu = document.querySelector('.grid-user-menu');
    var overlayUserMenu = document.querySelector('.overlay-userMenu');
    var btnUserMenu = document.querySelector('.btn-usermenu');
    var btnCloseprofileMenu = document.querySelector('.btn-closeprofileMenu');

    btnUserMenu.onclick = () => {
        userMenu.classList.add('active');
        overlayUserMenu.classList.add('active');
    }
    overlayUserMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
    }
    btnCloseprofileMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
    }
}


// Choose Delivery
function chooseDelivery(el) {
    let cards_of_Delivery = document.querySelectorAll('.card-delivery');
    let i;
    for (i = 0; i < cards_of_Delivery.length; i++) {
        cards_of_Delivery[i].classList.remove('active');
    }
    el.classList.add('active');
}
function chooseAddress(el) {
    let cards_of_address = document.querySelectorAll('.card-address');
    let i;
    for (i = 0; i < cards_of_address.length; i++) {
        cards_of_address[i].classList.remove('active');
    }
    el.classList.add('active');
}