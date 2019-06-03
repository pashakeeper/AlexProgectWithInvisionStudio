$(document).ready(function () {
    var owl = $('.slider_inside_design');
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    owl.owlCarousel({
        center: false,
        slideTransition: 'ease-in',
        slideSpeed: 700,
        autoPlay: 2500,
        smartSpeed: 700,
        items: 3,
        loop: true,
        margin: 0,
        nav: true,
        info: true,
        onTranslate: callback,
        dots: false,
        responsive: {
            0: {
                items: 1,
                center: false,
                autoplay: false,
                autoplaySpeed: 900,
                autoplayTimeout: 2000,
                nav: true,
            },
            1000: {
                items: 3,
                center: false,
                autoplay: false,
                autoplaySpeed: 900,
                autoplayTimeout: 2000,
                nav: true,
                loop: false,
            },
        }
    });
    $('.mobile_menu').click(function (event) {
        $('.main_menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    owl.on('changed.owl.carousel', function (event) {
        callback(event);
    });
    let owl2 = $('.designers_slider');
    owl2.owlCarousel({
        items: 1,
        loop: false,
        slideTransition: 'ease-in',
        slideSpeed: 700,
        autoPlay: 2500,
        smartSpeed: 1400,
    });
    let owlText = $('.text_slider');
    let owlText2 = $('.text_slider2');
    let owlText3 = $('.text_slider3');
    let owlReward = $('.reward_slider');

    owlText.on('changed.owl.carousel', function (e) {
        callback2(e);
    });
    owlText2.on('changed.owl.carousel', function (e) {
        callback3(e);
    });
    owlText3.on('changed.owl.carousel', function (e) {
        callback4(e);
    });
    $('.fourth_section .owl-next').click(function () {
        owlText.trigger('next.owl.carousel');
    });
    $('.fourth_section .owl-prev').click(function () {
        owlText.trigger('prev.owl.carousel', [300]);
    });
    $('.fifth_section .owl-next').click(function () {
        owlText2.trigger('next.owl.carousel');
    });
    $('.fifth_section .owl-prev').click(function () {
        owlText2.trigger('prev.owl.carousel', [300]);
    });
    $('.sixth_section .owl-next').click(function () {
        owlText3.trigger('next.owl.carousel');
    });
    $('.sixth_section .owl-prev').click(function () {
        owlText3.trigger('prev.owl.carousel', [300]);
    });
    owlText.owlCarousel({
        items: 1,
        onTranslate: callback2,
        loop: false,
        slideTransition: 'ease-in',
        slideSpeed: 700,
        autoPlay: 2500,
        smartSpeed: 700,
    });
    owlText2.owlCarousel({
        items: 1,
        onTranslate: callback3,
        loop: false,
        slideTransition: 'ease-in',
        smartSpeed: 1500,
    });
    owlText3.owlCarousel({
        items: 1,
        onTranslate: callback4,
        loop: false,
        slideTransition: 'ease-in',
        smartSpeed: 1500,
    });
    owlReward.owlCarousel({
        items: 1,
        loop: false,
        slideTransition: 'ease-in',
        smartSpeed: 1500,
        nav: true,
    });
    $('.next').click(function (event) {
        event.preventDefault();
        $('.citys span').removeClass('active');
        $('.citys span:last-child').addClass('active');
    });
    $('.prev').click(function (event) {
        event.preventDefault();
        $('.citys span').removeClass('active');
        $('.citys span:first-child').addClass('active');
    });
});


function callback(event) {
    let itemsASD = event.item.count;
    let itemADS =1 + event.item.index;
    let current = $('.count .current');
    let all = $('.count .all');
    // console.log(itemsASD);
    // console.log(itemADS);
    current.html('0' + itemADS);
    all.html('0' + itemsASD);
}

function callback2(e) {
    let itemsASD = e.item.count;
    let itemADS = 1 + e.item.index;
    let current = $('.count .current');
    let all = $('.count .all');
    // console.log(itemsASD);
    // console.log(itemADS);
    current.html('0' + itemADS);
    all.html('0' + itemsASD);
}

function callback3(e) {
    let itemsASD = e.item.count;
    let itemADS = 1 + e.item.index;
    let current = $('.count .current');
    let all = $('.count .all');
    // console.log(itemsASD);
    // console.log(itemADS);
    current.html('0' + itemADS);
    all.html('0' + itemsASD);
}
function callback4(e) {
    let itemsASD = e.item.count;
    let itemADS = 1 + e.item.index;
    let current = $('.count .current');
    let all = $('.count .all');
    // console.log(itemsASD);
    // console.log(itemADS);
    current.html('0' + itemADS);
    all.html('0' + itemsASD);
}
