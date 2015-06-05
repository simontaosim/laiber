/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
!function(e){function t(t,n,i,o){var a={data:o||0===o||o===!1?o:n?n.data:{},_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:c,nest:d,wrap:u,html:h,update:f};return t&&e.extend(a,t,{nodes:[],parent:n}),i&&(a.tmpl=i,a._ctnt=a._ctnt||a.tmpl(e,a),a.key=++b,(I.length?y:E)[b]=a),a}function n(t,o,a){var s,r=a?e.map(a,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+t.key+'" $2'):e:n(e,t,e._ctnt)}):t;return o?r:(r=r.join(""),r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,o,a){s=e(o).get(),l(s),n&&(s=i(n).concat(s)),a&&(s=s.concat(i(a)))}),s?s:i(r))}function i(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function o(t){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,i,o,a,r,l){var c,d,u,h=e.tmpl.tag[i];if(!h)throw"Unknown template tag: "+i;return c=h._default||[],r&&!/\w$/.test(a)&&(a+=r,r=""),a?(a=s(a),l=l?","+s(l)+")":r?")":"",d=r?a.indexOf(".")>-1?a+s(r):"("+a+").call($item"+l:a,u=r?d:"(typeof("+a+")==='function'?("+a+").call($item):("+a+"))"):u=d=c.$1||"null",o=s(o),"');"+h[n?"close":"open"].split("$notnull_1").join(a?"typeof("+a+")!=='undefined' && ("+a+")!=null":"true").split("$1a").join(u).split("$1").join(d).split("$2").join(o||c.$2||"")+"__.push('"})+"');}return __;")}function a(t,i){t._wrap=n(t,!0,e.isArray(i)?i:[v.test(i)?i:e(i).html()]).join("")}function s(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function r(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(n){function i(n){function i(e){e+=c,s=d[e]=d[e]||t(s,E[s.parent.key+c]||s.parent)}var o,a,s,r,l=n;if(r=n.getAttribute(g)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(o=l.getAttribute(g)););o!==r&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(g)||0:0,(s=E[r])||(s=y[r],s=t(s,E[l]||y[l]),s.key=++b,E[b]=s),C&&i(r)),n.removeAttribute(g)}else C&&(s=e.data(n,"tmplItem"))&&(i(s.key),E[s.key]=s,l=e.data(n.parentNode,"tmplItem"),l=l?l.key:0);if(s){for(a=s;a&&a.key!=l;)a.nodes.push(n),a=a.parent;delete s._ctnt,delete s._wrap,e.data(n,"tmplItem",s)}}var o,a,s,r,l,c="_"+C,d={};for(s=0,r=n.length;r>s;s++)if(1===(o=n[s]).nodeType){for(a=o.getElementsByTagName("*"),l=a.length-1;l>=0;l--)i(a[l]);i(o)}}function c(e,t,n,i){return e?void I.push({_:e,tmpl:t,item:this,data:n,options:i}):I.pop()}function d(t,n,i){return e.tmpl(e.template(t),n,i,this)}function u(t,n){var i=t.options||{};return i.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,i,t.item)}function h(t,n){var i=this._wrap;return e.map(e(e.isArray(i)?i.join(""):i).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||r(e)})}function f(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var p,m=e.fn.domManip,g="_tmplitem",v=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,E={},y={},T={key:0,data:{}},b=0,C=0,I=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(i){var o,a,s,r,l=[],c=e(i),d=1===this.length&&this[0].parentNode;if(p=E||{},d&&11===d.nodeType&&1===d.childNodes.length&&1===c.length)c[n](this[0]),l=this;else{for(a=0,s=c.length;s>a;a++)C=a,o=(a>0?this.clone(!0):this).get(),e(c[a])[n](o),l=l.concat(o);C=0,l=this.pushStack(l,t,c.selector)}return r=p,p=null,e.tmpl.complete(r),l}}),e.fn.extend({tmpl:function(t,n,i){return e.tmpl(this[0],t,n,i)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,n,i){if(t[0]&&e.isArray(t[0])){for(var o,a=e.makeArray(arguments),s=t[0],r=s.length,l=0;r>l&&!(o=e.data(s[l++],"tmplItem")););o&&C&&(a[2]=function(t){e.tmpl.afterManip(this,t,i)}),m.apply(this,a)}else m.apply(this,arguments);return C=0,!p&&e.tmpl.complete(E),this}}),e.extend({tmpl:function(i,o,s,r){var l,c=!r;if(c)r=T,i=e.template[i]||e.template(null,i),y={};else if(!i)return i=r.tmpl,E[r.key]=r,r.nodes=[],r.wrapped&&a(r,r.wrapped),e(n(r,null,r.tmpl(e,r)));return i?("function"==typeof o&&(o=o.call(r||{})),s&&s.wrapped&&a(s,s.wrapped),l=e.isArray(o)?e.map(o,function(e){return e?t(s,r,i,e):null}):[t(s,r,i,o)],c?e(n(r,null,l)):l):[]},tmplItem:function(t){var n;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode););return n||T},template:function(t,n){return n?("string"==typeof n?n=o(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",o(n.innerHTML))),"string"==typeof t?e.template[t]=n:n):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,v.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){E={}},afterManip:function(t,n,i){var o=11===n.nodeType?e.makeArray(n.childNodes):1===n.nodeType?[n]:[];i.call(t,n),l(o),C++}})}(jQuery);