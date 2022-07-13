$(document).ready(function() {

    console.log("Document Ready!");

    // Highlight Active Nav Elem
    $("#navbarSupportedContent li").each(function() {
        if ($(this).find("a").attr('href') === window.location.pathname) {
            $(this).find("a").toggleClass("active");
        }
    });

});