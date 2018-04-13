$(function () {
    var url = $.url();
    var path = url.attr('path');
    // console.log(path);
    //头部导航特效
    var $lis = $('.nav li');
    var $fNavLi = $('.f-nav ul li');

    $lis.each(function (index) {
        var href = $(this).find('span a').attr('href');

        if (href == path) {
            $('.nav li span a').removeClass('current_a');
            $('.nav li span sub').removeClass('cor_in');

            $(this).addClass('current_li').siblings().removeClass('current_li');
            $(this).find('span a').addClass('current_a');
            $(this).find('span sub').addClass('cor_in');
            if (href != '/') {
                $('.header .f-subnav').css('display', 'none');
                $('.header .o-subnav').css('display', 'block');
            } else {
                $('.header .f-subnav').css('display', 'block');
                $('.header .o-subnav').css('display', 'none');
            }
        }
    })

    //二级导航特效
    $fNavLi.each(function () {
        var href1 = $(this).find('a').attr('href');
        if (href1 == path) {
            $('.f-nav ul li a em').removeClass('f-nav_em');
            $(this).find('a em').addClass('f-nav_em');
        }
    })
    //轮播图
    var btnL = $('.s-warp .btn-l');
    var btnR = $('.s-warp .btn-r');
    var imgs = $('.s-warp .carousel a');
    var nums = $('.s-warp .circle a');
    var box = $('.slides');
    var index = 0;
    var timer = null;
    var img = $('.s-warp .carousel a img');

    function show(i) {
        for (var index = 0; index < nums.length; index++) {
            if (i === index) {
                $(nums[index]).addClass('carousel_img');
                $(imgs[index]).addClass('carousel_img');
                switch (index) {
                    case 0:
                        box.css('background-image', 'url("http://p1.music.126.net/dITNlfa71zI-Tb5nmm9OLA==/19151293533031401.jpg")')
                        break;
                    case 1:
                        box.css('background-image', 'url("http://p1.music.126.net/MYV4C-BiGk2AS2B_0Ppc-w==/19153492556286950.jpg")')
                        break;
                    case 2:
                        box.css('background-image', 'url("http://p1.music.126.net/jgaH2Rnj5Xel_C8PsAkEBQ==/18541064581289491.jpg")')
                        break;
                    case 3:
                        box.css('background-image', 'url("http://p1.music.126.net/pWVKaAQVuOpSPEzoFUcpqQ==/18908301463292368.jpg")')
                        break;
                    case 4:
                        box.css('background-image', 'url("http://p1.music.126.net/duwy9fJ3jn3ZPPtktco4Og==/18612532837047248.jpg")')
                        break;
                    case 5:
                        box.css('background-image', 'url("http://p1.music.126.net/Htx_vrfOf4LCb_rmT8mT5Q==/18980869230703849.jpg")')
                        break;
                    case 6:
                        box.css('background-image', 'url("http://p1.music.126.net/ozZr7YG-YUi5SkGZQtEpUA==/18903903416761320.jpg")')
                        break;
                    case 7:
                        box.css('background-image', 'url("http://p1.music.126.net/HEN3KECXtb0BSRGkV_IUWg==/18879714160964495.jpg")')
                        break;
                    default:
                        break;
                }

            } else {
                $(nums[index]).removeClass('carousel_img');
                $(imgs[index]).removeClass('carousel_img');
            }

        }
    }

    nums.each(function (i, v) {
        $(v).on('mouseover', function () {
            show(i);
        })
        $(v).on('mouseout', function () {
            index = i;
        })
    });

    btnL.click(function () {
        show(index--);
        if (index < 0) index = nums.length - 1;
    })
    btnR.click(function () {
        show(index++);
        if (index >= nums.length) index = 0;
    })
    function autoPlay() {
        timer = setInterval(function () {
            show(index++);
            if (index >= nums.length) index = 0;
        }, 5000);
    }
    autoPlay();

    box.mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        autoPlay();
    })
    // 当前显示的 0 -> 654
    // 当前的下一个 654
    // 当前显示的下下个 654 -> -654
    // 当前显示的上一个 -654 -> 0 

    //新碟上架，轮播
    var roller = $('.inner .roll ul');
    var las = $('.inner .las');
    var nex = $('.inner .nex');
    var a = 0;
    function digit() {
        // for (var rindex = 0; rindex < roller.length; rindex++) {
        //     var left = roller[rindex].offsetLeft;
        //     console.log(left);
        //     if (rindex) {
        //         left = 654;
        //     }
        //     else if (rindex == roller.length - 1) {
        //         left = 0;
        //     } else {
        //         if (rindex % 2 == 0) {
        //             left = left + 654 * (rindex - 1);
        //         } else {
        //             left = left + 654 * (1 - rindex);
        //         }
        //     }
        //     // $element.css('transition', `left 1s ease 0s`);
        //     $(roller[rindex]).css('left', left + "px");

        // }

        if (a == 0) {
            $(roller[0]).css('transition', `left 1s ease 0s`);
            $(roller[0]).css('left', `654px`);   // 0

            $(roller[1]).css('transition', ``);
            $(roller[1]).css('left', `654px`);  // 654

            $(roller[2]).css('transition', ``);
            $(roller[2]).css('left', `-654px`);  //654

            $(roller[3]).css('transition', `left 1s ease 0s`);
            $(roller[3]).css('left', `0px`); // -654

        } else if (a == 1) {
            $(roller[0]).css('transition', `left 1s ease 0s`);
            $(roller[0]).css('left', `0px`);

            $(roller[1]).css('transition', `left 1s ease 0s`);
            $(roller[1]).css('left', `654px`);

            $(roller[2]).css('transition', ``);
            $(roller[2]).css('left', `654px`);

            $(roller[3]).css('transition', ``);
            $(roller[3]).css('left', `-654px`);
        } else if (a == 2) {
            $(roller[0]).css('transition', ``);
            $(roller[0]).css('left', `-654px`);

            $(roller[1]).css('transition', `left 1s ease 0s`);
            $(roller[1]).css('left', `0px`);

            $(roller[2]).css('transition', `left 1s ease 0s`);
            $(roller[2]).css('left', `654px`);

            $(roller[3]).css('transition', ``);
            $(roller[3]).css('left', `654px`);
        } else if (a == 3) {
            $(roller[0]).css('transition', ``);
            $(roller[0]).css('left', `654px`);

            $(roller[1]).css('transition', ``);
            $(roller[1]).css('left', `-654px`);

            $(roller[2]).css('transition', `left 1s ease 0s`);
            $(roller[2]).css('left', `0px`);

            $(roller[3]).css('transition', `left 1s ease 0s`);
            $(roller[3]).css('left', `654px`);
        }
        a--;
        if (a < 0) {
            a = roller.length - 1;
        }

    }

    las.click(function () {
        digit();
    })

    nex.click(function () {
        digit();
    })

})