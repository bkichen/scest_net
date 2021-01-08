//---------------------------------分页js------------------------------------
//_divName;_nPageCount总页数；_nCurrIndex 当前页码；_sPageName 共同前缀名；_sPageExt分页页面的文件名后缀;_nPageSum总记录数
function createPageHTML(divName, _nPageCount, _nCurrIndex, _sPageName, _sPageExt, _nPageSum) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement("link");
	style.href = "";
	style.rel = "stylesheet";
	style.type = "text/css";

	head.insertBefore(style, head.childNodes[0]);
	var path = location.href;


	var con_text = "";
	if (_nPageCount == null || _nPageCount < 1 || _nPageSum == 0) {
		return;
	}

	//共多少页
	con_text += "<div class=\"pagination_index\" ><span class=\"arrow\">共" + _nPageCount + "页</span></div>";

	//当前多少页
	con_text += "<div class=\"pagination_index\" ><span class=\"arrow\">当前第" + _nCurrIndex + "页</span></div>";

	//首页
	if (_nCurrIndex > 1) {
		con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a target=\"_self\" href=\"" + _sPageName + "." +
			_sPageExt + "\">首页</a></span></div>";
	} else {
		con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a >首页</a></span></div>";
	}

	//上页
	if (_nCurrIndex > 1) {
		if ((_nCurrIndex - 1) > 0) {
			if ((_nCurrIndex - 1) == 1)
				con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a target=\"_self\" href=\"" + _sPageName + "." +
				_sPageExt + "\">上页</a></span></div>";
			else
				con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a target=\"_self\" href=\"" + _sPageName + "_" +
				(_nCurrIndex - 1) + "." + _sPageExt + "\">上页</a></span></div>";
		}
	}

	//下页
	if (_nCurrIndex < _nPageCount) {
		con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a target=\"_self\" href=\"" + _sPageName + "_" +
			(_nCurrIndex + 1) + "." + _sPageExt + "\">下页</a></span></div>";
	}
	//templateId=3bc245857cdd4dabaf690310535179e6&websiteId=3e4e04c651454622a9a79c6de04db29c
	//templateId=7999c88037394fbf90c5b5d265c6dcc9&websiteId=8a46289f5ac64a3a8620147043a62a21
	if (_nPageCount > 1 && _nCurrIndex < _nPageCount)
		con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a target=\"_self\" href=\"" + _sPageName + "_" +
		(_nPageCount) + "." + _sPageExt + "\">尾页</a></span></div>";
	else
		con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a >尾页</a></span></div>";

	//con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"_" + (_nPageCount) + "."+_sPageExt+"\">末页</a></span></div>";
	con_text +=
		"<div class=\"pagination_index\">跳转到第<input name='pagination_input' id='pagination_input' />页 <a id='goPage' onclick=\"pagination_go('" +
		_sPageName + "','" + _sPageExt + "','" + _nPageCount + "')\" >GO</a></div>";

	document.getElementById(divName).innerHTML = con_text;

	var pageDiv = document.getElementById('page_div');
	if (!pageDiv) {
		return;
	}
	var pageDivInnerHtml = pageDiv.innerHTML;
	var size = $('.pagination_index').size();
	if (pageDivInnerHtml.replace(/(^s*)|(s*$)/g, "").length !== 0) {

		if (size > 0) {
			var text = $('.pagination_index').first().find('.arrow').text();
			var num = text.replace(/[^0-9]/ig, "");
			if (parseInt(num) === 1) {
				$('.page').hide();
			}
		}
		return;
	}
	var innerHtml = document.getElementsByTagName('body')[0].innerHTML;
	var result = /createPageHTML\([^\)]*\)/.exec(innerHtml);
	if (result && result.length > 0) {
		try {
			eval(result[0])
		} catch (error) {
			console.log(error);
		}
	}


	//如果只有一页，就隐藏分页

	if (size > 0) {
		var text = $('.pagination_index').first().find('.arrow').text();
		var num = text.replace(/[^0-9]/ig, "");
		if (parseInt(num) === 1) {
			$('.page').hide();
		}
	}
}

function pagination_go(sPageName, sPageExt, nPageCount) {
	var gopageID = document.getElementById('pagination_input').value;
	gopageID = gopageID.replace(" ", '');
	if (gopageID) {
		if (parseInt(gopageID) <= nPageCount && parseInt(gopageID) > 0) {
			if (gopageID == "1") {
				window.location.href = sPageName + "." + sPageExt;
			} else {
				window.location.href = sPageName + "_" + gopageID + "." + sPageExt;
			}
		}
	}
	return false;
}


