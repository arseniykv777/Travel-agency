$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.header_nav').toggleClass('open');
        $('.hidden_profile').toggleClass('open');
    })
})
