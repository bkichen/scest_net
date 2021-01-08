$(function(){


 $(".search .searchbuttom ").click(function(event){
     if($(".js_search_box").val()=='请输入办事指南关键字'||$(".js_search_box").val()==''){
      $(".js_search_box").val("")
     }
  })

 var len=$(".ftyg_show .ftyg_text ul li").length;
       
        if(len>0){
            $(".ftyg_show").show();
        }
         if(len==1){
            $(".ftyg_btn").hide();
        }


    // tab切换
    $(".zhengWuFuWuTab").hover(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".zheng_wu_tab_content_box_ul").css("display","none");
        $(".zheng_wu_tab_content_box_ul").eq($(this).index()).css("display","block");
/*if ($("#zwfw_bstj").css("display") == "block") {
		$(".zwfw_bstj").empty()
		$(".zwfw_bstj").append('<iframe src="http://www.sczwfw.gov.cn/scgov/index" frameborder="no" border="0"marginwidth="0" marginheight="0" scrolling="no" width="980" height="240" style="width: 100%;position: absolute;left: 0;"></iframe>')
	}*/
    });
    // 下拉框显示隐藏
    var flag = 1;
    $(".selectOne").on("click",function () {
        if(flag){
            $(".banShi_ul").slideDown();
            flag = 0;
        }else{
            $(".banShi_ul").slideUp();
            flag = 1;
        }

    })
    //下拉框内容切换
    $(".banShi_ul>li").on("click",function(){
        var banShi_li_html = $(this).html();
        $(".selectOne>i>em").html(banShi_li_html);
        $(".banShi_ul").slideUp();
        $(".banShiInput>input").css("display","none");
        $(".banShiInput>input").eq($(this).index()).css("display","block");
    })
    //ie 8和9的placeholder兼容
    $("[placeholder]")
            .focus(function () {
                var input = $(this);
                if (input.val() == input.attr("placeholder")) {
                    input.val("");
                    input.removeClass("placeholder");
                }
            })
            .blur(function () {
                var input = $(this);
                if (input.val() == "" || input.val() == input.attr("placeholder")) {
                    input.addClass("placeholder");
                    input.val(input.attr("placeholder"));
                }
            })
            .blur()
            .parents("form")
            .submit(function () {
                $(this).find("[placeholder]").each(function () {
                    var input = $(this);
                    if (input.val() == input.attr("placeholder")) {
                        input.val("");
                    }
                });
            });
    //个人服务地址数组
    var geRenUrlArray = [
        "https://sc.122.gov.cn/#/ywbl",
        "https://sc.122.gov.cn/#/ywbl",
        "https://sc.122.gov.cn/#/ywbl",
        "https://sc.122.gov.cn/#/ywbl",
        "http://www.sc.hrss.gov.cn/scggfw/system/toIndex.do ",
       // --
        "http://www.sc.hrss.gov.cn/scggfw/system/toIndex.do",
        "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698273822240768&&areaLevel=1",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=145",
        "http://jtt.sc.gov.cn/jtt/c101916/sjfw.shtml",
        "http://www.scdsjzx.cn/scdsjzx/wenhua/wh.shtml",
        //--
       /* "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=085",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=090",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=095",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=100",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=105",*/
        //--
      /*  "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=115",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=120",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=125",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=130",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=135",*/
        //--
       /* "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=140",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=145",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=150",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=060",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=998",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510100000000&theme=999",*/
    ];
    $(".geRenFuWu>li>a").each(function(i,v){
        v.href = geRenUrlArray[i]
    })
    //法人服务数组
    var faRenUrlArray = [
        "http://182.131.3.112:9001/yct/",
        "http://182.131.3.112:9001/yct/webportal/handle_progress.do?areaCode=510000000000",
        "http://182.131.3.112:9001/yct/webportal/handle_progress.do?areaCode=510000000000",
        "http://182.131.3.112:9001/yct/webportal/handle_progress.do?areaCode=510000000000",
         "https://sichuan.chinatax.gov.cn/col/col277/index.html",
        //--
        "http://www.sc.hrss.gov.cn/scggfw/system/toIndex.do",
       /* "http://202.61.88.67:8080/open-platform-oauth/oauth/authorize?client_id=0003&scope=user_info&code=1&response_type=code&redirect_uri=http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019121100000279%26applyCode=YYSQ2019121100000329%26sysCode=0003",*/
        "http://202.61.88.67:8080/open-platform-oauth/oauth/authorize?client_id=0003&scope=user_info&code=1&response_type=code&redirect_uri=http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019121100000279%26applyCode=YYSQ2019121100000329%26sysCode=0003",
       /* "http://202.61.88.67:8080/open-platform-oauth/oauth/authorize?client_id=0003&scope=user_info&code=1&response_type=code&redirect_uri=http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019121100000279%26applyCode=YYSQ2019121100000329%26sysCode=0003",
        "http://202.61.88.67:8080/open-platform-oauth/oauth/authorize?client_id=0003&scope=user_info&code=1&response_type=code&redirect_uri=http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019121100000279%26applyCode=YYSQ2019121100000329%26sysCode=0003",*/
        //--
        /*"http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=070",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=075",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=085",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=090",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=095",*/
        //--
        /*"http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=105",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=110",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=115",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=120",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=125",*/
        //--
        /*"http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=130",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=135",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=140",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=145",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=150",*/
        //--
       /* "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=155",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=160",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=165",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=170",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510100000000&theme=999",*/
    ];
    $(".faRenFuWu>li>a").each(function(i,v){
        v.href = faRenUrlArray[i]
    });

 //主题服务
     var zhuTiFuWuUrlArray = [
       "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=095",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=020",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=090",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=050",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=060",
         //--
         "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=100",
        "http://www.sczwfw.gov.cn/jiq/front/item/gr_index?areaCode=510000000000&theme=105",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=025",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=115",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=040",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=055",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=085",
        "http://www.sczwfw.gov.cn/jiq/front/item/fr_index?areaCode=510000000000&theme=075",

      
   ];
   $(".zhuTiFuWu>li>a").each(function(i,v){
        v.href = zhuTiFuWuUrlArray [i]
    });

 //服务领域
     var fuWulingyuUrlArray = [
        
          "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698273822240768&&areaLevel=1",
        "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E7%A4%BE%E4%BF%9D%E5%8C%BB%E4%BF%9D%E6%9C%8D%E5%8A%A1&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697417760600064&&areaLevel=1",
        "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E5%85%AC%E7%A7%AF%E9%87%91%E6%9C%8D%E5%8A%A1&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697322931580928&&areaLevel=1",
        "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E5%8C%BB%E7%96%97%E4%BF%9D%E5%81%A5&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698573631090688&&areaLevel=1",
        "http://zxbl.sczwfw.gov.cn/app/serviceYouHua/scenarioServiceDh?themeName=%E6%8A%A4%E7%85%A7%E9%80%9A%E8%A1%8C%E8%AF%81&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697190731313152&&areaLevel=1",
         //--
         "http://182.131.3.112:9001/yct/webportal/port.do?areaCode=510000000000",
        "http://182.131.3.112:8069/repeal_yct_portal/webcancel/inform.do",
        "http://jst.sc.gov.cn/scjst/businesSys/sys_list.shtml",
        "https://www.cdrerc.com/sitefiles/services/cms/page.aspx?s=1&n=7",
        "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=510000000000&itemCode=512B0046200003-510000000000-000-451212-1-00&taskType=20&deptCode=451212",
   ];
   $(".fuWulingyu li a").each(function(i,v){
        v.href = fuWulingyuUrlArray [i]
    });

    //权责清单
    var quanZeUrlArray = [
        //1-6
        "http://www.sczwfw.gov.cn/jiq/front/item/qlqd?areaCode=510000000000",
        "http://www.sczwfw.gov.cn/col/col18206/index.html",
        "http://www.sczwfw.gov.cn/jiq/front/item/ggfw_index?areaCode=510000000000",
        "http://www.sczwfw.gov.cn/jiq/front/item/runTimes?areaCode=510000000000",
        "http://www.sczwfw.gov.cn/jiq/front/item/general?areaCode=510000000000",
        "http://www.sczwfw.gov.cn/col/col15338/index.html",
        //--
        "http://www.sczwfw.gov.cn/col/col15339/index.html",
        "http://www.sczwfw.gov.cn/col/col15340/index.html",
        "http://www.sczwfw.gov.cn/col/col18209/index.html",
        "http://www.sczwfw.gov.cn/col/col18210/index.html",
        //--
        "http://www.sczwfw.gov.cn/attach/0/0a1340c60c8e4cc9a6919d88c4823034.pdf",
        "http://www.sczwfw.gov.cn/col/col15345/index.html",
        "http://czt.sc.gov.cn/scczt/c102367/sbjyjs.shtml",
        "http://www.sczwfw.gov.cn/attach/0/3cd47861eb07427a887794b60583575c.pdf",
        "http://qjd.sczwfw.gov.cn/col/col1330/index.html",
          "http://www.scdsjzx.cn/scdsjzx/shuzifagui/2020/6/9/35c8cbd16d33419fb85e8f68f984f822.shtml ",
 "http://www.sc.gov.cn/10462/zfwjts/2020/11/3/5614a332907f4af4b3a2e5c0f6bb1abc.shtml ",
        "http://www.sc.gov.cn/10462/10778/10876/2020/12/23/00c53ad357ef42aebefd5777c7deaa6d.shtml",

    ];
    $(".quanZeQingDan>li>a").each(function(i,v){
        v.href = quanZeUrlArray[i]
    });
    //我要办
    var woYaoBanArray = [
        "http://zwfw.sc.gov.cn/",
        "http://zmhd.sczwfw.gov.cn/Default/Consult/?areaCode=510000000000",
        "http://zmhd.sczwfw.gov.cn/Suggest/Index?areaCode=510000000000",
        "http://zmhd.sczwfw.gov.cn/Default/Consult/?areaCode=510000000000",
    ];
    $(".chaBanRexian_right>span>a").each(function(i,v){
        v.href = woYaoBanArray[i]
    });
    //场景服务
    var reDianFuWuArray = [
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E6%8A%A4%E7%85%A7%E9%80%9A%E8%A1%8C%E8%AF%81&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697190731313152&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E7%94%9F%E6%B4%BB%E5%95%86%E8%B6%85&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698201936064512&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E5%85%AC%E7%A7%AF%E9%87%91%E6%9C%8D%E5%8A%A1&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697322931580928&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698273822240768&&areaLevel=1", 
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E7%A4%BE%E4%BF%9D%E5%8C%BB%E4%BF%9D%E6%9C%8D%E5%8A%A1&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697417760600064&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E4%BC%91%E9%97%B2%E5%A8%B1%E4%B9%90&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698367611072512&&areaLevel=1", 
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E4%B8%8D%E5%8A%A8%E4%BA%A7%E5%8A%9E%E7%90%86%EF%BC%88%E6%B6%89%E7%A8%8E%EF%BC%89&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697514611273728&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E9%85%92%E5%BA%97%E9%A4%90%E9%A5%AE&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698470375714816&&areaLevel=1",  
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E4%B8%8D%E5%8A%A8%E4%BA%A7%E5%8A%9E%E7%90%86%EF%BC%88%E9%9D%9E%E6%B6%89%E7%A8%8E%EF%BC%89&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697762914070528&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E5%8C%BB%E7%96%97%E4%BF%9D%E5%81%A5&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698573631090688&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E6%9C%BA%E5%8A%A8%E8%BD%A6%E6%9C%8D%E5%8A%A1&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697887908524032&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E5%B7%A5%E7%A8%8B%E5%BB%BA%E8%AE%BE&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698673308725248&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E8%B5%84%E6%A0%BC%E8%AF%81%E5%8A%9E%E7%90%86&&serviceType=0&&areaCode=510000000000&&areaId=1431&&thId=3958697982729154560&&areaLevel=1",
        "http://202.61.88.88:18080/app/serviceYouHua/scenarioServiceDh?themeName=%E7%89%A9%E4%B8%9A%E5%AE%B6%E8%A3%85&&serviceType=1&&areaCode=510000000000&&areaId=1431&&thId=3958698757198999552&&areaLevel=1"
        //--
      


    ];
    $(".reDianFuWu>li>div>a").each(function(i,v){
        v.href = reDianFuWuArray[i]
    });


    

})