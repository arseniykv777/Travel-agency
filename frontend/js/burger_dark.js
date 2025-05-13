$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $(this).toggleClass('white');
        $('.header_nav').toggleClass('open');
        $('.hidden_profile').toggleClass('open');
        $('.ds').toggleClass('asd');
    })
})
