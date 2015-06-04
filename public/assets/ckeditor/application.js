/*! jQuery v1.7.1 jquery.com | jquery.org/license */
<<<<<<< HEAD

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*
=======
!function(t,e){function n(t){return P.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}function i(t){if(!Tn[t]){var e=N.body,n=P("<"+t+">").appendTo(e),i=n.css("display");n.remove(),("none"===i||""===i)&&(gn||(gn=N.createElement("iframe"),gn.frameBorder=gn.width=gn.height=0),e.appendChild(gn),vn&&gn.createElement||(vn=(gn.contentWindow||gn.contentDocument).document,vn.write(("CSS1Compat"===N.compatMode?"<!doctype html>":"")+"<html><body>"),vn.close()),n=vn.createElement(t),vn.body.appendChild(n),i=P.css(n,"display"),e.removeChild(gn)),Tn[t]=i}return Tn[t]}function o(t,e){var n={};return P.each(In.concat.apply([],In.slice(0,e)),function(){n[this]=t}),n}function a(){En=e}function r(){return setTimeout(a,0),En=P.now()}function s(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function l(){try{return new t.XMLHttpRequest}catch(e){}}function c(t,n){t.dataFilter&&(n=t.dataFilter(n,t.dataType));var i,o,a,r,s,l,c,u,d=t.dataTypes,h={},p=d.length,f=d[0];for(i=1;p>i;i++){if(1===i)for(o in t.converters)"string"==typeof o&&(h[o.toLowerCase()]=t.converters[o]);if(r=f,f=d[i],"*"===f)f=r;else if("*"!==r&&r!==f){if(s=r+" "+f,l=h[s]||h["* "+f],!l){u=e;for(c in h)if(a=c.split(" "),(a[0]===r||"*"===a[0])&&(u=h[a[1]+" "+f])){c=h[c],c===!0?l=u:u===!0&&(l=c);break}}!l&&!u&&P.error("No conversion from "+s.replace(" "," to ")),l!==!0&&(n=l?l(n):u(c(n)))}}return n}function u(t,n,i){var o,a,r,s,l=t.contents,c=t.dataTypes,u=t.responseFields;for(a in u)a in i&&(n[u[a]]=i[a]);for(;"*"===c[0];)c.shift(),o===e&&(o=t.mimeType||n.getResponseHeader("content-type"));if(o)for(a in l)if(l[a]&&l[a].test(o)){c.unshift(a);break}if(c[0]in i)r=c[0];else{for(a in i){if(!c[0]||t.converters[a+" "+c[0]]){r=a;break}s||(s=a)}r=r||s}return r?(r!==c[0]&&c.unshift(r),i[r]):void 0}function d(t,e,n,i){if(P.isArray(e))P.each(e,function(e,o){n||Ue.test(t)?i(t,o):d(t+"["+("object"==typeof o||P.isArray(o)?e:"")+"]",o,n,i)});else if(n||null==e||"object"!=typeof e)i(t,e);else for(var o in e)d(t+"["+o+"]",e[o],n,i)}function h(t,n){var i,o,a=P.ajaxSettings.flatOptions||{};for(i in n)n[i]!==e&&((a[i]?t:o||(o={}))[i]=n[i]);o&&P.extend(!0,t,o)}function p(t,n,i,o,a,r){a=a||n.dataTypes[0],r=r||{},r[a]=!0;for(var s,l=t[a],c=0,u=l?l.length:0,d=t===sn;u>c&&(d||!s);c++)s=l[c](n,i,o),"string"==typeof s&&(!d||r[s]?s=e:(n.dataTypes.unshift(s),s=p(t,n,i,o,s,r)));return(d||!s)&&!r["*"]&&(s=p(t,n,i,o,"*",r)),s}function f(t){return function(e,n){if("string"!=typeof e&&(n=e,e="*"),P.isFunction(n))for(var i,o,a,r=e.toLowerCase().split(nn),s=0,l=r.length;l>s;s++)i=r[s],a=/^\+/.test(i),a&&(i=i.substr(1)||"*"),o=t[i]=t[i]||[],o[a?"unshift":"push"](n)}}function m(t,e,n){var i="width"===e?t.offsetWidth:t.offsetHeight,o="width"===e?Be:qe,a=0,r=o.length;if(i>0){if("border"!==n)for(;r>a;a++)n||(i-=parseFloat(P.css(t,"padding"+o[a]))||0),"margin"===n?i+=parseFloat(P.css(t,n+o[a]))||0:i-=parseFloat(P.css(t,"border"+o[a]+"Width"))||0;return i+"px"}if(i=xe(t,e,e),(0>i||null==i)&&(i=t.style[e]||0),i=parseFloat(i)||0,n)for(;r>a;a++)i+=parseFloat(P.css(t,"padding"+o[a]))||0,"padding"!==n&&(i+=parseFloat(P.css(t,"border"+o[a]+"Width"))||0),"margin"===n&&(i+=parseFloat(P.css(t,n+o[a]))||0);return i+"px"}function g(t,e){e.src?P.ajax({url:e.src,async:!1,dataType:"script"}):P.globalEval((e.text||e.textContent||e.innerHTML||"").replace(Re,"/*$0*/")),e.parentNode&&e.parentNode.removeChild(e)}function v(t){var e=N.createElement("div");return _e.appendChild(e),e.innerHTML=t.outerHTML,e.firstChild}function y(t){var e=(t.nodeName||"").toLowerCase();"input"===e?E(t):"script"!==e&&"undefined"!=typeof t.getElementsByTagName&&P.grep(t.getElementsByTagName("input"),E)}function E(t){("checkbox"===t.type||"radio"===t.type)&&(t.defaultChecked=t.checked)}function T(t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):"undefined"!=typeof t.querySelectorAll?t.querySelectorAll("*"):[]}function b(t,e){var n;1===e.nodeType&&(e.clearAttributes&&e.clearAttributes(),e.mergeAttributes&&e.mergeAttributes(t),n=e.nodeName.toLowerCase(),"object"===n?e.outerHTML=t.outerHTML:"input"!==n||"checkbox"!==t.type&&"radio"!==t.type?"option"===n?e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue):(t.checked&&(e.defaultChecked=e.checked=t.checked),e.value!==t.value&&(e.value=t.value)),e.removeAttribute(P.expando))}function C(t,e){if(1===e.nodeType&&P.hasData(t)){var n,i,o,a=P._data(t),r=P._data(e,a),s=a.events;if(s){delete r.handle,r.events={};for(n in s)for(i=0,o=s[n].length;o>i;i++)P.event.add(e,n+(s[n][i].namespace?".":"")+s[n][i].namespace,s[n][i],s[n][i].data)}r.data&&(r.data=P.extend({},r.data))}}function I(t){return P.nodeName(t,"table")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function w(t){var e=me.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function D(t,e,n){if(e=e||0,P.isFunction(e))return P.grep(t,function(t,i){var o=!!e.call(t,i,t);return o===n});if(e.nodeType)return P.grep(t,function(t){return t===e===n});if("string"==typeof e){var i=P.grep(t,function(t){return 1===t.nodeType});if(de.test(e))return P.filter(e,i,!n);e=P.filter(e,i)}return P.grep(t,function(t){return P.inArray(t,e)>=0===n})}function O(t){return!t||!t.parentNode||11===t.parentNode.nodeType}function R(){return!0}function k(){return!1}function _(t,e,n){var i=e+"defer",o=e+"queue",a=e+"mark",r=P._data(t,i);!(!r||"queue"!==n&&P._data(t,o)||"mark"!==n&&P._data(t,a)||!setTimeout(function(){!P._data(t,o)&&!P._data(t,a)&&(P.removeData(t,i,!0),r.fire())},0))}function x(t){for(var e in t)if(("data"!==e||!P.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function S(t,n,i){if(i===e&&1===t.nodeType){var o="data-"+n.replace(B,"-$1").toLowerCase();if(i=t.getAttribute(o),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:P.isNumeric(i)?parseFloat(i):$.test(i)?P.parseJSON(i):i}catch(a){}P.data(t,n,i)}else i=e}return i}function K(t){var e,n,i=F[t]={};for(t=t.split(/\s+/),e=0,n=t.length;n>e;e++)i[t[e]]=!0;return i}var N=t.document,A=t.navigator,L=t.location,P=function(){function n(){if(!s.isReady){try{N.documentElement.doScroll("left")}catch(t){return void setTimeout(n,1)}s.ready()}}var i,o,a,r,s=function(t,e){return new s.fn.init(t,e,i)},l=t.jQuery,c=t.$,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,d=/\S/,h=/^\s+/,p=/\s+$/,f=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,m=/^[\],:{}\s]*$/,g=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,v=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y=/(?:^|:|,)(?:\s*\[)+/g,E=/(webkit)[ \/]([\w.]+)/,T=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,C=/(mozilla)(?:.*? rv:([\w.]+))?/,I=/-([a-z]|[0-9])/gi,w=/^-ms-/,D=function(t,e){return(e+"").toUpperCase()},O=A.userAgent,R=Object.prototype.toString,k=Object.prototype.hasOwnProperty,_=Array.prototype.push,x=Array.prototype.slice,S=String.prototype.trim,K=Array.prototype.indexOf,L={};return s.fn=s.prototype={constructor:s,init:function(t,n,i){var o,a,r,l;if(!t)return this;if(t.nodeType)return this.context=this[0]=t,this.length=1,this;if("body"===t&&!n&&N.body)return this.context=N,this[0]=N.body,this.selector=t,this.length=1,this;if("string"==typeof t){if(o="<"!==t.charAt(0)||">"!==t.charAt(t.length-1)||t.length<3?u.exec(t):[null,t,null],o&&(o[1]||!n)){if(o[1])return n=n instanceof s?n[0]:n,l=n?n.ownerDocument||n:N,r=f.exec(t),r?s.isPlainObject(n)?(t=[N.createElement(r[1])],s.fn.attr.call(t,n,!0)):t=[l.createElement(r[1])]:(r=s.buildFragment([o[1]],[l]),t=(r.cacheable?s.clone(r.fragment):r.fragment).childNodes),s.merge(this,t);if(a=N.getElementById(o[2]),a&&a.parentNode){if(a.id!==o[2])return i.find(t);this.length=1,this[0]=a}return this.context=N,this.selector=t,this}return!n||n.jquery?(n||i).find(t):this.constructor(n).find(t)}return s.isFunction(t)?i.ready(t):(t.selector!==e&&(this.selector=t.selector,this.context=t.context),s.makeArray(t,this))},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return x.call(this,0)},get:function(t){return null==t?this.toArray():0>t?this[this.length+t]:this[t]},pushStack:function(t,e,n){var i=this.constructor();return s.isArray(t)?_.apply(i,t):s.merge(i,t),i.prevObject=this,i.context=this.context,"find"===e?i.selector=this.selector+(this.selector?" ":"")+n:e&&(i.selector=this.selector+"."+e+"("+n+")"),i},each:function(t,e){return s.each(this,t,e)},ready:function(t){return s.bindReady(),a.add(t),this},eq:function(t){return t=+t,-1===t?this.slice(t):this.slice(t,t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(x.apply(this,arguments),"slice",x.call(arguments).join(","))},map:function(t){return this.pushStack(s.map(this,function(e,n){return t.call(e,n,e)}))},end:function(){return this.prevObject||this.constructor(null)},push:_,sort:[].sort,splice:[].splice},s.fn.init.prototype=s.fn,s.extend=s.fn.extend=function(){var t,n,i,o,a,r,l=arguments[0]||{},c=1,u=arguments.length,d=!1;for("boolean"==typeof l&&(d=l,l=arguments[1]||{},c=2),"object"!=typeof l&&!s.isFunction(l)&&(l={}),u===c&&(l=this,--c);u>c;c++)if(null!=(t=arguments[c]))for(n in t)i=l[n],o=t[n],l!==o&&(d&&o&&(s.isPlainObject(o)||(a=s.isArray(o)))?(a?(a=!1,r=i&&s.isArray(i)?i:[]):r=i&&s.isPlainObject(i)?i:{},l[n]=s.extend(d,r,o)):o!==e&&(l[n]=o));return l},s.extend({noConflict:function(e){return t.$===s&&(t.$=c),e&&t.jQuery===s&&(t.jQuery=l),s},isReady:!1,readyWait:1,holdReady:function(t){t?s.readyWait++:s.ready(!0)},ready:function(t){if(t===!0&&!--s.readyWait||t!==!0&&!s.isReady){if(!N.body)return setTimeout(s.ready,1);if(s.isReady=!0,t!==!0&&--s.readyWait>0)return;a.fireWith(N,[s]),s.fn.trigger&&s(N).trigger("ready").off("ready")}},bindReady:function(){if(!a){if(a=s.Callbacks("once memory"),"complete"===N.readyState)return setTimeout(s.ready,1);if(N.addEventListener)N.addEventListener("DOMContentLoaded",r,!1),t.addEventListener("load",s.ready,!1);else if(N.attachEvent){N.attachEvent("onreadystatechange",r),t.attachEvent("onload",s.ready);var e=!1;try{e=null==t.frameElement}catch(i){}N.documentElement.doScroll&&e&&n()}}},isFunction:function(t){return"function"===s.type(t)},isArray:Array.isArray||function(t){return"array"===s.type(t)},isWindow:function(t){return t&&"object"==typeof t&&"setInterval"in t},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):L[R.call(t)]||"object"},isPlainObject:function(t){if(!t||"object"!==s.type(t)||t.nodeType||s.isWindow(t))return!1;try{if(t.constructor&&!k.call(t,"constructor")&&!k.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var i;for(i in t);return i===e||k.call(t,i)},isEmptyObject:function(t){for(var e in t)return!1;return!0},error:function(t){throw new Error(t)},parseJSON:function(e){return"string"==typeof e&&e?(e=s.trim(e),t.JSON&&t.JSON.parse?t.JSON.parse(e):m.test(e.replace(g,"@").replace(v,"]").replace(y,""))?new Function("return "+e)():void s.error("Invalid JSON: "+e)):null},parseXML:function(n){var i,o;try{t.DOMParser?(o=new DOMParser,i=o.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(a){i=e}return(!i||!i.documentElement||i.getElementsByTagName("parsererror").length)&&s.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(e){e&&d.test(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(w,"ms-").replace(I,D)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toUpperCase()===e.toUpperCase()},each:function(t,n,i){var o,a=0,r=t.length,l=r===e||s.isFunction(t);if(i)if(l){for(o in t)if(n.apply(t[o],i)===!1)break}else for(;r>a&&n.apply(t[a++],i)!==!1;);else if(l){for(o in t)if(n.call(t[o],o,t[o])===!1)break}else for(;r>a&&n.call(t[a],a,t[a++])!==!1;);return t},trim:S?function(t){return null==t?"":S.call(t)}:function(t){return null==t?"":(t+"").replace(h,"").replace(p,"")},makeArray:function(t,e){var n=e||[];if(null!=t){var i=s.type(t);null==t.length||"string"===i||"function"===i||"regexp"===i||s.isWindow(t)?_.call(n,t):s.merge(n,t)}return n},inArray:function(t,e,n){var i;if(e){if(K)return K.call(e,t,n);for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,n){var i=t.length,o=0;if("number"==typeof n.length)for(var a=n.length;a>o;o++)t[i++]=n[o];else for(;n[o]!==e;)t[i++]=n[o++];return t.length=i,t},grep:function(t,e,n){var i,o=[];n=!!n;for(var a=0,r=t.length;r>a;a++)i=!!e(t[a],a),n!==i&&o.push(t[a]);return o},map:function(t,n,i){var o,a,r=[],l=0,c=t.length,u=t instanceof s||c!==e&&"number"==typeof c&&(c>0&&t[0]&&t[c-1]||0===c||s.isArray(t));if(u)for(;c>l;l++)o=n(t[l],l,i),null!=o&&(r[r.length]=o);else for(a in t)o=n(t[a],a,i),null!=o&&(r[r.length]=o);return r.concat.apply([],r)},guid:1,proxy:function(t,n){if("string"==typeof n){var i=t[n];n=t,t=i}if(!s.isFunction(t))return e;var o=x.call(arguments,2),a=function(){return t.apply(n,o.concat(x.call(arguments)))};return a.guid=t.guid=t.guid||a.guid||s.guid++,a},access:function(t,n,i,o,a,r){var l=t.length;if("object"==typeof n){for(var c in n)s.access(t,c,n[c],o,a,i);return t}if(i!==e){o=!r&&o&&s.isFunction(i);for(var u=0;l>u;u++)a(t[u],n,o?i.call(t[u],u,a(t[u],n)):i,r);return t}return l?a(t[0],n):e},now:function(){return(new Date).getTime()},uaMatch:function(t){t=t.toLowerCase();var e=E.exec(t)||T.exec(t)||b.exec(t)||t.indexOf("compatible")<0&&C.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},sub:function(){function t(e,n){return new t.fn.init(e,n)}s.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(n,i){return i&&i instanceof s&&!(i instanceof t)&&(i=t(i)),s.fn.init.call(this,n,i,e)},t.fn.init.prototype=t.fn;var e=t(N);return t},browser:{}}),s.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(t,e){L["[object "+e+"]"]=e.toLowerCase()}),o=s.uaMatch(O),o.browser&&(s.browser[o.browser]=!0,s.browser.version=o.version),s.browser.webkit&&(s.browser.safari=!0),d.test("\xa0")&&(h=/^[\s\xA0]+/,p=/[\s\xA0]+$/),i=s(N),N.addEventListener?r=function(){N.removeEventListener("DOMContentLoaded",r,!1),s.ready()}:N.attachEvent&&(r=function(){"complete"===N.readyState&&(N.detachEvent("onreadystatechange",r),s.ready())}),s}(),F={};P.Callbacks=function(t){t=t?F[t]||K(t):{};var n,i,o,a,r,s=[],l=[],c=function(e){var n,i,o,a;for(n=0,i=e.length;i>n;n++)o=e[n],a=P.type(o),"array"===a?c(o):"function"===a&&(!t.unique||!d.has(o))&&s.push(o)},u=function(e,c){for(c=c||[],n=!t.memory||[e,c],i=!0,r=o||0,o=0,a=s.length;s&&a>r;r++)if(s[r].apply(e,c)===!1&&t.stopOnFalse){n=!0;break}i=!1,s&&(t.once?n===!0?d.disable():s=[]:l&&l.length&&(n=l.shift(),d.fireWith(n[0],n[1])))},d={add:function(){if(s){var t=s.length;c(arguments),i?a=s.length:n&&n!==!0&&(o=t,u(n[0],n[1]))}return this},remove:function(){if(s)for(var e=arguments,n=0,o=e.length;o>n;n++)for(var l=0;l<s.length&&(e[n]!==s[l]||(i&&a>=l&&(a--,r>=l&&r--),s.splice(l--,1),!t.unique));l++);return this},has:function(t){if(s)for(var e=0,n=s.length;n>e;e++)if(t===s[e])return!0;return!1},empty:function(){return s=[],this},disable:function(){return s=l=n=e,this},disabled:function(){return!s},lock:function(){return l=e,(!n||n===!0)&&d.disable(),this},locked:function(){return!l},fireWith:function(e,o){return l&&(i?t.once||l.push([e,o]):(!t.once||!n)&&u(e,o)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}};return d};var M=[].slice;P.extend({Deferred:function(t){var e,n=P.Callbacks("once memory"),i=P.Callbacks("once memory"),o=P.Callbacks("memory"),a="pending",r={resolve:n,reject:i,notify:o},s={done:n.add,fail:i.add,progress:o.add,state:function(){return a},isResolved:n.fired,isRejected:i.fired,then:function(t,e,n){return l.done(t).fail(e).progress(n),this},always:function(){return l.done.apply(l,arguments).fail.apply(l,arguments),this},pipe:function(t,e,n){return P.Deferred(function(i){P.each({done:[t,"resolve"],fail:[e,"reject"],progress:[n,"notify"]},function(t,e){var n,o=e[0],a=e[1];l[t](P.isFunction(o)?function(){n=o.apply(this,arguments),n&&P.isFunction(n.promise)?n.promise().then(i.resolve,i.reject,i.notify):i[a+"With"](this===l?i:this,[n])}:i[a])})}).promise()},promise:function(t){if(null==t)t=s;else for(var e in s)t[e]=s[e];return t}},l=s.promise({});for(e in r)l[e]=r[e].fire,l[e+"With"]=r[e].fireWith;return l.done(function(){a="resolved"},i.disable,o.lock).fail(function(){a="rejected"},n.disable,o.lock),t&&t.call(l,l),l},when:function(t){function e(t){return function(e){r[t]=arguments.length>1?M.call(arguments,0):e,l.notifyWith(c,r)}}function n(t){return function(e){i[t]=arguments.length>1?M.call(arguments,0):e,--s||l.resolveWith(l,i)}}var i=M.call(arguments,0),o=0,a=i.length,r=Array(a),s=a,l=1>=a&&t&&P.isFunction(t.promise)?t:P.Deferred(),c=l.promise();if(a>1){for(;a>o;o++)i[o]&&i[o].promise&&P.isFunction(i[o].promise)?i[o].promise().then(n(o),l.reject,e(o)):--s;s||l.resolveWith(l,i)}else l!==t&&l.resolveWith(l,a?[t]:[]);return c}}),P.support=function(){{var e,n,i,o,a,r,s,l,c,u,d,h,p=N.createElement("div");N.documentElement}if(p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!n||!n.length||!i)return{};o=N.createElement("select"),a=o.appendChild(N.createElement("option")),r=p.getElementsByTagName("input")[0],e={leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.55/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:"on"===r.value,optSelected:a.selected,getSetAttribute:"t"!==p.className,enctype:!!N.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==N.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},r.checked=!0,e.noCloneChecked=r.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!a.disabled;try{delete p.test}catch(f){e.deleteExpando=!1}if(!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){e.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),r=N.createElement("input"),r.value="t",r.setAttribute("type","radio"),e.radioValue="t"===r.value,r.setAttribute("checked","checked"),p.appendChild(r),l=N.createDocumentFragment(),l.appendChild(p.lastChild),e.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,e.appendChecked=r.checked,l.removeChild(r),l.appendChild(p),p.innerHTML="",t.getComputedStyle&&(s=N.createElement("div"),s.style.width="0",s.style.marginRight="0",p.style.width="2px",p.appendChild(s),e.reliableMarginRight=0===(parseInt((t.getComputedStyle(s,null)||{marginRight:0}).marginRight,10)||0)),p.attachEvent)for(d in{submit:1,change:1,focusin:1})u="on"+d,h=u in p,h||(p.setAttribute(u,"return;"),h="function"==typeof p[u]),e[d+"Bubbles"]=h;return l.removeChild(p),l=o=a=s=p=r=null,P(function(){var t,n,i,o,a,r,s,l,u,d,f=N.getElementsByTagName("body")[0];!f||(r=1,s="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",l="visibility:hidden;border:0;",u="style='"+s+"border:5px solid #000;padding:0;'",d="<div "+u+"><div></div></div><table "+u+" cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",t=N.createElement("div"),t.style.cssText=l+"width:0;height:0;position:static;top:0;margin-top:"+r+"px",f.insertBefore(t,f.firstChild),p=N.createElement("div"),t.appendChild(p),p.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",c=p.getElementsByTagName("td"),h=0===c[0].offsetHeight,c[0].style.display="",c[1].style.display="none",e.reliableHiddenOffsets=h&&0===c[0].offsetHeight,p.innerHTML="",p.style.width=p.style.paddingLeft="1px",P.boxModel=e.boxModel=2===p.offsetWidth,"undefined"!=typeof p.style.zoom&&(p.style.display="inline",p.style.zoom=1,e.inlineBlockNeedsLayout=2===p.offsetWidth,p.style.display="",p.innerHTML="<div style='width:4px;'></div>",e.shrinkWrapBlocks=2!==p.offsetWidth),p.style.cssText=s+l,p.innerHTML=d,n=p.firstChild,i=n.firstChild,o=n.nextSibling.firstChild.firstChild,a={doesNotAddBorder:5!==i.offsetTop,doesAddBorderForTableAndCells:5===o.offsetTop},i.style.position="fixed",i.style.top="20px",a.fixedPosition=20===i.offsetTop||15===i.offsetTop,i.style.position=i.style.top="",n.style.overflow="hidden",n.style.position="relative",a.subtractsBorderForOverflowNotVisible=-5===i.offsetTop,a.doesNotIncludeMarginInBodyOffset=f.offsetTop!==r,f.removeChild(t),p=t=null,P.extend(e,a))}),e}();var $=/^(?:\{.*\}|\[.*\])$/,B=/([A-Z])/g;P.extend({cache:{},uuid:0,expando:"jQuery"+(P.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(t){return t=t.nodeType?P.cache[t[P.expando]]:t[P.expando],!!t&&!x(t)},data:function(t,n,i,o){if(P.acceptData(t)){var a,r,s,l=P.expando,c="string"==typeof n,u=t.nodeType,d=u?P.cache:t,h=u?t[l]:t[l]&&l,p="events"===n;if(!(h&&d[h]&&(p||o||d[h].data)||!c||i!==e))return;return h||(u?t[l]=h=++P.uuid:h=l),d[h]||(d[h]={},u||(d[h].toJSON=P.noop)),("object"==typeof n||"function"==typeof n)&&(o?d[h]=P.extend(d[h],n):d[h].data=P.extend(d[h].data,n)),a=r=d[h],o||(r.data||(r.data={}),r=r.data),i!==e&&(r[P.camelCase(n)]=i),p&&!r[n]?a.events:(c?(s=r[n],null==s&&(s=r[P.camelCase(n)])):s=r,s)}},removeData:function(t,e,n){if(P.acceptData(t)){var i,o,a,r=P.expando,s=t.nodeType,l=s?P.cache:t,c=s?t[r]:r;if(!l[c])return;if(e&&(i=n?l[c]:l[c].data)){P.isArray(e)||(e in i?e=[e]:(e=P.camelCase(e),e=e in i?[e]:e.split(" ")));for(o=0,a=e.length;a>o;o++)delete i[e[o]];if(!(n?x:P.isEmptyObject)(i))return}if(!n&&(delete l[c].data,!x(l[c])))return;P.support.deleteExpando||!l.setInterval?delete l[c]:l[c]=null,s&&(P.support.deleteExpando?delete t[r]:t.removeAttribute?t.removeAttribute(r):t[r]=null)}},_data:function(t,e,n){return P.data(t,e,n,!0)},acceptData:function(t){if(t.nodeName){var e=P.noData[t.nodeName.toLowerCase()];if(e)return e!==!0&&t.getAttribute("classid")===e}return!0}}),P.fn.extend({data:function(t,n){var i,o,a,r=null;if("undefined"==typeof t){if(this.length&&(r=P.data(this[0]),1===this[0].nodeType&&!P._data(this[0],"parsedAttrs"))){o=this[0].attributes;for(var s=0,l=o.length;l>s;s++)a=o[s].name,0===a.indexOf("data-")&&(a=P.camelCase(a.substring(5)),S(this[0],a,r[a]));P._data(this[0],"parsedAttrs",!0)}return r}return"object"==typeof t?this.each(function(){P.data(this,t)}):(i=t.split("."),i[1]=i[1]?"."+i[1]:"",n===e?(r=this.triggerHandler("getData"+i[1]+"!",[i[0]]),r===e&&this.length&&(r=P.data(this[0],t),r=S(this[0],t,r)),r===e&&i[1]?this.data(i[0]):r):this.each(function(){var e=P(this),o=[i[0],n];e.triggerHandler("setData"+i[1]+"!",o),P.data(this,t,n),e.triggerHandler("changeData"+i[1]+"!",o)}))},removeData:function(t){return this.each(function(){P.removeData(this,t)})}}),P.extend({_mark:function(t,e){t&&(e=(e||"fx")+"mark",P._data(t,e,(P._data(t,e)||0)+1))},_unmark:function(t,e,n){if(t!==!0&&(n=e,e=t,t=!1),e){n=n||"fx";var i=n+"mark",o=t?0:(P._data(e,i)||1)-1;o?P._data(e,i,o):(P.removeData(e,i,!0),_(e,n,"mark"))}},queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=P._data(t,e),n&&(!i||P.isArray(n)?i=P._data(t,e,P.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=P.queue(t,e),i=n.shift(),o={};"inprogress"===i&&(i=n.shift()),i&&("fx"===e&&n.unshift("inprogress"),P._data(t,e+".run",o),i.call(t,function(){P.dequeue(t,e)},o)),n.length||(P.removeData(t,e+"queue "+e+".run",!0),_(t,e,"queue"))}}),P.fn.extend({queue:function(t,n){return"string"!=typeof t&&(n=t,t="fx"),n===e?P.queue(this[0],t):this.each(function(){var e=P.queue(this,t,n);"fx"===t&&"inprogress"!==e[0]&&P.dequeue(this,t)})},dequeue:function(t){return this.each(function(){P.dequeue(this,t)})},delay:function(t,e){return t=P.fx?P.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t);n.stop=function(){clearTimeout(i)}})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){function i(){--l||a.resolveWith(r,[r])}"string"!=typeof t&&(n=t,t=e),t=t||"fx";for(var o,a=P.Deferred(),r=this,s=r.length,l=1,c=t+"defer",u=t+"queue",d=t+"mark";s--;)(o=P.data(r[s],c,e,!0)||(P.data(r[s],u,e,!0)||P.data(r[s],d,e,!0))&&P.data(r[s],c,P.Callbacks("once memory"),!0))&&(l++,o.add(i));return i(),a.promise()}});var q,H,j,z=/[\n\t\r]/g,U=/\s+/,W=/\r/g,V=/^(?:button|input)$/i,X=/^(?:button|input|object|select|textarea)$/i,G=/^a(?:rea)?$/i,Y=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Q=P.support.getSetAttribute;P.fn.extend({attr:function(t,e){return P.access(this,t,e,!0,P.attr)},removeAttr:function(t){return this.each(function(){P.removeAttr(this,t)})},prop:function(t,e){return P.access(this,t,e,!0,P.prop)},removeProp:function(t){return t=P.propFix[t]||t,this.each(function(){try{this[t]=e,delete this[t]}catch(n){}})},addClass:function(t){var e,n,i,o,a,r,s;if(P.isFunction(t))return this.each(function(e){P(this).addClass(t.call(this,e,this.className))});if(t&&"string"==typeof t)for(e=t.split(U),n=0,i=this.length;i>n;n++)if(o=this[n],1===o.nodeType)if(o.className||1!==e.length){for(a=" "+o.className+" ",r=0,s=e.length;s>r;r++)~a.indexOf(" "+e[r]+" ")||(a+=e[r]+" ");o.className=P.trim(a)}else o.className=t;return this},removeClass:function(t){var n,i,o,a,r,s,l;if(P.isFunction(t))return this.each(function(e){P(this).removeClass(t.call(this,e,this.className))});if(t&&"string"==typeof t||t===e)for(n=(t||"").split(U),i=0,o=this.length;o>i;i++)if(a=this[i],1===a.nodeType&&a.className)if(t){for(r=(" "+a.className+" ").replace(z," "),s=0,l=n.length;l>s;s++)r=r.replace(" "+n[s]+" "," ");a.className=P.trim(r)}else a.className="";return this},toggleClass:function(t,e){var n=typeof t,i="boolean"==typeof e;return this.each(P.isFunction(t)?function(n){P(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var o,a=0,r=P(this),s=e,l=t.split(U);o=l[a++];)s=i?s:!r.hasClass(o),r[s?"addClass":"removeClass"](o);else("undefined"===n||"boolean"===n)&&(this.className&&P._data(this,"__className__",this.className),this.className=this.className||t===!1?"":P._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(z," ").indexOf(e)>-1)return!0;return!1},val:function(t){var n,i,o,a=this[0];return arguments.length?(o=P.isFunction(t),this.each(function(i){var a,r=P(this);1===this.nodeType&&(a=o?t.call(this,i,r.val()):t,null==a?a="":"number"==typeof a?a+="":P.isArray(a)&&(a=P.map(a,function(t){return null==t?"":t+""})),n=P.valHooks[this.nodeName.toLowerCase()]||P.valHooks[this.type],n&&"set"in n&&n.set(this,a,"value")!==e||(this.value=a))})):a?(n=P.valHooks[a.nodeName.toLowerCase()]||P.valHooks[a.type],n&&"get"in n&&(i=n.get(a,"value"))!==e?i:(i=a.value,"string"==typeof i?i.replace(W,""):null==i?"":i)):void 0}}),P.extend({valHooks:{option:{get:function(t){var e=t.attributes.value;return!e||e.specified?t.value:t.text}},select:{get:function(t){var e,n,i,o,a=t.selectedIndex,r=[],s=t.options,l="select-one"===t.type;if(0>a)return null;for(n=l?a:0,i=l?a+1:s.length;i>n;n++)if(o=s[n],!(!o.selected||(P.support.optDisabled?o.disabled:null!==o.getAttribute("disabled"))||o.parentNode.disabled&&P.nodeName(o.parentNode,"optgroup"))){if(e=P(o).val(),l)return e;r.push(e)}return l&&!r.length&&s.length?P(s[a]).val():r},set:function(t,e){var n=P.makeArray(e);return P(t).find("option").each(function(){this.selected=P.inArray(P(this).val(),n)>=0}),n.length||(t.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(t,n,i,o){var a,r,s,l=t.nodeType;return t&&3!==l&&8!==l&&2!==l?o&&n in P.attrFn?P(t)[n](i):"undefined"==typeof t.getAttribute?P.prop(t,n,i):(s=1!==l||!P.isXMLDoc(t),s&&(n=n.toLowerCase(),r=P.attrHooks[n]||(Y.test(n)?H:q)),i!==e?null===i?void P.removeAttr(t,n):r&&"set"in r&&s&&(a=r.set(t,i,n))!==e?a:(t.setAttribute(n,""+i),i):r&&"get"in r&&s&&null!==(a=r.get(t,n))?a:(a=t.getAttribute(n),null===a?e:a)):void 0},removeAttr:function(t,e){var n,i,o,a,r=0;if(e&&1===t.nodeType)for(i=e.toLowerCase().split(U),a=i.length;a>r;r++)o=i[r],o&&(n=P.propFix[o]||o,P.attr(t,o,""),t.removeAttribute(Q?o:n),Y.test(o)&&n in t&&(t[n]=!1))},attrHooks:{type:{set:function(t,e){if(V.test(t.nodeName)&&t.parentNode)P.error("type property can't be changed");else if(!P.support.radioValue&&"radio"===e&&P.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}},value:{get:function(t,e){return q&&P.nodeName(t,"button")?q.get(t,e):e in t?t.value:null},set:function(t,e,n){return q&&P.nodeName(t,"button")?q.set(t,e,n):void(t.value=e)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(t,n,i){var o,a,r,s=t.nodeType;return t&&3!==s&&8!==s&&2!==s?(r=1!==s||!P.isXMLDoc(t),r&&(n=P.propFix[n]||n,a=P.propHooks[n]),i!==e?a&&"set"in a&&(o=a.set(t,i,n))!==e?o:t[n]=i:a&&"get"in a&&null!==(o=a.get(t,n))?o:t[n]):void 0},propHooks:{tabIndex:{get:function(t){var n=t.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):X.test(t.nodeName)||G.test(t.nodeName)&&t.href?0:e}}}}),P.attrHooks.tabindex=P.propHooks.tabIndex,H={get:function(t,n){var i,o=P.prop(t,n);return o===!0||"boolean"!=typeof o&&(i=t.getAttributeNode(n))&&i.nodeValue!==!1?n.toLowerCase():e},set:function(t,e,n){var i;return e===!1?P.removeAttr(t,n):(i=P.propFix[n]||n,i in t&&(t[i]=!0),t.setAttribute(n,n.toLowerCase())),n}},Q||(j={name:!0,id:!0},q=P.valHooks.button={get:function(t,n){var i;return i=t.getAttributeNode(n),i&&(j[n]?""!==i.nodeValue:i.specified)?i.nodeValue:e},set:function(t,e,n){var i=t.getAttributeNode(n);return i||(i=N.createAttribute(n),t.setAttributeNode(i)),i.nodeValue=e+""}},P.attrHooks.tabindex.set=q.set,P.each(["width","height"],function(t,e){P.attrHooks[e]=P.extend(P.attrHooks[e],{set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}})}),P.attrHooks.contenteditable={get:q.get,set:function(t,e,n){""===e&&(e="false"),q.set(t,e,n)}}),P.support.hrefNormalized||P.each(["href","src","width","height"],function(t,n){P.attrHooks[n]=P.extend(P.attrHooks[n],{get:function(t){var i=t.getAttribute(n,2);return null===i?e:i}})}),P.support.style||(P.attrHooks.style={get:function(t){return t.style.cssText.toLowerCase()||e},set:function(t,e){return t.style.cssText=""+e}}),P.support.optSelected||(P.propHooks.selected=P.extend(P.propHooks.selected,{get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}})),P.support.enctype||(P.propFix.enctype="encoding"),P.support.checkOn||P.each(["radio","checkbox"],function(){P.valHooks[this]={get:function(t){return null===t.getAttribute("value")?"on":t.value}}}),P.each(["radio","checkbox"],function(){P.valHooks[this]=P.extend(P.valHooks[this],{set:function(t,e){return P.isArray(e)?t.checked=P.inArray(P(t).val(),e)>=0:void 0}})});var Z=/^(?:textarea|input|select)$/i,J=/^([^\.]*)?(?:\.(.+))?$/,te=/\bhover(\.\S+)?\b/,ee=/^key/,ne=/^(?:mouse|contextmenu)|click/,ie=/^(?:focusinfocus|focusoutblur)$/,oe=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ae=function(t){var e=oe.exec(t);return e&&(e[1]=(e[1]||"").toLowerCase(),e[3]=e[3]&&new RegExp("(?:^|\\s)"+e[3]+"(?:\\s|$)")),e},re=function(t,e){var n=t.attributes||{};return!(e[1]&&t.nodeName.toLowerCase()!==e[1]||e[2]&&(n.id||{}).value!==e[2]||e[3]&&!e[3].test((n["class"]||{}).value))},se=function(t){return P.event.special.hover?t:t.replace(te,"mouseenter$1 mouseleave$1")};P.event={add:function(t,n,i,o,a){var r,s,l,c,u,d,h,p,f,m,g;if(3!==t.nodeType&&8!==t.nodeType&&n&&i&&(r=P._data(t))){for(i.handler&&(f=i,i=f.handler),i.guid||(i.guid=P.guid++),l=r.events,l||(r.events=l={}),s=r.handle,s||(r.handle=s=function(t){return"undefined"==typeof P||t&&P.event.triggered===t.type?e:P.event.dispatch.apply(s.elem,arguments)},s.elem=t),n=P.trim(se(n)).split(" "),c=0;c<n.length;c++)u=J.exec(n[c])||[],d=u[1],h=(u[2]||"").split(".").sort(),g=P.event.special[d]||{},d=(a?g.delegateType:g.bindType)||d,g=P.event.special[d]||{},p=P.extend({type:d,origType:u[1],data:o,handler:i,guid:i.guid,selector:a,quick:ae(a),namespace:h.join(".")},f),m=l[d],m||(m=l[d]=[],m.delegateCount=0,g.setup&&g.setup.call(t,o,h,s)!==!1||(t.addEventListener?t.addEventListener(d,s,!1):t.attachEvent&&t.attachEvent("on"+d,s))),g.add&&(g.add.call(t,p),p.handler.guid||(p.handler.guid=i.guid)),a?m.splice(m.delegateCount++,0,p):m.push(p),P.event.global[d]=!0;
t=null}},global:{},remove:function(t,e,n,i,o){var a,r,s,l,c,u,d,h,p,f,m,g,v=P.hasData(t)&&P._data(t);if(v&&(h=v.events)){for(e=P.trim(se(e||"")).split(" "),a=0;a<e.length;a++)if(r=J.exec(e[a])||[],s=l=r[1],c=r[2],s){for(p=P.event.special[s]||{},s=(i?p.delegateType:p.bindType)||s,m=h[s]||[],u=m.length,c=c?new RegExp("(^|\\.)"+c.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,d=0;d<m.length;d++)g=m[d],!(!o&&l!==g.origType||n&&n.guid!==g.guid||c&&!c.test(g.namespace)||i&&i!==g.selector&&("**"!==i||!g.selector)||(m.splice(d--,1),g.selector&&m.delegateCount--,!p.remove||!p.remove.call(t,g)));0===m.length&&u!==m.length&&((!p.teardown||p.teardown.call(t,c)===!1)&&P.removeEvent(t,s,v.handle),delete h[s])}else for(s in h)P.event.remove(t,s+e[a],n,i,!0);P.isEmptyObject(h)&&(f=v.handle,f&&(f.elem=null),P.removeData(t,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,i,o,a){if(!o||3!==o.nodeType&&8!==o.nodeType){var r,s,l,c,u,d,h,p,f,m,g=n.type||n,v=[];if(ie.test(g+P.event.triggered))return;if(g.indexOf("!")>=0&&(g=g.slice(0,-1),s=!0),g.indexOf(".")>=0&&(v=g.split("."),g=v.shift(),v.sort()),(!o||P.event.customEvent[g])&&!P.event.global[g])return;if(n="object"==typeof n?n[P.expando]?n:new P.Event(g,n):new P.Event(g),n.type=g,n.isTrigger=!0,n.exclusive=s,n.namespace=v.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,d=g.indexOf(":")<0?"on"+g:"",!o){r=P.cache;for(l in r)r[l].events&&r[l].events[g]&&P.event.trigger(n,i,r[l].handle.elem,!0);return}if(n.result=e,n.target||(n.target=o),i=null!=i?P.makeArray(i):[],i.unshift(n),h=P.event.special[g]||{},h.trigger&&h.trigger.apply(o,i)===!1)return;if(f=[[o,h.bindType||g]],!a&&!h.noBubble&&!P.isWindow(o)){for(m=h.delegateType||g,c=ie.test(m+g)?o:o.parentNode,u=null;c;c=c.parentNode)f.push([c,m]),u=c;u&&u===o.ownerDocument&&f.push([u.defaultView||u.parentWindow||t,m])}for(l=0;l<f.length&&!n.isPropagationStopped();l++)c=f[l][0],n.type=f[l][1],p=(P._data(c,"events")||{})[n.type]&&P._data(c,"handle"),p&&p.apply(c,i),p=d&&c[d],p&&P.acceptData(c)&&p.apply(c,i)===!1&&n.preventDefault();return n.type=g,!(a||n.isDefaultPrevented()||h._default&&h._default.apply(o.ownerDocument,i)!==!1||"click"===g&&P.nodeName(o,"a")||!P.acceptData(o)||!d||!o[g]||("focus"===g||"blur"===g)&&0===n.target.offsetWidth||P.isWindow(o)||(u=o[d],u&&(o[d]=null),P.event.triggered=g,o[g](),P.event.triggered=e,!u||!(o[d]=u))),n.result}},dispatch:function(n){n=P.event.fix(n||t.event);var i,o,a,r,s,l,c,u,d,h,p=(P._data(this,"events")||{})[n.type]||[],f=p.delegateCount,m=[].slice.call(arguments,0),g=!n.exclusive&&!n.namespace,v=[];if(m[0]=n,n.delegateTarget=this,f&&!n.target.disabled&&(!n.button||"click"!==n.type))for(r=P(this),r.context=this.ownerDocument||this,a=n.target;a!=this;a=a.parentNode||this){for(l={},u=[],r[0]=a,i=0;f>i;i++)d=p[i],h=d.selector,l[h]===e&&(l[h]=d.quick?re(a,d.quick):r.is(h)),l[h]&&u.push(d);u.length&&v.push({elem:a,matches:u})}for(p.length>f&&v.push({elem:this,matches:p.slice(f)}),i=0;i<v.length&&!n.isPropagationStopped();i++)for(c=v[i],n.currentTarget=c.elem,o=0;o<c.matches.length&&!n.isImmediatePropagationStopped();o++)d=c.matches[o],(g||!n.namespace&&!d.namespace||n.namespace_re&&n.namespace_re.test(d.namespace))&&(n.data=d.data,n.handleObj=d,s=((P.event.special[d.origType]||{}).handle||d.handler).apply(c.elem,m),s!==e&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())));return n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var i,o,a,r=n.button,s=n.fromElement;return null==t.pageX&&null!=n.clientX&&(i=t.target.ownerDocument||N,o=i.documentElement,a=i.body,t.pageX=n.clientX+(o&&o.scrollLeft||a&&a.scrollLeft||0)-(o&&o.clientLeft||a&&a.clientLeft||0),t.pageY=n.clientY+(o&&o.scrollTop||a&&a.scrollTop||0)-(o&&o.clientTop||a&&a.clientTop||0)),!t.relatedTarget&&s&&(t.relatedTarget=s===t.target?n.toElement:s),!t.which&&r!==e&&(t.which=1&r?1:2&r?3:4&r?2:0),t}},fix:function(t){if(t[P.expando])return t;var n,i,o=t,a=P.event.fixHooks[t.type]||{},r=a.props?this.props.concat(a.props):this.props;for(t=P.Event(o),n=r.length;n;)i=r[--n],t[i]=o[i];return t.target||(t.target=o.srcElement||N),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey===e&&(t.metaKey=t.ctrlKey),a.filter?a.filter(t,o):t},special:{ready:{setup:P.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(t,e,n){P.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(t,e){this.onbeforeunload===e&&(this.onbeforeunload=null)}}},simulate:function(t,e,n,i){var o=P.extend(new P.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?P.event.trigger(o,null,e):P.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},P.event.handle=P.event.dispatch,P.removeEvent=N.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){t.detachEvent&&t.detachEvent("on"+e,n)},P.Event=function(t,e){return this instanceof P.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.returnValue===!1||t.getPreventDefault&&t.getPreventDefault()?R:k):this.type=t,e&&P.extend(this,e),this.timeStamp=t&&t.timeStamp||P.now(),this[P.expando]=!0,void 0):new P.Event(t,e)},P.Event.prototype={preventDefault:function(){this.isDefaultPrevented=R;var t=this.originalEvent;!t||(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=R;var t=this.originalEvent;!t||(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=R,this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k},P.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,e){P.event.special[t]={delegateType:e,bindType:e,handle:function(t){{var n,i=this,o=t.relatedTarget,a=t.handleObj;a.selector}return(!o||o!==i&&!P.contains(i,o))&&(t.type=a.origType,n=a.handler.apply(this,arguments),t.type=e),n}}}),P.support.submitBubbles||(P.event.special.submit={setup:function(){return P.nodeName(this,"form")?!1:void P.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,i=P.nodeName(n,"input")||P.nodeName(n,"button")?n.form:e;i&&!i._submit_attached&&(P.event.add(i,"submit._submit",function(t){this.parentNode&&!t.isTrigger&&P.event.simulate("submit",this.parentNode,t,!0)}),i._submit_attached=!0)})},teardown:function(){return P.nodeName(this,"form")?!1:void P.event.remove(this,"._submit")}}),P.support.changeBubbles||(P.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(P.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),P.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1,P.event.simulate("change",this,t,!0))})),!1):void P.event.add(this,"beforeactivate._change",function(t){var e=t.target;Z.test(e.nodeName)&&!e._change_attached&&(P.event.add(e,"change._change",function(t){this.parentNode&&!t.isSimulated&&!t.isTrigger&&P.event.simulate("change",this.parentNode,t,!0)}),e._change_attached=!0)})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return P.event.remove(this,"._change"),Z.test(this.nodeName)}}),P.support.focusinBubbles||P.each({focus:"focusin",blur:"focusout"},function(t,e){var n=0,i=function(t){P.event.simulate(e,t.target,P.event.fix(t),!0)};P.event.special[e]={setup:function(){0===n++&&N.addEventListener(t,i,!0)},teardown:function(){0===--n&&N.removeEventListener(t,i,!0)}}}),P.fn.extend({on:function(t,n,i,o,a){var r,s;if("object"==typeof t){"string"!=typeof n&&(i=n,n=e);for(s in t)this.on(s,n,i,t[s],a);return this}if(null==i&&null==o?(o=n,i=n=e):null==o&&("string"==typeof n?(o=i,i=e):(o=i,i=n,n=e)),o===!1)o=k;else if(!o)return this;return 1===a&&(r=o,o=function(t){return P().off(t),r.apply(this,arguments)},o.guid=r.guid||(r.guid=P.guid++)),this.each(function(){P.event.add(this,t,o,i,n)})},one:function(t,e,n,i){return this.on.call(this,t,e,n,i,1)},off:function(t,n,i){if(t&&t.preventDefault&&t.handleObj){var o=t.handleObj;return P(t.delegateTarget).off(o.namespace?o.type+"."+o.namespace:o.type,o.selector,o.handler),this}if("object"==typeof t){for(var a in t)this.off(a,n,t[a]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=e),i===!1&&(i=k),this.each(function(){P.event.remove(this,t,i,n)})},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},live:function(t,e,n){return P(this.context).on(t,this.selector,e,n),this},die:function(t,e){return P(this.context).off(t,this.selector||"**",e),this},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1==arguments.length?this.off(t,"**"):this.off(e,t,n)},trigger:function(t,e){return this.each(function(){P.event.trigger(t,e,this)})},triggerHandler:function(t,e){return this[0]?P.event.trigger(t,e,this[0],!0):void 0},toggle:function(t){var e=arguments,n=t.guid||P.guid++,i=0,o=function(n){var o=(P._data(this,"lastToggle"+t.guid)||0)%i;return P._data(this,"lastToggle"+t.guid,o+1),n.preventDefault(),e[o].apply(this,arguments)||!1};for(o.guid=n;i<e.length;)e[i++].guid=n;return this.click(o)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),P.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){P.fn[e]=function(t,n){return null==n&&(n=t,t=null),arguments.length>0?this.on(e,null,t,n):this.trigger(e)},P.attrFn&&(P.attrFn[e]=!0),ee.test(e)&&(P.event.fixHooks[e]=P.event.keyHooks),ne.test(e)&&(P.event.fixHooks[e]=P.event.mouseHooks)}),function(){function t(t,e,n,i,a,r){for(var s=0,l=i.length;l>s;s++){var c=i[s];if(c){var u=!1;for(c=c[t];c;){if(c[o]===n){u=i[c.sizset];break}if(1===c.nodeType)if(r||(c[o]=n,c.sizset=s),"string"!=typeof e){if(c===e){u=!0;break}}else if(h.filter(e,[c]).length>0){u=c;break}c=c[t]}i[s]=u}}}function n(t,e,n,i,a,r){for(var s=0,l=i.length;l>s;s++){var c=i[s];if(c){var u=!1;for(c=c[t];c;){if(c[o]===n){u=i[c.sizset];break}if(1===c.nodeType&&!r&&(c[o]=n,c.sizset=s),c.nodeName.toLowerCase()===e){u=c;break}c=c[t]}i[s]=u}}}var i=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,o="sizcache"+(Math.random()+"").replace(".",""),a=0,r=Object.prototype.toString,s=!1,l=!0,c=/\\/g,u=/\r\n/g,d=/\W/;[0,0].sort(function(){return l=!1,0});var h=function(t,e,n,o){n=n||[],e=e||N;var a=e;if(1!==e.nodeType&&9!==e.nodeType)return[];if(!t||"string"!=typeof t)return n;var s,l,c,u,d,p,g,v,E=!0,T=h.isXML(e),b=[],I=t;do if(i.exec(""),s=i.exec(I),s&&(I=s[3],b.push(s[1]),s[2])){u=s[3];break}while(s);if(b.length>1&&m.exec(t))if(2===b.length&&f.relative[b[0]])l=C(b[0]+b[1],e,o);else for(l=f.relative[b[0]]?[e]:h(b.shift(),e);b.length;)t=b.shift(),f.relative[t]&&(t+=b.shift()),l=C(t,l,o);else if(!o&&b.length>1&&9===e.nodeType&&!T&&f.match.ID.test(b[0])&&!f.match.ID.test(b[b.length-1])&&(d=h.find(b.shift(),e,T),e=d.expr?h.filter(d.expr,d.set)[0]:d.set[0]),e)for(d=o?{expr:b.pop(),set:y(o)}:h.find(b.pop(),1!==b.length||"~"!==b[0]&&"+"!==b[0]||!e.parentNode?e:e.parentNode,T),l=d.expr?h.filter(d.expr,d.set):d.set,b.length>0?c=y(l):E=!1;b.length;)p=b.pop(),g=p,f.relative[p]?g=b.pop():p="",null==g&&(g=e),f.relative[p](c,g,T);else c=b=[];if(c||(c=l),c||h.error(p||t),"[object Array]"===r.call(c))if(E)if(e&&1===e.nodeType)for(v=0;null!=c[v];v++)c[v]&&(c[v]===!0||1===c[v].nodeType&&h.contains(e,c[v]))&&n.push(l[v]);else for(v=0;null!=c[v];v++)c[v]&&1===c[v].nodeType&&n.push(l[v]);else n.push.apply(n,c);else y(c,n);return u&&(h(u,a,n,o),h.uniqueSort(n)),n};h.uniqueSort=function(t){if(T&&(s=l,t.sort(T),s))for(var e=1;e<t.length;e++)t[e]===t[e-1]&&t.splice(e--,1);return t},h.matches=function(t,e){return h(t,null,null,e)},h.matchesSelector=function(t,e){return h(e,null,null,[t]).length>0},h.find=function(t,e,n){var i,o,a,r,s,l;if(!t)return[];for(o=0,a=f.order.length;a>o;o++)if(s=f.order[o],(r=f.leftMatch[s].exec(t))&&(l=r[1],r.splice(1,1),"\\"!==l.substr(l.length-1)&&(r[1]=(r[1]||"").replace(c,""),i=f.find[s](r,e,n),null!=i))){t=t.replace(f.match[s],"");break}return i||(i="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):[]),{set:i,expr:t}},h.filter=function(t,n,i,o){for(var a,r,s,l,c,u,d,p,m,g=t,v=[],y=n,E=n&&n[0]&&h.isXML(n[0]);t&&n.length;){for(s in f.filter)if(null!=(a=f.leftMatch[s].exec(t))&&a[2]){if(u=f.filter[s],d=a[1],r=!1,a.splice(1,1),"\\"===d.substr(d.length-1))continue;if(y===v&&(v=[]),f.preFilter[s])if(a=f.preFilter[s](a,y,i,v,o,E)){if(a===!0)continue}else r=l=!0;if(a)for(p=0;null!=(c=y[p]);p++)c&&(l=u(c,a,p,y),m=o^l,i&&null!=l?m?r=!0:y[p]=!1:m&&(v.push(c),r=!0));if(l!==e){if(i||(y=v),t=t.replace(f.match[s],""),!r)return[];break}}if(t===g){if(null!=r)break;h.error(t)}g=t}return y},h.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)};var p=h.getText=function(t){var e,n,i=t.nodeType,o="";if(i){if(1===i||9===i){if("string"==typeof t.textContent)return t.textContent;if("string"==typeof t.innerText)return t.innerText.replace(u,"");for(t=t.firstChild;t;t=t.nextSibling)o+=p(t)}else if(3===i||4===i)return t.nodeValue}else for(e=0;n=t[e];e++)8!==n.nodeType&&(o+=p(n));return o},f=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(t){return t.getAttribute("href")},type:function(t){return t.getAttribute("type")}},relative:{"+":function(t,e){var n="string"==typeof e,i=n&&!d.test(e),o=n&&!i;i&&(e=e.toLowerCase());for(var a,r=0,s=t.length;s>r;r++)if(a=t[r]){for(;(a=a.previousSibling)&&1!==a.nodeType;);t[r]=o||a&&a.nodeName.toLowerCase()===e?a||!1:a===e}o&&h.filter(e,t,!0)},">":function(t,e){var n,i="string"==typeof e,o=0,a=t.length;if(i&&!d.test(e)){for(e=e.toLowerCase();a>o;o++)if(n=t[o]){var r=n.parentNode;t[o]=r.nodeName.toLowerCase()===e?r:!1}}else{for(;a>o;o++)n=t[o],n&&(t[o]=i?n.parentNode:n.parentNode===e);i&&h.filter(e,t,!0)}},"":function(e,i,o){var r,s=a++,l=t;"string"==typeof i&&!d.test(i)&&(i=i.toLowerCase(),r=i,l=n),l("parentNode",i,s,e,r,o)},"~":function(e,i,o){var r,s=a++,l=t;"string"==typeof i&&!d.test(i)&&(i=i.toLowerCase(),r=i,l=n),l("previousSibling",i,s,e,r,o)}},find:{ID:function(t,e,n){if("undefined"!=typeof e.getElementById&&!n){var i=e.getElementById(t[1]);return i&&i.parentNode?[i]:[]}},NAME:function(t,e){if("undefined"!=typeof e.getElementsByName){for(var n=[],i=e.getElementsByName(t[1]),o=0,a=i.length;a>o;o++)i[o].getAttribute("name")===t[1]&&n.push(i[o]);return 0===n.length?null:n}},TAG:function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t[1]):void 0}},preFilter:{CLASS:function(t,e,n,i,o,a){if(t=" "+t[1].replace(c,"")+" ",a)return t;for(var r,s=0;null!=(r=e[s]);s++)r&&(o^(r.className&&(" "+r.className+" ").replace(/[\t\n\r]/g," ").indexOf(t)>=0)?n||i.push(r):n&&(e[s]=!1));return!1},ID:function(t){return t[1].replace(c,"")},TAG:function(t){return t[1].replace(c,"").toLowerCase()},CHILD:function(t){if("nth"===t[1]){t[2]||h.error(t[0]),t[2]=t[2].replace(/^\+|\s*/g,"");var e=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===t[2]&&"2n"||"odd"===t[2]&&"2n+1"||!/\D/.test(t[2])&&"0n+"+t[2]||t[2]);t[2]=e[1]+(e[2]||1)-0,t[3]=e[3]-0}else t[2]&&h.error(t[0]);return t[0]=a++,t},ATTR:function(t,e,n,i,o,a){var r=t[1]=t[1].replace(c,"");return!a&&f.attrMap[r]&&(t[1]=f.attrMap[r]),t[4]=(t[4]||t[5]||"").replace(c,""),"~="===t[2]&&(t[4]=" "+t[4]+" "),t},PSEUDO:function(t,e,n,o,a){if("not"===t[1]){if(!((i.exec(t[3])||"").length>1||/^\w/.test(t[3]))){var r=h.filter(t[3],e,n,!0^a);return n||o.push.apply(o,r),!1}t[3]=h(t[3],null,null,e)}else if(f.match.POS.test(t[0])||f.match.CHILD.test(t[0]))return!0;return t},POS:function(t){return t.unshift(!0),t}},filters:{enabled:function(t){return t.disabled===!1&&"hidden"!==t.type},disabled:function(t){return t.disabled===!0},checked:function(t){return t.checked===!0},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},parent:function(t){return!!t.firstChild},empty:function(t){return!t.firstChild},has:function(t,e,n){return!!h(n[3],t).length},header:function(t){return/h\d/i.test(t.nodeName)},text:function(t){var e=t.getAttribute("type"),n=t.type;return"input"===t.nodeName.toLowerCase()&&"text"===n&&(e===n||null===e)},radio:function(t){return"input"===t.nodeName.toLowerCase()&&"radio"===t.type},checkbox:function(t){return"input"===t.nodeName.toLowerCase()&&"checkbox"===t.type},file:function(t){return"input"===t.nodeName.toLowerCase()&&"file"===t.type},password:function(t){return"input"===t.nodeName.toLowerCase()&&"password"===t.type},submit:function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&"submit"===t.type},image:function(t){return"input"===t.nodeName.toLowerCase()&&"image"===t.type},reset:function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&"reset"===t.type},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},input:function(t){return/input|select|textarea|button/i.test(t.nodeName)},focus:function(t){return t===t.ownerDocument.activeElement}},setFilters:{first:function(t,e){return 0===e},last:function(t,e,n,i){return e===i.length-1},even:function(t,e){return e%2===0},odd:function(t,e){return e%2===1},lt:function(t,e,n){return e<n[3]-0},gt:function(t,e,n){return e>n[3]-0},nth:function(t,e,n){return n[3]-0===e},eq:function(t,e,n){return n[3]-0===e}},filter:{PSEUDO:function(t,e,n,i){var o=e[1],a=f.filters[o];if(a)return a(t,n,e,i);if("contains"===o)return(t.textContent||t.innerText||p([t])||"").indexOf(e[3])>=0;if("not"===o){for(var r=e[3],s=0,l=r.length;l>s;s++)if(r[s]===t)return!1;return!0}h.error(o)},CHILD:function(t,e){var n,i,a,r,s,l,c=e[1],u=t;switch(c){case"only":case"first":for(;u=u.previousSibling;)if(1===u.nodeType)return!1;if("first"===c)return!0;u=t;case"last":for(;u=u.nextSibling;)if(1===u.nodeType)return!1;return!0;case"nth":if(n=e[2],i=e[3],1===n&&0===i)return!0;if(a=e[0],r=t.parentNode,r&&(r[o]!==a||!t.nodeIndex)){for(s=0,u=r.firstChild;u;u=u.nextSibling)1===u.nodeType&&(u.nodeIndex=++s);r[o]=a}return l=t.nodeIndex-i,0===n?0===l:l%n===0&&l/n>=0}},ID:function(t,e){return 1===t.nodeType&&t.getAttribute("id")===e},TAG:function(t,e){return"*"===e&&1===t.nodeType||!!t.nodeName&&t.nodeName.toLowerCase()===e},CLASS:function(t,e){return(" "+(t.className||t.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(t,e){var n=e[1],i=h.attr?h.attr(t,n):f.attrHandle[n]?f.attrHandle[n](t):null!=t[n]?t[n]:t.getAttribute(n),o=i+"",a=e[2],r=e[4];return null==i?"!="===a:!a&&h.attr?null!=i:"="===a?o===r:"*="===a?o.indexOf(r)>=0:"~="===a?(" "+o+" ").indexOf(r)>=0:r?"!="===a?o!==r:"^="===a?0===o.indexOf(r):"$="===a?o.substr(o.length-r.length)===r:"|="===a?o===r||o.substr(0,r.length+1)===r+"-":!1:o&&i!==!1},POS:function(t,e,n,i){var o=e[2],a=f.setFilters[o];return a?a(t,n,e,i):void 0}}},m=f.match.POS,g=function(t,e){return"\\"+(e-0+1)};for(var v in f.match)f.match[v]=new RegExp(f.match[v].source+/(?![^\[]*\])(?![^\(]*\))/.source),f.leftMatch[v]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[v].source.replace(/\\(\d+)/g,g));var y=function(t,e){return t=Array.prototype.slice.call(t,0),e?(e.push.apply(e,t),e):t};try{Array.prototype.slice.call(N.documentElement.childNodes,0)[0].nodeType}catch(E){y=function(t,e){var n=0,i=e||[];if("[object Array]"===r.call(t))Array.prototype.push.apply(i,t);else if("number"==typeof t.length)for(var o=t.length;o>n;n++)i.push(t[n]);else for(;t[n];n++)i.push(t[n]);return i}}var T,b;N.documentElement.compareDocumentPosition?T=function(t,e){return t===e?(s=!0,0):t.compareDocumentPosition&&e.compareDocumentPosition?4&t.compareDocumentPosition(e)?-1:1:t.compareDocumentPosition?-1:1}:(T=function(t,e){if(t===e)return s=!0,0;if(t.sourceIndex&&e.sourceIndex)return t.sourceIndex-e.sourceIndex;var n,i,o=[],a=[],r=t.parentNode,l=e.parentNode,c=r;if(r===l)return b(t,e);if(!r)return-1;if(!l)return 1;for(;c;)o.unshift(c),c=c.parentNode;for(c=l;c;)a.unshift(c),c=c.parentNode;n=o.length,i=a.length;for(var u=0;n>u&&i>u;u++)if(o[u]!==a[u])return b(o[u],a[u]);return u===n?b(t,a[u],-1):b(o[u],e,1)},b=function(t,e,n){if(t===e)return n;for(var i=t.nextSibling;i;){if(i===e)return-1;i=i.nextSibling}return 1}),function(){var t=N.createElement("div"),n="script"+(new Date).getTime(),i=N.documentElement;t.innerHTML="<a name='"+n+"'/>",i.insertBefore(t,i.firstChild),N.getElementById(n)&&(f.find.ID=function(t,n,i){if("undefined"!=typeof n.getElementById&&!i){var o=n.getElementById(t[1]);return o?o.id===t[1]||"undefined"!=typeof o.getAttributeNode&&o.getAttributeNode("id").nodeValue===t[1]?[o]:e:[]}},f.filter.ID=function(t,e){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return 1===t.nodeType&&n&&n.nodeValue===e}),i.removeChild(t),i=t=null}(),function(){var t=N.createElement("div");t.appendChild(N.createComment("")),t.getElementsByTagName("*").length>0&&(f.find.TAG=function(t,e){var n=e.getElementsByTagName(t[1]);if("*"===t[1]){for(var i=[],o=0;n[o];o++)1===n[o].nodeType&&i.push(n[o]);n=i}return n}),t.innerHTML="<a href='#'></a>",t.firstChild&&"undefined"!=typeof t.firstChild.getAttribute&&"#"!==t.firstChild.getAttribute("href")&&(f.attrHandle.href=function(t){return t.getAttribute("href",2)}),t=null}(),N.querySelectorAll&&function(){var t=h,e=N.createElement("div"),n="__sizzle__";if(e.innerHTML="<p class='TEST'></p>",!e.querySelectorAll||0!==e.querySelectorAll(".TEST").length){h=function(e,i,o,a){if(i=i||N,!a&&!h.isXML(i)){var r=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);if(r&&(1===i.nodeType||9===i.nodeType)){if(r[1])return y(i.getElementsByTagName(e),o);if(r[2]&&f.find.CLASS&&i.getElementsByClassName)return y(i.getElementsByClassName(r[2]),o)}if(9===i.nodeType){if("body"===e&&i.body)return y([i.body],o);if(r&&r[3]){var s=i.getElementById(r[3]);if(!s||!s.parentNode)return y([],o);if(s.id===r[3])return y([s],o)}try{return y(i.querySelectorAll(e),o)}catch(l){}}else if(1===i.nodeType&&"object"!==i.nodeName.toLowerCase()){var c=i,u=i.getAttribute("id"),d=u||n,p=i.parentNode,m=/^\s*[+~]/.test(e);u?d=d.replace(/'/g,"\\$&"):i.setAttribute("id",d),m&&p&&(i=i.parentNode);try{if(!m||p)return y(i.querySelectorAll("[id='"+d+"'] "+e),o)}catch(g){}finally{u||c.removeAttribute("id")}}}return t(e,i,o,a)};for(var i in t)h[i]=t[i];e=null}}(),function(){var t=N.documentElement,e=t.matchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.msMatchesSelector;if(e){var n=!e.call(N.createElement("div"),"div"),i=!1;try{e.call(N.documentElement,"[test!='']:sizzle")}catch(o){i=!0}h.matchesSelector=function(t,o){if(o=o.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!h.isXML(t))try{if(i||!f.match.PSEUDO.test(o)&&!/!=/.test(o)){var a=e.call(t,o);if(a||!n||t.document&&11!==t.document.nodeType)return a}}catch(r){}return h(o,null,null,[t]).length>0}}}(),function(){var t=N.createElement("div");if(t.innerHTML="<div class='test e'></div><div class='test'></div>",t.getElementsByClassName&&0!==t.getElementsByClassName("e").length){if(t.lastChild.className="e",1===t.getElementsByClassName("e").length)return;f.order.splice(1,0,"CLASS"),f.find.CLASS=function(t,e,n){return"undefined"==typeof e.getElementsByClassName||n?void 0:e.getElementsByClassName(t[1])},t=null}}(),h.contains=N.documentElement.contains?function(t,e){return t!==e&&(t.contains?t.contains(e):!0)}:N.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:function(){return!1},h.isXML=function(t){var e=(t?t.ownerDocument||t:0).documentElement;return e?"HTML"!==e.nodeName:!1};var C=function(t,e,n){for(var i,o=[],a="",r=e.nodeType?[e]:e;i=f.match.PSEUDO.exec(t);)a+=i[0],t=t.replace(f.match.PSEUDO,"");t=f.relative[t]?t+"*":t;for(var s=0,l=r.length;l>s;s++)h(t,r[s],o,n);return h.filter(a,o)};h.attr=P.attr,h.selectors.attrMap={},P.find=h,P.expr=h.selectors,P.expr[":"]=P.expr.filters,P.unique=h.uniqueSort,P.text=h.getText,P.isXMLDoc=h.isXML,P.contains=h.contains}();var le=/Until$/,ce=/^(?:parents|prevUntil|prevAll)/,ue=/,/,de=/^.[^:#\[\.,]*$/,he=Array.prototype.slice,pe=P.expr.match.POS,fe={children:!0,contents:!0,next:!0,prev:!0};P.fn.extend({find:function(t){var e,n,i=this;if("string"!=typeof t)return P(t).filter(function(){for(e=0,n=i.length;n>e;e++)if(P.contains(i[e],this))return!0});var o,a,r,s=this.pushStack("","find",t);for(e=0,n=this.length;n>e;e++)if(o=s.length,P.find(t,this[e],s),e>0)for(a=o;a<s.length;a++)for(r=0;o>r;r++)if(s[r]===s[a]){s.splice(a--,1);break}return s},has:function(t){var e=P(t);return this.filter(function(){for(var t=0,n=e.length;n>t;t++)if(P.contains(this,e[t]))return!0})},not:function(t){return this.pushStack(D(this,t,!1),"not",t)},filter:function(t){return this.pushStack(D(this,t,!0),"filter",t)},is:function(t){return!!t&&("string"==typeof t?pe.test(t)?P(t,this.context).index(this[0])>=0:P.filter(t,this).length>0:this.filter(t).length>0)},closest:function(t,e){var n,i,o=[],a=this[0];if(P.isArray(t)){for(var r=1;a&&a.ownerDocument&&a!==e;){for(n=0;n<t.length;n++)P(a).is(t[n])&&o.push({selector:t[n],elem:a,level:r});a=a.parentNode,r++}return o}var s=pe.test(t)||"string"!=typeof t?P(t,e||this.context):0;for(n=0,i=this.length;i>n;n++)for(a=this[n];a;){if(s?s.index(a)>-1:P.find.matchesSelector(a,t)){o.push(a);break}if(a=a.parentNode,!a||!a.ownerDocument||a===e||11===a.nodeType)break}return o=o.length>1?P.unique(o):o,this.pushStack(o,"closest",t)},index:function(t){return t?"string"==typeof t?P.inArray(this[0],P(t)):P.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(t,e){var n="string"==typeof t?P(t,e):P.makeArray(t&&t.nodeType?[t]:t),i=P.merge(this.get(),n);return this.pushStack(O(n[0])||O(i[0])?i:P.unique(i))},andSelf:function(){return this.add(this.prevObject)}}),P.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return P.dir(t,"parentNode")},parentsUntil:function(t,e,n){return P.dir(t,"parentNode",n)},next:function(t){return P.nth(t,2,"nextSibling")},prev:function(t){return P.nth(t,2,"previousSibling")},nextAll:function(t){return P.dir(t,"nextSibling")},prevAll:function(t){return P.dir(t,"previousSibling")},nextUntil:function(t,e,n){return P.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return P.dir(t,"previousSibling",n)},siblings:function(t){return P.sibling(t.parentNode.firstChild,t)},children:function(t){return P.sibling(t.firstChild)},contents:function(t){return P.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:P.makeArray(t.childNodes)}},function(t,e){P.fn[t]=function(n,i){var o=P.map(this,e,n);return le.test(t)||(i=n),i&&"string"==typeof i&&(o=P.filter(i,o)),o=this.length>1&&!fe[t]?P.unique(o):o,(this.length>1||ue.test(i))&&ce.test(t)&&(o=o.reverse()),this.pushStack(o,t,he.call(arguments).join(","))}}),P.extend({filter:function(t,e,n){return n&&(t=":not("+t+")"),1===e.length?P.find.matchesSelector(e[0],t)?[e[0]]:[]:P.find.matches(t,e)},dir:function(t,n,i){for(var o=[],a=t[n];a&&9!==a.nodeType&&(i===e||1!==a.nodeType||!P(a).is(i));)1===a.nodeType&&o.push(a),a=a[n];return o},nth:function(t,e,n){e=e||1;for(var i=0;t&&(1!==t.nodeType||++i!==e);t=t[n]);return t},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}});var me="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ge=/ jQuery\d+="(?:\d+|null)"/g,ve=/^\s+/,ye=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ee=/<([\w:]+)/,Te=/<tbody/i,be=/<|&#?\w+;/,Ce=/<(?:script|style)/i,Ie=/<(?:script|object|embed|option|style)/i,we=new RegExp("<(?:"+me+")","i"),De=/checked\s*(?:[^=]|=\s*.checked.)/i,Oe=/\/(java|ecma)script/i,Re=/^\s*<!(?:\[CDATA\[|\-\-)/,ke={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},_e=w(N);ke.optgroup=ke.option,ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,P.support.htmlSerialize||(ke._default=[1,"div<div>","</div>"]),P.fn.extend({text:function(t){return P.isFunction(t)?this.each(function(e){var n=P(this);n.text(t.call(this,e,n.text()))}):"object"!=typeof t&&t!==e?this.empty().append((this[0]&&this[0].ownerDocument||N).createTextNode(t)):P.text(this)},wrapAll:function(t){if(P.isFunction(t))return this.each(function(e){P(this).wrapAll(t.call(this,e))});if(this[0]){var e=P(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return this.each(P.isFunction(t)?function(e){P(this).wrapInner(t.call(this,e))}:function(){var e=P(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=P.isFunction(t);return this.each(function(n){P(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){P.nodeName(this,"body")||P(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(t){1===this.nodeType&&this.appendChild(t)})},prepend:function(){return this.domManip(arguments,!0,function(t){1===this.nodeType&&this.insertBefore(t,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(t){this.parentNode.insertBefore(t,this)});if(arguments.length){var t=P.clean(arguments);return t.push.apply(t,this.toArray()),this.pushStack(t,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(t){this.parentNode.insertBefore(t,this.nextSibling)});if(arguments.length){var t=this.pushStack(this,"after",arguments);return t.push.apply(t,P.clean(arguments)),t}},remove:function(t,e){for(var n,i=0;null!=(n=this[i]);i++)(!t||P.filter(t,[n]).length)&&(!e&&1===n.nodeType&&(P.cleanData(n.getElementsByTagName("*")),P.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)for(1===t.nodeType&&P.cleanData(t.getElementsByTagName("*"));t.firstChild;)t.removeChild(t.firstChild);return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return P.clone(this,t,e)})},html:function(t){if(t===e)return this[0]&&1===this[0].nodeType?this[0].innerHTML.replace(ge,""):null;if("string"!=typeof t||Ce.test(t)||!P.support.leadingWhitespace&&ve.test(t)||ke[(Ee.exec(t)||["",""])[1].toLowerCase()])P.isFunction(t)?this.each(function(e){var n=P(this);n.html(t.call(this,e,n.html()))}):this.empty().append(t);else{t=t.replace(ye,"<$1></$2>");try{for(var n=0,i=this.length;i>n;n++)1===this[n].nodeType&&(P.cleanData(this[n].getElementsByTagName("*")),this[n].innerHTML=t)}catch(o){this.empty().append(t)}}return this},replaceWith:function(t){return this[0]&&this[0].parentNode?P.isFunction(t)?this.each(function(e){var n=P(this),i=n.html();n.replaceWith(t.call(this,e,i))}):("string"!=typeof t&&(t=P(t).detach()),this.each(function(){var e=this.nextSibling,n=this.parentNode;P(this).remove(),e?P(e).before(t):P(n).append(t)})):this.length?this.pushStack(P(P.isFunction(t)?t():t),"replaceWith",t):this
},detach:function(t){return this.remove(t,!0)},domManip:function(t,n,i){var o,a,r,s,l=t[0],c=[];if(!P.support.checkClone&&3===arguments.length&&"string"==typeof l&&De.test(l))return this.each(function(){P(this).domManip(t,n,i,!0)});if(P.isFunction(l))return this.each(function(o){var a=P(this);t[0]=l.call(this,o,n?a.html():e),a.domManip(t,n,i)});if(this[0]){if(s=l&&l.parentNode,o=P.support.parentNode&&s&&11===s.nodeType&&s.childNodes.length===this.length?{fragment:s}:P.buildFragment(t,this,c),r=o.fragment,a=1===r.childNodes.length?r=r.firstChild:r.firstChild,a){n=n&&P.nodeName(a,"tr");for(var u=0,d=this.length,h=d-1;d>u;u++)i.call(n?I(this[u],a):this[u],o.cacheable||d>1&&h>u?P.clone(r,!0,!0):r)}c.length&&P.each(c,g)}return this}}),P.buildFragment=function(t,e,n){var i,o,a,r,s=t[0];return e&&e[0]&&(r=e[0].ownerDocument||e[0]),r.createDocumentFragment||(r=N),1===t.length&&"string"==typeof s&&s.length<512&&r===N&&"<"===s.charAt(0)&&!Ie.test(s)&&(P.support.checkClone||!De.test(s))&&(P.support.html5Clone||!we.test(s))&&(o=!0,a=P.fragments[s],a&&1!==a&&(i=a)),i||(i=r.createDocumentFragment(),P.clean(t,r,i,n)),o&&(P.fragments[s]=a?i:1),{fragment:i,cacheable:o}},P.fragments={},P.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){P.fn[t]=function(n){var i=[],o=P(n),a=1===this.length&&this[0].parentNode;if(a&&11===a.nodeType&&1===a.childNodes.length&&1===o.length)return o[e](this[0]),this;for(var r=0,s=o.length;s>r;r++){var l=(r>0?this.clone(!0):this).get();P(o[r])[e](l),i=i.concat(l)}return this.pushStack(i,t,o.selector)}}),P.extend({clone:function(t,e,n){var i,o,a,r=P.support.html5Clone||!we.test("<"+t.nodeName)?t.cloneNode(!0):v(t);if(!(P.support.noCloneEvent&&P.support.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||P.isXMLDoc(t)))for(b(t,r),i=T(t),o=T(r),a=0;i[a];++a)o[a]&&b(i[a],o[a]);if(e&&(C(t,r),n))for(i=T(t),o=T(r),a=0;i[a];++a)C(i[a],o[a]);return i=o=null,r},clean:function(t,e,n,i){var o;e=e||N,"undefined"==typeof e.createElement&&(e=e.ownerDocument||e[0]&&e[0].ownerDocument||N);for(var a,r,s=[],l=0;null!=(r=t[l]);l++)if("number"==typeof r&&(r+=""),r){if("string"==typeof r)if(be.test(r)){r=r.replace(ye,"<$1></$2>");var c=(Ee.exec(r)||["",""])[1].toLowerCase(),u=ke[c]||ke._default,d=u[0],h=e.createElement("div");for(e===N?_e.appendChild(h):w(e).appendChild(h),h.innerHTML=u[1]+r+u[2];d--;)h=h.lastChild;if(!P.support.tbody){var p=Te.test(r),f="table"!==c||p?"<table>"!==u[1]||p?[]:h.childNodes:h.firstChild&&h.firstChild.childNodes;for(a=f.length-1;a>=0;--a)P.nodeName(f[a],"tbody")&&!f[a].childNodes.length&&f[a].parentNode.removeChild(f[a])}!P.support.leadingWhitespace&&ve.test(r)&&h.insertBefore(e.createTextNode(ve.exec(r)[0]),h.firstChild),r=h.childNodes}else r=e.createTextNode(r);var m;if(!P.support.appendChecked)if(r[0]&&"number"==typeof(m=r.length))for(a=0;m>a;a++)y(r[a]);else y(r);r.nodeType?s.push(r):s=P.merge(s,r)}if(n)for(o=function(t){return!t.type||Oe.test(t.type)},l=0;s[l];l++)if(!i||!P.nodeName(s[l],"script")||s[l].type&&"text/javascript"!==s[l].type.toLowerCase()){if(1===s[l].nodeType){var g=P.grep(s[l].getElementsByTagName("script"),o);s.splice.apply(s,[l+1,0].concat(g))}n.appendChild(s[l])}else i.push(s[l].parentNode?s[l].parentNode.removeChild(s[l]):s[l]);return s},cleanData:function(t){for(var e,n,i,o=P.cache,a=P.event.special,r=P.support.deleteExpando,s=0;null!=(i=t[s]);s++)if((!i.nodeName||!P.noData[i.nodeName.toLowerCase()])&&(n=i[P.expando])){if(e=o[n],e&&e.events){for(var l in e.events)a[l]?P.event.remove(i,l):P.removeEvent(i,l,e.handle);e.handle&&(e.handle.elem=null)}r?delete i[P.expando]:i.removeAttribute&&i.removeAttribute(P.expando),delete o[n]}}});var xe,Se,Ke,Ne=/alpha\([^)]*\)/i,Ae=/opacity=([^)]*)/,Le=/([A-Z]|^ms)/g,Pe=/^-?\d+(?:px)?$/i,Fe=/^-?\d/,Me=/^([\-+])=([\-+.\de]+)/,$e={position:"absolute",visibility:"hidden",display:"block"},Be=["Left","Right"],qe=["Top","Bottom"];P.fn.css=function(t,n){return 2===arguments.length&&n===e?this:P.access(this,t,n,!0,function(t,n,i){return i!==e?P.style(t,n,i):P.css(t,n)})},P.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=xe(t,"opacity","opacity");return""===n?"1":n}return t.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":P.support.cssFloat?"cssFloat":"styleFloat"},style:function(t,n,i,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var a,r,s=P.camelCase(n),l=t.style,c=P.cssHooks[s];if(n=P.cssProps[s]||s,i===e)return c&&"get"in c&&(a=c.get(t,!1,o))!==e?a:l[n];if(r=typeof i,"string"===r&&(a=Me.exec(i))&&(i=+(a[1]+1)*+a[2]+parseFloat(P.css(t,n)),r="number"),null==i||"number"===r&&isNaN(i))return;if("number"===r&&!P.cssNumber[s]&&(i+="px"),!(c&&"set"in c&&(i=c.set(t,i))===e))try{l[n]=i}catch(u){}}},css:function(t,n,i){var o,a;return n=P.camelCase(n),a=P.cssHooks[n],n=P.cssProps[n]||n,"cssFloat"===n&&(n="float"),a&&"get"in a&&(o=a.get(t,!0,i))!==e?o:xe?xe(t,n):void 0},swap:function(t,e,n){var i={};for(var o in e)i[o]=t.style[o],t.style[o]=e[o];n.call(t);for(o in e)t.style[o]=i[o]}}),P.curCSS=P.css,P.each(["height","width"],function(t,e){P.cssHooks[e]={get:function(t,n,i){var o;return n?0!==t.offsetWidth?m(t,e,i):(P.swap(t,$e,function(){o=m(t,e,i)}),o):void 0},set:function(t,e){return Pe.test(e)?(e=parseFloat(e),e>=0?e+"px":void 0):e}}}),P.support.opacity||(P.cssHooks.opacity={get:function(t,e){return Ae.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,o=P.isNumeric(e)?"alpha(opacity="+100*e+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,e>=1&&""===P.trim(a.replace(Ne,""))&&(n.removeAttribute("filter"),i&&!i.filter)||(n.filter=Ne.test(a)?a.replace(Ne,o):a+" "+o)}}),P(function(){P.support.reliableMarginRight||(P.cssHooks.marginRight={get:function(t,e){var n;return P.swap(t,{display:"inline-block"},function(){n=e?xe(t,"margin-right","marginRight"):t.style.marginRight}),n}})}),N.defaultView&&N.defaultView.getComputedStyle&&(Se=function(t,e){var n,i,o;return e=e.replace(Le,"-$1").toLowerCase(),(i=t.ownerDocument.defaultView)&&(o=i.getComputedStyle(t,null))&&(n=o.getPropertyValue(e),""===n&&!P.contains(t.ownerDocument.documentElement,t)&&(n=P.style(t,e))),n}),N.documentElement.currentStyle&&(Ke=function(t,e){var n,i,o,a=t.currentStyle&&t.currentStyle[e],r=t.style;return null===a&&r&&(o=r[e])&&(a=o),!Pe.test(a)&&Fe.test(a)&&(n=r.left,i=t.runtimeStyle&&t.runtimeStyle.left,i&&(t.runtimeStyle.left=t.currentStyle.left),r.left="fontSize"===e?"1em":a||0,a=r.pixelLeft+"px",r.left=n,i&&(t.runtimeStyle.left=i)),""===a?"auto":a}),xe=Se||Ke,P.expr&&P.expr.filters&&(P.expr.filters.hidden=function(t){var e=t.offsetWidth,n=t.offsetHeight;return 0===e&&0===n||!P.support.reliableHiddenOffsets&&"none"===(t.style&&t.style.display||P.css(t,"display"))},P.expr.filters.visible=function(t){return!P.expr.filters.hidden(t)});var He,je,ze=/%20/g,Ue=/\[\]$/,We=/\r?\n/g,Ve=/#.*$/,Xe=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ge=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Ye=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Qe=/^(?:GET|HEAD)$/,Ze=/^\/\//,Je=/\?/,tn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,en=/^(?:select|textarea)/i,nn=/\s+/,on=/([?&])_=[^&]*/,an=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,rn=P.fn.load,sn={},ln={},cn=["*/"]+["*"];try{He=L.href}catch(un){He=N.createElement("a"),He.href="",He=He.href}je=an.exec(He.toLowerCase())||[],P.fn.extend({load:function(t,n,i){if("string"!=typeof t&&rn)return rn.apply(this,arguments);if(!this.length)return this;var o=t.indexOf(" ");if(o>=0){var a=t.slice(o,t.length);t=t.slice(0,o)}var r="GET";n&&(P.isFunction(n)?(i=n,n=e):"object"==typeof n&&(n=P.param(n,P.ajaxSettings.traditional),r="POST"));var s=this;return P.ajax({url:t,type:r,dataType:"html",data:n,complete:function(t,e,n){n=t.responseText,t.isResolved()&&(t.done(function(t){n=t}),s.html(a?P("<div>").append(n.replace(tn,"")).find(a):n)),i&&s.each(i,[n,e,t])}}),this},serialize:function(){return P.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?P.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||en.test(this.nodeName)||Ge.test(this.type))}).map(function(t,e){var n=P(this).val();return null==n?null:P.isArray(n)?P.map(n,function(t){return{name:e.name,value:t.replace(We,"\r\n")}}):{name:e.name,value:n.replace(We,"\r\n")}}).get()}}),P.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(t,e){P.fn[e]=function(t){return this.on(e,t)}}),P.each(["get","post"],function(t,n){P[n]=function(t,i,o,a){return P.isFunction(i)&&(a=a||o,o=i,i=e),P.ajax({type:n,url:t,data:i,success:o,dataType:a})}}),P.extend({getScript:function(t,n){return P.get(t,e,n,"script")},getJSON:function(t,e,n){return P.get(t,e,n,"json")},ajaxSetup:function(t,e){return e?h(t,P.ajaxSettings):(e=t,t=P.ajaxSettings),h(t,e),t},ajaxSettings:{url:He,isLocal:Ye.test(je[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":t.String,"text html":!0,"text json":P.parseJSON,"text xml":P.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:f(sn),ajaxTransport:f(ln),ajax:function(t,n){function i(t,n,i,r){if(2!==I){I=2,l&&clearTimeout(l),s=e,a=r||"",w.readyState=t>0?4:0;var d,p,f,b,C,D=n,O=i?u(m,w,i):e;if(t>=200&&300>t||304===t)if(m.ifModified&&((b=w.getResponseHeader("Last-Modified"))&&(P.lastModified[o]=b),(C=w.getResponseHeader("Etag"))&&(P.etag[o]=C)),304===t)D="notmodified",d=!0;else try{p=c(m,O),D="success",d=!0}catch(R){D="parsererror",f=R}else f=D,(!D||t)&&(D="error",0>t&&(t=0));w.status=t,w.statusText=""+(n||D),d?y.resolveWith(g,[p,D,w]):y.rejectWith(g,[w,D,f]),w.statusCode(T),T=e,h&&v.trigger("ajax"+(d?"Success":"Error"),[w,m,d?p:f]),E.fireWith(g,[w,D]),h&&(v.trigger("ajaxComplete",[w,m]),--P.active||P.event.trigger("ajaxStop"))}}"object"==typeof t&&(n=t,t=e),n=n||{};var o,a,r,s,l,d,h,f,m=P.ajaxSetup({},n),g=m.context||m,v=g!==m&&(g.nodeType||g instanceof P)?P(g):P.event,y=P.Deferred(),E=P.Callbacks("once memory"),T=m.statusCode||{},b={},C={},I=0,w={readyState:0,setRequestHeader:function(t,e){if(!I){var n=t.toLowerCase();t=C[n]=C[n]||t,b[t]=e}return this},getAllResponseHeaders:function(){return 2===I?a:null},getResponseHeader:function(t){var n;if(2===I){if(!r)for(r={};n=Xe.exec(a);)r[n[1].toLowerCase()]=n[2];n=r[t.toLowerCase()]}return n===e?null:n},overrideMimeType:function(t){return I||(m.mimeType=t),this},abort:function(t){return t=t||"abort",s&&s.abort(t),i(0,t),this}};if(y.promise(w),w.success=w.done,w.error=w.fail,w.complete=E.add,w.statusCode=function(t){if(t){var e;if(2>I)for(e in t)T[e]=[T[e],t[e]];else e=t[w.status],w.then(e,e)}return this},m.url=((t||m.url)+"").replace(Ve,"").replace(Ze,je[1]+"//"),m.dataTypes=P.trim(m.dataType||"*").toLowerCase().split(nn),null==m.crossDomain&&(d=an.exec(m.url.toLowerCase()),m.crossDomain=!(!d||d[1]==je[1]&&d[2]==je[2]&&(d[3]||("http:"===d[1]?80:443))==(je[3]||("http:"===je[1]?80:443)))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=P.param(m.data,m.traditional)),p(sn,m,n,w),2===I)return!1;if(h=m.global,m.type=m.type.toUpperCase(),m.hasContent=!Qe.test(m.type),h&&0===P.active++&&P.event.trigger("ajaxStart"),!m.hasContent&&(m.data&&(m.url+=(Je.test(m.url)?"&":"?")+m.data,delete m.data),o=m.url,m.cache===!1)){var D=P.now(),O=m.url.replace(on,"$1_="+D);m.url=O+(O===m.url?(Je.test(m.url)?"&":"?")+"_="+D:"")}(m.data&&m.hasContent&&m.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",m.contentType),m.ifModified&&(o=o||m.url,P.lastModified[o]&&w.setRequestHeader("If-Modified-Since",P.lastModified[o]),P.etag[o]&&w.setRequestHeader("If-None-Match",P.etag[o])),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+cn+"; q=0.01":""):m.accepts["*"]);for(f in m.headers)w.setRequestHeader(f,m.headers[f]);if(m.beforeSend&&(m.beforeSend.call(g,w,m)===!1||2===I))return w.abort(),!1;for(f in{success:1,error:1,complete:1})w[f](m[f]);if(s=p(ln,m,n,w)){w.readyState=1,h&&v.trigger("ajaxSend",[w,m]),m.async&&m.timeout>0&&(l=setTimeout(function(){w.abort("timeout")},m.timeout));try{I=1,s.send(b,i)}catch(R){if(!(2>I))throw R;i(-1,R)}}else i(-1,"No Transport");return w},param:function(t,n){var i=[],o=function(t,e){e=P.isFunction(e)?e():e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(n===e&&(n=P.ajaxSettings.traditional),P.isArray(t)||t.jquery&&!P.isPlainObject(t))P.each(t,function(){o(this.name,this.value)});else for(var a in t)d(a,t[a],n,o);return i.join("&").replace(ze,"+")}}),P.extend({active:0,lastModified:{},etag:{}});var dn=P.now(),hn=/(\=)\?(&|$)|\?\?/i;P.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return P.expando+"_"+dn++}}),P.ajaxPrefilter("json jsonp",function(e,n,i){var o="application/x-www-form-urlencoded"===e.contentType&&"string"==typeof e.data;if("jsonp"===e.dataTypes[0]||e.jsonp!==!1&&(hn.test(e.url)||o&&hn.test(e.data))){var a,r=e.jsonpCallback=P.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s=t[r],l=e.url,c=e.data,u="$1"+r+"$2";return e.jsonp!==!1&&(l=l.replace(hn,u),e.url===l&&(o&&(c=c.replace(hn,u)),e.data===c&&(l+=(/\?/.test(l)?"&":"?")+e.jsonp+"="+r))),e.url=l,e.data=c,t[r]=function(t){a=[t]},i.always(function(){t[r]=s,a&&P.isFunction(s)&&t[r](a[0])}),e.converters["script json"]=function(){return a||P.error(r+" was not called"),a[0]},e.dataTypes[0]="json","script"}}),P.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(t){return P.globalEval(t),t}}}),P.ajaxPrefilter("script",function(t){t.cache===e&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),P.ajaxTransport("script",function(t){if(t.crossDomain){var n,i=N.head||N.getElementsByTagName("head")[0]||N.documentElement;return{send:function(o,a){n=N.createElement("script"),n.async="async",t.scriptCharset&&(n.charset=t.scriptCharset),n.src=t.url,n.onload=n.onreadystatechange=function(t,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),n=e,o||a(200,"success"))},i.insertBefore(n,i.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var pn,fn=t.ActiveXObject?function(){for(var t in pn)pn[t](0,1)}:!1,mn=0;P.ajaxSettings.xhr=t.ActiveXObject?function(){return!this.isLocal&&l()||s()}:l,function(t){P.extend(P.support,{ajax:!!t,cors:!!t&&"withCredentials"in t})}(P.ajaxSettings.xhr()),P.support.ajax&&P.ajaxTransport(function(n){if(!n.crossDomain||P.support.cors){var i;return{send:function(o,a){var r,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),!n.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");try{for(s in o)l.setRequestHeader(s,o[s])}catch(c){}l.send(n.hasContent&&n.data||null),i=function(t,o){var s,c,u,d,h;try{if(i&&(o||4===l.readyState))if(i=e,r&&(l.onreadystatechange=P.noop,fn&&delete pn[r]),o)4!==l.readyState&&l.abort();else{s=l.status,u=l.getAllResponseHeaders(),d={},h=l.responseXML,h&&h.documentElement&&(d.xml=h),d.text=l.responseText;try{c=l.statusText}catch(p){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=d.text?200:404}}catch(f){o||a(-1,f)}d&&a(s,c,d,u)},n.async&&4!==l.readyState?(r=++mn,fn&&(pn||(pn={},P(t).unload(fn)),pn[r]=i),l.onreadystatechange=i):i()},abort:function(){i&&i(0,1)}}}});var gn,vn,yn,En,Tn={},bn=/^(?:toggle|show|hide)$/,Cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,In=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];P.fn.extend({show:function(t,e,n){var a,r;if(t||0===t)return this.animate(o("show",3),t,e,n);for(var s=0,l=this.length;l>s;s++)a=this[s],a.style&&(r=a.style.display,!P._data(a,"olddisplay")&&"none"===r&&(r=a.style.display=""),""===r&&"none"===P.css(a,"display")&&P._data(a,"olddisplay",i(a.nodeName)));for(s=0;l>s;s++)a=this[s],a.style&&(r=a.style.display,(""===r||"none"===r)&&(a.style.display=P._data(a,"olddisplay")||""));return this},hide:function(t,e,n){if(t||0===t)return this.animate(o("hide",3),t,e,n);for(var i,a,r=0,s=this.length;s>r;r++)i=this[r],i.style&&(a=P.css(i,"display"),"none"!==a&&!P._data(i,"olddisplay")&&P._data(i,"olddisplay",a));for(r=0;s>r;r++)this[r].style&&(this[r].style.display="none");return this},_toggle:P.fn.toggle,toggle:function(t,e,n){var i="boolean"==typeof t;return P.isFunction(t)&&P.isFunction(e)?this._toggle.apply(this,arguments):null==t||i?this.each(function(){var e=i?t:P(this).is(":hidden");P(this)[e?"show":"hide"]()}):this.animate(o("toggle",3),t,e,n),this},fadeTo:function(t,e,n,i){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,o){function a(){r.queue===!1&&P._mark(this);var e,n,o,a,s,l,c,u,d,h=P.extend({},r),p=1===this.nodeType,f=p&&P(this).is(":hidden");h.animatedProperties={};for(o in t){if(e=P.camelCase(o),o!==e&&(t[e]=t[o],delete t[o]),n=t[e],P.isArray(n)?(h.animatedProperties[e]=n[1],n=t[e]=n[0]):h.animatedProperties[e]=h.specialEasing&&h.specialEasing[e]||h.easing||"swing","hide"===n&&f||"show"===n&&!f)return h.complete.call(this);p&&("height"===e||"width"===e)&&(h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===P.css(this,"display")&&"none"===P.css(this,"float")&&(P.support.inlineBlockNeedsLayout&&"inline"!==i(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=h.overflow&&(this.style.overflow="hidden");for(o in t)a=new P.fx(this,h,o),n=t[o],bn.test(n)?(d=P._data(this,"toggle"+o)||("toggle"===n?f?"show":"hide":0),d?(P._data(this,"toggle"+o,"show"===d?"hide":"show"),a[d]()):a[n]()):(s=Cn.exec(n),l=a.cur(),s?(c=parseFloat(s[2]),u=s[3]||(P.cssNumber[o]?"":"px"),"px"!==u&&(P.style(this,o,(c||1)+u),l=(c||1)/a.cur()*l,P.style(this,o,l+u)),s[1]&&(c=("-="===s[1]?-1:1)*c+l),a.custom(l,c,u)):a.custom(l,n,""));return!0}var r=P.speed(e,n,o);return P.isEmptyObject(t)?this.each(r.complete,[!1]):(t=P.extend({},t),r.queue===!1?this.each(a):this.queue(r.queue,a))},stop:function(t,n,i){return"string"!=typeof t&&(i=n,n=t,t=e),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){function e(t,e,n){var o=e[n];P.removeData(t,n,!0),o.stop(i)}var n,o=!1,a=P.timers,r=P._data(this);if(i||P._unmark(!0,this),null==t)for(n in r)r[n]&&r[n].stop&&n.indexOf(".run")===n.length-4&&e(this,r,n);else r[n=t+".run"]&&r[n].stop&&e(this,r,n);for(n=a.length;n--;)a[n].elem===this&&(null==t||a[n].queue===t)&&(i?a[n](!0):a[n].saveState(),o=!0,a.splice(n,1));(!i||!o)&&P.dequeue(this,t)})}}),P.each({slideDown:o("show",1),slideUp:o("hide",1),slideToggle:o("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){P.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),P.extend({speed:function(t,e,n){var i=t&&"object"==typeof t?P.extend({},t):{complete:n||!n&&e||P.isFunction(t)&&t,duration:t,easing:n&&e||e&&!P.isFunction(e)&&e};return i.duration=P.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in P.fx.speeds?P.fx.speeds[i.duration]:P.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(t){P.isFunction(i.old)&&i.old.call(this),i.queue?P.dequeue(this,i.queue):t!==!1&&P._unmark(this)},i},easing:{linear:function(t,e,n,i){return n+i*t},swing:function(t,e,n,i){return(-Math.cos(t*Math.PI)/2+.5)*i+n}},timers:[],fx:function(t,e,n){this.options=e,this.elem=t,this.prop=n,e.orig=e.orig||{}}}),P.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(P.fx.step[this.prop]||P.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var t,e=P.css(this.elem,this.prop);return isNaN(t=parseFloat(e))?e&&"auto"!==e?e:0:t},custom:function(t,n,i){function o(t){return a.step(t)}var a=this,s=P.fx;this.startTime=En||r(),this.end=n,this.now=this.start=t,this.pos=this.state=0,this.unit=i||this.unit||(P.cssNumber[this.prop]?"":"px"),o.queue=this.options.queue,o.elem=this.elem,o.saveState=function(){a.options.hide&&P._data(a.elem,"fxshow"+a.prop)===e&&P._data(a.elem,"fxshow"+a.prop,a.start)},o()&&P.timers.push(o)&&!yn&&(yn=setInterval(s.tick,s.interval))},show:function(){var t=P._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=t||P.style(this.elem,this.prop),this.options.show=!0,t!==e?this.custom(this.cur(),t):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),P(this.elem).show()},hide:function(){this.options.orig[this.prop]=P._data(this.elem,"fxshow"+this.prop)||P.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(t){var e,n,i,o=En||r(),a=!0,s=this.elem,l=this.options;if(t||o>=l.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),l.animatedProperties[this.prop]=!0;for(e in l.animatedProperties)l.animatedProperties[e]!==!0&&(a=!1);if(a){if(null!=l.overflow&&!P.support.shrinkWrapBlocks&&P.each(["","X","Y"],function(t,e){s.style["overflow"+e]=l.overflow[t]}),l.hide&&P(s).hide(),l.hide||l.show)for(e in l.animatedProperties)P.style(s,e,l.orig[e]),P.removeData(s,"fxshow"+e,!0),P.removeData(s,"toggle"+e,!0);i=l.complete,i&&(l.complete=!1,i.call(s))}return!1}return 1/0==l.duration?this.now=o:(n=o-this.startTime,this.state=n/l.duration,this.pos=P.easing[l.animatedProperties[this.prop]](this.state,n,0,1,l.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},P.extend(P.fx,{tick:function(){for(var t,e=P.timers,n=0;n<e.length;n++)t=e[n],!t()&&e[n]===t&&e.splice(n--,1);e.length||P.fx.stop()},interval:13,stop:function(){clearInterval(yn),yn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(t){P.style(t.elem,"opacity",t.now)},_default:function(t){t.elem.style&&null!=t.elem.style[t.prop]?t.elem.style[t.prop]=t.now+t.unit:t.elem[t.prop]=t.now}}}),P.each(["width","height"],function(t,e){P.fx.step[e]=function(t){P.style(t.elem,e,Math.max(0,t.now)+t.unit)}}),P.expr&&P.expr.filters&&(P.expr.filters.animated=function(t){return P.grep(P.timers,function(e){return t===e.elem}).length});var wn=/^t(?:able|d|h)$/i,Dn=/^(?:body|html)$/i;P.fn.offset="getBoundingClientRect"in N.documentElement?function(t){var e,i=this[0];if(t)return this.each(function(e){P.offset.setOffset(this,t,e)});if(!i||!i.ownerDocument)return null;if(i===i.ownerDocument.body)return P.offset.bodyOffset(i);try{e=i.getBoundingClientRect()}catch(o){}var a=i.ownerDocument,r=a.documentElement;if(!e||!P.contains(r,i))return e?{top:e.top,left:e.left}:{top:0,left:0};var s=a.body,l=n(a),c=r.clientTop||s.clientTop||0,u=r.clientLeft||s.clientLeft||0,d=l.pageYOffset||P.support.boxModel&&r.scrollTop||s.scrollTop,h=l.pageXOffset||P.support.boxModel&&r.scrollLeft||s.scrollLeft,p=e.top+d-c,f=e.left+h-u;return{top:p,left:f}}:function(t){var e=this[0];if(t)return this.each(function(e){P.offset.setOffset(this,t,e)});if(!e||!e.ownerDocument)return null;if(e===e.ownerDocument.body)return P.offset.bodyOffset(e);for(var n,i=e.offsetParent,o=e,a=e.ownerDocument,r=a.documentElement,s=a.body,l=a.defaultView,c=l?l.getComputedStyle(e,null):e.currentStyle,u=e.offsetTop,d=e.offsetLeft;(e=e.parentNode)&&e!==s&&e!==r&&(!P.support.fixedPosition||"fixed"!==c.position);)n=l?l.getComputedStyle(e,null):e.currentStyle,u-=e.scrollTop,d-=e.scrollLeft,e===i&&(u+=e.offsetTop,d+=e.offsetLeft,P.support.doesNotAddBorder&&(!P.support.doesAddBorderForTableAndCells||!wn.test(e.nodeName))&&(u+=parseFloat(n.borderTopWidth)||0,d+=parseFloat(n.borderLeftWidth)||0),o=i,i=e.offsetParent),P.support.subtractsBorderForOverflowNotVisible&&"visible"!==n.overflow&&(u+=parseFloat(n.borderTopWidth)||0,d+=parseFloat(n.borderLeftWidth)||0),c=n;return("relative"===c.position||"static"===c.position)&&(u+=s.offsetTop,d+=s.offsetLeft),P.support.fixedPosition&&"fixed"===c.position&&(u+=Math.max(r.scrollTop,s.scrollTop),d+=Math.max(r.scrollLeft,s.scrollLeft)),{top:u,left:d}},P.offset={bodyOffset:function(t){var e=t.offsetTop,n=t.offsetLeft;return P.support.doesNotIncludeMarginInBodyOffset&&(e+=parseFloat(P.css(t,"marginTop"))||0,n+=parseFloat(P.css(t,"marginLeft"))||0),{top:e,left:n}},setOffset:function(t,e,n){var i=P.css(t,"position");"static"===i&&(t.style.position="relative");var o,a,r=P(t),s=r.offset(),l=P.css(t,"top"),c=P.css(t,"left"),u=("absolute"===i||"fixed"===i)&&P.inArray("auto",[l,c])>-1,d={},h={};u?(h=r.position(),o=h.top,a=h.left):(o=parseFloat(l)||0,a=parseFloat(c)||0),P.isFunction(e)&&(e=e.call(t,n,s)),null!=e.top&&(d.top=e.top-s.top+o),null!=e.left&&(d.left=e.left-s.left+a),"using"in e?e.using.call(t,d):r.css(d)}},P.fn.extend({position:function(){if(!this[0])return null;var t=this[0],e=this.offsetParent(),n=this.offset(),i=Dn.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(P.css(t,"marginTop"))||0,n.left-=parseFloat(P.css(t,"marginLeft"))||0,i.top+=parseFloat(P.css(e[0],"borderTopWidth"))||0,i.left+=parseFloat(P.css(e[0],"borderLeftWidth"))||0,{top:n.top-i.top,left:n.left-i.left}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!Dn.test(t.nodeName)&&"static"===P.css(t,"position");)t=t.offsetParent;return t})}}),P.each(["Left","Top"],function(t,i){var o="scroll"+i;P.fn[o]=function(i){var a,r;return i===e?(a=this[0])?(r=n(a),r?"pageXOffset"in r?r[t?"pageYOffset":"pageXOffset"]:P.support.boxModel&&r.document.documentElement[o]||r.document.body[o]:a[o]):null:this.each(function(){r=n(this),r?r.scrollTo(t?P(r).scrollLeft():i,t?i:P(r).scrollTop()):this[o]=i})}}),P.each(["Height","Width"],function(t,n){var i=n.toLowerCase();P.fn["inner"+n]=function(){var t=this[0];return t?t.style?parseFloat(P.css(t,i,"padding")):this[i]():null},P.fn["outer"+n]=function(t){var e=this[0];return e?e.style?parseFloat(P.css(e,i,t?"margin":"border")):this[i]():null},P.fn[i]=function(t){var o=this[0];if(!o)return null==t?null:this;if(P.isFunction(t))return this.each(function(e){var n=P(this);n[i](t.call(this,e,n[i]()))});if(P.isWindow(o)){var a=o.document.documentElement["client"+n],r=o.document.body;return"CSS1Compat"===o.document.compatMode&&a||r&&r["client"+n]||a}if(9===o.nodeType)return Math.max(o.documentElement["client"+n],o.body["scroll"+n],o.documentElement["scroll"+n],o.body["offset"+n],o.documentElement["offset"+n]);if(t===e){var s=P.css(o,i),l=parseFloat(s);return P.isNumeric(l)?l:s}return this.css(i,"string"==typeof t?t:t+"px")}}),t.jQuery=t.$=P,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return P})}(window),/*
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
<<<<<<< HEAD

(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
/**
 * http://github.com/valums/file-uploader
 * 
 * Multiple file upload component with progress-bar, drag-and-drop. 
 * © 2010 Andrew Valums ( andrew(at)valums.com ) 
 * 
 * Licensed under GNU GPL 2 or later, see license.txt.
 */    

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */ 
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};  

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);
    
    from = from || 0;
    var len = arr.length;    
    
    if (from < 0) from += len;  

    for (; from < len; from++){  
        if (from in arr && arr[from] === elt){  
            return from;
        }
    }  
    return -1;  
}; 
    
qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Events

qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){       
    // compareposition returns false in this case
    if (parent == descendant) return true;
    
    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 * 
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        prefix = '&',
        add = function(nextObj, i){
            var nextTemp = temp 
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {  
                uristrings.push(
                    (typeof nextObj === 'object') 
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)                                                          
                );
            }
        }; 

    if (!prefixDone && temp) {
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            add(obj[i], i);
        }
    } else {
        uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+'); 
};

//
//
// Uploader Classes
//
//

var qq = qq || {};
    
/**
 * Creates upload button, validates upload, but doesn't create file list or dd. 
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        button: null,
        multiple: true,
        maxConnections: 3,
        method: 'POST',
        fieldName: 'qqfile',
        // validation        
        allowedExtensions: [],               
        sizeLimit: 0,   
        minSizeLimit: 0,
        maxFilesCount: 0, // 0 - no limit, works only in multiple mode
        minFilesCount: 0, // 0 - no limit, works only in multiple mode
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        // messages                
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled.",
            maxFilesError: "You must select less then {maxFilesCount} files.",
            minFilesError: "You must select more then {minFilesCount} files."
        },
        showMessage: function(message){
            alert(message);
        }               
    };
    qq.extend(this._options, o);
        
    // number of files being uploaded
    this._filesInProgress = 0;
    // number of files was processed
    this._filesUploaded = 0;
    this._handler = this._createUploadHandler(); 
    
    if (this._options.button){ 
        this._button = this._createUploadButton(this._options.button);
    }
                        
    this._preventLeaveInProgress();         
};
   
qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;         
    },
    _createUploadButton: function(element){
        var self = this;
        
        return new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(input){
                self._onInputChange(input);
            }        
        });           
    },    
    _createUploadHandler: function(){
        var self = this,
            handlerClass;        
        
        if(qq.UploadHandlerXhr.isSupported()){           
            handlerClass = 'UploadHandlerXhr';                        
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,         
            maxConnections: this._options.maxConnections,
            fieldName: this._options.fieldName,
            method: this._options.method,   
            onProgress: function(id, fileName, loaded, total){                
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);                    
            },            
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            }
        });

        return handler;
    },    
    _preventLeaveInProgress: function(){
        var self = this;
        
        qq.attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}
            
            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;             
        });        
    },    
    _onSubmit: function(id, fileName){
        this._filesInProgress++;  
    },
    _onProgress: function(id, fileName, loaded, total){        
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;                 
        if (result.error){
            this._options.showMessage(result.error);
        } else {
          this._filesUploaded++;
        }             
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;        
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){                
            this._uploadFileList(input.files);                   
        } else {             
            if (this._validateFile(input)){                
                this._uploadFile(input);                                    
            }                      
        }               
        this._button.reset();   
    },  
    _uploadFileList: function(files){
        if ( this._validateFiles(files) ) {
          for (var i=0; i<files.length; i++){
              this._uploadFile(files[i]);        
          }
        }
    },       
    _uploadFile: function(fileContainer){      
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);
        
        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFiles: function(files){
        var uploadedCount = this._filesUploaded + files.length;
        
        if (this._options.maxFilesCount > 0) {
          if ( uploadedCount > this._options.maxFilesCount) { 
            this._error('maxFilesError', 'name');
            return false;
          }
        }
        
        if (this._options.minFilesCount > 0) {
          if ( uploadedCount < this._options.minFilesCount) {
            this._error('minFilesError', 'name');
            return false;
          }
        }
        
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return false;
            }            
        }
        
        return true;
    },      
    _validateFile: function(file){
        var name, size;
        
        if (file.value){
            // it is a file input            
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari
            name = file.fileName != null ? file.fileName : file.name;
            size = file.fileSize != null ? file.fileSize : file.size;
        }
                    
        if (! this._isAllowedExtension(name)){            
            this._error('typeError', name);
            return false;
            
        } else if (size === 0){            
            this._error('emptyError', name);
            return false;
                                                     
        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){            
            this._error('sizeError', name);
            return false;
                        
        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;            
        }
        
        return true;                
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];        
        function r(name, replacement){ message = message.replace(name, replacement); }
        
        r('{file}', this._formatFileName(fileName));        
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));
        r('{maxFilesCount}', this._options.maxFilesCount);
        r('{minFilesCount}', this._options.minFilesCount);
        
        this._options.showMessage(message);                
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);    
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.')) ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
        var allowed = this._options.allowedExtensions;
        
        if (!allowed.length){return true;}        
        
        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}    
        }
        
        return false;
    },    
    _formatSize: function(bytes){
        var i = -1;                                    
        do {
            bytes = bytes / 1024;
            i++;  
        } while (bytes > 99);
        
        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];          
    }
};
    
       
/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);
    
    // additional options    
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,
                
        template: '<div class="qq-uploader">' + 
                '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                '<div class="qq-upload-button">Upload a file</div>' +
                '<ul class="qq-upload-list"></ul>' + 
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">Cancel</a>' +
                '<span class="qq-upload-failed-text">Failed</span>' +
            '</li>',        
        
        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',
                        
            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied    
    qq.extend(this._options, o);       

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;        
    this._listElement = this._options.listElement || this._find(this._element, 'list');
    
    this._classes = this._options.classes;
        
    this._button = this._createUploadButton(this._find(this._element, 'button'));        
    
    this._bindCancelEvent();
    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){                                
        var element = qq.getByClass(parent, this._options.classes[type])[0];        
        if (!element){
            throw new Error('element not found ' + type);
        }
        
        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');                        

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);  
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);    
            }
        });
                
        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){     
            if (!dz._isValidFileDrag(e)) return; 
            
            dropArea.style.display = 'block';            
        });                 
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;            
            
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){               
                dropArea.style.display = 'none';                                            
            }
        });                
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);  
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';
        
        var text; 
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {                                   
            text = this._formatSize(total);
        }          
        
        qq.setText(size, text);         
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);                
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));
        
        if (result.success){
            qq.addClass(item, this._classes.success);    
        } else {
            qq.addClass(item, this._classes.fail);
        }         
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);                
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');        
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';        

        this._listElement.appendChild(item);
    },
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;        
        
        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){            
            if (item.qqFileId == id) return item;            
            item = item.nextSibling;
        }          
    },
    /**
     * delegate click event for cancel link 
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;            
        
        qq.attach(list, 'click', function(e){            
            e = e || window.event;
            var target = e.target || e.srcElement;
            
            if (qq.hasClass(target, self._classes.cancel)){                
                qq.preventDefault(e);
               
                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }    
});
    
qq.UploadDropZone = function(o){
    this._options = {
        element: null,  
        onEnter: function(e){},
        onLeave: function(e){},  
        // is not fired when leaving element by hovering descendants   
        onLeaveNotDescendants: function(e){},   
        onDrop: function(e){}                       
    };
    qq.extend(this._options, o); 
    
    this._element = this._options.element;
    
    this._disableDropOutside();
    this._attachEvents();   
};

qq.UploadDropZone.prototype = {
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault(); 
                }           
            });
            
            qq.UploadDropZone.dropOutsideDisabled = true; 
        }        
    },
    _attachEvents: function(){
        var self = this;              
                  
        qq.attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            var effect = e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)    
            } else {                    
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }
                                                     
            e.stopPropagation();
            e.preventDefault();                                                                    
        });
        
        qq.attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;
                        
            self._options.onEnter(e);
        });
        
        qq.attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            self._options.onLeave(e);
            
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);                      
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;
                        
            self._options.onLeaveNotDescendants(e); 
        });
                
        qq.attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            e.preventDefault();
            self._options.onDrop(e);
        });          
    },
    _isValidFileDrag: function(e){
        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4            
            isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;                        

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox            
        return dt && dt.effectAllowed != 'none' && 
            (dt.files || (!isWebkit && dt.types.contains && dt.types.contains('Files')));
        
    }        
}; 

qq.UploadButton = function(o){
    this._options = {
        element: null,  
        // if set to true adds multiple attribute to file input      
        multiple: false,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'                       
    };
    
    qq.extend(this._options, o);
        
    this._element = this._options.element;
    
    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });   
    
    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */    
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);    
        }                
        
        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },    
    _createInput: function(){                
        var input = document.createElement("input");
        
        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }
                
        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);
        
        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });
        
        this._element.appendChild(input);

        var self = this;
        qq.attach(input, 'change', function(){
            self._options.onChange(input);
        });
                
        qq.attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        qq.attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;            
    }        
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
    this._options = {
        debug: false,
        action: '/upload.php',
        method: 'POST',
        fieldName: 'qqfile',
        // maximum number of concurrent uploads        
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){}
    };
    qq.extend(this._options, o);    
    
    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);        
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/    
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};        
        qq.extend(copy, params);
        this._params[id] = copy;        
                
        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){               
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */          
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},     
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);
                
        var max = this._options.maxConnections;
        
        if (this._queue.length >= max && i < max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }        
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);
       
    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', this._options.fieldName);
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();       
        
        this._inputs[id] = fileInput;
        
        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }
                
        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },    
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));
        
        delete this._inputs[id];        

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },     
    _upload: function(id, params){                        
        var input = this._inputs[id];
        
        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }                

        var fileName = this.getName(id);
                
        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){                                 
            self.log('iframe loaded');
            
            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);
            
            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();        
        qq.remove(form);        
        
        return id;
    }, 
    _attachLoadEvent: function(iframe, callback){
        qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;
        
        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + doc.body.innerHTML);
                        
        try {
            response = eval("(" + doc.body.innerHTML + ")");
        } catch(err){
            response = {};
        }        

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);
        
        form.setAttribute('method', this._options.method);
        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';

        // Rails CSRFProtection
        var token = $('meta[name="csrf-token"]').attr('content');
        var param = $('meta[name="csrf-param"]').attr('content');
        var input = qq.toElement('<input type="hidden" />');
        
        input.setAttribute('name', param);
        input.setAttribute('value', token);
        
        form.appendChild(input);
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];
    
    // current loaded size in bytes for each file 
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';        
    
    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );       
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype)

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/    
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }
                
        return this._files.push(file) - 1;        
    },
    getName: function(id){        
        var file = this._files[id];
        // fix missing name in Safari 4
        return file.fileName != null ? file.fileName : file.name;       
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },    
    /**
     * Returns uploaded bytes for file identified by id 
     */    
    getLoaded: function(id){
        return this._loaded[id] || 0; 
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */    
    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);
                
        this._loaded[id] = 0;
                                
        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;
                                        
        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){            
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);                    
            }
        };

        // build query string
        params = params || {};
        params[this._options.fieldName] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open(this._options.method, queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader('X-File-Size', size);
        xhr.setRequestHeader('X-File-Type', file.type);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");

        // Rails CSRFProtection
        if ($.rails) $.rails.CSRFProtection(xhr);        

        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;
        
        var name = this.getName(id);
        var size = this.getSize(id);
        
        this._options.onProgress(id, name, size, size);
                
        if ([200, 201].indexOf( xhr.status ) > -1){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);
                        
            var response;
                    
            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }
            
            this._options.onComplete(id, name, response);
                        
        } else {                   
            this._options.onComplete(id, name, {});
        }
                
        this._files[id] = null;
        this._xhrs[id] = null;    
        this._dequeue(id);                    
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));
        
        this._files[id] = null;
        
        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;                                   
        }
    }
});
/**
 * Author: Sergey Kukunin
 * See: https://github.com/Kukunin/jquery-endless-scroll
 */

