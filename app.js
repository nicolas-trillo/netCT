function startupSequence() {
    // Poner funciones que se debrían ejecutar 
    // cuando se carga la pagina. (en orden)
    appendHeader();
    appendFooter();
}

function appendFooter() {
    $('#footer').load('footer.html');
}

function appendHeader() {
    $('#header').load('header.html');
    setTimeout(function () {
        setTab(currentTab);
    }, 1000);
}

function setTab(tab) {
    $(`#${tab}`).addClass('current-nav-pos');
}

var currentNavStatus = 'invisible';

function toggleMobileNav() {
    var x = $('.nav-content-cont')
    if (currentNavStatus === 'visible') {
        x.removeClass('active-mobile-nav')
        currentNavStatus = 'invisible'
    } else {
        x.addClass('active-mobile-nav')
        currentNavStatus = 'visible'
    }
}

function navZoomAnimation() {
    $('.nav-mobile-menu').addClass('nav-animacion');
    setTimeout(function () {
        $('.nav-mobile-menu').removeClass('nav-animacion');
    }, 500);
}