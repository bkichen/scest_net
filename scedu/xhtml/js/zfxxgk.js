
$(function(){
    contScroll('zfxxgk_xxgkzn','#xxgkzn_detail','scroll');
contScroll('zfxxgk_xxgkzd','#xxgkzd_list','scroll');
    if($('#zfxxgk_gknbxq').length>0){
        var pTop=$('.gknbxq_top').height();
        var stop=5;
        pTop+=75;
        stop+=pTop;
        $('.gknbxq_detail').css('padding-top',pTop+'px');
        $('.scroll').css('top',stop+'px')
        contScroll('zfxxgk_gknbxq','.gknbxq_detail','scroll');
    }
    


function contScroll(boxOut,boxInner,boxscrollbar){
   
    var oBox = document.getElementById(boxOut);//外面的盒子
    if(oBox==null){
        return
    }
    var   oText = $(boxInner)[0],//内容存放盒子
           oScroll = document.getElementById(boxscrollbar),//滚动条外边固定
           oDiv = oScroll.children[0];//要滚动的盒子
            
       var boxHeight = parseFloat(getCss(oBox).height),
           scrollHeight = parseFloat(getCss(oScroll).height),
           textHeight = parseFloat(getCss(oText).height);
                if(boxHeight>textHeight){
                    oScroll.style.display='none';
                    return  
                }
       oDiv.style.height = boxHeight*scrollHeight/textHeight + 'px';//div高度和显示内容比例相同
   
       
       onWheel(oBox,scroll);//滚轮滚动事件
       addEvent(oScroll,'click',changePsn);//滚轮点击事件
    function getCss(obj){ //获取对象的css属性兼容
        return obj.currentStyle || getComputedStyle(obj);
    }
       oDiv.onmousedown = function(e){//滚轮拖拽事件
           this.style.background = 'rgba(0,0,0,1)';
           e = e || window.event;
           var oT = this.offsetTop,//获取当前的top值
               oY = e.clientY;//获取当前的鼠标坐标y的值
           document.onmousemove = function(e){
               oScroll.style.display = 'block';
               e = e || window.event;
               var nY = e.clientY,
                   nDt = nY - oY + oT;
               //oScroll.clientHeight-oDiv.offsetHeight为最大top值，滚动条的高度减去div的高度
               nDt = Math.min(oScroll.clientHeight-oDiv.offsetHeight,nDt);
               nDt = Math.max(0,nDt);
               //(oBox.offsetHeight-oText.clientHeight)/(oScroll.clientHeight-oDiv.offsetHeight)是div的top对应的text的top的比例
               var nTt = nDt*(oBox.offsetHeight-oText.clientHeight)/(oScroll.clientHeight-oDiv.offsetHeight);
               oDiv.style.top = nDt + 'px';
               oText.style.top = nTt + 'px';
           }
           document.onmouseup = function(){
               oDiv.style.background = '';
               oScroll.style.display = '';
               document.onmousemove = null;
               oDiv.onmouseup = null;
               return true;
           }
           return false;
       }

       //点击滚动条，跳转到对应的text内容
       function changePsn(e){
           e = e || window.event;
           var nY = e.clientY-50,
               nDt = nY - parseFloat(oDiv.style.height)/2;//改变滚轮的top值
           //超出判断
           nDt = Math.min(this.clientHeight-oDiv.offsetHeight,nDt);
           nDt = Math.max(0,nDt);
           oDiv.style.top = nDt + 'px';
           //改变text内容的top值
           var nTt = nDt*(oBox.offsetHeight-oText.clientHeight)/(this.clientHeight-oDiv.offsetHeight);
           oText.style.top = nTt + 'px';
       }
       //滚动条滚动
       function scroll(e,d){
           var oDt = parseFloat(oDiv.style.top) || oDiv.offsetTop,//原始的top值，offsetTop值为什么不能取小数？
               Vs = (oScroll.clientHeight-oDiv.offsetHeight)*0.1,//滚轮滚动的速度
               nDt = oDt - d*Vs,                                   //滚动条当前的位置
               oTt = parseFloat(oText.style.top) || oText.offsetTop,
               Vt = (oText.clientHeight-this.offsetHeight)*0.1,
               nTt = oTt + d*Vt;
           //超出判断
           nDt = Math.min(oScroll.clientHeight-oDiv.offsetHeight,nDt);
           nDt = Math.max(0,nDt);
           nTt = Math.max(this.offsetHeight-oText.clientHeight,nTt);
           nTt = Math.min(0,nTt);
           oDiv.style.top = nDt + 'px';
           oText.style.top = nTt + 'px';
       }
       
                       //滚轮事件兼容
        function onWheel(obj,eFn){
            if(obj.addEventListener){//判断是不是主流浏览器
                var oDiv = document.createElement('div');
                if(oDiv.onmousewheel === null){//其他主流浏览器
                    obj.addEventListener('mousewheel',fn);
                }else{//火狐浏览器
                    obj.addEventListener('DOMMouseScroll',fn);
                }
            }else{//ie8及以下
                obj.attachEvent('onmousewheel',fn);
            }
            function fn(e,d){
                e.cancelBubble = true;
                e = e || window.event;
                d = e.wheelDelta/120 || -e.detail/3;
                eFn.call(obj,e,d);
                if(e.preventDefault) //清除默认滚轮事件
                    e.preventDefault();
                else
                    return false;
            }
        }

        //事件监听和绑定的兼容
        function addEvent(obj,str,eFn){
            function fn(e){
                e = e || window.event;
                eFn.call(obj,e);
            }
            if(obj.addEventListener){//主流浏览器
                obj.addEventListener(str,fn);
            }else{//ie678
                obj.attachEvent('on'+str,fn);
            }
            return fn;
        }
   }
})

