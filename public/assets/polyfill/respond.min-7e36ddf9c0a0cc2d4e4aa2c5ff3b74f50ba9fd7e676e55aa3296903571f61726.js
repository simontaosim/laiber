/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
!function(t){"use strict";t.matchMedia=t.matchMedia||function(t){var e,i=t.documentElement,n=i.firstElementChild||i.firstChild,o=t.createElement("body"),s=t.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(s),function(t){return s.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(o,n),e=42===s.offsetWidth,i.removeChild(o),{matches:e,media:t}}}(t.document)}(this),function(t){"use strict";function e(){x(!0)}var i={};t.respond=i,i.update=function(){};var n=[],o=function(){var e=!1;try{e=new t.XMLHttpRequest}catch(i){e=new t.ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}(),s=function(t,e){var i=o();i&&(i.open("GET",t,!0),i.onreadystatechange=function(){4!==i.readyState||200!==i.status&&304!==i.status||e(i.responseText)},4!==i.readyState&&i.send(null))},a=function(t){return t.replace(i.regex.minmaxwh,"").match(i.regex.other)};if(i.ajax=s,i.queue=n,i.unsupportedmq=a,i.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},i.mediaQueriesSupported=t.matchMedia&&null!==t.matchMedia("only all")&&t.matchMedia("only all").matches,!i.mediaQueriesSupported){var r,l,c,u=t.document,d=u.documentElement,h=[],p=[],f=[],m={},v=30,g=u.getElementsByTagName("head")[0]||d,y=u.getElementsByTagName("base")[0],w=g.getElementsByTagName("link"),b=function(){var t,e=u.createElement("div"),i=u.body,n=d.style.fontSize,o=i&&i.style.fontSize,s=!1;return e.style.cssText="position:absolute;font-size:1em;width:1em",i||(i=s=u.createElement("body"),i.style.background="none"),d.style.fontSize="100%",i.style.fontSize="100%",i.appendChild(e),s&&d.insertBefore(i,d.firstChild),t=e.offsetWidth,s?d.removeChild(i):i.removeChild(e),d.style.fontSize=n,o&&(i.style.fontSize=o),t=c=parseFloat(t)},x=function(e){var i="clientWidth",n=d[i],o="CSS1Compat"===u.compatMode&&n||u.body[i]||n,s={},a=w[w.length-1],m=(new Date).getTime();if(e&&r&&v>m-r)return t.clearTimeout(l),void(l=t.setTimeout(x,v));r=m;for(var y in h)if(h.hasOwnProperty(y)){var C=h[y],T=C.minw,k=C.maxw,S=null===T,E=null===k,_="em";T&&(T=parseFloat(T)*(T.indexOf(_)>-1?c||b():1)),k&&(k=parseFloat(k)*(k.indexOf(_)>-1?c||b():1)),C.hasquery&&(S&&E||!(S||o>=T)||!(E||k>=o))||(s[C.media]||(s[C.media]=[]),s[C.media].push(p[C.rules]))}for(var A in f)f.hasOwnProperty(A)&&f[A]&&f[A].parentNode===g&&g.removeChild(f[A]);f.length=0;for(var N in s)if(s.hasOwnProperty(N)){var D=u.createElement("style"),M=s[N].join("\n");D.type="text/css",D.media=N,g.insertBefore(D,a.nextSibling),D.styleSheet?D.styleSheet.cssText=M:D.appendChild(u.createTextNode(M)),f.push(D)}},C=function(t,e,n){var o=t.replace(i.regex.comments,"").replace(i.regex.keyframes,"").match(i.regex.media),s=o&&o.length||0;e=e.substring(0,e.lastIndexOf("/"));var r=function(t){return t.replace(i.regex.urls,"$1"+e+"$2$3")},l=!s&&n;e.length&&(e+="/"),l&&(s=1);for(var c=0;s>c;c++){var u,d,f,m;l?(u=n,p.push(r(t))):(u=o[c].match(i.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&r(RegExp.$2))),f=u.split(","),m=f.length;for(var v=0;m>v;v++)d=f[v],a(d)||h.push({media:d.split("(")[0].match(i.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(i.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(i.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},T=function(){if(n.length){var e=n.shift();s(e.href,function(i){C(i,e.href,e.media),m[e.href]=!0,t.setTimeout(function(){T()},0)})}},k=function(){for(var e=0;e<w.length;e++){var i=w[e],o=i.href,s=i.media,a=i.rel&&"stylesheet"===i.rel.toLowerCase();o&&a&&!m[o]&&(i.styleSheet&&i.styleSheet.rawCssText?(C(i.styleSheet.rawCssText,o,s),m[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!y||o.replace(RegExp.$1,"").split("/")[0]===t.location.host)&&("//"===o.substring(0,2)&&(o=t.location.protocol+o),n.push({href:o,media:s})))}T()};k(),i.update=k,i.getEmValue=b,t.addEventListener?t.addEventListener("resize",e,!1):t.attachEvent&&t.attachEvent("onresize",e)}}(this);