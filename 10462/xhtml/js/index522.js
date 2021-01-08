
    $('.twoRightUl ul li').mousemove(function () {
        $(this).addClass('activeOne').siblings('li').removeClass('activeOne');  //
        $(".twoRightUlDiv").hide().eq($(this).index()).show();
        $(".more").hide().eq($(this).index()).show();
    });

    $('.oneSzdt ul li').mousemove(function () {
        $(this).addClass('activeTow').siblings('li').removeClass('activeTow');  //
        $(".oneXxlb").hide().eq($(this).index()).show();
    })

    $('.ZfwjUl ul li').mousemove(function () {
        $(this).addClass('activeTow').siblings('li').removeClass('activeTow');  //
        $(".ZfwjUlContent").hide().eq($(this).index()).show();
    })

    //视频播报切换
    $('.sixTop ul li').mousemove(function () {
        $(this).addClass('sixActiver').siblings('li').removeClass('sixActiver');  //
        $(".sixContent").hide().eq($(this).index()).show();
        $(".moreSix").hide().eq($(this).index()).show();
    });

    //部门组成
    $('.eightTop ul li').mousemove(function () {
        $(this).addClass('eightActiver').siblings('li').removeClass('eightActiver');  //
        $(".eightBody").hide().eq($(this).index()).show();
        $(".xlljUl").hide();
    })

    //政府信息公开
   /* $('.ZfxxgkUl ul li').mousemove(function () {
        $(".syZdxmjs").hide().eq($(this).index()).show();
    });
    $('.syZdxmjs').mouseout(function () {
        $(".syZdxmjs").hide();
    });
    $('.ZfxxgkUl ul li').mouseout(function () {
        $(".syZdxmjs").hide();
    });*/