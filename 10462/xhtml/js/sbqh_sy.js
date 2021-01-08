// JavaScript Document


window.onload = function(){
	//Begin	终端类型判断
	if(!IsPC()){
		//window.location.href = "/10462/xhtml/index.shtml";
	}
	//End	终端类型判断
	
	InitGovInfoTran();
	initNav2015();
	setNav2015();
	//showPiaoFu();
	
	//Begin	新闻聚焦
	
	//var demo_newsFocus = document.getElementById("demo_newsFocus");
	//var demo1_newsFocus = document.getElementById("demo1_newsFocus");
	//var demo2_newsFocus = document.getElementById("demo2_newsFocus");
	//demo2_newsFocus.innerHTML = document.getElementById("demo1_newsFocus").innerHTML;
	//var myvar_newsFocus = setInterval(Marquee_newsFocus,30);
	//demo_newsFocus.onmouseout = function (){myvar_newsFocus = setInterval(Marquee_newsFocus,30);}
	//demo_newsFocus.onmouseover = function(){clearInterval(myvar_newsFocus);}
	//End	新闻聚焦
	
	//Begin	政务微博微信
	//var tabBmm = document.getElementById("tabBmm");
	//var demo1_zwwbwx = document.getElementById("demo1_zwwbwx");
	//var demo2_zwwbwx = document.getElementById("demo2_zwwbwx");
	//demo2_zwwbwx.innerHTML = document.getElementById("demo1_zwwbwx").innerHTML;
	//var myvar_zwwbwx = setInterval(Marquee_zwwbwx,30);
	//tabBmm.onmouseout = function (){myvar_zwwbwx = setInterval(Marquee_zwwbwx,30);}
	//tabBmm.onmouseover = function(){clearInterval(myvar_zwwbwx);}
	
	//var tabSzs = document.getElementById("tabSzs");
	//var demo1_zwwbwx1 = document.getElementById("demo1_zwwbwx1");
	//var demo2_zwwbwx1 = document.getElementById("demo2_zwwbwx1");
	//demo2_zwwbwx1.innerHTML = document.getElementById("demo1_zwwbwx1").innerHTML;
	//var myvar_zwwbwx1 = setInterval(Marquee_zwwbwx1,30);
	//tabSzs.onmouseout = function (){myvar_zwwbwx1 = setInterval(Marquee_zwwbwx1,30);}
	//tabSzs.onmouseover = function(){clearInterval(myvar_zwwbwx1);}
	//End	政务微博微信
}

<!-- 漂浮时间段判断 -->
function showPiaoFu()
{
    if(IsInRightTime('2016-04-08 23:50:00','2016-04-09 02:00:00'))
    {
        document.getElementById("ad").style.display = "";
    }else{
        document.getElementById("ad").style.display = "none";
    }
}
function IsInRightTime(BeginTimeStr,EndTimeStr)
{
    var nowTime = getNowFormatDate();
    if(comptime(BeginTimeStr,nowTime) && comptime(nowTime,EndTimeStr))
    {
        return true;
    }else
    {
        return false;
    }

}

function getNowFormatDate() { 
    var date = new Date(); 
    var seperator1 = "-"; 
    var seperator2 = ":"; 
    var month = date.getMonth() + 1; 
    var strDate = date.getDate(); 
    if (month >= 1 && month <= 9) { 
        month = "0" + month; 
    } 
    if (strDate >= 0 && strDate <= 9) { 
        strDate = "0" + strDate; 
    } 
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate 
            + " " + date.getHours() + seperator2 + date.getMinutes() 
            + seperator2 + date.getSeconds(); 
    return currentdate; 
} 


function comptime(BeginTimeStr,EndTimeStr) {
    var beginTime = BeginTimeStr;
    var endTime = EndTimeStr;
    var beginTimes = beginTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');

    beginTime = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
    endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);


    var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;
    if (a < 0) {
        return false;
    } else if (a > 0 || a == 0) {
        return true;
    }
}

<!--鼠标切换开始-->
function GetObj(ObjId)
{
	return document.getElementById(ObjId);
}

