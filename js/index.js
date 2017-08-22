new WOW().init();
$(function () {
    /*移动端导航栏*/
    $('.m-left').on('click',function () {
        if($(this).hasClass('color')){
            $(this).removeClass('color');
            $('.m-nav').slideUp();
        }else {
            $(this).addClass('color');
            $('.m-nav').slideDown();
        }
    })
    /*移动端右侧导航（在线咨询，电话，加盟中心）*/
    $('.m-right').on('click',function () {
        if($(this).hasClass('color')){
            $(this).removeClass('color');
            $('.m-cnav').slideUp();
        }else {
            $(this).addClass('color');
            $('.m-cnav').slideDown();
        }
    })


    $('.header .nav #shis').hover(function () {
        $('.header .alter').show();
    },function () {
        $('.header .alter').hide();
    })


    /*时尚大牌hover弹框*/
    $('.a-inner .font li').on('click',function () {
        $('.a-inner .font li').removeClass('active');
        $(this).addClass('active');
        $('.header .alter .a-inner ul.img li').removeClass('active');
        $('.header .alter .a-inner ul.img li').eq($(this).index()).addClass('active');
    })

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top>=30){
            $('.header .alter').hide();
        }

    });

})