(function($) {
	'use strict';

	// Is pushState supported by this browser?
	$.support.pushState =
		window.history && window.history.pushState && window.history.replaceState &&
		// pushState isn't reliable on iOS until 5.
		!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)

	//Declaration of modules
	var scrollModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				scrollContainer: window,
				scrollPadding: 100,
				scrollEventDelay: 300
			}, options);
			this.options = obj.options;
			this.container = obj.container;
			obj.scrollModule = this;

			this._toplock = true;
			this._bottomlock = true;

			this.scrollContainer = $(this.options.scrollContainer);

			this.updateEntities();
			this.sortMarkers();

			this.currentPage = null;

			this.container.on("jes:afterPageLoad", $.proxy(function(event, url, placement) {
				this.updateEntities();
				this.sortMarkers();
				this.checkMarker();

				if ( placement == "top" ) {
					//Get offset between first and second pages
					var offset = this.markers[1].top,
						scrollTop = this.scrollContainer.scrollTop();

					this.scrollContainer.scrollTop(scrollTop + offset);
				}
			}, this));

			this.bind();
		},
		updateEntities: function() {
			this.entities = $(this.options.entity, this.container);
		},
		sortMarkers: function() {
			var markers = [];
			$(".jes-marker", this.container).each(function() {
				markers.push({ top: $(this).position().top, url: $(this).data("jesUrl") });
			});
			this.markers = markers;
		},
		//Check, whether user scrolled to another page
		checkMarker: function() {
			var newPage = this.markers[0],
				scrollTop = this.scrollContainer.scrollTop();

			//Determine, what is current page
			for ( var i = 1; i < this.markers.length; i++ ) {
				if ( scrollTop > this.markers[i].top ) {
					newPage = this.markers[i];
				} else {
					break;
				}
			}
			if ( newPage.url != this.currentPage ) {
				this.currentPage = newPage.url;
				$(this.container).trigger("jes:scrollToPage", newPage.url);
			}
		},
		bind: function() {
			this.scrollContainer.on("scroll.jes", $.proxy(function(event) {
				if ( this._tId ) { return; }

				this.scrollHandler(event);
				//Clean up mark
				this._tId= setTimeout($.proxy(function(){
					this._tId = null;
				},this), this.options.scrollEventDelay);

			}, this));
		},
		unbind: function() {
			$(this.options.scrollContainer).off("scroll.jes");
		},
		scrollHandler: function(ev) {
			var $scrollable = this.scrollContainer,
				$entities = this.entities,
				$firstEntity = $entities.first(),
				$lastEntity = $entities.last();

			var scrollTop = $scrollable.scrollTop(),
				height = $scrollable.height(),
				scrollBottom = scrollTop + height;

			var topEntityPosition = $firstEntity.position().top,
				topTarget = topEntityPosition + this.options.scrollPadding,
				bottomEntityPosition = $lastEntity.outerHeight() + $lastEntity.position().top,
				bottomTarget = bottomEntityPosition - this.options.scrollPadding;

			//Don't trigger event again, if already fired
			//Visitor have to leave the area and get back to fire event again
			//Process top threshold
			if ( scrollTop < topTarget ) {
				if ( !this._toplock ) {
					$(this.container).trigger("jes:topThreshold");
					this._toplock = true;
				}
			} else {
				this._toplock = false;
			}

			//Process bottom threshold
			if ( scrollBottom > bottomTarget ) {
				if ( !this._bottomlock ) {
					$(this.container).trigger("jes:bottomThreshold");
					this._bottomlock = true;
				}
			} else {
				this._bottomlock = false;
			}

			this.checkMarker();
		}
	}

	var ajaxModule = {
		init: function(options, obj) {
			obj.options = $.extend({
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			//markers
			this.setMarker($(this.options.entity, this.container).first(), location.href);

			obj.ajaxModule = this;
		},
		loadPage: function(url, placement, callback) {
			//The hash with methods list
			//depends from placement
			var actions = {
					top: {
						find: 'first',
						inject: 'insertBefore'
					},
					bottom: {
						find: 'last',
						inject: 'insertAfter'
					}
				},
				action = actions[placement];

			this.container.trigger("jes:beforePageLoad", [url, placement]);

			//Make AJAX query
			$.get(url, null, $.proxy(function (_data) {
				var data = $("<div>").html(_data),
				containerSelector = this.options.container,
				container = $(containerSelector, data).first();

				if ( container.length ) {
					//Find entities
					var entities = container.find(this.options.entity);

					if ( placement == "bottom" ) {
						//Remove duplicated (staled) entities from page
						entities.each(function(i) {
							var id = $(this).attr("id");
							if ( id ) {
								$('#' + id, this.container).remove();
							}
						});
					}

					//Find the cursor
					var cursor = $(this.options.entity, containerSelector)[action.find]();

					//Find and insert entities
					entities[action.inject](cursor);
					this.setMarker(entities.first(), url);
				}

				if ( $.isFunction(callback) ) {
					callback(data);
				}
				this.container.trigger("jes:afterPageLoad", [url, placement, data, entities]);
			}, this), 'html');
		},
		setMarker: function(entity, url) {
			entity.addClass("jes-marker").data("jesUrl", url);
		}
	}

	var navigationModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				nextPage: ".pagination a[rel=next]",
				previousPage: ".pagination a[rel=previous]"
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			$.each([{
				selector: this.options.nextPage,
				event: "jes:bottomThreshold.navigation",
				placement: 'bottom'
			}, {
				selector: this.options.previousPage,
				event: "jes:topThreshold.navigation",
				placement: 'top'
			}], $.proxy(function(i, v) {
				v.element = $(v.selector);
				if ( v.element.length ) {
					var url = v.element.prop("href"),
					lock = false;

					var handler = function() {
						//this object is container
						if ( lock || !url ) return;

						lock = true;
						obj.ajaxModule.loadPage(url, v.placement, $.proxy(function( data ) {
							//Search new next link
							var newElement = $(v.selector, $(data));
							if ( newElement.length ) {
								//Update URL and remove lock
								lock = false;
								url = newElement.prop("href");
								v.element.attr("href", url);
							} else {
								//Remove event at all
								$(this).off(v.event);
								v.element.remove();
							}
						}, this));
					};

					$(this.container).on(v.event, handler);
					$(v.element).on("click", $.proxy(function(ev) {
						ev.preventDefault();
						handler.apply(this.container)
					}, this));
				}
			},this));
		}
	}

	var pushStateHistory = {
		init: function(options, obj) {
			if ( !$.support.pushState ) {
				return;
			}

			obj.container.on("jes:scrollToPage", function(event, url) {
				history.replaceState({}, null, url);
			});
		}
	}

	$.endlessScroll = function(options) {

		//Initialize modules
		this.options = $.extend(true, {
			container: "#container",
			entity: ".entity",
			_modules: [ ajaxModule, scrollModule, navigationModule, pushStateHistory ],
			modules: []
		}, options);

		this.container = $(this.options.container);
		if ( !this.container.length ) {
			throw "Container for endless scroll isn't available on the page";
			return;
		}


		//Merge custom options with default
		$.merge(this.options.modules, this.options._modules);
		//Init modules
		this.options.modules.forEach($.proxy(function(module) {
			module.init(this.options, this);
		},this));


		return this;
	}

})(jQuery);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.6.0 or later.
 * https://github.com/rails/jquery-ujs

 * Uploading file using rails.js
 * =============================
 *
 * By default, browsers do not allow files to be uploaded via AJAX. As a result, if there are any non-blank file fields
 * in the remote form, this adapter aborts the AJAX submission and allows the form to submit through standard means.
 *
 * The `ajax:aborted:file` event allows you to bind your own handler to process the form submission however you wish.
 *
 * Ex:
 *     $('form').live('ajax:aborted:file', function(event, elements){
 *       // Implement own remote file-transfer handler here for non-blank file inputs passed in `elements`.
 *       // Returning false in this handler tells rails.js to disallow standard form submission
 *       return false;
 *     });
 *
 * The `ajax:aborted:file` event is fired when a file-type input is detected with a non-blank value.
 *
 * Third-party tools can use this hook to detect when an AJAX file upload is attempted, and then use
 * techniques like the iframe method to upload the file instead.
 *
 * Required fields in rails.js
 * ===========================
 *
 * If any blank required inputs (required="required") are detected in the remote form, the whole form submission
 * is canceled. Note that this is unlike file inputs, which still allow standard (non-AJAX) form submission.
 *
 * The `ajax:aborted:required` event allows you to bind your own handler to inform the user of blank required inputs.
 *
 * !! Note that Opera does not fire the form's submit event if there are blank required inputs, so this event may never
 *    get fired in Opera. This event is what causes other browsers to exhibit the same submit-aborting behavior.
 *
 * Ex:
 *     $('form').live('ajax:aborted:required', function(event, elements){
 *       // Returning false in this handler tells rails.js to submit the form anyway.
 *       // The blank required inputs are passed to this function in `elements`.
 *       return ! confirm("Would you like to submit the form with missing info?");
 *     });
 */

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input:file',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data,
        crossDomain = element.data('cross-domain') || null,
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType),
        options;

      if (rails.fire(element, 'ajax:before')) {

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = element.attr('href');
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType, crossDomain: crossDomain,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          }
        };
        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = link.attr('href'),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input,
        selector = specifiedSelector || 'input,textarea';
      form.find(selector).each(function() {
        input = $(this);
        // Collect non-blank inputs if nonBlank option is true, otherwise, collect blank inputs
        if (nonBlank ? input.val() : !input.val()) {
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form, event) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
        });
      }
      return continuePropagation;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e)
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        // this should be element.removeData('ujs:enable-with')
        // but, there is currently a bug in jquery which makes hyphenated data attributes not get removed
        element.data('ujs:enable-with', false); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

  $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
      rails.enableElement($(this));
  });

  $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
    var link = $(this), method = link.data('method'), data = link.data('params');
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

    if (link.data('remote') !== undefined) {
      if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

      if (rails.handleRemote(link) === false) { rails.enableElement(link); }
      return false;

    } else if (link.data('method')) {
      rails.handleMethod(link);
      return false;
    }
  });

  $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
    var link = $(this);
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    rails.handleRemote(link);
    return false;
  });

  $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
    var form = $(this),
      remote = form.data('remote') !== undefined,
      blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
      nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

    if (!rails.allowAction(form)) return rails.stopEverything(e);

    // skip other logic when required values are missing or file upload is present
    if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
      return rails.stopEverything(e);
    }

    if (remote) {
      if (nonBlankFileInputs) {
        return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
      }

      // If browser does not support submit bubbling, then this live-binding will be called before direct
      // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
      if (!$.support.submitBubbles && $().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);

      rails.handleRemote(form);
      return false;

    } else {
      // slight timeout so that the submit button gets properly serialized
      setTimeout(function(){ rails.disableFormElements(form); }, 13);
    }
  });

  $(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
    var button = $(this);

    if (!rails.allowAction(button)) return rails.stopEverything(event);

    // register the pressed submit button
    var name = button.attr('name'),
      data = name ? {name:name, value:button.val()} : null;

    button.closest('form').data('ujs:submit-button', data);
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
    if (this == event.target) rails.disableFormElements($(this));
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
    if (this == event.target) rails.enableFormElements($(this));
  });

})( jQuery );
$.QueryString = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
    var p=a[i].split('=');
    if (p.length != 2) continue;
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'))

