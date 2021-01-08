function gotoTop() {
    $("#gotoTop").click(
        function() {
            $('html,body').animate({
                scrollTop: '0px'
            }, 'slow');
        })
    $(window).scroll(function() {
        var s = $(window).scrollTop();
        if (s > 20) {
            $("#gotoTop").fadeIn(500);
        } else {
            $("#gotoTop").fadeOut(500);
        };
    });
};
gotoTop();

$(function(){
    //一级页面导航nav添加active
    function func1(arg) {
        $(arg).each(function() {
            var lmcode = $('meta[name="ColumnName"]').attr('content');
            var lmmc = $(this).text().replace(/\s+/g, "");
            if (lmcode == lmmc) {
                $(arg).removeClass('hover');
                $(this).addClass('hover');
            }
        });
    }
    func1('.menu ul li');
    //非一级页面导航nav添加active,根据当前位置
    function func2(arg, arg1) {
        $(arg).each(function() {
            var lmcode = $(arg1).text().replace(/\s+/g, "");
            var lmmc = $(this).text().replace(/\s+/g, "");
            if (lmcode.indexOf(lmmc) != -1) {
                $(arg).removeClass('hover');
                $(this).addClass('hover');
            }
        });
    }
    func2('.menu ul li', '.dqwz');
    //侧边同级栏目导航添加active
    function func3(arg) {
        $(arg).each(function() {
            var lmcode = $('meta[name="ColumnName"]').attr('content');
            var lmmc = $(this).text().replace(/\s+/g, "");
            if (lmcode == lmmc) {
                $(arg).removeClass('on');
                $(this).addClass('on');
                if($(this).parents('li.tree')){
                    $(this).parents('li.tree').addClass('show')
                }

            }

        });
    }
    func3('.xxgkchild li a');
    function func4(){
        var num = parseInt($(".rightBox .title span").text().replace(/\s+/g,""));
        console.log(num);
        if(num > 2000){
            $(".zcwj").addClass("show");
        }
    }
	func4();

})
