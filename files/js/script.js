$(document).ready(function () {

$('.n_m a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
    }

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, 'linear', function(){

        window.location.hash = hash;
    });
});

new WOW().init();

});