$(document).ready(function(){
  $("div.gal-item div.gal-inner-holder")
    .live('mouseover', function(e){
      $(this).addClass('hover');
    })
    .live('mouseout', function(e){
      $(this).removeClass('hover');
    })
    .live('click', function(e){
      var url = $(this).parents('div.gal-item').data('url');
      CKEDITOR.tools.callFunction(CKEditorFuncNum, url);
      window.close();
    });
  
  $("div.gal-item a.gal-del").live('ajax:complete', function(xhr, status){
    $(this).parents('div.gal-item').remove();
  });

  var endlessScroll = $.endlessScroll({
    container: ".fileupload-list",
    entity: ".gal-item",
    scrollPadding: 100
  });

  // Don't listen events first second
  endlessScroll.scrollModule.unbind();
  window.setTimeout(function() { endlessScroll.scrollModule.bind();}, 1000);
});

// Collection of all instances on page
qq.FileUploader.instances = new Object();

/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploaderInput = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);
    
    // additional options    
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,
        
        template_id: '#fileupload_tmpl',       
        
        classes: {
            // used to get elements from templates
            button: 'fileupload-button',
            drop: 'fileupload-drop-area',
            dropActive: 'fileupload-drop-area-active',
            list: 'fileupload-list',
            preview: 'fileupload-preview',
                        
            file: 'fileupload-file',
            spinner: 'fileupload-spinner',
            size: 'fileupload-size',
            cancel: 'fileupload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'fileupload-success',
            fail: 'fileupload-fail'
        }
    });
    // overwrite options with user supplied    
    qq.extend(this._options, o);       

    this._element = document.getElementById(this._options.element);
    this._listElement = this._options.listElement || this._find(this._element, 'list');
    
    this._classes = this._options.classes;
        
    this._button = this._createUploadButton(this._find(this._element, 'button'));  
    
    //this._setupDragDrop();
    
    qq.FileUploader.instances[this._element.id] = this;
};