///////内容页上一篇下一篇功能;_nNowPageID当前信息ID,suffixName后缀名
function ContentUporNext(_nNowPageID, _target, _type) {
	if (!content_str) return false;
	if (content_str.lastIndexOf(",") == content_str.length - 1) {
		content_str = content_str.substring(0, content_str.length - 1);
	}
	var tst = content_str.split(",");
	for (var i = 0; i < tst.length; i++) {
		var iscan = tst[i].indexOf(_nNowPageID + ":");
		if (iscan != -1) {
			if (i == 0) { ///此时没有上一篇
				var prevReg = /^[PREV]|[prev]$/;
				if ("PREV" != _type) {
					var content_tst = tst[i + 1].split(":");
					document.write("<a href='../../" + content_tst[2].substr(12) + "' target='" + _target + "'>" + content_tst[1] +
						"<FONT face=Webdings>4</FONT></a>");
				}
			} else if (i == tst.length - 1) { //此时没有下一篇
				if ("NEXT" != _type) {
					var content_tst = tst[i - 1].split(":");
					document.write("<a href='../../" + content_tst[2].substr(12) + "' target='" + _target +
						"'><FONT face=Webdings>3</FONT>" + content_tst[1] + "</a>");
				}
			} else {
				if ("PREV" == _type) {
					var content_up = tst[i - 1].split(":");
					document.write("<a href='../../" + content_up[2].substr(12) + "' target='" + _target +
						"'><FONT face=Webdings>3</FONT>" + content_up[1] + "</a>&nbsp;&nbsp;&nbsp;&nbsp;");
				}
				if ("NEXT" == _type) {
					var content_next = tst[i + 1].split(":");
					document.write("<a href='../../" + content_next[2].substr(12) + "' target='" + _target + "'>" + content_next[1] +
						"<FONT face=Webdings>4</FONT></a>");
				}
			}
			break;
		}
	}
}

/////最新新闻标志：strtime 新闻发布时间；type 比较类型；number 比较基数
function compute(strtime, type, number, htmlstyle) {
	var endDate = new Date();
	var strtimeReplace = strtime.replace(/\-/g, "/"); //转换字符串为yyyy-MM-dd HH:mi:ss格式
	var startDate = new Date(strtimeReplace); //把字符串转换为时间格式
	var isTime = (endDate.getTime() - startDate.getTime()) / 1000;
	var timevalue = 0;
	if (type == "DAY" || type == "D") {
		timevalue = isTime / (24 * 3600); //天
	} else if (type == "WEEK" || type == "W") {
		timevalue = isTime / (7 * 24 * 3600); //周
	} else if (type = "MONTH") {
		timevalue = isTime / (30 * 24 * 3600); //月
	} else if (type == "H") {
		timevalue = parseInt(isTime / 3600); //小时
	} else {
		timevalue = parseInt(isTime / 60); //分钟
	}
	if (number == 0) {
		if (timevalue < 1 && timevalue >= 0)
			document.write(htmlstyle);
	} else {
		if (timevalue <= number && timevalue >= 0)
			document.write(htmlstyle);
	}
}
//////内容分页方法，sumpage总页数
function page_content(sumpage) {
	var hrefstr = "";
	for (var i = 0; i < sumpage; i++) {
		if (sumpage > 1) {
			hrefstr += "<a href='javascript:void(0);' onclick='javascript:viewpage(" + i + "," + sumpage + ");'>" + (i + 1) +
				"</a>";
		}
	}
	if (sumpage > 1) {
		document.write("<div align=center>" + hrefstr + "</div>");
	}
}
///////显示内容分页,el 页码；snum总页数
function viewpage(el, snum) {
	for (var i = 0; i < snum; i++) {
		obj = document.all("pagediv" + i);
		if (i == el) {
			obj.style.display = "block";
		} else {
			obj.style.display = "none";
		}
	}
}


function goTop(acceleration, time) {
	acceleration = acceleration || 0.1;
	time = time || 8;
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;
	var x3 = 0;
	var y3 = 0;
	if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}
	if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	var x3 = window.scrollX || 0;
	var y3 = window.scrollY || 0;
	// 滚动条到页面顶部的水平距离 
	var x = Math.max(x1, Math.max(x2, x3)); // 滚动条到页面顶部的垂直距离 
	var y = Math.max(y1, Math.max(y2, y3));
	// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所会越来越小 
	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
	// 如果距离不为零, 继续调用迭代本函数 
	if (x > 0 || y > 0) {
		var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
		window.setTimeout(invokeFunction, time);
	}
}

function counterFrm() {
	var cf = document.getElementById("counterFrm");
	var infoId = (top.window.location.href).substring((location.href).lastIndexOf('/') + 1, (location.href).indexOf(
		'.shtml'));
	cf.src = "http://119.6.200.35:8080/app-comment/info_countto.jsp?url=" + infoId;
	cf.reload();
}
