//搜索
document.onkeydown = function(event) {
	e = event ? event : (window.event ? window.event : null);
	if (e.keyCode == 13) {
		SearchUs();
	}
}

function SearchUs() {
	var k = document.getElementById("keyword").value;
	var url = "/so4/";
	if(k=="健康证明在线申报"){
		url="http://jkcx.sc.gov.cn/jkxxtb/epidemic/personnelRegistrationCondition/toDeclareMainView"
	}else{
		if (k.replace(new RegExp(" ", "gim"), "") == "") {
			url = "/so4/";
		} else {
			url = "/so4/s?uc=1&column=" + encodeURI(encodeURI("全站")) + "&searchWord=" + encodeURI(encodeURI(k)) + "&columnId=0";
		}
	}
	window.open(url);
}