// inherit from Basic Uploader
qq.extend(qq.FileUploaderInput.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploaderInput.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){                                
        var element = qq.getByClass(parent, this._options.classes[type])[0];        
        if (!element){
          alert(type);
            throw new Error('element not found ' + type);
        }
        
        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');                        

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);  
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);    
            }
        });
                
        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){     
            if (!dz._isValidFileDrag(e)) return; 
            
            dropArea.style.display = 'block';            
        });                 
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;            
            
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){               
                dropArea.style.display = 'none';                                            
            }
        });                
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);  
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        
        var text; 
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {                                   
            text = this._formatSize(total);
        }          
        
        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var asset = result.asset ? result.asset : result;
        
        if (asset && asset.id){
            qq.addClass(item, this._classes.success);
            
            asset.size = this._formatSize(asset.size);
            asset.controller = (asset.type !== undefined && asset.type.toLowerCase() == "ckeditor::picture" ? "pictures" : "attachment_files");
            
            $(item).replaceWith($(this._options.template_id).tmpl(asset));
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        if (this._listElement) {
          if (this._options.multiple === false) {
            $(this._listElement).empty();
          }
          
          var asset = {
            id: 0, 
            filename: this._formatFileName(fileName), 
            size: 0,
            format_created_at: '',
            url_content: "#",
            controller: "assets",
            url_thumb: "/assets/ckeditor/filebrowser/images/preloader-3799a3e41d7787a31dac5796ebccc242951da2f2b57eb088326ab3bffe15056a.gif"
          };
          
          var item = $(this._options.template_id)
            .tmpl(asset)
            .attr('qqfileid', id)
            .prependTo( this._listElement );
          
          item.find('div.img').addClass('preloader');
          
          this._bindCancelEvent(item);
        }
    },
    _getItemByFileId: function(id){
        return $(this._listElement).find('div[qqfileid=' + id  +']').get(0); 
    },
    /**
     * delegate click event for cancel link 
     **/
    _bindCancelEvent: function(element){
        var self = this,
            item = $(element);        
        
        item.find('a.' + this._classes.cancel).bind('click', function(e){
          self._handler.cancel( item.attr('qqfileid') );
          item.remove();
          qq.preventDefault(e);
          return false;
        });
    }
});






