// $(function(){
// 	/*信件列表*/
// 	  $.ajax({
// 		  url: "http://jyh.lasa.gov.cn:20001/communication/api-mailbox/frontMail/mailList",
// 		  type:'post',
// 		  dataType:'json',
// 		  contentType:'application/json',
// 		  success:function(data){
// 			  console.log(data);
// 			  console.log("1");
// 		  }
// 	  })
// 	  /*调查列表*/
// 		$.ajax({
// 				  url: "http://jyh.lasa.gov.cn:20001/communication/api-question/frontquestionPaper/pageList1",
// 				  type:'post',
// 				  dataType:'json',
// 				  contentType:'application/json',
// 				  success:function(data){
// 					  console.log(data);
// 					  console.log("2");
// 				  }
// 		})
// 		/*问卷调查反馈列表*/
// 		$.ajax({
// 				  url: "http://jyh.lasa.gov.cn:20001/communication/api-question/frontquestionPaper/feedback",
// 				  type:'post',
// 				  dataType:'json',
// 				  contentType:'application/json',
// 				  success:function(data){
// 					  console.log(data);
// 					  console.log("3");
// 				  }
// 		})
// })
$(function(){
	//信件列表
//	var path = 'http://edu.sc.gov.cn';
	var path = '';

	//图片接口路径
var imgUrl = '/communication/api-common/file/download?path=';

//统一受理信件id ++++++++++
var emailId = '5de16a90b0464d2fa0880c9fb986b1cc';

//各单位网上调查、民意征集、在线访谈id +++++++++
var id = '5de16a90b0464d2fa0880c9fb986b1cc';

//站点名称/信件详情栏目代号+++++++++
var xjxq = '/scedu/c100593/';

//站点名称/调查详情栏目代号+++++++++
var dcjs = '/scedu/c100769/',zzdc='/scedu/c100587/';

etterlList();
function etterlList() {
	var data = {
		pageNum: '1',
		pageSize: '6',
		sortMap: {},
		params: {
			deptId: emailId
		}
	}
	jQuery.support.cors = true;  
	$.ajax({
		url: path + "/communication/api-mailbox/frontMail/mailList",
		data: JSON.stringify(data),
		type: 'POST',
		dataType: 'json',
		contentType: "application/json",
		success: function(json) {
			console.log(json);
			$.each(json.data.rows, function(index, item) {
				var lxxd_list = '<li><span class="date">'+item.createTime.substring(5, 10)+'</span><a href="'+xjxq+'hd_xjxq.shtml?id=' + item.id + '" target="_blank">'+ item.title +'</a></li>';
				$("#hd_xjlist").append(lxxd_list);
			})
		},
		error: function(xhr) {
			console.log('error:' + JSON.stringify(xhr));
		}
	})
}
//网上调查
onlineSurvey();

function onlineSurvey() {
	var data = {
		pageNum: '1',
		pageSize: '6',
		sortMap: {'startTime1':'desc'},
		params: {
			deptId: id
		}
	}
	$.ajax({
		url: path + "/communication/api-question/frontquestionPaper/pageList1",
		data: JSON.stringify(data),
		type: 'POST',
		dataType: 'json',
		contentType: "application/json",
		success: function(json) {
			console.log(json);
			var wsdc_list='',
				isSurvey;
				_href='';
			$.each(json.data.rows, function(index, item) {
				if(item.isSurvey==1){
					isSurvey='<font style="color:#797979">调查结束</font>';
					_href=dcjs+'hd_zxdc_result.shtml?id='+item.id;
					
				}else{
					isSurvey='<font style="color:red">正在调查</font>';
					_href=zzdc+'hd_zxdc_details.shtml?id='+item.id;
				}

				 wsdc_list+='<li><span class="date">'+item.startTime.substring(5, 10)+'</span><a href="'+_href+'" title="'+ item.title +'" target="_blank">'+isSurvey+'&nbsp;&nbsp;'+ item.title+'</a></li>'
				
			})
			$("#wsdc_list").html(wsdc_list);
			
		},
		error: function(xhr) {
			console.log('error:' + JSON.stringify(xhr));
		}
	})
}

})