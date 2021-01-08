try
{	
	var _$cVersion = '20161011';
	var _Sauthor;
	var _Scount_iframe;
	var _Sload_time;
	var _Spage_type;
	var _Spage_pic;
	var _Spage_id;
	var _$cformlist = '';
	var _$cformdetails = {};
	var _$cformfielddetails = {};
	var _$cwebsite = _$cpartner_website = '10000001';
	var _Spartner_website_id;
	var _Schannel_website_id;
	var _Schannel_webshop_id;
	var _Spageformjs = false;
	var _Sorder_encode_url;
	var _$cchkdomain = '';
	if (_Scount_iframe === true)
	{
		var _$cdocument = top.window.document;
	}
	else
	{
		var _$cdocument = window.document;
	}
	var _$cdocumentbody = _$cdocument.getElementsByTagName('body')[0];
	var _$cprotocol = _$cdocument.location.protocol;
	var _trackDataType;
	var _trackData = _trackData || [];
	var _$ciserror = 0;
	var _$cerrorcode = '';
	var _$cflashid = 'yfx_n_r_u';
	var _$ccounturl = '//www.sc.gov.cn/phpstat/';
	var _$ccounturl_proxy = '//www.sc.gov.cn/phpstat/';
	var _$cmediumsource = _$cmediumsourcefirst = _$ckeywordsource = _$cedmemail = _$ckeywordkey = '';
	var _$cstarttime = _$ctimestart = _$cloadtime = _$cdowntime = _$cgettime = (new Date()).getTime();
	window.onerror =  function(msg, url, line, column) {
		_$cerrorcode = "msg["+msg+"]#line["+line+"]#column["+column+"]";
		return true;
    };
	function _$cunicode(s){
	   var len=s.length;
	   var rs=0;
	   for(var i=0;i<len;i++){
			  rs+= parseInt(s.charCodeAt(i)%10);
	   }
	   return rs;
	}
	function _$creadmapcookie(name)
	{
		var cV = end = '';
		var v = name + '=';
		if (_$cdocument.cookie) 
		{
			var p = _$cdocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$cdocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$cdocument.cookie.length;};
				cV = _$cdocument.cookie.substring(p, end);
			}
			return cV;
		}
	}
	function _$csplitdomain(gethost)
	{
		var pattern = new Array();
		var domain  = '';
		var isdomain  = 0;
		var domainlen = 0;
		pattern['.com.cn']	= 4;
		pattern['.net.cn']	= 4;
		pattern['.gov.cn']	= 4;
		pattern['.org.cn']	= 4;
		pattern['.com']	= 3;
		pattern['.net']	= 3;
		pattern['.org']	= 3;
		pattern['.gov']	= 3;
		pattern['.cc']	= 3;
		pattern['.biz']	= 3;
		pattern['.info']= 3;
		pattern['.cn']	= 3;
		pattern['.hk']	= 3;			
		for( var dk in pattern )
		{
			if( gethost.indexOf(dk) > -1 )
			{
				isdomain = 1;
				domainlen = parseInt(pattern[dk]);
				break;
			}
		}
		if( isdomain == 1 )
		{
			var s = gethost.split('.');
			if( s.length >= (domainlen) )
			{
				s[0] = '';
				domain = (s.join('.')).substr(1);
			}
			else
			{
				domain = gethost;
			}
		}
		else
		{
			domain = gethost;
		}
		return domain;
	}
	function _$cgetservercookie(ghostvar,gtype)
	{
		var _$curl = _$ccounturl + '/getcookie.js.php';
		var _$cobj = _$cdocument.createElement('script');
		_$cobj.type = 'text/javascript';
		_$cobj.async = true;
		_$cobj.id = 'getcookie_id';
		_$cobj.charset = 'utf-8';
		var _$cdurl = _$curl + '?website=' + _$cwebsite + '&prefix=_$c&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
		_$cdocument.getElementsByTagName('head').item(0).appendChild(_$cobj);
		_$cdocument.getElementById('getcookie_id').src = _$cdurl;
	}
	(function() {
		var CHARS = '01234567891357924680'.split('');
		Math.uuid = function (len, radix) 
		{
			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;

			if (len)
			{
				for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
			}
			return uuid.join('');
		};
	})();
	function _$cflash_cookie()
	{
		var f=0;
		var v=0;
		var swf;
		var ie = _$cuseragent.match(/msie ([\d.]+)/);
		if(ie)
		{
			try {
			swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf) 
			{
				f=1;
				var vs=swf.GetVariable("$version");
				v=parseInt(vs.split(" ")[1].split(",")[0]);
			}
			}
			catch (e) {
			}
		}
		else
		{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					f=1;
					var ws = swf.description.split(" ");
					for (var i = 0; i < ws.length; ++i)
					{
						if (isNaN(parseInt(ws[i]))) continue;
						v = parseInt(ws[i]);
					}
				}
			}
		}
		return {f:f,v:v};
	}	
	var _$crandomid = _$cstarttime;
	var _$cuseragent = navigator.userAgent.toLowerCase();
	var _$ctelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$cuseragent);
	_$ctelphone = _$ctelphone === null ? '' : _$ctelphone[0];
	var _$cflashok = _$cflash_cookie();
	var _$cphpstat_flash_object;
	function _$cdownloadflash(){

		"use strict";
		var counter = 0;	
		var alpnum = /[^a-z0-9_]/ig;

		window.phpstatCookie = function(config){
			config = config || {};
			var defaults = {
				swf_url: _$ccounturl_proxy+'/cookie/storage.swf',
				namespace: 'namespace_phpstat',
				debug: true,
				timeout: 10,
				onready: null,
				onerror: null
			};
			var key;
			for(key in defaults){
				if(defaults.hasOwnProperty(key)){
					if(!config.hasOwnProperty(key)){
						config[key] = defaults[key];
					}
				}
			}
			function _$cdiv(visible){
				var d = _$cdocument.createElement('div');
					d.id = "kpyfx_js_div_id_10000001";
				var s = (_$cfgid('kpyfx_js_id_10000001')||_$cfgid('kpyfx_js_id')); 
				if (s)
				{				
					d.async = true; 
					s.parentNode.insertBefore(d, s);
				}
				return d;
			}
			var swfContainer = _$cdiv(config.debug);
			config.namespace = config.namespace.replace(alpnum, '_');
			this.config = config;		
			function _$cfid(){
				return "phpstatCookie_" + config.namespace + "_" +  (counter++);
			}
			function _$cfgid(id){
				return _$cdocument.getElementById(id);
			}
			phpstatCookie[config.namespace] = this;
			
			var swfName = _$cfid();
				
			var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + 
				"onload=phpstatCookie." + config.namespace + ".onload&amp;" + 
				"onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + 
				"LSOName=" + config.namespace;
				
			swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + 
				swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
				'	<param value="' + config.swf_url + '" name="movie">' + 
				'	<param value="' + flashvars + '" name="FlashVars">' +
				'	<param value="always" name="allowScriptAccess">' +
				'	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
				'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
				'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
				'</object>';
			
			this.swf = _$cdocument[swfName] || window[swfName];
			
			this._timeout = setTimeout(function(){
				if(config.onerror){
					config.onerror();
				}
			}, config.timeout * 1000);
		};

		phpstatCookie.prototype = {
	  
			version: "1.5",
			ready: false,
			set: function(key, value){
				this._checkReady();
				this.swf.set(key, value);
			},
			get: function(key){
				this._checkReady();
				return this.swf.get(key);
			},
			getAll: function(){
				this._checkReady();
				var data = this.swf.getAll();
				if(data.__flashBugFix){
					delete data.__flashBugFix;
				}
				return data;
			},
			clear: function(key){
				this._checkReady();
				this.swf.clear(key);
			},
			_checkReady: function(){
			},
			"onload": function(){
				var that = this;
				setTimeout(function(){
				  clearTimeout(that._timeout);
				  that.ready = true;
				  that.set('__flashBugFix','1');
				  if(that.config.onready){
					that.config.onready();
				  }
				}, 0);
			},
			onerror: function(){
				clearTimeout(this._timeout);
				if(this.config.onerror){
					this.config.onerror();
				}
			}
			
		};
	}
	var _$cisdownloadflash = 0;
	if(_$cflashok.v >= 88 && _$cdocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$cdocumentbody) !== 'undefined' && _$ctelphone === '' && _$creadmapcookie('yfxm') === '')
	{
		_$cisdownloadflash = 1;
	}
	if(_$cisdownloadflash === 1)
	{
		_$cdownloadflash();
	}
	var _$cclienturl = new Array();
	;
	var _$cthehostname = _$cdocument.location.hostname;
	var _$cgetclienthost;
	for (_$cgetclienthost in _$cclienturl) {
		if (_$cgetclienthost == _$cthehostname) {
			_$ccounturl_proxy = _$cclienturl[_$cgetclienthost];
			break
		}
	}
	function _$cphpstat(cookietype,serverclientcookie) {
		var _$cdoimgerr_1 = 1;
		var _$creferrer = _$cdocument.referrer;
		var _$ctitle = _$cdocument.title;
		var _$chashcode = _$cdocument.location.hash;
		var _$clanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
		var _$ccolor = screen.colorDepth;
		var _$cclientwidth = _$cdocument.documentElement.clientWidth;
		var _$cclientheight = _$cdocument.documentElement.clientHeight;
		var _$cscrollheight = _$cdocument.documentElement.scrollHeight;
		var _$cscreensize = screen.width + '*' + screen.height;
		var _$clastmodify = new Date(_$cdocument.lastModified).getTime();
		var _$ccookie = navigator.cookieEnabled ? 1 : 0;
		var _$cutm_replace = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id','ca_kid','ca_source'];
		var _$cutm_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id','pmf_id','pmf_group'];
		var _$cbdu_replace = ['hmsr','hmmd','hmpl','hmci','hmkw','hmid'];
		var _$cbdu_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id'];
		var _$csearchkey = ['baidu','baidu','google','yahoo','sogou','bing','youdao','soso','haosou','sm','so'];
var _$ckeyword = ['wd','word','q','p','query','q','q','w','q','q','q'];
var _$csearchtype = ['default','default','default','default','default','default','default','default','default','default','default'];
var _$ckeywordrelated = ['bs','bs','','','','','lq','bs','','',''];
;
		var _$chostname = _$cdocument.location.hostname + (_$cdocument.location.port.length > 0 ? ':' + _$cdocument.location.port : '');
		var _$chostname_no_port = _$cdocument.location.hostname;
		var _$ccounturl_logcount = _$ccounturl_proxy + '/logcount.gif';
		var _$cfirsttime;
		var _$clasttime;
		var _$cnlasttime;
		var _$cvisittime;
		var _$cf_l_v_ck = 0;
		var _$creturncount;
		var _$cusercookie;
		var _$csetusercookie;
		var _$cserusercookie;
		var _$cusername;
		var _$cuserid;
		var _$cuserregtime;
		var _$cuserage;
		var _$cusersex;
		var _$cdomain = '';
		var _$crefid = new Array();		
		var _$cf_l_v_time = new Array();	
		var _$cgtd = window._trackData;
		_$crefid['phptag_recom_id'] = '';
		_$cdomain	= _$cgethost(_$chostname_no_port);
		_Sauthor	= _$ctypeof(_Sauthor);
		_Spage_type	= _$ctypeof(_Spage_type);
		_Spage_pic	= _$ctypeof(_Spage_pic);
		_Spage_id	= _$ctypeof(_Spage_id);
		if (typeof(_Sload_time) == 'undefined') {
			_$cdowntime = 0
		} else {
			_$cstarttime = parseInt(_Sload_time);
			_$cdowntime = _$cdowntime - parseInt(_Sload_time)
		}
		_$cfirsttime = _$cgettimestr('f_t_');
		if (_$cfirsttime === '') {
			_$cfirsttime = _$cgettime;
			_$cf_l_v_ck = 1;
		}
			
		if( _$cgtd && _$cgtd.length )
		{
			for(var _$ck in _$cgtd)
			{
				if( !isNaN(_$ck) )
				{
					for(var _$ckk in _$cgtd[_$ck])
					{
						if( _$cgtd[_$ck]['0'] == 'userset' && _$cgtd[_$ck]['1'] == 'userid' && _$cgtd[_$ck]['2'].length )
						{		
							_$cuserid = _$cgtd[_$ck]['2'];
							_$csetflashcookie('yfx_s_u_id', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
						if( _$cgtd[_$ck]['0'] == 'userset' && _$cgtd[_$ck]['1'] == 'username' && _$cgtd[_$ck]['2'].length )
						{				
							_$cusername = _$cgtd[_$ck]['2'];	
							_$csetflashcookie('yfx_s_u_name', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
						if( _$cgtd[_$ck]['0'] == 'userset' && _$cgtd[_$ck]['1'] == 'age' && _$cgtd[_$ck]['2'].length )
						{					
							_$cuserage = _$cgtd[_$ck]['2'];
							_$csetflashcookie('yfx_s_u_age', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
						if( _$cgtd[_$ck]['0'] == 'userset' && _$cgtd[_$ck]['1'] == 'sex' && _$cgtd[_$ck]['2'].length )
						{				
							_$cusersex = _$cgtd[_$ck]['2'];	
							_$csetflashcookie('yfx_s_u_sex', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
						if( _$cgtd[_$ck]['0'] == 'userset' && _$cgtd[_$ck]['1'] == 'cookie' && _$cgtd[_$ck]['2'].length )
						{			
							_$csetusercookie = _$cgtd[_$ck]['2'];		
							_$csetflashcookie('yfx_s_c_g_u_id', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
						if( _$cgtd[_$ck]['0'] == 'userregtime' && _$cgtd[_$ck]['1'] == 'regtime' && _$cgtd[_$ck]['2'].length )
						{					
							_$cuserregtime = _$cgtd[_$ck]['2'];	
							_$csetflashcookie('yfx_s_u_reg', _$cgtd[_$ck]['2'], 3650, _$cdomain, '');
						}
					}
				}
			}
		}
		_$creturncount   = _$cgettimestr('r_c_');
		_$creturncount	= _$creturncount === '' ? 0 : _$creturncount; 
		_$cusername		= _$cusername || (_$creadflashcookie('PHPSTATNULLCOOKIE') ? _$creadflashcookie('PHPSTATNULLCOOKIE') : (_$creadflashcookie('yfx_s_u_name')?_$creadflashcookie('yfx_s_u_name'):_$creadflashcookie('yfx_s_u_id')));	
		_$cuserid		= _$cuserid || (_$creadflashcookie('PHPSTATNULLCOOKIE') ? _$creadflashcookie('PHPSTATNULLCOOKIE') : (_$creadflashcookie('yfx_s_u_id')?_$creadflashcookie('yfx_s_u_id'):_$creadflashcookie('yfx_s_u_name')));	
		_$cuserage		= _$cuserage || (_$creadflashcookie('PHPSTATNULLCOOKIE') ? _$creadflashcookie('PHPSTATNULLCOOKIE') : _$creadflashcookie('yfx_s_u_age'));
		_$cuserregtime	= _$cuserregtime || (_$creadflashcookie('PHPSTATNULLCOOKIE') ? _$creadflashcookie('PHPSTATNULLCOOKIE') : _$creadflashcookie('yfx_s_u_reg'));	
		_$cusersex		= _$cusersex || (_$creadflashcookie('PHPSTATNULLCOOKIE') ? _$creadflashcookie('PHPSTATNULLCOOKIE') : _$creadflashcookie('yfx_s_u_sex'));
		_$csetusercookie	= _$csetusercookie || _$creadflashcookie('yfx_s_c_g_u_id');
		_$cusercookie	= _$csetusercookie || _$creadflashcookie('yfx_c_g_u_id');
		_$cserusercookie	= serverclientcookie || _$creadflashcookie('yfx_c_c_g_u_id');
		if( _$csetusercookie === '' )
		{
			if (_$cusercookie === '' && _$cserusercookie === '' ) {
				_$cusercookie = _$cunique();
				_$csetflashcookie('yfx_c_g_u_id', _$cusercookie, 3650, _$cdomain, '');
			}
			if (_$cserusercookie && _$cserusercookie !== _$cusercookie) {
				_$cusercookie = _$cserusercookie;
				_$csetflashcookie('yfx_c_g_u_id', _$cserusercookie, 3650, _$cdomain, '');
			}
		}
		else if( _$csetusercookie )
		{
			_$cusercookie = '_ck_'+_$csetusercookie;
			_$cserusercookie = '_ck_'+_$csetusercookie;
		}
		_$clasttime = _$cnlasttime = _$cgettimestr('r_t_');
		if (_$clasttime === '') {
			_$clasttime = _$cnlasttime = _$cgettime;
			_$cf_l_v_ck = 1;
		}
		if (_$cgettime - _$clasttime >= 43200000) {
			_$cnlasttime = _$cgettime;
			_$creturncount++;
			_$cf_l_v_ck = 1;
		} else {
			_$creturncount = _$creturncount
		}
		_$cvisittime = _$cgettimestr('v_t_');
		if (_$cvisittime === '' || (_$cgettime - _$cvisittime) >= 1800000) {
			_$cvisittime = _$cgettime;
			_$cf_l_v_ck = 1;
		}
		if( _$cf_l_v_ck > 0 )
		{
			_$cf_l_v_time['0'] = 'f_t_'+_$cfirsttime;
			_$cf_l_v_time['1'] = 'r_t_'+_$cnlasttime;
			_$cf_l_v_time['2'] = 'v_t_'+_$cvisittime;
			_$cf_l_v_time['3'] = 'r_c_'+_$creturncount;
			_$csetflashcookie('yfx_f_l_v_t', _$cf_l_v_time.join('__'), 3650, _$cdomain, '');
		}
		_$cvisittime = '_vk' + _$cvisittime;
		function _$cgethost(gethost)
		{
			var _$cpattern = new Array();
			var _$cisdomain  = 0;
			var _$cdomainlen = 0;
			_$cpattern['.com.cn']	= 4;
			_$cpattern['.net.cn']	= 4;
			_$cpattern['.gov.cn']	= 4;
			_$cpattern['.org.cn']	= 4;
			_$cpattern['.com']	= 3;
			_$cpattern['.net']	= 3;
			_$cpattern['.org']	= 3;
			_$cpattern['.gov']	= 3;
			_$cpattern['.cc']	= 3;
			_$cpattern['.biz']	= 3;
			_$cpattern['.info']	= 3;
			_$cpattern['.cn']	= 3;
			_$cpattern['.hk']	= 3;			
			for( var $dk in _$cpattern )
			{
				if( gethost.indexOf($dk) > -1 )
				{
					_$cisdomain = 1;
					_$cdomainlen = parseInt(_$cpattern[$dk]);
					break;
				}
			}
			if( _$cdomain.length <= 0 )
			{
				if( _$cisdomain == 1 )
				{
					var s = gethost.split('.');
					if( s.length >= (_$cdomainlen) )
					{
						s[0] = '';
						_$cdomain = (s.join('.')).substr(1);
					}
					else
					{
						_$cdomain = gethost;
					}
				}
				else
				{
					_$cdomain = gethost;
				}
				return _$cdomain;

			}
			else
			{
				return gethost;
			}
		}
		function _$cgt() {
			return (new Date()).getTime();
		}
		function _$cencode(s){
			return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
		}
		function _$cdecode(s){
			return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
		} 
		function _$cid(id)
		{
			return _$cdocument.getElementById(id);
		}
		function _$cname(name)
		{
			return _$cdocument.getElementsByName(name);
		}
		function _$cunique() {
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			var H = T.getHours();
			var I = T.getMinutes();
			var S = T.getSeconds();
			var MS = T.getMilliseconds();
			Y = Y < 1900 ? Y + 1900 : Y;
			Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			H = H < 10 ? '0'+''+H : H;
			I = I < 10 ? '0'+''+I : I;
			S = S < 10 ? '0'+''+S : S;
			MS = (MS + 999)+'';
			return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
		}
		function _$cgetYMD()
		{
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			Y = Y < 1900 ? Y + 1900 : Y;
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			return Y+'-'+M+'-'+D;
		}
		function _$cgettimestr(id)
		{
			id = id || 'f_t_';	
			var flvt_ret = '';
			var flvt_arr = _$creadflashcookie('yfx_f_l_v_t').split('__');
			for(var vk in flvt_arr)
			{
				var vkv = _$ctypeof(flvt_arr[vk]);
				if(vkv && vkv.indexOf(id) > -1)
				{
					flvt_ret = vkv.replace(id, '');
				}
			}
			return flvt_ret;
		}
		function _$creadflashcookie(name) 
		{
			var cV = fcV = '';
			if ( !_$cphpstat_flash_object && !_$ccookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$cphpstat_flash_object) 
			{
				fcV = _$ctypeof(_$cphpstat_flash_object.get(name));
			}
			if (_$ccookie) 
			{
				cV = _$ctypeof(_$creadcookie(name));
				if( cV !== fcV && fcV )
				{
					cV = fcV;
					_$csetcookie(name, fcV, 3650, _$cdomain, '');
				}
				if( fcV === '' && cV && _$cphpstat_flash_object )
				{
					_$csetflashcookie(name, cV, 3650, _$cdomain, '');
				}
			}
			return cV;
		}
		function _$creadcookie(name)
		{
			var cV = end = '';
			var v = 'yfx_cookie_group_'+_$cwebsite+'=';
				v = name+'_'+_$cwebsite+'=';
			if (_$ccookie) 
			{
				var p = _$cdocument.cookie.indexOf(v);
				if (p > -1) {
					p += v.length;
					end = _$cdocument.cookie.indexOf(";", p);
					if (end == -1) {end = _$cdocument.cookie.length;};
					cV = _$cdecode(_$cdocument.cookie.substring(p, end));
				}
				if( name != 'yfx_get_cookie_group' && 0 )
				cV = _$cgetgroupcookie(cV,name);
				return _$ctypeof(cV);
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$csetflashcookie(name, gv, h, d, t) 
		{
			if ( !_$cphpstat_flash_object && !_$ccookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$cphpstat_flash_object) {
				_$cphpstat_flash_object.set(name, gv);
			}
			if (_$ccookie)
			{
				_$csetcookie(name, gv, h, d, t);
			}
		}
		function _$csetcookie(name, gv, h, d, t) 
		{
			var v = '';
			if (_$ccookie) {
				v = new Date(_$cgt() + parseInt(h)*24*60*60*1000);
				v = '; expires=' + v.toGMTString();
				if( t == '' && 0 )
				{
					gv = _$csetgroupcookie(name, gv);
					name = 'yfx_cookie_group_'+_$cwebsite;
				}
				name = name+'_'+_$cwebsite;
				_$cdocument.cookie = name + '=' + _$cencode(gv) + v + ';domain='+d+';path=/;';
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$cgetgroupcookie(jsonname,name)
		{
			var returnstr = '';
			var groupcookie = new Array();
			groupcookie = _$cdecode(jsonname).split('|:|');
			for( var jk in groupcookie )
			{
				var gcs = _$ctypeof(groupcookie[jk]);
				if( gcs.indexOf(name+'=') >= 0 )
				{
					returnstr = gcs.substring((name+'=').length);break;
				}
			}
			return _$ctypeof(returnstr) || '';
		}

		function _$csetgroupcookie(name,value)
		{
			var jsonname = _$creadcookie('yfx_get_cookie_group') || '';
			if( jsonname.indexOf(name+'=') < 0 )
			{
				jsonname = jsonname + '|:|' + name + '=' + _$ctypeof(value);
			}
			else
			{
				var groupcookie = new Array();
				groupcookie = _$cdecode(jsonname).split('|:|');
				for( var jk in groupcookie )
				{
					groupcookie[jk] = _$ctypeof(groupcookie[jk]);
					if( groupcookie[jk].indexOf(name+'=') >= 0 )
					{
						groupcookie[jk] = name + '=' + _$ctypeof(value);
					}
				}
				jsonname = groupcookie.join('|:|');
			}
			return jsonname;
		}
		function _$ctestnull(r)
		{
			if( typeof(r) === null || r === null )
			{
				return false;
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		function _$cteststr(r)
		{
			if( typeof(r) === null || r === null )
			{
				return '';
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return '';
			}
			else if( r === '' )
			{
				return '';
			}
			else
			{
				return r;
			}
		}
		function _$cgeturlparam(u) {
			var i = 0,j = 0;
			var h = '',p = '';
			if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
			u = u.substring(i + 3);
			h = u.substring(0, u.indexOf('/'));
			if ((i = u.indexOf("/")) > -1) {			
				if ((j = u.indexOf('#clickmapcode=')) > -1) 
				{
					p = u.substring(i, j);
				}
				else
				{
					p = u.substring(i);
				}
			};
			return {h:h,p:p}
		}
		function _$cgeturlkey(u,k)
		{
			var i,j,h='';
			if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
			{
				h = u.substring(i+2+k.length);
				j = h.indexOf('&');
				j = j <= 0 ? h.length : j;
				{
					h = h.substring(0,j);
				}
			}
			return h;
		}
		function _$cgetkeyword(u,b) {
			var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
			u = u.toLowerCase();
			h = _$cgeturlparam(u).h;
			if( b == '_' ){b = '';}
			for (var ii = 0; ii < _$csearchkey.length; ii++) {
				if (h.toLowerCase().indexOf('.'+_$csearchkey[ii].toLowerCase()+'.') > -1) {
					if ((i = u.indexOf('?' + _$ckeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$ckeyword[ii] + '=')) > -1) {
						k = u.substring(i + _$ckeyword[ii].length + 2);
						if(_$csearchtype[ii]=='default')
						{_$ckeywordsource = _$csearchkey[ii]+b+'::'+k;}
						_$ckeywordkey = k;
						v = '&KW=' + k + '&WC=' + _$csearchtype[ii] + '&WP=' + _$csearchkey[ii]+b;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							if(_$csearchtype[ii]=='default')
							{_$ckeywordsource = _$csearchkey[ii]+b+'::'+k;}
							_$ckeywordkey = k;
							v = '&KW=' + k + '&WC=' + _$csearchtype[ii] + '&WP=' + _$csearchkey[ii]+b
						}
					}
					if ((i = u.indexOf('?' + _$ckeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$ckeywordrelated[ii] + '=')) > -1) {
						k = u.substring(i + _$ckeywordrelated[ii].length + 2);
						rk = '&RW=' + k;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							rk = '&RW=' + k
						}
					}
				}
			};
			v = v ? v : dv;
			if (_$ctypeof(v) === '') {return '';}
			else if (rk) {return v + rk;}
			else {return v}
		}
		function _$creplace_utm(s)
		{
			if( s.indexOf('pmf_source=') <= -1 )
			{
				if( s.indexOf('utm_source=') > -1 )
				{
					for (var ii = 0; ii < _$cutm_replace.length; ii++) {
						s = s.replace(_$cutm_replace[ii]+'=', _$cutm_pmf_replace[ii]+'=');
					}
				}
				else if( s.indexOf('hmsr=') > -1 )
				{
					for (var ii = 0; ii < _$cbdu_replace.length; ii++) {
						s = s.replace(_$cbdu_replace[ii]+'=', _$cbdu_pmf_replace[ii]+'=');
					}
				}
			}
			return s;
		}
		function _$cgetmap(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#clickmapcode=') > -1) {
				c = u.substring(14);
				s = c.split('|');
				s[2] = s[2] === '' ? _$cwebsite : s[2];
				_$csetcookie('yfxm', s[0], 1, _$cdomain, '');
				_$csetcookie('yfxm_t', s[1], 1, _$cdomain, '');
				_$csetcookie('yfxm_code', s[2], 1, _$cdomain, '');
				_$csetcookie('yfxm_site', s[3], 1, _$cdomain, '');
				_$csetcookie('yfxm_p', s[4], 1, _$cdomain, '');
				_$csetcookie('yfxm_s_d', s[5], 1, _$cdomain, '');
				_$csetcookie('yfxm_e_d', s[6], 1, _$cdomain, '');
				_$csetcookie('yfxm_sv', s[7], 1, _$cdomain, '');
				_$csetcookie('yfxm_p_g', s[8], 1, _$cdomain, '');
				_$csetcookie('yfxm_p_c', s[9], 1, _$cdomain, '');
				_$csetcookie('yfxm_c', s[10], 1, _$cdomain, '');
				_$csetcookie('yfxm_e', s[11], 1, _$cdomain, '');
				_$csetcookie('yfxm_o', s[12], 1, _$cdomain, '');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else if (_$creadcookie('yfxm') && _$creadcookie('yfxm_code') && _$creadcookie('yfxm_site')) {
				s[0] = _$creadcookie('yfxm');
				s[1] = _$creadcookie('yfxm_t');
				s[2] = _$creadcookie('yfxm_code');
				s[3] = _$creadcookie('yfxm_site');
				s[4] = _$creadcookie('yfxm_p');
				s[5] = _$creadcookie('yfxm_s_d');
				s[6] = _$creadcookie('yfxm_e_d');
				s[7] = _$creadcookie('yfxm_sv');
				s[8] = _$creadcookie('yfxm_p_g');
				s[9] = _$creadcookie('yfxm_p_c');
				s[10] = _$creadcookie('yfxm_c');
				s[11] = _$creadcookie('yfxm_e');
				s[12] = _$creadcookie('yfxm_o');
				s[13] = _$creadcookie('yfxm_h_h');
				s[14] = _$creadcookie('yfxm_h_p');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else {return {
				a: '',
				b: '',
				c: '',
				d: '',
				e: '',
				f: '',
				g: '',
				h: '',
				i: '',
				j: '',
				p: '',
				q: '',
				r: '',
				ht: '',
				pu: ''
			}}
		}
		function _$cgettag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#tagcontent=') > -1) {
				c = u.substring(12);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1]
				}
			}
			else
			{
				return {
					a: '',
					b: ''
				}
			}
		}
		function _$cgetpagetag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#pagecontent=') > -1) {
				c = u.substring(13);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1],
					c: s[2]
				}
			}
			else
			{
				return {
					a: '',
					b: '',
					c: ''
				}
			}
		}
		function _$cjsgif(gs) {
			if( _$cis_can_record == 0 )
			{
				return;
			}
			var gif = new Image();
			gif.onload = function () {
				gif.onload = null;
				_$cdoimgerr_1 = 1;
			};
			gif.onerror = function () {
				_$cjsgif(gs);_$cdoimgerr_1++;
			};
			if( _$cdoimgerr_1 <= 2 )
			{
				gif.src = gs;
			};
		}
		function _$cparseurl(u) {
			var p = new Array();
			u = u + '&phpstat';
			var c = u.replace(/^\?/,'').split('&');
			for (var b = 0; b < c.length; b++) {
				var e = c[b].split('=');
				p[e[0]] = e[1];
			}
			return p;
		}
		function _$ctypeof(tp)
		{
			var rp=tp;
			if( tp === null ){rp = '';}
			else if( typeof(tp) === 'undefined' ){rp = '';}
			else if( typeof(tp) === 'object' ){rp = '';}
			else if( typeof(tp) === 'function' ){rp = '';}
			return rp;
		}
		function _$csetfirst(fvar, nvalue)
		{
			if( _$ctypeof(fvar) == '' )
			{			
				_$csetcookie('yfx_mr_f', nvalue, 30, _$cdomain, '');
			}
		}
		function _mine(option, value) {
			var mimeTypes = navigator.mimeTypes;
			for (var mt in mimeTypes) {
				if (mimeTypes[mt][option] == value) {
					return true;
				}
			}
			return false;
		}
		var _$cjava = 0;
		if (navigator.javaEnabled()) {_$cjava = '1';}
		var _$cbrowser = /(weibo|micromessenger)/.exec(_$cuseragent);
		if (!_$cbrowser) {_$cbrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$cuseragent);}
		if (!_$cbrowser) {_$cbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$cuseragent);}
		if (!_$cbrowser) {_$cbrowser = /(ucbrowser)/.exec(_$cuseragent);}
		if (!_$cbrowser) {_$cbrowser = /(trident)/.exec(_$cuseragent);if (_$cbrowser) {_$cbrowser[0] = 'IE'}}
		if (!_$cbrowser) {_$cbrowser = /(applewebkit)/.exec(_$cuseragent);if (_$cbrowser) {_$cbrowser[0] = 'safari'}}
		if (_$cuseragent.match(/chrome/) != null)
		{
			var is360 = _mine("type","application/vnd.chromium.remoting-viewer");
			if (is360)
			{
				_$cbrowser[0] = '360';
			} else
			{
				_$cbrowser[0] = 'chrome';
			}
		}
		_$cbrowser = _$cbrowser === null ? 'other' : _$cbrowser[0];
		function getParenthesesStr(text)
		{
			var result = '';
			var regex = /\((.+?)\)/g;
			var options = text.match(regex);
			if (options !== null ) {
				var option = options[0];
				if (options !== null) {
					result = option.substring(1, option.length - 1)
				}
			}
			return result;
		}
		function finalSystem(text)
		{
			if (text === null )
				return "other";
			var result = getParenthesesStr(text);
			var resultArr = new Array();
			resultArr = result.split(";");
			var system = null;
			if (resultArr === null )
				return "other";
			if (resultArr[0] == 'macintosh')
			{
				var system =  /(mac os) ([0-9a-zA-Z\._]*) ([0-9\._]*)/.exec(resultArr[1]);
				if ( system !== null )
				{
					var reg = new RegExp('_',"g");
					system[0] = system[0].replace(reg,'.');
				}
			} else if (resultArr[0] == 'linux')
			{
				var system =  /(android) ([0-9\.]*)/.exec(resultArr[1]);
				if (system === null )
				{
					var system =  /(android) ([0-9\.]*)/.exec(resultArr[2]);
				}
			} else if (resultArr[0] == 'iphone' || resultArr[0] == 'ipad')
			{
				var system =  /(os) ([0-9\._]*)/.exec(resultArr[1]);
				if (system === null )
				{
					var system =  /(os) ([0-9\._]*)/.exec(resultArr[2]);
				}
				if ( system !== null )
				{
					var reg = new RegExp('_',"g");
					system[0] = system[0].replace('os','ios');
					system[0] = system[0].replace(reg,'.');
				}
			}
			var returnStr = system === null ? 'other' : system[0];
			return returnStr;
		}
		var _$csystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$cuseragent);
		_$csystem = _$csystem === null ? 'other' : _$csystem[0];
		if (_$csystem == 'other')
		{
			_$csystem = finalSystem(_$cuseragent);
			// 此处进行改动,记录 mac iphone android
		}
		var _$calexa			= (_$cuseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
		var _$cflash			= _$cflashok.f;
		var _$cpathname		= _$cdocument.location.pathname;
		var _$cfreferrer		= _$cgeturlparam(_$creferrer);
		var _$cfreferrerhost = _$cfreferrer.h;
		var _$cref			= _$cencode(_$cfreferrer.p);
		var _$cmapcode		= _$cgetmap(_$chashcode);
		var _$ctagcode		= _$cgettag(_$chashcode);
		var _$cpagecode		= _$cgetpagetag(_$chashcode);
		var _$csearch		= _$creplace_utm(_$cdocument.location.search);
		if( _$chashcode && 1 )
		{
			_$csearch		= _$csearch + _$chashcode;
		}
		_$cpathname			= _$cencode(_$cpathname + _$csearch);
		_$cpartner_website	= _$creadflashcookie('yfx_p');
		_$cmediumsource		= _$creadflashcookie('yfx_mr');
		_$cmediumsourcefirst	= _$creadflashcookie('yfx_mr_f');
		_$cedmemail			= _$creadflashcookie('yfx_e');
		var _$cis_can_record = 1;
		var _$cparseurlarr	= _$cparseurl(_$csearch);
		var _$cpmf_key		= _$ctypeof(_$cparseurlarr['k']);
		var _$cpmf_from		= _$ctypeof(_$cparseurlarr['f']);
		var _$cpmf_key_macth = _$ctypeof(_$cparseurlarr['m']);
		var _$cpmf_key_word  = _$ctypeof(_$cparseurlarr['w']);
		var _$cpmf_key_id	= _$ctypeof(_$cparseurlarr['kid']);
		var _$cpmf_key_tid	= _$ctypeof(_$cparseurlarr['tid']);
		var _$cpmf_gclid		= _$ctypeof(_$cparseurlarr['gclid']);
		var _$cpmf_bdclkid	= _$ctypeof(_$cparseurlarr['bdclkid']);
		var _$cpmf_group		= _$ctypeof(_$cparseurlarr['pmf_group']);
		var _$cpmf_medium	= _$ctypeof(_$cparseurlarr['pmf_medium']);
		var _$cpmf_source	= _$ctypeof(_$cparseurlarr['pmf_source']);
		var _$cpmf_match		= _$ctypeof(_$cparseurlarr['pmf_match']);
		var _$cpmf_keyword	= _$ctypeof(_$cparseurlarr['pmf_keyword']);
		var _$cpmf_advname	= _$ctypeof(_$cparseurlarr['pmf_advname']);
		var _$cpmf_partner	= _$ctypeof(_$cparseurlarr['pmf_partner']);
		var _$cpmf_email		= _$ctypeof(_$cparseurlarr['pmf_email']);
		var _$cpmf_area		= _$ctypeof(_$cparseurlarr['pmf_area']);
		var _$cpmf_id		= _$ctypeof(_$cparseurlarr['pmf_id']);
		var _$cpmf_tid		= _$ctypeof(_$cparseurlarr['pmf_tid']);
		var _$cpmf_tui_id	= _$cpmf_tid ? _$cpmf_tid : _$cpmf_key_tid;
		if (_$cpmf_tui_id) {
			_$csetflashcookie('yfx_f_id', _$cpmf_tui_id, 3650, _$cdomain, '');
		}
		else
		{
			_$cpmf_tui_id = _$creadflashcookie('yfx_f_id');
		}
		if(_$cpagecode.a && _$cpagecode.b && _$cpagecode.c)
		{
			var ac = 'pageab_'+_$cpagecode.a+'_'+_$cpagecode.c;
			_$csetflashcookie('yfx_p_ab_' + _$cpagecode.a, _$cpagecode.c, 30, _$cdomain, 'new');
			_trackData.push(['addclick','HTML',ac,_$cpagecode.c]);
		}
		if (_$cmapcode.a && _$cmapcode.b && _$cmapcode.c) 
		{
			_$cis_can_record = 0;
		}
		else if ( _$chashcode.indexOf('#visitorplay') > -1 )
		{
			_$cis_can_record = 0;
		}
		else if ( _$chashcode.indexOf('#onlinevisitor') > -1 )
		{
			_$cis_can_record = 0;
		}
		else if ( _$cpathname.indexOf('fromclickhot') > -1 )
		{
			_$cis_can_record = 0;
		}
		if( _$cpmf_medium && _$cpmf_medium.indexOf('market_type_') <= -1 )
		{
			_$cpmf_medium = "market_type_"+_$cpmf_medium;
		}
		var _$cpstac			= _$ctypeof(_$cparseurlarr['pstac']);
		if( ( _$cpmf_medium && _$cpmf_source ) || ( ( _$cpmf_gclid || _$cpmf_bdclkid ) && _$cpmf_key !== 'ppc' ) )
		{
			_$cpmf_key = 'ppc';
		}
		var _$cpmf_channel = _$cpmf_medium;
		var _$csearchkeyword  = _$cgetkeyword(_$creferrer,'_'+_$cpmf_key);
		if (_$cpmf_medium && _$cpmf_source) {
			_$cmediumsource = _$cpmf_group+'::'+_$cpmf_medium+'::'+_$cpmf_source+'::'+_$ckeywordsource+'::'+_$cpmf_match+'::'+_$cpmf_keyword+'::'+_$cfreferrerhost+'::'+_$cpmf_id+'::pmf_from_adv';
			_$csetflashcookie('yfx_mr', _$cmediumsource, 3650, _$cdomain, '');
			_$csetfirst(_$cmediumsourcefirst, _$cmediumsource);
			_$csetflashcookie('yfx_key', _$ckeywordkey, 3650, _$cdomain, '');
		}
		else if (_$cpmf_key && _$cpmf_from && _$cmediumsource.indexOf('pmf_from_adv') <= -1) {
			_$cpmf_channel = 'market_type_paid_search';
			_$cmediumsource = _$cpmf_group+'::market_type_paid_search::::'+_$ckeywordsource+'::'+_$cpmf_key_macth+'::'+_$cpmf_key_word+'::'+_$cfreferrerhost+'::'+_$cpmf_key_id+'_'+_$cpmf_from+'_'+_$cpmf_key+'::pmf_from_paid_search';
			_$csetflashcookie('yfx_mr', _$cmediumsource, 3650, _$cdomain, '');
			_$csetfirst(_$cmediumsourcefirst, _$cmediumsource);
			_$csetflashcookie('yfx_key', _$ckeywordkey, 3650, _$cdomain, '');
		}
		else if (_$ckeywordsource && _$cmediumsource.indexOf('pmf_from_paid_search') <= -1 ) {
			_$cpmf_channel = 'market_type_free_search';
			_$cmediumsource = _$cpmf_group+'::market_type_free_search::::'+_$ckeywordsource+'::::::'+_$cfreferrerhost+'::::pmf_from_free_search';
			_$csetflashcookie('yfx_mr', _$cmediumsource, 3650, _$cdomain, '');
			_$csetfirst(_$cmediumsourcefirst, _$cmediumsource);
			_$csetflashcookie('yfx_key', _$ckeywordkey, 3650, _$cdomain, '');
		}
		_$ckeywordkey = _$creadcookie('yfx_key');
		if (_$cpmf_partner) {
			_$cpartner_website = _$cpmf_partner;
			_$csetflashcookie('yfx_p', _$cpartner_website, 3650, _$cdomain, '')
		}
		if (_$cpmf_email) {
			_$cedmemail = _$cpmf_group+'::'+_$cpmf_medium+'::'+_$cpmf_source+'::'+_$cpmf_email+'::'+_$cpmf_area+'::pmf_from_edm';
			_$csetflashcookie('yfx_e', _$cedmemail, 3650, _$cdomain, '')
		}
		_$cmediumsourcefirst = _$cmediumsourcefirst == _$cmediumsource ? 'same' : _$cmediumsource;
		var _$ccourl = _$ccounturl_logcount + '?WS=' + _$cwebsite + '&RD=common&SWS='+_$cteststr(_$cpartner_website)+'&SWSID='+_$cteststr(_Schannel_website_id)+'&SWSPID='+_$cteststr(_Schannel_webshop_id)+'&JSVER=' + _$cVersion + '&TDT='+_$cteststr(_trackDataType)+'&UC=' + _$cusercookie + '&LUC=' + (_$cserusercookie==_$cusercookie?'same':_$cserusercookie) + '&VUC=' + _$cvisittime + '&FS=' + _$cfreferrerhost + '&RF=' + _$cencode(_$cref) + '&PS=' + _$chostname + '&PU=' + _$cpathname + _$csearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$ciserror + '&PC=' + _$cencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$clastmodify + '&LG=' + _$clanguage + '&CL=' + _$ccolor + '&CK=' + _$ccookie + '&SS=' + _$cscreensize + '&SCW=' + _$cclientwidth + '&SCH=' + _$cclientheight + '&SSH=' + _$cscrollheight + '&FT=' + _$cfirsttime + '&LT=' + _$clasttime + '&DL=' + _$cdowntime + '&FL='+_$cflash+'&CKT='+cookietype+'&JV='+_$cjava+'&AL=' + _$calexa + '&SY=' + _$cencode(_$csystem) + '&BR=' + _$cencode(_$cbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$cencode(_$cusername) + '&UID=' + _$cencode(_$cuserid) + '&URT=' + _$cencode(_$cuserregtime) + '&UA=' + _$cencode(_$cuserage) + '&US=' + _$cencode(_$cusersex) + '&TID=' + _$cencode(_$cpmf_tui_id) + '&MT=' + _$ctelphone + '&FMSRC='+_$cencode(_$cmediumsourcefirst)+'&MSRC='+_$cencode(_$cmediumsource)+'&MSCH=&EDM='+_$cencode(_$cedmemail)+'&RC=' + _$creturncount + '&SHPIC=&MID=' + _$crandomid + '&TT=' + _$cencode(_$ctitle) + "&CHK=" + _$cunicode(_$cwebsite+_$crandomid) + "&SHT=" + _$cdomain + "&RDM=" + Math.random();
		var _$cclickhotokstr = true;
		function _$ccreatejs()
		{
			if (_$cmapcode.a && _$cmapcode.b && _$cmapcode.c) 
			{
				_$cclickhotokstr = false;
				var _$curl = _$ccounturl + '/clickareamap.js.php';
				var _$cobj = _$cdocument.createElement('script');
				_$cobj.type = 'text/javascript';
				_$cobj.async = true;
				_$cobj.id = 'clickareamap_id';
				_$cobj.charset = 'utf-8';
				
				var _$cpage_site = _$chostname;
				var _$cpath_name = _$cpathname;
				if(_$cpathname.indexOf('clickhotcount')>-1 && _$cmapcode.ht && _$cmapcode.pu)
				{
					_$cpage_site = _$cmapcode.ht;
					_$cpath_name = _$cmapcode.pu;
				}	
				var _$cdurl = _$curl + '?jsprefix=yfx_&clicktype=' + _$cmapcode.a + '&areatype=' + _$cmapcode.b + '&website=' + _$cmapcode.d + '&server=' + _$cmapcode.h + '&starttime=' + _$creadcookie('yfxm_s_d') + '&endtime=' + _$creadcookie('yfxm_e_d') + '&fromtype=' + _$creadcookie('yfxm_f') + '&pagesite=' + _$cpage_site + '&pageurl=' + _$cpath_name + '&pagegroup=' + _$cmapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$cmapcode.c+'&clickmapposition=' + _$cmapcode.e+'&counturl='+_$cencode(_$ccounturl)+'&type='+_$cmapcode.j+'&chose='+_$cmapcode.p+'&first='+_$cmapcode.q+'&order='+_$cmapcode.r + '&hashcode=' + _$cencode(_$chashcode.substr(1));
				_$cdocument.getElementsByTagName('head').item(0).appendChild(_$cobj);
				setTimeout("_$cdocument.getElementById('clickareamap_id').src='"+_$cdurl+"'; ",1500);
			}
/*
			if ( 30 )
			{
				var _$curl = _$ccounturl + '/onlinevisite.js.php';
				var _$cobj = _$cdocument.createElement('script');
				_$cobj.type = 'text/javascript';
				_$cobj.async = true;
				_$cobj.id = 'onlinevisite_id';
				_$cobj.charset = 'utf-8';
				var _$cdurl = _$curl + '?counturl=' + _$cencode(_$ccounturl) + '&WS='+ _$cwebsite + '&CK=' + _$cencode(_$cusercookie) +'&UN=' + _$cencode(_$cusername) +'&clientw='+_$cclientwidth+'&clienth='+_$cclientheight+'&platform='+_$csystem + '&rand=' + Math.random();
				_$cdocument.getElementsByTagName('head').item(0).appendChild(_$cobj);
				setTimeout("_$cdocument.getElementById('onlinevisite_id').src='"+_$cdurl+"'; ",1600);
			}
			*/
			if ( _$chashcode.indexOf('#visitorplay') > -1 )
			{
				if ( _$chashcode.indexOf('|dtest') > -1 )
				var _$curl = '//test.yeefx.cn/phpstat/visitorplay.js.php';
				else
				var _$curl = _$ccounturl + '/visitorplay.js.php';
				var _$cobj = _$cdocument.createElement('script');
				_$cobj.type = 'text/javascript';
				_$cobj.async = true;
				_$cobj.id = 'visitorplay_id';
				_$cobj.charset = 'utf-8';
				var _$cdurl = _$curl + '?counturl=' + _$cencode(_$ccounturl) + '&WS='+ _$cwebsite + '&pagesite=' + _$chostname + '&pageurl=' + _$cpathname + '&hashcode=' + _$cencode(_$chashcode.substr(1)) + '&width=' + _$cclientwidth + '&rand=' + Math.random();
				_$cdocument.getElementsByTagName('head').item(0).appendChild(_$cobj);
				setTimeout("_$cdocument.getElementById('visitorplay_id').src='"+_$cdurl+"'; ",1700);
			}
			if ( _$chashcode.indexOf('#onlinevisitor') > -1 )
			{
				if ( _$chashcode.indexOf('|dtest') > -1 )
				var _$curl = '//test.yeefx.cn/phpstat/onlinevisitor.js.php';
				else
				var _$curl = _$ccounturl + '/onlinevisitor.js.php';
				var _$cobj = _$cdocument.createElement('script');
				_$cobj.type = 'text/javascript';
				_$cobj.async = true;
				_$cobj.id = 'onlinevisitor_id';
				_$cobj.charset = 'utf-8';
				var _$cdurl = _$curl + '?counturl=' + _$cencode(_$ccounturl) + '&WS='+ _$cwebsite + '&pagesite=' + _$chostname + '&pageurl=' + _$cpathname + '&height=' + _$cclientheight + '&hashcode=' + _$cencode(_$chashcode.substr(1)) + '&rand=' + Math.random();
				_$cdocument.getElementsByTagName('head').item(0).appendChild(_$cobj);
				setTimeout("_$cdocument.getElementById('onlinevisitor_id').src='"+_$cdurl+"'; ",1800);
			}

			if( false )
			{
				if (_$ctagcode.a && _$ctagcode.b)
				{
					var _$cturl = _$ccounturl_proxy + '/optimizer.js.php';
					var _$ctobj = _$cdocument.createElement('script');
					_$ctobj.type = 'text/javascript';
					_$ctobj.async = true;
					_$ctobj.id = 'tagcode_id';
					_$ctobj.charset = 'utf-8';
					var _$cdurl = _$cturl + '?abtype=test&website=' + _$cwebsite + '&abtestid=' + _$ctagcode.a + '&tagcheckcode=' + _$ctagcode.b + "&rand="+Math.random();
					_$cdocument.getElementsByTagName('head').item(0).appendChild(_$ctobj);
					setTimeout("_$cdocument.getElementById('tagcode_id').src='"+_$cdurl+"'; ",1900);
				}
				else
				{
					var _$cturl = _$ccounturl_proxy + '/optimizer.js.php';
					var _$ctobj = _$cdocument.createElement('script');
					_$ctobj.type = 'text/javascript';
					_$ctobj.async = true;
					_$ctobj.id = 'tagcode_id';
					_$ctobj.charset = 'utf-8';
					var _$cdurl = _$cturl + '?abtype=show&website=' + _$cwebsite + "&prefix=_$c&rand="+Math.random();
					_$cdocument.getElementsByTagName('head').item(0).appendChild(_$ctobj);
					setTimeout("_$cdocument.getElementById('tagcode_id').src='"+_$cdurl+"'; ",2000);
				}
			}
			if( _Spageformjs )
			{
				var _$cturl = _$ccounturl_proxy + '/formtrans.js.php';
				var _$ctobj = _$cdocument.createElement('script');
				_$ctobj.type = 'text/javascript';
				_$ctobj.async = true;
				_$ctobj.id = 'formtrans_id';
				_$ctobj.charset = 'utf-8';
				if( _$cformlist && _$ccfre_f )
				{
					var _$cdurl = _$cturl + '?action=reaction&website=' + _$cwebsite + '&swebsite=' + _$cpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$cusercookie + '&luipcode=' + _$cserusercookie + '&formlist=' + _$cencode(_$cformlist) + '&pagesite=' + _$chostname + '&phone='+_$cencode(_$ctelphone)+'&system='+_$cencode(_$csystem)+'&medium='+_$cencode(_$cmediumsource)+'&marknum='+_$crandomid+'&prefix=_$c&rand='+Math.random();
				}
				if( _$cformhidden )
				{
					var _$cdurl = _$cturl + '?action=hidden&website=' + _$cwebsite + '&swebsite=' + _$cpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$cencode(_$cformlist) + '&prefix=_$c&rand='+Math.random();
				}
				_$cdocument.getElementsByTagName('head').item(0).appendChild(_$ctobj);
				setTimeout("_$cdocument.getElementById('formtrans_id').src='"+_$cdurl+"'; ",2100);
			}
		}
			var _$cformhiddenloop = 1;	
	var _$cclickhot;
	var _$cdoimgerr_2 = 1;
	var _$cclickhotok = 0;
	var _$cmessageid = '';
	var _$csendlog = 0;
	var _$cformhidden = 0||0;
	var _$cclickarray = new Array();
	var _$ccf_f = 1||0;
	var _$ccfre_f = 0||0;
	_$cclickarray[0]='(*)';;
	var _$cclickreg = '';
	if (_$cclickarray[0] == 'clickhotall') {
		_$cclickhotok = 1
	}
	function _$cdotest(r)
	{
		r = r+'';
		r = r.replace(/\\/g, '\\/');
		r = r.replace(/\//g, '\\/');
		r = r.replace(/\*/g, '(.*)');
		return r;
	}
	if (_$cclickhot !== 'clickhot' && _$cclickarray[0] !== 'clickhotall') {
		for (var ci = 0; ci < _$cclickarray.length; ci++) {
			if (_$cclickarray[ci].lastIndexOf('*') > - 1) {
				_$cclickarray[ci] = _$cdotest(_$cclickarray[ci]);
				if (_$cclickarray[ci].indexOf('/') === 0) {
					_$cclickarray[ci] = _$cclickarray[ci].substring(1)
				}
				_$cclickreg = eval('/' + _$cclickarray[ci] + '/ig');
				if (_$cclickreg.test(_$cpathname)) {
					_$cclickhotok = 1;
					break
				}
			} else {
				if (_$cclickarray[ci].indexOf('/') !== 0) {
					_$cclickarray[ci] = '/' + _$cclickarray[ci]
				}
				if (_$cclickarray[ci] == _$cpathname) {
					_$cclickhotok = 1;
					break
				}
			}
		}
	}
	var _$cclienturlstr = '';
	var _$cposarr = new Array();

	function _$ctimelong(ini) {
		var tl = _$cgt() - _$cstarttime;
		if (tl >= 1800000) {
			tl = 1000
		}
		if (ini) {
			tl = _$cgt() - _$ctimestart;
			_$ctimestart = _$cgt()
		}
		tl <= 0 ? 0 : tl;
		return tl
	}
	function _$csetformfield(a,b)
	{
		if( typeof( _$cformfielddetails[a][b] ) == null || typeof( _$cformfielddetails[a][b] ) == 'undefined' )
		{
			_$cformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
		}
	}
	function _$cinitevent(init) {
		var _$cfn;
		var _$cfc;
		_$caddlistener(window, 'unload', _$cunload);
		_$caddlistener(window, 'blur', _$cunload);
		
		if( _$ccf_f )
		{
			for (var a = 0; a < _$cdocument.forms.length; a++) {
				_$cfn = _$cdocument.forms.item(a);
				_$cfc = _$cfn.name || _$cfn.id;
				if( _$cfc && _$ccfre_f )
				{
					_$cformlist = _$cformlist + _$cfc + "::" + _$cfn.action + "||";
					_$cformdetails[_$cfc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
					_$cformfielddetails[_$cfc] = {};
				}
				_$cinitform(_$cfn);
			}
			_$cgetelementby(['form'], ['submit'], _$csubmit);
			_$cgetelementby(['select', 'input', 'textarea'], ['change'], _$cchangeselect);
			_$cgetelementby(['select', 'input', 'textarea','button'], ['blur'], _$cfocus);
			_$cgetelementby(['select', 'input', 'textarea','button'], ['click'], _$cclick);
		}

		 if (init && 1) {
			_$caddlistener(_$cdocument, 'click', _$cclick);
			_$caddlistener(_$cdocument, 'mousemove', _$cmousemove)
		}
		if (init && _$ccf_f && 0) {
			_$caddlistener(_$cdocument, 'keydown', _$ckeydown);
			_$caddlistener(_$cdocument, 'keyup', _$ckeyup);
		}
	}
	function _$crecord(a) {
		var s = '';
		if (parseInt(Math.random() * 100) < 9*10 && a.a === 'msmv') return;
		switch (a.a) {
		case 'msmv':
			s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$cencode(a.i) + '::' + a.p;
			_$ccountdourl(s);
			break;
		case 'clk':
		case 'fus':
		case 'link':
		case 'chn':
		case 'down':
		case 'onkey':
		case 'clkout':
		case 'submit':
			s = '||' + a.a + '::' + _$cencode(a.tn) + '::' + _$cencode(a.i) + '::' + _$cencode(a.n) + '::' + a.tp + '::' + _$cencode(a.v) + '::' + _$cencode(a.h) + '::' + _$cencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$cencode(a.fn) + '::' + _$cencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$cencode(a.msg) + '::' + _$cencode(a.ak) + '::' + _$cencode(a.eor);
			_$ccountdourl(s);
			break;
		default:
			_$ccountdourl(a.a);
			break
		}
	}
	function _$cunload() {
		_$cloadgif(_$cclienturlstr);
		_$cclienturlstr = ''
	}
	function _$ccountdourl(s) {
		_$cclienturlstr += s;
		if (_$cclienturlstr.length > 2048 && s) {
			_$cloadgif(_$cclienturlstr);
			_$cclienturlstr = ''
		}
	}
	function _$cdownload(p) {
		var ckda = new Array();
		ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';;
		var _pin = p.toLowerCase();
		for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
			if (_pin.indexOf(ckda[ckdi]) > - 1) {
				return 1
			}
		}
		return 0
	}
	function _$cclickout(h) {
		var ckoa = new Array();
		
		if(ckoa.length<=0)
		{
			return false;
		}
		var hi = h.toLowerCase();
		for (var ci = 0; ci < ckoa.length; ci++) {
				ckoa[ci] = _$cdotest(ckoa[ci]);
		}
		var reg = eval('/'+ckoa.join('|')+'/ig');
		return (!reg.test(hi));
	}
	function _$ctrackevent()
	{
		var s = '';
		var rs = '';
		var td = window._trackData;
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			s = _trackEvent.trackActionUrl;
			_trackEvent.trackActionUrl = '';
		}
		else if( td && td.length )
		{
			for(var k in td)
			{
				if( !isNaN(k) )
				{
					for(var kk in td[k])
					{
						if( td[k]['0'] == 'viewgoods' )
						{
							for(var rd in _$crefid)
							{
								rs = _$ctypeof(_$cparseurlarr[rd]);
								if( rs )
								{
									td[k]['9'] = rs;
								}
							}
						}
						var jsonid = 0;
						var jsonarr = [];
						var jsonrarr = new Array();
						if( td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object' )
						{
							jsonarr = td[k]['3'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['3'] = jsonrarr.join('$');
						}
						if( td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object' )
						{
							jsonarr = td[k]['2'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['2'] = jsonrarr.join('$');
						}
						if( _$ctestnull(_Sorder_encode_url) === false )
						td[k][kk] = _$cencode(td[k][kk]);
					}
					if( td[k].length == 1 )
					{
						s += '||'+td[k]['0'];
					}
					else
					{
						s += '||'+(td[k].join('::'));
					}
				}
			}
			window._trackData = [];
		}
		return s;
	}
	function _$cdirecttrackevent()
	{
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			_$cloadgif('');
		}
		else if( window._trackData && window._trackData.length )
		{
			_$cloadgif('');
		}
	}
	function _$ctestissend()
	{
		var _byminclk = 10;
		var _ltime = _$cgt() - _$cstarttime;
		if (_$csendlog >= 10 && _ltime >= 60000 )
		{
			_byminclk = 5;
		}
		// console.log(_$csendlog,_byminclk,_ltime,(_$csendlog / Math.ceil(_ltime/60000)));
		if( _$csendlog >= _byminclk && _ltime >= 30000 && (_$csendlog / Math.ceil(_ltime/60000)) >= _byminclk )
		{
			return 0;
		}
		else
		{
			return 1;
		}
	}
	function _$cloadgif(gs) {
		if( _$cis_can_record == 0 )
		{
			return;
		}
		var gif = new Image();
		var clestr = gs + _$ctrackevent();
		if( clestr.length <= 0 ) {return;}
		_$csendlog++;
		if ( _$ctestissend() == 0 )
		{
			return;
		}
		gif.onload = function () {
			gif.onload = null;
			_$cdoimgerr_2 = 1;
		};
		gif.onerror = function () {
		   _$cloadgif(gs);_$cdoimgerr_2++;
		};
		if( _$cdoimgerr_2 <= 2 )
		{
			gif.src = _$ccounturl_logcount + '?WS=' + _$cwebsite + '&RD=record&SWS='+_$cteststr(_$cpartner_website)+'&SWSID='+_$cteststr(_Schannel_website_id)+'&SWSPID='+_$cteststr(_Schannel_webshop_id)+'&JSVER=' + _$cVersion + '&TDT='+_$cteststr(_trackDataType)+'&UC=' + _$cusercookie + '&LUC=' + (_$cserusercookie==_$cusercookie?'same':_$cserusercookie) + '&VUC=' + _$cvisittime + '&UN=' + _$cencode(_$cusername) + '&UID=' + _$cencode(_$cuserid) + '&RC=' + _$creturncount + '&PS=' + _$chostname + '&PU=' + _$cpathname + '&PT=' + _Spage_type + '&FS=' + _$cfreferrerhost + '&RF=' + _$cencode(_$cref) + '&KW=' + _$ckeywordkey + '&SS=' + _$cscreensize + '&SW=' + _$cscreen_width() + '&SCW=' + _$cclient_width() + '&SCH=' + _$cclientheight + '&SSH=' + _$cscrollheight + '&BR=' + _$cencode(_$cbrowser) + '&LTL=' + Math.ceil(_$ctimelong(1) / 1000) + '&MSRC='+_$cencode(_$cmediumsource)+'&EDM='+_$cencode(_$cedmemail)+'&CLE=' + clestr + '&MID=' + _$crandomid+'&CHK=' + _$cunicode(_$cwebsite+_$crandomid) + '&RDM='+Math.random();
		}
		if( _$cpstac.toLowerCase() == 'debug' )
		_$cmessage(gif.src);
	}
	function _$caddlistener(a, b, c) {
		if (a.addEventListener) {
			a.addEventListener(b, c, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent('on' + b, c)
			}
		}
	}
	function _$cclick(ev) {
		_$ccountimg(ev);
		var b = ev.srcElement || ev.target;
		if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$cchange(b, b.checked)
		}
		if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
			_$csubmit_button(b, ev)
		}
	}
	function _$crecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
	{
		var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
		var $error = _$cerrorcode || '';
		_$cerrorcode = '';
		$x = _$cposition(ele).x;
		$y = _$cposition(ele).y;
		$p = ele.type;
		if(type == 'fus')
		{
			$v = _$cgetvalue(ele);
		}
		if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
		{
			$v = _$cencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
			$x = _$ccltxy(eleev).x;
			$y = _$ccltxy(eleev).y;
			$e = _$cencode(ele.getAttribute('phpstatevent') || '');
		}
		if(type == 'clk' && ele.tagName!=='A')
		{
			$v = _$cgetvalue(ele);
			$x = _$ccltxy(eleev).x;
			$y = _$ccltxy(eleev).y;
		}
		if(type == 'chn')
		{
			$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
			$v = _$cgetvalue(ele);
		}
		if(type == 'onkey')
		{
			$v = eff;
			$typekey = eleslt;
		}
		if(type == 'msmv')
		{
			$x = _$ccltxy(eleev).x;
			$y = _$ccltxy(eleev).y;
		}
		if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
		{		
			$gfn = _$cgetformname(ele);
			$fn = $gfn.n;
			$fa = $gfn.a;
		}
		if(type == 'submit')
		{
			$gfn	= _$cgetformname(ele);
			$fn		= $gfn.n;
			$fa		= $gfn.a;
		}	
		if( fname !== '' )
		{
			$fn = fname;
		}
		if( $p === 'password' && $v )
		{
			$v = '********';
		}
		$fa = '';
		var $ig={pose:'',tagid:''};
		$ig = _$cinindeof(ele);
		var $fmsg = '';
		if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
		{
			$fmsg = window._trackFormMsg;
		}
		window._trackFormMsg = '';
		
		if( $fn && $fa && _$ccfre_f )
		{
			var $eln_id = ele.name || ele.id;
			$eln_id = $eln_id || 'unname';
			_$csetformfield($fn,$eln_id);
			if( $eln_id != 'unname' )
			{
				if(type == 'chn')
				{
					_$cformdetails[$fn].change++;
					_$cformfielddetails[$fn][$eln_id].change++;
					_$cformdetails[$fn].inputinfo = $v;
					_$cformfielddetails[$fn][$eln_id].inputinfo = $v;
				}
				if(type == 'onkey')
				{
					_$cformdetails[$fn].onkey++;
					_$cformfielddetails[$fn][$eln_id].onkey++;
				}
				if(type == 'fus')
				{
					_$cformdetails[$fn].focus++;
					_$cformfielddetails[$fn][$eln_id].focus++;
				}
				if(type == 'submit')
				{
					_$cformdetails[$fn].submits++;
					_$cformfielddetails[$fn][$eln_id].submits++;
				}
				if( $fmsg && $fmsg.indexOf('==failed') )
				{			
					_$cformdetails[$fn].errors++;
					_$cformfielddetails[$fn][$eln_id].errors++;
				}
				_$cformdetails[$fn].times = _$ctimelong(0);
				_$cformfielddetails[$fn][$eln_id].times = _$ctimelong(0);
			}
		}

		_$crecord({
				a:  type,
				ak:  $typekey,
				p:  $ig.pose,
				h:  host,
				u:  url,
				t:  _$ctimelong(0),
				n:  (_$ctestobject(ele.name) || ''),
				i:  ($ig.tagid || _$ctestobject(ele.id)),
				v:  $v,
				x:  $x,
				y:  $y,
				e:  $e,
				tp: (_$ctestobject(ele.type) || ''),
				tn: (_$ctestobject(ele.tagName) || ''),
				fn: $fn,
				fa: $fa,
				ef: eff,
				msg: $fmsg,
				eor: $error
			});
	}
	function _$cfocus(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		if (b && /input|textarea|select/i.test(b.tagName)) {
			_$crecodeelement(b,ev,'','fus','','',0,'');
		}
	}
	function _$conkey(ev,vc) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = ev.keyCode || ev.charCode;
		if (/input|textarea|select/i.test(b.tagName)) {
			_$crecodeelement(b,ev,vc,'onkey','','',c,'');
		}
	}
	function _$ckeydown(ev)
	{
		_$conkey(ev,'k_d');
	}
	function _$ckeyup(ev)
	{
		_$conkey(ev,'k_u');
	}
	function _$ckeypress(ev)
	{
		_$conkey(ev,'k_p');
	}
	function _$ccountimg(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = b;
		while (b && (!b.href || /img/i.test(b.tagName))) {
			b = b.parentNode
		}
		var gettype = 'clk';
		var chu = clkhost = clkurl = '';
		if (b) {
			chu = _$cgeturlparam(b.href);
			clkhost = chu.h;
			clkurl = chu.p;
			_$crecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			if (_$cdownload(b.href)) {
				gettype = 'down';
				_$crecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
			if (_$cclickout(clkhost)) {
				gettype = 'clkout';			
				_$crecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
		}
		if (c&&b!=c) {
			var eff = 0;var effid = 'id';
			if ((/img|input|textarea|select|a/i.test(c.tagName))) {
				eff = 1
			}
			if ((/img/i.test(c.tagName)) && chu) {
				effid = c.id || '';
			}
			if( effid == 'id' || effid )
			{
				_$crecodeelement(c,ev,'','clk','','',eff,'');
			}
		}
	}
	function _$cscreen_width() {
		return _$cdocument.documentElement.scrollWidth;
	}
	function _$cclient_width() {
		return _$cdocument.documentElement.clientWidth;
	}
	function _$ctestnull(r)
	{
		if( typeof(r) === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$ctestobject(r)
	{
		if( typeof(r) === 'object' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
	function _$cinindeof(c) {
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var i = 0;
		var b = c;
		var phptag = '';
		var fetchtag = 'phptag';
		var parentnodes = new Array();
		var resultarray = new Array();
		var resultarraystr = new Array();
		while (b && b !== _$cdocument.body && b !== _$cdocument.documentElement) {
			var ch = 1;
			var g = new Array();
			if(!_$ctestnull(b.parentNode)||!b.parentNode) break;
			g = b.parentNode.childNodes;
			for (var e = 0; e < g.length; e++) {
				if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
					if (g[e] == b) {
						break
					}
					ch++
				}
			}
			if( ch < 10 )
			{
				parentnodes[i] = '0'+ch;
			}
			else
			{
				parentnodes[i] = ch;
			}
			phptag = phptag == '' ? (b.getAttribute(fetchtag)||'') : phptag;
			b = b.parentNode;
			i++
		}
		resultarray = parentnodes.reverse();
		resultarraystr = resultarray.join('-');
		return {pose:resultarraystr,tagid:phptag}
	}
	function _$cgetformname(c)
	{
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var b = c;
		if(/input|textarea|select|img|button/i.test(c.tagName))
		{
			var i = 0;
			while ( b && b.tagName !== 'FORM' ) 
			{
				if( b.tagName == 'BODY' )break;
				b = b.parentNode;
				i++;
			}
		}
		if( b && b.tagName == 'FORM' )
		{
			return {
				n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
				a: (b.getAttribute('action') || _$cpathname)
			}
		}
		else
		{
			return {
				n: '',
				a: ''
			}
		}
	}
	function _$cposition(b) {
		var a = {
			x: 0,
			y: 0
		};
		while (b.offsetParent) {
			a.x += parseInt(b.offsetLeft);
			a.y += parseInt(b.offsetTop);
			b = b.offsetParent
		}
		a.x += parseInt(b.offsetLeft);
		a.y += parseInt(b.offsetTop);
		return a
	}
	function _$cgetxy() {
		var x = 0;
		var y = 0;
		if (_$cdocument.body.scrollTop) {
			x = parseInt(_$cdocument.body.scrollLeft);
			y = parseInt(_$cdocument.body.scrollTop);
		} else {
			x = parseInt(_$cdocument.documentElement.scrollLeft);
			y = parseInt(_$cdocument.documentElement.scrollTop);
		};
		return {
			x: x,
			y: y
		}
	}

	function _$cistable(a) {
		return (a.tagName == 'TBODY' || a.tagName == 'TR')
	}
	function _$cchangeselect(c) {
		var b = c.srcElement || c.target;
		if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$cchange(b, b.checked)
		} else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
			_$cchange(b, b.value.length)
		} else if (/textarea/i.test(b.tagName)) {
			_$cchange(b, _$ctxt_len(b.value))
		} else if (/select/i.test(b.tagName)) {
			_$cchange(b, b.selectedIndex)
		}
	}
	function _$cchange(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return;
		};
		_$crecodeelement(b,'',a,'chn','','',0,'');
		_$cgetby_idname(b);
		_$chiddenele(b,b);
		b.lastvalue = a;
	}
	function _$cchange_com(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return
		};
		b.lastvalue = a;
	}
	function _$cinitform(b) 
	{
		for (var a = 0; a < b.elements.length; a++) {
			var c = b.elements[a];
			if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
			{
				_$cchange_com(c, c.checked);
			} 
			else
			{
				if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
				{
					_$cchange_com(c, c.value.length);
				} 
				else 
				{
					if (/textarea/i.test(c.tagName)) 
					{
						_$cchange_com(c, _$ctxt_len(c.value));
					} 
					else 
					{
						if (/select/i.test(c.tagName)) 
						{
							_$cchange_com(c, c.selectedIndex);
						}
					}
				}
			}
		}
	}
	function _$ctxt_len(a) {
		return a.length - (a.split("\r").length - 1)
	}
	function _$ccltxy(ev) {
		if (!ev) {
			var ev = event
		}
		var y = parseInt(ev.clientY) + parseInt(_$cgetxy().y) - parseInt(_$cdocument.getElementsByTagName('body')[0].offsetTop);
		var x = parseInt(ev.clientX) + parseInt(_$cgetxy().x) - parseInt(_$cdocument.getElementsByTagName('body')[0].offsetLeft);
		if (x > 5000 || x < 0) {
			x = 0
		}
		if (y > 50000 || y < 0) {
			y = 0
		}
		return {
			x: x,
			y: y
		}
	}
	function _$cmousemove(ev) {
		var t = _$cgt();
		var e = ev.srcElement || ev.target;
		if ((t - _$cloadtime) > (parseInt(9) + 1) * 100) {_$crecodeelement(e,ev,0,'msmv','','','','');}
		_$cloadtime = t
	}

	function _$cgetvalue(a) {
		var rv = '';
		if (a.tagName == 'SELECT') {
			rv = a.options[a.selectedIndex].text || ''
		}
		else {
			rv = a.value || '';
			if(rv==''&&_$ctestchildren(a)==1)
			{
				rv = a.innerHTML.replace(/<[^>].*?>/g, '') || '';
			}
		}
		rv = _$cteststr(_$cencode(rv.replace(/\s/g, '')));
		return rv.substring(0, 512)
	}
	function _$csubmit(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.currentTarget;
		if( b )
		{
			_$crecodeelement(b,ev,'','submit','','',0,'');
		}
	}
	function _$chiddenele(f,t)
	{
		var loop = 1;
		while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
		{
			if( f && f.tagName === 'BODY' )break;
			f = f.parentNode;
			t = f;
			loop++;
		}
		if( f && f.tagName === 'FORM' && _$cformhiddenloop <= 10 ) 
		{
			var b = t.childNodes;
			for (var i = 0; i < b.length; i++) 
			{
				if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display === 'none')) 
				{
					var b_lastvalue = _$cteststr(_$cgetvalue(b[i]));
					b[i].lastvalue = _$cteststr(b[i].lastvalue);
					if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
					{
						_$crecodeelement(b[i],'','','chn','','',0,'');
						b[i].lastvalue = b_lastvalue;
					}
				}
				else
				{
					_$chiddenele(f,b[i]);
					_$cformhiddenloop++;
				}
			}
		}
	}
	function _$ctestchildren(f)
	{
		if( f ) 
		{
			return f.childNodes.length;
		}
		else
		{
			return 0;
		}
	}
	function _$csubmit_button(b,ev) {
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
		if( b && b.tagName == 'FORM' )
		{
			_$crecodeelement(b,ev,'','submit','','',0,'');
			_$cgetby_idname(b);
			_$chiddenele(b,b);
		}
	}
	function _$cgetby_idname(b)
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}

		if( b && b.tagName === 'FORM' && b.name && _$cformlist && _$cformhidden )
		{
			var gh = phpstat_do_hidden_form(b.name);
			for(var ghk in gh)
			{
				var _fidv = _$cteststr(_$cid(gh[ghk]['ffield']));
				if( _fidv === '' )
				{
					var _fidva = _$cname(gh[ghk]['ffield']);	
					if( _fidva.length > 0 )
					{
						_fidv = _fidva['0'];
					}
				}
				if( _fidv )
				{
					var b_lastvalue = _$cteststr(_$cgetvalue(_fidv));
					_fidv.lastvalue = _$cteststr(_fidv.lastvalue);
					if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
					{
						_$crecodeelement(_fidv,'','','chn','','',0,b.name);
						_fidv.lastvalue = b_lastvalue;
					}
				}
			}
		}
	}
	function _$cgetelementby(b, f, a) {
		for (var d = 0; d < b.length; d++) {
			var j = _$cdocument.getElementsByTagName(b[d]);
			for (var c = 0; c < j.length; c++) {
				for (var g = 0; g < f.length; g++) {
					_$caddlistener(j[c], f[g], a)
				}
			}
		}
	}
	function _$cgetmessageid(a) {
		if (a.toLowerCase() == 'debug') {
			setTimeout(function(){var _$cobj = _$cdocument.createElement("div");
			_$cobj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$ccourl+'</textarea>';
			_$cdocument.getElementsByTagName('body').item(0).appendChild(_$cobj);_$cmessageid = _$cdocument.getElementById('pst_messageid');},3000);     
		}
	}
	function _$cmessage(a) {
		if (_$cmessageid) {
			_$cmessageid.value = a;
		}
	}
	_$cgetmessageid(_$cpstac);
	_$cclickhotokstr ? setTimeout(function(){_$cinitevent(_$cclickhotok);},3000) : '';
	window.setInterval(function(){_$cunload();}, 5000);
	_$cdirecttrackevent();
		_$cjsgif(_$ccourl);
		_$ccreatejs();
		_$cshare(_$cusercookie);
	}
	function _$cshare(userunique){};;
	if( _$cprotocol.toString().toLowerCase().indexOf('http') > -1 )
	{
		if(_$cisdownloadflash === 0)
		{			
			var ghostvar = _$csplitdomain(_$cthehostname);
			var _$cclientcookie = _$creadmapcookie("yfx_c_c_g_u_id");
			if( _$cchkdomain && _$ccounturl.indexOf(_$cchkdomain) > -1 && _$cclientcookie === '' )
			{
				_$cgetservercookie(ghostvar,'outfunc');
			}
			else
			{
				_$cphpstat('HttpCookie','');
			}
		}
		else
		{
			_$cphpstat_flash_object = new phpstatCookie({

					namespace: 'namespace_phpstat',
					swf_url: _$ccounturl_proxy+'/cookie/storage.swf?'+Math.random(), 
					debug: false,
					onready: function() {
					_$cphpstat('FlashCookie','');
					},
					onerror: function() {
					_$cphpstat('FlashCookie-err','');
					}
				});
		}
	}
}
catch(e)
{
};/*0b85647c761c6d334d3f797f4941171b*/