=======
function(t){function e(e,n,i,o){var a={data:o||0===o||o===!1?o:n?n.data:{},_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:c,nest:u,wrap:d,html:h,update:p};return e&&t.extend(a,e,{nodes:[],parent:n}),i&&(a.tmpl=i,a._ctnt=a._ctnt||a.tmpl(t,a),a.key=++b,(I.length?E:y)[b]=a),a}function n(e,o,a){var r,s=a?t.map(a,function(t){return"string"==typeof t?e.key?t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+e.key+'" $2'):t:n(t,e,t._ctnt)}):e;return o?s:(s=s.join(""),s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,n,o,a){r=t(o).get(),l(r),n&&(r=i(n).concat(r)),a&&(r=r.concat(i(a)))}),r?r:i(s))}function i(e){var n=document.createElement("div");return n.innerHTML=e,t.makeArray(n.childNodes)}function o(e){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+t.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,n,i,o,a,s,l){var c,u,d,h=t.tmpl.tag[i];if(!h)throw"Unknown template tag: "+i;return c=h._default||[],s&&!/\w$/.test(a)&&(a+=s,s=""),a?(a=r(a),l=l?","+r(l)+")":s?")":"",u=s?a.indexOf(".")>-1?a+r(s):"("+a+").call($item"+l:a,d=s?u:"(typeof("+a+")==='function'?("+a+").call($item):("+a+"))"):d=u=c.$1||"null",o=r(o),"');"+h[n?"close":"open"].split("$notnull_1").join(a?"typeof("+a+")!=='undefined' && ("+a+")!=null":"true").split("$1a").join(d).split("$1").join(u).split("$2").join(o||c.$2||"")+"__.push('"})+"');}return __;")}function a(e,i){e._wrap=n(e,!0,t.isArray(i)?i:[v.test(i)?i:t(i).html()]).join("")}function r(t){return t?t.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(t){var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function l(n){function i(n){function i(t){t+=c,r=u[t]=u[t]||e(r,y[r.parent.key+c]||r.parent)}var o,a,r,s,l=n;if(s=n.getAttribute(g)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(o=l.getAttribute(g)););o!==s&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(g)||0:0,(r=y[s])||(r=E[s],r=e(r,y[l]||E[l]),r.key=++b,y[b]=r),C&&i(s)),n.removeAttribute(g)}else C&&(r=t.data(n,"tmplItem"))&&(i(r.key),y[r.key]=r,l=t.data(n.parentNode,"tmplItem"),l=l?l.key:0);if(r){for(a=r;a&&a.key!=l;)a.nodes.push(n),a=a.parent;delete r._ctnt,delete r._wrap,t.data(n,"tmplItem",r)}}var o,a,r,s,l,c="_"+C,u={};for(r=0,s=n.length;s>r;r++)if(1===(o=n[r]).nodeType){for(a=o.getElementsByTagName("*"),l=a.length-1;l>=0;l--)i(a[l]);i(o)}}function c(t,e,n,i){return t?void I.push({_:t,tmpl:e,item:this,data:n,options:i}):I.pop()}function u(e,n,i){return t.tmpl(t.template(e),n,i,this)}function d(e,n){var i=e.options||{};return i.wrapped=n,t.tmpl(t.template(e.tmpl),e.data,i,e.item)}function h(e,n){var i=this._wrap;return t.map(t(t.isArray(i)?i.join(""):i).filter(e||"*"),function(t){return n?t.innerText||t.textContent:t.outerHTML||s(t)})}function p(){var e=this.nodes;t.tmpl(null,null,null,this).insertBefore(e[0]),t(e).remove()}var f,m=t.fn.domManip,g="_tmplitem",v=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,y={},E={},T={key:0,data:{}},b=0,C=0,I=[];t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,n){t.fn[e]=function(i){var o,a,r,s,l=[],c=t(i),u=1===this.length&&this[0].parentNode;if(f=y||{},u&&11===u.nodeType&&1===u.childNodes.length&&1===c.length)c[n](this[0]),l=this;else{for(a=0,r=c.length;r>a;a++)C=a,o=(a>0?this.clone(!0):this).get(),t(c[a])[n](o),l=l.concat(o);C=0,l=this.pushStack(l,e,c.selector)}return s=f,f=null,t.tmpl.complete(s),l}}),t.fn.extend({tmpl:function(e,n,i){return t.tmpl(this[0],e,n,i)},tmplItem:function(){return t.tmplItem(this[0])},template:function(e){return t.template(e,this[0])},domManip:function(e,n,i){if(e[0]&&t.isArray(e[0])){for(var o,a=t.makeArray(arguments),r=e[0],s=r.length,l=0;s>l&&!(o=t.data(r[l++],"tmplItem")););o&&C&&(a[2]=function(e){t.tmpl.afterManip(this,e,i)}),m.apply(this,a)}else m.apply(this,arguments);return C=0,!f&&t.tmpl.complete(y),this}}),t.extend({tmpl:function(i,o,r,s){var l,c=!s;if(c)s=T,i=t.template[i]||t.template(null,i),E={};else if(!i)return i=s.tmpl,y[s.key]=s,s.nodes=[],s.wrapped&&a(s,s.wrapped),t(n(s,null,s.tmpl(t,s)));return i?("function"==typeof o&&(o=o.call(s||{})),r&&r.wrapped&&a(r,r.wrapped),l=t.isArray(o)?t.map(o,function(t){return t?e(r,s,i,t):null}):[e(r,s,i,o)],c?t(n(s,null,l)):l):[]},tmplItem:function(e){var n;for(e instanceof t&&(e=e[0]);e&&1===e.nodeType&&!(n=t.data(e,"tmplItem"))&&(e=e.parentNode););return n||T},template:function(e,n){return n?("string"==typeof n?n=o(n):n instanceof t&&(n=n[0]||{}),n.nodeType&&(n=t.data(n,"tmpl")||t.data(n,"tmpl",o(n.innerHTML))),"string"==typeof e?t.template[e]=n:n):e?"string"!=typeof e?t.template(null,e):t.template[e]||t.template(null,v.test(e)?e:t(e)):null},encode:function(t){return(""+t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),t.extend(t.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){y={}},afterManip:function(e,n,i){var o=11===n.nodeType?t.makeArray(n.childNodes):1===n.nodeType?[n]:[];i.call(e,n),l(o),C++}})}(jQuery);var qq=qq||{};qq.extend=function(t,e){for(var n in e)t[n]=e[n]},qq.indexOf=function(t,e,n){if(t.indexOf)return t.indexOf(e,n);n=n||0;var i=t.length;for(0>n&&(n+=i);i>n;n++)if(n in t&&t[n]===e)return n;return-1},qq.getUniqueId=function(){var t=0;return function(){return t++}}(),qq.attach=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)},qq.detach=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.attachEvent&&t.detachEvent("on"+e,n)},qq.preventDefault=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},qq.insertBefore=function(t,e){e.parentNode.insertBefore(t,e)},qq.remove=function(t){t.parentNode.removeChild(t)},qq.contains=function(t,e){return t==e?!0:t.contains?t.contains(e):!!(8&e.compareDocumentPosition(t))},qq.toElement=function(){var t=document.createElement("div");return function(e){t.innerHTML=e;var n=t.firstChild;return t.removeChild(n),n}}(),qq.css=function(t,e){null!=e.opacity&&"string"!=typeof t.style.opacity&&"undefined"!=typeof t.filters&&(e.filter="alpha(opacity="+Math.round(100*e.opacity)+")"),qq.extend(t.style,e)},qq.hasClass=function(t,e){var n=new RegExp("(^| )"+e+"( |$)");return n.test(t.className)},qq.addClass=function(t,e){qq.hasClass(t,e)||(t.className+=" "+e)},qq.removeClass=function(t,e){var n=new RegExp("(^| )"+e+"( |$)");t.className=t.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(t,e){t.innerText=e,t.textContent=e},qq.children=function(t){for(var e=[],n=t.firstChild;n;)1==n.nodeType&&e.push(n),n=n.nextSibling;return e},qq.getByClass=function(t,e){if(t.querySelectorAll)return t.querySelectorAll("."+e);for(var n=[],i=t.getElementsByTagName("*"),o=i.length,a=0;o>a;a++)qq.hasClass(i[a],e)&&n.push(i[a]);return n},qq.obj2url=function(t,e,n){var i=[],o="&",a=function(t,n){var o=e?/\[\]$/.test(e)?e:e+"["+n+"]":n;"undefined"!=o&&"undefined"!=n&&i.push("object"==typeof t?qq.obj2url(t,o,!0):"[object Function]"===Object.prototype.toString.call(t)?encodeURIComponent(o)+"="+encodeURIComponent(t()):encodeURIComponent(o)+"="+encodeURIComponent(t))};if(!n&&e)o=/\?/.test(e)?/\?$/.test(e)?"":"&":"?",i.push(e),i.push(qq.obj2url(t));else if("[object Array]"===Object.prototype.toString.call(t)&&"undefined"!=typeof t)for(var r=0,s=t.length;s>r;++r)a(t[r],r);else if("undefined"!=typeof t&&null!==t&&"object"==typeof t)for(var r in t)a(t[r],r);else i.push(encodeURIComponent(e)+"="+encodeURIComponent(t));return i.join(o).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(t){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(t){alert(t)}},qq.extend(this._options,t),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(t){this._options.params=t},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(t){var e=this;return new qq.UploadButton({element:t,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(t){e._onInputChange(t)}})},_createUploadHandler:function(){var t,e=this;t=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm";var n=new qq[t]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(t,n,i,o){e._onProgress(t,n,i,o),e._options.onProgress(t,n,i,o)},onComplete:function(t,n,i){e._onComplete(t,n,i),e._options.onComplete(t,n,i)},onCancel:function(t,n){e._onCancel(t,n),e._options.onCancel(t,n)}});return n},_preventLeaveInProgress:function(){var t=this;qq.attach(window,"beforeunload",function(e){if(t._filesInProgress){var e=e||window.event;return e.returnValue=t._options.messages.onLeave,t._options.messages.onLeave}})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(t,e,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(t){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(t.files):this._validateFile(t)&&this._uploadFile(t),this._button.reset()},_uploadFileList:function(t){if(this._validateFiles(t))for(var e=0;e<t.length;e++)this._uploadFile(t[e])},_uploadFile:function(t){var e=this._handler.add(t),n=this._handler.getName(e);this._options.onSubmit(e,n)!==!1&&(this._onSubmit(e,n),this._handler.upload(e,this._options.params))},_validateFiles:function(t){var e=this._filesUploaded+t.length;if(this._options.maxFilesCount>0&&e>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(this._options.minFilesCount>0&&e<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<t.length;n++)if(!this._validateFile(t[n]))return!1;return!0},_validateFile:function(t){var e,n;return t.value?e=t.value.replace(/.*(\/|\\)/,""):(e=null!=t.fileName?t.fileName:t.name,n=null!=t.fileSize?t.fileSize:t.size),this._isAllowedExtension(e)?0===n?(this._error("emptyError",e),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",e),!1):n&&n<this._options.minSizeLimit?(this._error("minSizeError",e),!1):!0:(this._error("typeError",e),!1)},_error:function(t,e){function n(t,e){i=i.replace(t,e)}var i=this._options.messages[t];n("{file}",this._formatFileName(e)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(t){return t.length>33&&(t=t.slice(0,19)+"..."+t.slice(-13)),t},_isAllowedExtension:function(t){var e=-1!==t.indexOf(".")?t.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==e)return!0;return!1},_formatSize:function(t){var e=-1;do t/=1024,e++;while(t>99);return Math.max(t,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][e]}},qq.FileUploader=function(t){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,t),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(t,e){var n=qq.getByClass(t,this._options.classes[e])[0];if(!n)throw new Error("element not found "+e);return n},_setupDragDrop:function(){var t=this,e=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:e,onEnter:function(n){qq.addClass(e,t._classes.dropActive),n.stopPropagation()},onLeave:function(t){t.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(e,t._classes.dropActive)},onDrop:function(n){e.style.display="none",qq.removeClass(e,t._classes.dropActive),t._uploadFileList(n.dataTransfer.files)}});e.style.display="none",qq.attach(document,"dragenter",function(t){n._isValidFileDrag(t)&&(e.style.display="block")}),qq.attach(document,"dragleave",function(t){if(n._isValidFileDrag(t)){var i=document.elementFromPoint(t.clientX,t.clientY);i&&"HTML"!=i.nodeName||(e.style.display="none")}})},_onSubmit:function(t,e){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(t,e)},_onProgress:function(t,e,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o=this._getItemByFileId(t),a=this._find(o,"size");a.style.display="inline";var r;r=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(a,r)},_onComplete:function(t,e,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(t);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(t,e){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=t;var i=this._find(n,"file");qq.setText(i,this._formatFileName(e)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(t){for(var e=this._listElement.firstChild;e;){if(e.qqFileId==t)return e;e=e.nextSibling}},_bindCancelEvent:function(){var t=this,e=this._listElement;qq.attach(e,"click",function(e){e=e||window.event;var n=e.target||e.srcElement;if(qq.hasClass(n,t._classes.cancel)){qq.preventDefault(e);var i=n.parentNode;t._handler.cancel(i.qqFileId),qq.remove(i)}})}}),qq.UploadDropZone=function(t){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,t),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="none",t.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var t=this;qq.attach(t._element,"dragover",function(e){if(t._isValidFileDrag(e)){var n=e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"==n||"linkMove"==n?"move":"copy",e.stopPropagation(),e.preventDefault()}}),qq.attach(t._element,"dragenter",function(e){t._isValidFileDrag(e)&&t._options.onEnter(e)}),qq.attach(t._element,"dragleave",function(e){if(t._isValidFileDrag(e)){t._options.onLeave(e);var n=document.elementFromPoint(e.clientX,e.clientY);qq.contains(this,n)||t._options.onLeaveNotDescendants(e)}}),qq.attach(t._element,"drop",function(e){t._isValidFileDrag(e)&&(e.preventDefault(),t._options.onDrop(e))})},_isValidFileDrag:function(t){var e=t.dataTransfer,n=navigator.userAgent.indexOf("AppleWebKit")>-1;return e&&"none"!=e.effectAllowed&&(e.files||!n&&e.types.contains&&e.types.contains("Files"))}},qq.UploadButton=function(t){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,t),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var t=document.createElement("input");this._options.multiple&&t.setAttribute("multiple","multiple"),t.setAttribute("type","file"),t.setAttribute("name",this._options.name),qq.css(t,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(t);var e=this;return qq.attach(t,"change",function(){e._options.onChange(t)}),qq.attach(t,"mouseover",function(){qq.addClass(e._element,e._options.hoverClass)}),qq.attach(t,"mouseout",function(){qq.removeClass(e._element,e._options.hoverClass)}),qq.attach(t,"focus",function(){qq.addClass(e._element,e._options.focusClass)}),qq.attach(t,"blur",function(){qq.removeClass(e._element,e._options.focusClass)}),window.attachEvent&&t.setAttribute("tabIndex","-1"),t}},qq.UploadHandlerAbstract=function(t){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,t),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(t){this._options.debug&&window.console&&console.log("[uploader] "+t)},add:function(){},upload:function(t,e){var n=this._queue.push(t),i={};qq.extend(i,e),this._params[t]=i,n<=this._options.maxConnections&&this._upload(t,this._params[t])},cancel:function(t){this._cancel(t),this._dequeue(t)},cancelAll:function(){for(var t=0;t<this._queue.length;t++)this._cancel(this._queue[t]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(t){var e=qq.indexOf(this._queue,t);this._queue.splice(e,1);var n=this._options.maxConnections;if(this._queue.length>=n&&n>e){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(t){t.setAttribute("name",this._options.fieldName);var e="qq-upload-handler-iframe"+qq.getUniqueId();return this._inputs[e]=t,t.parentNode&&qq.remove(t),e},getName:function(t){return this._inputs[t].value.replace(/.*(\/|\\)/,"")},_cancel:function(t){this._options.onCancel(t,this.getName(t)),delete this._inputs[t];var e=document.getElementById(t);e&&(e.setAttribute("src","javascript:false;"),qq.remove(e))},_upload:function(t,e){var n=this._inputs[t];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(t),o=this._createIframe(t),a=this._createForm(o,e);a.appendChild(n);var r=this;return this._attachLoadEvent(o,function(){r.log("iframe loaded");var e=r._getIframeContentJSON(o);r._options.onComplete(t,i,e),r._dequeue(t),delete r._inputs[t],setTimeout(function(){qq.remove(o)},1)}),a.submit(),qq.remove(a),t},_attachLoadEvent:function(t,e){qq.attach(t,"load",function(){t.parentNode&&(t.contentDocument&&t.contentDocument.body&&"false"==t.contentDocument.body.innerHTML||e())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(err){response={}}return response},_createIframe:function(t){var e=qq.toElement('<iframe src="javascript:false;" name="'+t+'" />');return e.setAttribute("id",t),e.style.display="none",document.body.appendChild(e),e},_createForm:function(t,e){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(e,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",t.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),a=$('meta[name="csrf-param"]').attr("content"),r=qq.toElement('<input type="hidden" />');return r.setAttribute("name",a),r.setAttribute("value",o),n.appendChild(r),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var t=document.createElement("input");return t.type="file","multiple"in t&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(t){if(!(t instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(t)-1},getName:function(t){var e=this._files[t];return null!=e.fileName?e.fileName:e.name},getSize:function(t){var e=this._files[t];return null!=e.fileSize?e.fileSize:e.size},getLoaded:function(t){return this._loaded[t]||0},_upload:function(t,e){var n=this._files[t],i=this.getName(t),o=this.getSize(t);this._loaded[t]=0;var a=this._xhrs[t]=new XMLHttpRequest,r=this;a.upload.onprogress=function(e){e.lengthComputable&&(r._loaded[t]=e.loaded,r._options.onProgress(t,i,e.loaded,e.total))},a.onreadystatechange=function(){4==a.readyState&&r._onComplete(t,a)},e=e||{},e[this._options.fieldName]=i;var s=qq.obj2url(e,this._options.action);a.open(this._options.method,s,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-File-Name",encodeURIComponent(i)),a.setRequestHeader("X-File-Size",o),a.setRequestHeader("X-File-Type",n.type),a.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(a),a.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),[200,201].indexOf(xhr.status)>-1){this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);var response;try{response=eval("("+xhr.responseText+")")}catch(err){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(t){this._options.onCancel(t,this.getName(t)),this._files[t]=null,this._xhrs[t]&&(this._xhrs[t].abort(),this._xhrs[t]=null)}}),function(t){"use strict";t.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var e={init:function(e,n){n.options=t.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},e),this.options=n.options,this.container=n.container,n.scrollModule=this,this._toplock=!0,this._bottomlock=!0,this.scrollContainer=t(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",t.proxy(function(t,e,n){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==n){var i=this.markers[1].top,o=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(o+i)}},this)),this.bind()},updateEntities:function(){this.entities=t(this.options.entity,this.container)},sortMarkers:function(){var e=[];t(".jes-marker",this.container).each(function(){e.push({top:t(this).position().top,url:t(this).data("jesUrl")})}),this.markers=e},checkMarker:function(){for(var e=this.markers[0],n=this.scrollContainer.scrollTop(),i=1;i<this.markers.length&&n>this.markers[i].top;i++)e=this.markers[i];e.url!=this.currentPage&&(this.currentPage=e.url,t(this.container).trigger("jes:scrollToPage",e.url))},bind:function(){this.scrollContainer.on("scroll.jes",t.proxy(function(e){this._tId||(this.scrollHandler(e),this._tId=setTimeout(t.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){t(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var e=this.scrollContainer,n=this.entities,i=n.first(),o=n.last(),a=e.scrollTop(),r=e.height(),s=a+r,l=i.position().top,c=l+this.options.scrollPadding,u=o.outerHeight()+o.position().top,d=u-this.options.scrollPadding;c>a?this._toplock||(t(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,s>d?this._bottomlock||(t(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},n={init:function(e,n){n.options=t.extend({},e),this.options=n.options,this.container=n.container,this.setMarker(t(this.options.entity,this.container).first(),location.href),n.ajaxModule=this},loadPage:function(e,n,i){var o={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}},a=o[n];this.container.trigger("jes:beforePageLoad",[e,n]),t.get(e,null,t.proxy(function(o){var r=t("<div>").html(o),s=this.options.container,l=t(s,r).first();if(l.length){var c=l.find(this.options.entity);"bottom"==n&&c.each(function(){var e=t(this).attr("id");e&&t("#"+e,this.container).remove()});var u=t(this.options.entity,s)[a.find]();c[a.inject](u),this.setMarker(c.first(),e)}t.isFunction(i)&&i(r),this.container.trigger("jes:afterPageLoad",[e,n,r,c])},this),"html")},setMarker:function(t,e){t.addClass("jes-marker").data("jesUrl",e)}},i={init:function(e,n){n.options=t.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},e),this.options=n.options,this.container=n.container,t.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],t.proxy(function(e,i){if(i.element=t(i.selector),i.element.length){var o=i.element.prop("href"),a=!1,r=function(){!a&&o&&(a=!0,n.ajaxModule.loadPage(o,i.placement,t.proxy(function(e){var n=t(i.selector,t(e));n.length?(a=!1,o=n.prop("href"),i.element.attr("href",o)):(t(this).off(i.event),i.element.remove())},this)))};t(this.container).on(i.event,r),t(i.element).on("click",t.proxy(function(t){t.preventDefault(),r.apply(this.container)},this))}},this))}},o={init:function(e,n){t.support.pushState&&n.container.on("jes:scrollToPage",function(t,e){history.replaceState({},null,e)})}};t.endlessScroll=function(a){if(this.options=t.extend(!0,{container:"#container",entity:".entity",_modules:[n,e,i,o],modules:[]},a),this.container=t(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return t.merge(this.options.modules,this.options._modules),this.options.modules.forEach(t.proxy(function(t){t.init(this.options,this)},this)),this}}(jQuery),function(t,e){var n;t.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var n=t('meta[name="csrf-token"]').attr("content");n&&e.setRequestHeader("X-CSRF-Token",n)},fire:function(e,n,i){var o=t.Event(n);return e.trigger(o,i),o.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},handleRemote:function(i){var o,a,r,s,l=i.data("cross-domain")||null,c=i.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType;if(n.fire(i,"ajax:before")){if(i.is("form")){o=i.attr("method"),a=i.attr("action"),r=i.serializeArray();var u=i.data("ujs:submit-button");u&&(r.push(u),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(o=i.data("method"),a=i.data("url"),r=i.serialize(),i.data("params")&&(r=r+"&"+i.data("params"))):(o=i.data("method"),a=i.attr("href"),r=i.data("params")||null);return s={type:o||"GET",data:r,dataType:c,crossDomain:l,beforeSend:function(t,o){return o.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),n.fire(i,"ajax:beforeSend",[t,o])},success:function(t,e,n){i.trigger("ajax:success",[t,e,n])},complete:function(t,e){i.trigger("ajax:complete",[t,e])},error:function(t,e,n){i.trigger("ajax:error",[t,e,n])}},a&&(s.url=a),n.ajax(s)}return!1},handleMethod:function(n){var i=n.attr("href"),o=n.data("method"),a=n.attr("target"),r=t("meta[name=csrf-token]").attr("content"),s=t("meta[name=csrf-param]").attr("content"),l=t('<form method="post" action="'+i+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';s!==e&&r!==e&&(c+='<input name="'+s+'" value="'+r+'" type="hidden" />'),a&&l.attr("target",a),l.hide().append(c).appendTo("body"),l.submit()},disableFormElements:function(e){e.find(n.disableSelector).each(function(){var e=t(this),n=e.is("button")?"html":"val";e.data("ujs:enable-with",e[n]()),e[n](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(n.enableSelector).each(function(){var e=t(this),n=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[n](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(t){var e,i=t.data("confirm"),o=!1;return i?(n.fire(t,"confirm")&&(o=n.confirm(i),e=n.fire(t,"confirm:complete",[o])),o&&e):!0},blankInputs:function(e,n,i){var o,a=t(),r=n||"input,textarea";return e.find(r).each(function(){o=t(this),(i?o.val():!o.val())&&(a=a.add(o))}),a.length?a:!1},nonBlankInputs:function(t,e){return n.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},callFormSubmitBindings:function(n,i){var o=n.data("events"),a=!0;return o!==e&&o.submit!==e&&t.each(o.submit,function(t,e){return"function"==typeof e.handler?a=e.handler(i):void 0}),a},disableElement:function(t){t.data("ujs:enable-with",t.html()),t.html(t.data("disable-with")),t.bind("click.railsDisable",function(t){return n.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.data("ujs:enable-with",!1)),t.unbind("click.railsDisable")}},t.ajaxPrefilter(function(t,e,i){t.crossDomain||n.CSRFProtection(i)}),t(document).delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(t(this))}),t(document).delegate(n.linkClickSelector,"click.rails",function(i){var o=t(this),a=o.data("method"),r=o.data("params");return n.allowAction(o)?(o.is(n.linkDisableSelector)&&n.disableElement(o),o.data("remote")!==e?!i.metaKey&&!i.ctrlKey||a&&"GET"!==a||r?(n.handleRemote(o)===!1&&n.enableElement(o),!1):!0:o.data("method")?(n.handleMethod(o),!1):void 0):n.stopEverything(i)
}),t(document).delegate(n.inputChangeSelector,"change.rails",function(e){var i=t(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(e)}),t(document).delegate(n.formSubmitSelector,"submit.rails",function(i){var o=t(this),a=o.data("remote")!==e,r=n.blankInputs(o,n.requiredInputSelector),s=n.nonBlankInputs(o,n.fileInputSelector);return n.allowAction(o)?r&&o.attr("novalidate")==e&&n.fire(o,"ajax:aborted:required",[r])?n.stopEverything(i):a?s?n.fire(o,"ajax:aborted:file",[s]):!t.support.submitBubbles&&t().jquery<"1.7"&&n.callFormSubmitBindings(o,i)===!1?n.stopEverything(i):(n.handleRemote(o),!1):void setTimeout(function(){n.disableFormElements(o)},13):n.stopEverything(i)}),t(document).delegate(n.formInputClickSelector,"click.rails",function(e){var i=t(this);if(!n.allowAction(i))return n.stopEverything(e);var o=i.attr("name"),a=o?{name:o,value:i.val()}:null;i.closest("form").data("ujs:submit-button",a)}),t(document).delegate(n.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&n.disableFormElements(t(this))}),t(document).delegate(n.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&n.enableFormElements(t(this))})}(jQuery),$.QueryString=function(t){if(""==t)return{};for(var e={},n=0;n<t.length;++n){var i=t[n].split("=");2==i.length&&(e[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")))}return e}(window.location.search.substr(1).split("&")),$(document).ready(function(){$("div.gal-item div.gal-inner-holder").live("mouseover",function(){$(this).addClass("hover")}).live("mouseout",function(){$(this).removeClass("hover")}).live("click",function(){var t=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,t),window.close()}),$("div.gal-item a.gal-del").live("ajax:complete",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(t){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,t),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(t,e){var n=qq.getByClass(t,this._options.classes[e])[0];if(!n)throw alert(e),new Error("element not found "+e);return n},_setupDragDrop:function(){var t=this,e=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:e,onEnter:function(n){qq.addClass(e,t._classes.dropActive),n.stopPropagation()},onLeave:function(t){t.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(e,t._classes.dropActive)},onDrop:function(n){e.style.display="none",qq.removeClass(e,t._classes.dropActive),t._uploadFileList(n.dataTransfer.files)}});e.style.display="none",qq.attach(document,"dragenter",function(t){n._isValidFileDrag(t)&&(e.style.display="block")}),qq.attach(document,"dragleave",function(t){if(n._isValidFileDrag(t)){var i=document.elementFromPoint(t.clientX,t.clientY);i&&"HTML"!=i.nodeName||(e.style.display="none")}})},_onSubmit:function(t,e){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(t,e)},_onProgress:function(t,e,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(t),r=this._find(a,"size");o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(r,o)},_onComplete:function(t,e,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(t),o=n.asset?n.asset:n;o&&o.id?(qq.addClass(i,this._classes.success),o.size=this._formatSize(o.size),o.controller=void 0!==o.type&&"ckeditor::picture"==o.type.toLowerCase()?"pictures":"attachment_files",$(i).replaceWith($(this._options.template_id).tmpl(o))):qq.addClass(i,this._classes.fail)},_addToList:function(t,e){if(this._listElement){this._options.multiple===!1&&$(this._listElement).empty();var n={id:0,filename:this._formatFileName(e),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:"/assets/ckeditor/filebrowser/images/preloader-3799a3e41d7787a31dac5796ebccc242951da2f2b57eb088326ab3bffe15056a.gif"},i=$(this._options.template_id).tmpl(n).attr("qqfileid",t).prependTo(this._listElement);i.find("div.img").addClass("preloader"),this._bindCancelEvent(i)}},_getItemByFileId:function(t){return $(this._listElement).find("div[qqfileid="+t+"]").get(0)},_bindCancelEvent:function(t){var e=this,n=$(t);n.find("a."+this._classes.cancel).bind("click",function(t){return e._handler.cancel(n.attr("qqfileid")),n.remove(),qq.preventDefault(t),!1})}});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
