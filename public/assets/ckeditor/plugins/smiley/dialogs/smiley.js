/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

CKEDITOR.dialog.add("smiley",function(f){for(var e=f.config,a=f.lang.smiley,h=e.smiley_images,g=e.smiley_columns||8,i,k=function(j){var c=j.data.getTarget(),b=c.getName();if("a"==b)c=c.getChild(0);else if("img"!=b)return;var b=c.getAttribute("cke_src"),a=c.getAttribute("title"),c=f.document.createElement("img",{attributes:{src:b,"data-cke-saved-src":b,title:a,alt:a,width:c.$.width,height:c.$.height}});f.insertElement(c);i.hide();j.data.preventDefault()},n=CKEDITOR.tools.addFunction(function(a,c){var a=
new CKEDITOR.dom.event(a),c=new CKEDITOR.dom.element(c),b;b=a.getKeystroke();var d="rtl"==f.lang.dir;switch(b){case 38:if(b=c.getParent().getParent().getPrevious())b=b.getChild([c.getParent().getIndex(),0]),b.focus();a.preventDefault();break;case 40:if(b=c.getParent().getParent().getNext())(b=b.getChild([c.getParent().getIndex(),0]))&&b.focus();a.preventDefault();break;case 32:k({data:a});a.preventDefault();break;case d?37:39:if(b=c.getParent().getNext())b=b.getChild(0),b.focus(),a.preventDefault(!0);
else if(b=c.getParent().getParent().getNext())(b=b.getChild([0,0]))&&b.focus(),a.preventDefault(!0);break;case d?39:37:if(b=c.getParent().getPrevious())b=b.getChild(0),b.focus(),a.preventDefault(!0);else if(b=c.getParent().getParent().getPrevious())b=b.getLast().getChild(0),b.focus(),a.preventDefault(!0)}}),d=CKEDITOR.tools.getNextId()+"_smiley_emtions_label",d=['<div><span id="'+d+'" class="cke_voice_label">'+a.options+"</span>",'<table role="listbox" aria-labelledby="'+d+'" style="width:100%;height:100%;border-collapse:separate;" cellspacing="2" cellpadding="2"',
CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"],l=h.length,a=0;a<l;a++){0===a%g&&d.push('<tr role="presentation">');var m="cke_smile_label_"+a+"_"+CKEDITOR.tools.getNextNumber();d.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(a+1)+'"',' aria-setsize="'+l+'"',' aria-labelledby="'+m+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',
n,', event, this );">','<img class="cke_hand" title="',e.smiley_descriptions[a],'" cke_src="',CKEDITOR.tools.htmlEncode(e.smiley_path+h[a]),'" alt="',e.smiley_descriptions[a],'"',' src="',CKEDITOR.tools.htmlEncode(e.smiley_path+h[a]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":"",'><span id="'+m+'" class="cke_voice_label">'+e.smiley_descriptions[a]+"</span></a>","</td>");a%g==g-1&&d.push("</tr>")}if(a<g-1){for(;a<g-1;a++)d.push("<td></td>");d.push("</tr>")}d.push("</tbody></table></div>");
e={type:"html",id:"smileySelector",html:d.join(""),onLoad:function(a){i=a.sender},focus:function(){var a=this;setTimeout(function(){a.getElement().getElementsByTag("a").getItem(0).focus()},0)},onClick:k,style:"width: 100%; border-collapse: separate;"};return{title:f.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[e]}],buttons:[CKEDITOR.dialog.cancelButton]}});
=======
CKEDITOR.dialog.add("smiley",function(e){for(var t,n=e.config,i=e.lang.smiley,o=n.smiley_images,a=n.smiley_columns||8,r=function(n){var i=n.data.getTarget(),o=i.getName();if("a"==o)i=i.getChild(0);else if("img"!=o)return;var o=i.getAttribute("cke_src"),a=i.getAttribute("title"),i=e.document.createElement("img",{attributes:{src:o,"data-cke-saved-src":o,title:a,alt:a,width:i.$.width,height:i.$.height}});e.insertElement(i),t.hide(),n.data.preventDefault()},s=CKEDITOR.tools.addFunction(function(t,n){var i,t=new CKEDITOR.dom.event(t),n=new CKEDITOR.dom.element(n);i=t.getKeystroke();var o="rtl"==e.lang.dir;switch(i){case 38:(i=n.getParent().getParent().getPrevious())&&(i=i.getChild([n.getParent().getIndex(),0]),i.focus()),t.preventDefault();break;case 40:(i=n.getParent().getParent().getNext())&&(i=i.getChild([n.getParent().getIndex(),0]))&&i.focus(),t.preventDefault();break;case 32:r({data:t}),t.preventDefault();break;case o?37:39:(i=n.getParent().getNext())?(i=i.getChild(0),i.focus(),t.preventDefault(!0)):(i=n.getParent().getParent().getNext())&&((i=i.getChild([0,0]))&&i.focus(),t.preventDefault(!0));break;case o?39:37:(i=n.getParent().getPrevious())?(i=i.getChild(0),i.focus(),t.preventDefault(!0)):(i=n.getParent().getParent().getPrevious())&&(i=i.getLast().getChild(0),i.focus(),t.preventDefault(!0))}}),l=CKEDITOR.tools.getNextId()+"_smiley_emtions_label",l=['<div><span id="'+l+'" class="cke_voice_label">'+i.options+"</span>",'<table role="listbox" aria-labelledby="'+l+'" style="width:100%;height:100%;border-collapse:separate;" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"],c=o.length,i=0;c>i;i++){0===i%a&&l.push('<tr role="presentation">');var u="cke_smile_label_"+i+"_"+CKEDITOR.tools.getNextNumber();l.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(i+1)+'"',' aria-setsize="'+c+'"',' aria-labelledby="'+u+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',s,', event, this );">','<img class="cke_hand" title="',n.smiley_descriptions[i],'" cke_src="',CKEDITOR.tools.htmlEncode(n.smiley_path+o[i]),'" alt="',n.smiley_descriptions[i],'"',' src="',CKEDITOR.tools.htmlEncode(n.smiley_path+o[i]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":"",'><span id="'+u+'" class="cke_voice_label">'+n.smiley_descriptions[i]+"</span></a>","</td>"),i%a==a-1&&l.push("</tr>")}if(a-1>i){for(;a-1>i;i++)l.push("<td></td>");l.push("</tr>")}return l.push("</tbody></table></div>"),n={type:"html",id:"smileySelector",html:l.join(""),onLoad:function(e){t=e.sender},focus:function(){var e=this;setTimeout(function(){e.getElement().getElementsByTag("a").getItem(0).focus()},0)},onClick:r,style:"width: 100%; border-collapse: separate;"},{title:e.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[n]}],buttons:[CKEDITOR.dialog.cancelButton]}});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45