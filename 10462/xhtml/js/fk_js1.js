$(function(){
//  jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,delayTime:1000,pnLoop:false});
 jQuery("#slideBox1").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
 jQuery("#slideBox2").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
 jQuery(".picScroll-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:25,trigger:"click"});
 function butTab2(butname,methods,boxname,colorname){//butname 点击切换的按钮，methods 方法,boxname 切换的盒子，colorname:给按钮添加classname（默认active）
    if(colorname==undefined){
        colorname="active";//默认值
    }
    $(butname).on(methods,function(){
        $(boxname).hide().eq($(this).index()).show();
        $(butname).removeClass(colorname);
        $(this).addClass(colorname);
        $('.scxd_more a').siblings('a').removeClass('on').eq($(this).index()).addClass('on')
    })
}
butTab2('.scxd_tit li','mouseover','.scxd_ul','on')
 var key = 1;
      loading(key,3,'.qzfk_ul li');
    $('.title_more').on('click',function(){
        key++;
        loading(key,3,'.qzfk_ul li');
    })
  
    function loading(key,Num,obj){
        for(var i=0;i<$(obj).length;i++){
            if(i<key*Num){
                $(obj).eq(i).css({
                    display: "block"
                })
            }
        }
    }
})
var placeholder ;
	$("input[placeholder]").focus(function(){
		placeholder = $(this).attr('placeholder');
	  $(this).removeAttr('placeholder')
	}).blur(function(){
		$(this).attr('placeholder',placeholder);
	});