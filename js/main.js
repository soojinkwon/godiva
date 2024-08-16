$(document).ready(function () {

    //검색
    $(".dim").hide();

    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search, .dim").fadeIn();
        $(".search input[type='text']").focus();
    });
    $(".search_close").click(function () {
        $(".search, .dim").fadeOut();
    });



    //더보기
    $(".member").hide();
    $(".util_more").mouseenter(function () {
        $(".member").stop().slideDown();
    });
    $(".util_more").mouseleave(function () {
        $(".member").stop().slideUp();
    });

    //2차메뉴
    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
    });


    //모바일 메뉴
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            "right": "0",
        }, 300);
    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            "right": "-400px"
        }, 300);
    });


    //모바일 메뉴 depth2
    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(this).find(".mdepth2").slideDown();
        $(this).siblings().find(".mdepth2").slideUp();
    });

    const mv = new Swiper(".mv", {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부
        },

        speed: 1000, //슬라이드 넘어가는 속도ms
        effect: "fade",//이펙트에 효과를주면 자동으로 겹쳐서보임
        fadeEffect: {
            crossFade: true//fade끼리 만났을때 자연스럽게 겹치지 않게끔
        },
        navigation: {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        //pagination: {
        //    el: ".swiper-pagination",
        //    type: "bullets", //버튼종류 설정 'bullets', 'fraction', 'processbar'
        //    clickable: true, //버튼클릭여부
        //},



    });

    const collection_list = new Swiper(".collection_list", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", //버튼종류 설정 'bullets', 'fraction', 'processbar'
            clickable: true, //버튼클릭여부
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },


    });



    const news_list = new Swiper(".news_list", {
        slidesPerView: 2,
        speed: 1000,
        direction: "vertical",
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },


    });




    const sns_list = new Swiper(".sns_list", {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});