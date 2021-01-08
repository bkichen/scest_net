$(function () {

    $('.tab-container ul li').mousemove(function () {
        $(this).addClass('active').siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
        $(".main-container-box-ul").hide().eq($(this).index()).show();
    });

    $('.zwwbwx-title-left .active1').mouseenter(function () {
        $(this).addClass('active');
        $('.zwwbwx-title-left .active2').removeClass('active');  // 删除其他兄弟元素的样式
        $(".demo-zwwbwx-bumen-box").hide();
        $(".demo-zwwbwx-shizhou-box").show();
        
    });
    $('.zwwbwx-title-left .active2').mouseenter(function () {
        $(this).addClass('active');
        $('.zwwbwx-title-left .active1').removeClass('active');  // 删除其他兄弟元素的样式
        $(".demo-zwwbwx-bumen-box").show();
        $(".demo-zwwbwx-shizhou-box").hide();
        
    });
})