function TabSelect(TableOrDivsHeader,TableorDivs,NowId,NowClass,DefaultClass)
{
	if(TableorDivs!=null)
	{
		for(var i = 0;i < TableOrDivsHeader.length; i++)
		{
            var tableOrDivsHeaderDom = GetObj(TableOrDivsHeader[i]);
            var tableOrDivDom = GetObj(TableorDivs[i]);
			if (TableOrDivsHeader[i] == NowId)
			{
				tableOrDivsHeaderDom && (tableOrDivsHeaderDom.className = NowClass);
				tableOrDivDom && (tableOrDivDom.style.display = "block");
			}
			else
			{
				tableOrDivsHeaderDom && (tableOrDivsHeaderDom.className = DefaultClass);
				tableOrDivDom && (tableOrDivDom.style.display = "none");
			}
		}
	}
}

		//网站导航
		function Wzdh(NowId)
		{
			var TableOrDivsHeader=new Array("shouye","Scgk","Zfld","Jgzn","Zwxx","Bsfw","Hdjl","Tzsc","Lysc", "daohang");
			var TableOrDivs=new Array("tabshouye","tabScgk","tabZfld","tabJgzn","tabZwxx","tabBsfw","tabHdjl","tabTzsc","tabLysc","tabdaohang");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"nav_js","nav_font");			
		}
        //四川要闻
		function Scyw(NowId)
		{
			var TableOrDivsHeader=new Array("Scyw", "Rdgz","Gwyxw");
			var TableOrDivs=new Array("tabScyw", "tabRdgz","tabGwyxw");
			var nowObj = document.getElementById(NowId);
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"red2015x","red2015x");
			var a_array = nowObj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].getElementsByTagName("a");
			for(var i = 0; i < a_array.length; i++){
				if(NowId == TableOrDivsHeader[i]){
					a_array[i].style.display = "block";
				}
				else{
					a_array[i].style.display = "none";
				}
				document.getElementById(TableOrDivsHeader[i]).parentNode.parentNode.className = "";
			}
			nowObj.parentNode.parentNode.className = "jrsc_div_li";
		}
		//省长
		function Sz(NowId)
		{
			var TableOrDivsHeader=new Array("Szf","Bm","Szz");
			var TableOrDivs=new Array("tabSzf","tabBm","tabSzz");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"newleft_js","newleft_js2");			
		}
		//政府文件
		function Zfwj(NowId)
		{
			var TableOrDivsHeader=new Array("Zfwj","Rsrm","Zcjd","Gsgg");
			var TableOrDivs=new Array("tabZfwj","tabRsrm","tabZcjd","tabGsgg");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"newleft_js","newleft_js2");			
		}
		//视频播报
		function Spbb(NowId)
		{
			var TableOrDivsHeader=new Array("Spbb","Tpbd");
			var TableOrDivs=new Array("tabSpbb","tabTpbd");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"spbb_bg","");
			for(var i = 0; i < TableOrDivsHeader.length; i++){
				var a = TableOrDivsHeader[i];
				if(a == NowId) document.getElementById(a + "_more").style.display = "block";
				else document.getElementById(a + "_more").style.display = "none";
			}	
		}
		//部门
		function Bmm(NowId)
		{
			var TableOrDivsHeader=new Array("Bmm","Szs");
			var TableOrDivs=new Array("tabBmm","tabSzs");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"bm_js","");			
		}
		//热点办理事项
		function blsx(NowId)
		{
			var TableOrDivsHeader=new Array("blsx","cxsx");
			var TableOrDivs=new Array("tabblsx","tabcxsx");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"blsx_bgJS","new_fontH14");			
		}
		//便民查询
		function Bmcx(NowId)
		{
			var TableOrDivsHeader=new Array("Bmcx");
			var TableOrDivs=new Array("tabBmcx");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"new_fontB_font12x","new_fontB_font12x");			
		}
		//省政府组成部门
		function zfbm(NowId)
		{
			var TableOrDivsHeader=new Array("zfbm","tsjg","zsjg","sydw","gljg");
			var TableOrDivs=new Array("tabzfbm","tabtsjg","tabzsjg","tabsydw","tabgljg");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"zfbm_bg","");			
		}
		//信息报送情况排行榜
		function bmmm(NowId)
		{
			var TableOrDivsHeader=new Array("bmmm","szzz");
			var TableOrDivs=new Array("tabbmmm","tabszzz");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"xxbs_bgJS","xxbs_bgJS2");			
		}
		//政府信息公开
		function xzqlgk(NowId)
		{
			var TableOrDivsHeader=new Array("xzqlgk","czzj");
			var TableOrDivs=new Array("tabxzqlgk","tabczzj");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"xxbs_bgJS","xxbs_bgJS2");			
		}
<!--鼠标切换结束-->


function setNav2015(){
	var nav = document.getElementById("nav2015");
	if(nav == null) return;
	var t_array = nav.getElementsByTagName("div"), t;
	if(t_array == null || t_array.length == 0) return;
	
	for(var i = 0; i < t_array.length; i++){
		t = t_array[i];
		t.style.display = "none";
	}
}

function initNav2015(){
	$("#nav2015").mouseleave(function(){
			setNav2015();
		}
	);
}

//Begin	新闻聚焦
function Marquee_newsFocus(){
	if(demo_newsFocus.scrollLeft - demo2_newsFocus.offsetWidth >= 0){
		demo_newsFocus.scrollLeft -= demo1_newsFocus.offsetWidth;
	}
	else{
		demo_newsFocus.scrollLeft++;
	}
}
//End	新闻聚焦

