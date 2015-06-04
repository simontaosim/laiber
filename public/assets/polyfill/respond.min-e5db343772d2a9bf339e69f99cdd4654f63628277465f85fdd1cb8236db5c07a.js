/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,i),t=42===a.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){b(!0)}var n={};e.respond=n,n.update=function(){};var i=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},s=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=i,n.unsupportedmq=s,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,l,c,u=e.document,d=u.documentElement,h=[],f=[],p=[],m={},g=30,v=u.getElementsByTagName("head")[0]||d,E=u.getElementsByTagName("base")[0],y=v.getElementsByTagName("link"),T=function(){var e,t=u.createElement("div"),n=u.body,i=d.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=u.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,a?d.removeChild(n):n.removeChild(t),d.style.fontSize=i,o&&(n.style.fontSize=o),e=c=parseFloat(e)},b=function(t){var n="clientWidth",i=d[n],o="CSS1Compat"===u.compatMode&&i||u.body[n]||i,a={},s=y[y.length-1],m=(new Date).getTime();if(t&&r&&g>m-r)return e.clearTimeout(l),void(l=e.setTimeout(b,g));r=m;for(var E in h)if(h.hasOwnProperty(E)){var C=h[E],I=C.minw,D=C.maxw,w=null===I,O=null===D,R="em";I&&(I=parseFloat(I)*(I.indexOf(R)>-1?c||T():1)),D&&(D=parseFloat(D)*(D.indexOf(R)>-1?c||T():1)),C.hasquery&&(w&&O||!(w||o>=I)||!(O||D>=o))||(a[C.media]||(a[C.media]=[]),a[C.media].push(f[C.rules]))}for(var k in p)p.hasOwnProperty(k)&&p[k]&&p[k].parentNode===v&&v.removeChild(p[k]);p.length=0;for(var _ in a)if(a.hasOwnProperty(_)){var x=u.createElement("style"),S=a[_].join("\n");x.type="text/css",x.media=_,v.insertBefore(x,s.nextSibling),x.styleSheet?x.styleSheet.cssText=S:x.appendChild(u.createTextNode(S)),p.push(x)}},C=function(e,t,i){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!a&&i;t.length&&(t+="/"),l&&(a=1);for(var c=0;a>c;c++){var u,d,p,m;l?(u=i,f.push(r(e))):(u=o[c].match(n.regex.findStyles)&&RegExp.$1,f.push(RegExp.$2&&r(RegExp.$2))),p=u.split(","),m=p.length;for(var g=0;m>g;g++)d=p[g],s(d)||h.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:f.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}b()},I=function(){if(i.length){var t=i.shift();a(t.href,function(n){C(n,t.href,t.media),m[t.href]=!0,e.setTimeout(function(){I()},0)})}},D=function(){for(var t=0;t<y.length;t++){var n=y[t],o=n.href,a=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&s&&!m[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(C(n.styleSheet.rawCssText,o,a),m[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!E||o.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===o.substring(0,2)&&(o=e.location.protocol+o),i.push({href:o,media:a})))}I()};D(),n.update=D,n.getEmValue=T,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);