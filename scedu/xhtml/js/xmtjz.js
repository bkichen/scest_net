
    $(function () {
        $('.tab_btn > .btn').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');

            var index = $(this).index();
            $('.tab_box .tab_con').hide();
            $('.tab_box .tab_con').eq(index).show();
        })

        // $('.branch ul li .click').on('click', function () {
        //     $(this).siblings('.mark').show(500);

        // })
        // $('.close').on('click', function () {
        //     $(this).parent('.mark').hide(500);
        // })
    })