//--------导航js---------
$('li.live_icon').click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on')
    }else{
        $(this).addClass('on')
    }
});

//------导航加样式---------

$(function(){
    $('.xxgk_live1 span').each(function() {
        var lmcode = $('meta[name="channel"]').attr('channelname');
        
        var lmmc = $(this).text().replace(/\s+/g,"");
        
        if(lmcode==lmmc) {
            $('.xxgk_live1').removeClass('on');
            $(this).parent().parent().addClass('on');
        }
    });

    $('.xxgk_live2 a').each(function() {
        var lmcode = $('meta[name="channel"]').attr('channelname');
        var lmmc = $(this).text().replace(/\s+/g,"");
        if(lmcode==lmmc) {
            $('.xxgk_live1').removeClass('on');
            $(this).parent().parent().parent().addClass('on');
            $('.xxgk_live2').removeClass('on');
            $(this).parent().addClass('on');
        }
    });
    if($('.parentName').length>0){
        var parentName=$('.parentName').text();
        if(parentName=='法定主动公开内容'){
            $('.xxgk_live2 a').each(function() {
                var lmcode = $('meta[name="channel"]').attr('channelname');
                var lmmc = $(this).text().replace(/\s+/g,"");
                if(lmcode==lmmc) {
                    $('.xxgk_live1').removeClass('on');
                    $(this).parent().parent().parent().addClass('on');
                    $('.xxgk_live2').removeClass('on');
                    $(this).parent().addClass('on');
                }
            });
        }else{
            $('.xxgk_live2 a').each(function() {
                var lmcode =parentName;
                var lmmc = $(this).text().replace(/\s+/g,"");
                if(lmcode==lmmc) {
                    $('.xxgk_live1').removeClass('on');
                    $(this).parent().parent().parent().addClass('on');
                    $('.xxgk_live2').removeClass('on');
                    $(this).parent().addClass('on');
                }
            });
        }

    }

});

var len = $('#wzlm').length;
if(len > 0){
    var str = $('.zfxxgk_more').attr('href');
    var arr = str.split("/");
    arr.pop();
    arr.push("common_list.shtml")
    str = arr.join("/");
    $('.zfxxgk_more').attr('href',str)
}
	//字体大小（大中小）
	function func2(div) { //选择器
		var fons = [24,18,12];
		$('.gknbxq_top a').each(function(n){
			$(this).on('click', function() {
				$(div + ' *').css('font-size', fons[n] + 'px');
			});
		});
    }
    func2('.gknbxq_detail');

$(function(){
 

    if($('.gknbxq_detail').length>0){
        var manuscriptId=document.querySelector('meta[name="manuscript"]').getAttribute('manuscriptId');
var channelId=document.querySelector('meta[name="channel"]').getAttribute('channelId');
    var _url='';
        fwltj("#vive");//访问量容器
    }
	function fwltj(arg){
        $(arg).html('次');
		var fwlarg={
			url : _url+"/cms-access-service/access/views",
			data : {
				manuscriptId:manuscriptId,
				ChannelId:channelId
			}
		}
		$.ajax({
			type:"get",
			url:fwlarg.url,
			data:fwlarg.data,
			success:function(getdata){
				if(getdata.status){
					$(arg).html(getdata.result.views+'次');
				}
			},
			error:function(getdata){
				
			}
		});
    }
    
//脚步修改




});



