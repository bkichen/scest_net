
(function () {
    //�ж��Ƿ�֧��placeholder 
    function isPlaceholer() {
        var input = document.createElement('input');
        return "placeholder" in input;
    }
    //��֧�ֵĴ��� 
    if (!isPlaceholer()) {
        //����һ���� 
        function Placeholder(obj) {
            this.input = obj;
            this.label = document.createElement('label');
            this.label.innerHTML = obj.getAttribute('placeholder');
            this.label.style.cssText = 'position:absolute; text-indent:4px;color:#999999; font-size:14px;';
            if (obj.value != '') {
                this.label.style.display = 'none';
            }
            this.init();
        }
        Placeholder.prototype = {
            //ȡλ�� 
            getxy: function (obj) {
                var left, top;
                if (document.documentElement.getBoundingClientRect) {
                    var html = document.documentElement,
                        body = document.body,
                        pos = obj.getBoundingClientRect(),
                        st = html.scrollTop || body.scrollTop,
                        sl = html.scrollLeft || body.scrollLeft,
                        ct = html.clientTop || body.clientTop,
                        cl = html.clientLeft || body.clientLeft;
                    left = pos.left + sl - cl;
                    top = pos.top + st - ct;
                }
                else {
                    while (obj) {
                        left += obj.offsetLeft;
                        top += obj.offsetTop;
                        obj = obj.offsetParent;
                    }
                }
                return {
                    left: left,
                    top: top
                }
            },
            //ȡ��� 
            getwh: function (obj) {
                return {
                    w: obj.offsetWidth,
                    h: obj.offsetHeight
                }
            },
            //��ӿ��ֵ���� 
            setStyles: function (obj, styles) {
                for (var p in styles) {
                    obj.style[p] = styles[p] + 'px';
                }
            },
            init: function () {
                var label = this.label,
                    input = this.input,
                    xy = this.getxy(input);
                this.setStyles(label, {'height':22, 'lineHeight': 22, 'left': 10, 'top': 13 });
                input.parentNode.appendChild(label);
                label.onclick = function () {
                    this.style.display = "none";
                    input.focus();
                }
                input.onfocus = function () {
                    label.style.display = "none";
                };
                input.onblur = function () {
                    if (this.value == "") {
                        label.style.display = "block";
                    }
                };
            }
        }
        var inpColl = document.getElementsByTagName('input'),
            textColl = document.getElementsByTagName('textarea');
        //html����ת��Ϊ���� 
        function toArray(coll) {
            for (var i = 0, a = [], len = coll.length; i < len; i++) {
                a[i] = coll[i];
            }
            return a;
        }
        var inpArr = toArray(inpColl),
            textArr = toArray(textColl),
            placeholderArr = inpArr.concat(textArr);
        for (var i = 0; i < placeholderArr.length; i++) {
            if (placeholderArr[i].getAttribute('placeholder')) {
                new Placeholder(placeholderArr[i]);
            }
        }
    }
})() 