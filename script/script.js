$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 15000
    });
});

$('.service-card').waypoint(function() {
    $('.service-card').addClass('pulse');
}, { offset: '100%' });

$(function () {
    new WOW().init();
})