/*! sendgrid-subscription-widget - v0.2.0 - 2014-06-20 */
var jsonParse=function(){function a(a,b,c){return b?g[b]:String.fromCharCode(parseInt(c,16))}var b="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",c='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',d='(?:"'+c+'*")',e=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+b+"|"+d+")","g"),f=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),g={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},h=new String(""),i="\\",j=Object.hasOwnProperty;return function(b,c){var d,g=b.match(e),k=g[0],l=!1;"{"===k?d={}:"["===k?d=[]:(d=[],l=!0);for(var m,n=[d],o=1-l,p=g.length;p>o;++o){k=g[o];var q;switch(k.charCodeAt(0)){default:q=n[0],q[m||q.length]=+k,m=void 0;break;case 34:if(k=k.substring(1,k.length-1),-1!==k.indexOf(i)&&(k=k.replace(f,a)),q=n[0],!m){if(!(q instanceof Array)){m=k||h;break}m=q.length}q[m]=k,m=void 0;break;case 91:q=n[0],n.unshift(q[m||q.length]=[]),m=void 0;break;case 93:n.shift();break;case 102:q=n[0],q[m||q.length]=!1,m=void 0;break;case 110:q=n[0],q[m||q.length]=null,m=void 0;break;case 116:q=n[0],q[m||q.length]=!0,m=void 0;break;case 123:q=n[0],n.unshift(q[m||q.length]={}),m=void 0;break;case 125:n.shift()}}if(l){if(1!==n.length)throw new Error;d=d[0]}else if(n.length)throw new Error;if(c){var r=function(a,b){var d=a[b];if(d&&"object"==typeof d){var e=null;for(var f in d)if(j.call(d,f)&&d!==a){var g=r(d,f);void 0!==g?d[f]=g:(e||(e=[]),e.push(f))}if(e)for(var h=e.length;--h>=0;)delete d[e[h]]}return c.call(a,b,d)};d=r({"":d},"")}return d}}();!function(){var a={css:!0,messages:!0};"undefined"==typeof window.hasOwnProperty&&(window.hasOwnProperty=function(a){return this[a]?!0:!1});var b=function(a){return"undefined"!=typeof JSON?JSON.parse(a):jsonParse(a)},c="sendgrid-subscription-widget",d=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)window.hasOwnProperty.call(a,c)&&b.push(c);return b},e=function(a){return a},f=function(a,b,c){if(null!=a)if(Array.prototype.forEach&&a.forEach===Array.prototype.forEach)a.forEach(b,c);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(c,a[e],e,a)==={})return}else for(var g=d(a),e=0,f=g.length;f>e;e++)if(b.call(c,a[g[e]],g[e],a)==={})return},g=function(a){return"function"==typeof a?a:function(b){return b[a]}},h=function(a,b,c,d){c=null==c?e:g(c);for(var f=c.call(d,b),h=0,i=a.length;i>h;){var j=h+i>>>1;c.call(d,a[j])<f?h=j+1:i=j}return h},i=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=h(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(Array.prototype.indexOf&&a.indexOf===Array.prototype.indexOf)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},j=function(a){return f(Array.prototype.slice.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},k={onload:1,onunload:1,onblur:1,onchange:1,onfocus:1,onreset:1,onselect:1,onsubmit:1,onabort:1,onkeydown:1,onkeypress:1,onkeyup:1,onclick:1,ondblclick:1,onmousedown:1,onmousemove:1,onmouseout:1,onmouseover:1,onmouseup:1},l=function(a,b){a.dispatchEvent?a.dispatchEvent(b):a.fireEvent&&k["on"+b.eventName]?a.fireEvent("on"+b.eventType,b):a[b.eventName]?a[b.eventName]():a["on"+b.eventName]&&a["on"+b.eventName]()};if(window.CustomEvent){var m=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c};m.prototype=window.CustomEvent.prototype}else{var m=function(a){var b;return document.createEvent?(b=document.createEvent("HTMLEvents"),b.initEvent(a,!0,!0)):document.createEventObject&&(b=document.createEventObject(),b.eventType=a),b.eventName=a,b};if(!window.Element){Element=function(){};var n=document.createElement;document.createElement=function(a){var b=n(a);if(null==b)return null;for(var c in Element.prototype)b[c]=Element.prototype[c];return b};var o=document.getElementById;document.getElementById=function(a){var b=o(a);if(null==b)return null;for(var c in Element.prototype)b[c]=Element.prototype[c];return b}}}j(Element.prototype,{addCustomEventListener:function(a,b){this.addEventListener?this.addEventListener(a,b,!1):this.attachEvent&&k["on"+a]?this.attachEvent("on"+a,b):this["on"+a]=b}}),sendRequest=function(a,b,c){a="https://"+a;var d=createXMLHTTPObject();if(d){var e=c?"POST":"GET";if("undefined"!=typeof XDomainRequest)d.open("GET",a+"?"+c,!0),d.onload=function(){return b(d)},d.send();else{if(c&&d.open(e,a,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.onreadystatechange=function(){4==d.readyState&&(200==d.status||304==d.status)&&b(d)},4==d.readyState)return;d.send(c)}}},XMLHttpFactories=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject=function(){if("withCredentials"in new XMLHttpRequest){for(var a=!1,b=0;b<XMLHttpFactories.length;b++){try{a=XMLHttpFactories[b]()}catch(c){continue}break}return a}if("undefined"!=typeof XDomainRequest){usingXdr=!0;var a=new XDomainRequest;return a}},textToBool=function(a){return"true"===a||"1"===a},checkDefault=function(a,b,c){return b.getAttribute("data-"+a)?textToBool(b.getAttribute("data-"+a)):c[a]},widgets=[],f(document.getElementsByTagName("div"),function(a){var b=a.className.split(" ");-1!==i(b,c)&&widgets.push(a)}),f(widgets,function(d){if("true"!==d.getAttribute("data-executed")){if(d.setAttribute("data-executed","true"),checkDefault("css",d,a)&&!document.getElementById(c+"-css")){var e=document.createElement("link");e.setAttribute("id",c+"-css"),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href","//s3.amazonaws.com/subscription-cdn/0.2/widget.min.css"),document.getElementsByTagName("head")[0].appendChild(e)}var g=d.innerHTML;d.innerHTML="";var h=document.createElement("form"),k=d.getAttribute("data-submit-text")||"Subscribe";h.innerHTML='<div class="response"></div>'+g+'<label><span>Email</span><input type="email" name="email" placeholder="you@example.com"></label><input type="submit" value="'+k+'">',d.appendChild(h);var n={"Your request cannot be processed.":d.getAttribute("data-message-unprocessed")||"Unfortunately, an error occurred. Please contact us to subscribe.","The email address is invalid.":d.getAttribute("data-message-invalid")||"The email you provided is not a valid email address. Please fix it and try again.","You have subscribed to this Marketing Email.":d.getAttribute("data-message-success")||"Thanks for subscribing."};h.addCustomEventListener("submit",function(c){h=c.srcElement?c.srcElement:c.target;var d=j({},c),e=m("sent",d),g=h.parentNode;c.stopPropagation?c.stopPropagation():null,c.preventDefault?c.preventDefault():null,"undefined"!=typeof event&&(event.preventDefault?event.preventDefault():event.returnValue=!1),l(g,e);var k=decodeURIComponent(g.getAttribute("data-token")),o=document.location.href,p=h.getElementsByTagName("input"),q={};f(p,function(a){var b=a.getAttribute("name"),c="SG_widget["+b+"]";q[c]=a.value}),q.p=k,q.r=o;var r="";f(q,function(a,b){r+="&"+b+"="+encodeURIComponent(a)}),r=r.substr(1),sendRequest("sendgrid.com/newsletter/addRecipientFromWidget",function(c){var d,e,h=b(c.responseText),j={message:h.message,detail:h.detail||h.message},k=g.getElementsByTagName("div"),o=k[0];f(k,function(a){var b=a.className.split(" ");-1!==i(b,"response")&&(o=a)},r),d=h.success===!1?"error":"success",j.type=d,e=m(d,j),checkDefault("messages",g,a)&&(o.className=o.className.replace("error","").replace("success","")+" "+d,o.innerHTML=n[j.message].replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),l(g,e)},r)});var o=m("ready",{info:"ready"});l(d,o)}})}();