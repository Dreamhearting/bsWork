/**
 * Created by Administrator on 2017/4/19.
 */
$(function () {
    let choose=$('.c-choose > div');
    let rect=$('.rect-p > div');
    let left=$('.left');
    rect.click(function () {
        $(this).addClass('first').siblings().removeClass('first');
        choose.addClass('active').eq($(this).index()).removeClass('active');
    });
    left.click(function () {
        $(this).parent().children().eq(1).toggleClass('active');
    });
    $('.click').click(function () {
        $('.con').removeClass('hidden-xs');
    })
    $(window).resize(function () {
        if($(window).width()>=758){
            choose.removeClass('active');
        }else {
            choose.eq(0).removeClass('active');
            choose.eq(1).addClass('active');
            rect.eq(0).addClass('first');
            rect.eq(1).removeClass('first');
        }
    })
    $(window).triggerHandler('resize');



})