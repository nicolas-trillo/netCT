function startupSequence() {
    // Poner funciones que se debrían ejecutar cuando se carga la pagina.
    appendHeader();
    appendFooter();
}
function appendFooter() {
    $("#footer").load("footer.html");
}
function appendHeader() {
    $("#header").load("header.html");
    setTimeout(function() {
        setTab(currentTab);
    }, 10);
}
function setTab(tab) {
    $(`#${tab}`).addClass('current-nav-pos');
}