//Begin	政府信息公开
function InitGovInfoTran(){
	//var column_array = new Array("xzqlyx", "czzj", "ggzypz", "zdjsxm", "ggfw", "gyqy", "hjbh", "spypaq", "ggqsydw");
    var column_array = new Array("zdjsxm", "ggzypz", "shgysy", "czzj", "fgfgg", "tjgzlfz", "sdgjz", "bzhgsms", "sjbmgkml");
	for(var i = 0; i < column_array.length; i++){
		var c = column_array[i];
		var obj = document.getElementById(c);
		if(obj == null) continue;
		
		obj.onmouseover = function(){
			hideGovInfoTran();
			var c_div = document.getElementById(this.id + "_div");
			if(c_div == null) return;
			c_div.style.display = "block";
		};
		
		$("#govInfoTran_div").mouseleave(hideGovInfoTran);
	}
}

function hideGovInfoTran(){
    //var column_array = new Array("xzqlyx", "czzj", "ggzypz", "zdjsxm", "ggfw", "gyqy", "hjbh", "spypaq", "ggqsydw");
    var column_array = new Array("zdjsxm", "ggzypz", "shgysy", "czzj", "fgfgg", "tjgzlfz", "sdgjz", "bzhgsms", "sjbmgkml");
	for(var i = 0; i < column_array.length; i++){
		var c = column_array[i];
		c = document.getElementById(c + "_div");
		if(c == null) continue;
		
		c.style.display = "none";
	}
}
//End	政府信息公开

//Begin	政务微博微信
function Marquee_zwwbwx(){
	if(tabBmm.scrollLeft - demo2_zwwbwx.offsetWidth >= 0){
		tabBmm.scrollLeft -= demo1_zwwbwx.offsetWidth;
	}
	else{
		tabBmm.scrollLeft++;
	}
}

function Marquee_zwwbwx1(){
	if(tabSzs.scrollLeft - demo2_zwwbwx1.offsetWidth >= 0){
		tabSzs.scrollLeft -= demo1_zwwbwx1.offsetWidth;
	}
	else{
		tabSzs.scrollLeft++;
	}
}
//End	政务微博微信

//Begin	搜索
function SearchUs2(){
    var k = document.getElementById("keyword").value;
    if(k.replace(new RegExp(" ", "gim"), "") == ""){
        return;
    }
    /*var url = "http://search.sc.gov.cn/searchSC/search.do?method=find&pageSize=20&sort=0&type=all&Keyword=";*/
    var url = "http://so.sc.gov.cn/s?database=all&qt="; //跨域搜索
    url += encodeURI(k);
    window.open(url);
}
//Begin	搜索

//Begin	搜索
function Search(){
    //var url = "http://so.sc.gov.cn/s?database=all&qt="; //跨域搜索
    var url = "http://so.sc.gov.cn"; //跨域搜索
	window.open(url);
}
//Begin	搜索

//Begin	行政审批搜索
function approvalSearch_handleNumber(){
	var k = document.getElementById("handleNumber").value;
	if(k.replace(new RegExp(" ", "gim"), "") == ""){
		alert("请填写搜索内容！");
		return;
	}
	var url = "http://egov.sczw.gov.cn/10942/10978/10980/index.shtml?SearchText=" + k;
	window.open(url);
}
function approvalSearch_idCard(){
	var k = document.getElementById("idCard").value;
	if(k.replace(new RegExp(" ", "gim"), "") == ""){
		alert("请填写搜索内容！");
		return;
	}
	var url = "http://egov.sczw.gov.cn/10942/10978/10980/index.shtml?ApplyUserCode=" + k;
	window.open(url);
}
//Begin	行政审批搜索

//Begin	终端类型判断
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
//End	终端类型判断

//Begin	政务服务大厅切换
//2017政务服务/权利事项搜索
function qlsx2017(NowId)
		{
			var TableOrDivsHeader=new Array("qlsx2017","bszn2017","bljg2017");
			var TableOrDivs=new Array("tabqlsx2017","tabbszn2017","tabbljg2017");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"blsx_bgJS","new_fontH14");			
		}
//2017政务服务/个人办事
function grbs2017(NowId)
		{
			var TableOrDivsHeader=new Array("grbs2017","qybs2017");
			var TableOrDivs=new Array("tabgrbs2017","tabqybs2017");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"grbs2017zwfw_js","qybs20172017zwfw_js2");			
		}
//2017政务服务/热点服务
function rdfw2017(NowId)
		{
			var TableOrDivsHeader=new Array("rdfw2017","bmfw2017");
			var TableOrDivs=new Array("tabrdfw2017","tabbmfw2017");
			TabSelect(TableOrDivsHeader,TableOrDivs,NowId,"grbs2017zwfw_js","qybs20172017zwfw_js2");			
		}
//End	政务服务大厅切换