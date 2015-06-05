/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("specialchar",function(e){var t,i,a=e.lang.specialchar,n=function(i){var a,i=i.data?i.data.getTarget():new CKEDITOR.dom.element(i);"a"==i.getName()&&(a=i.getChild(0).getHtml())&&(i.removeClass("cke_light_background"),t.hide(),i=e.document.createElement("span"),i.setHtml(a),e.insertText(i.getText()))},o=CKEDITOR.tools.addFunction(n),r=function(e,a){var n,a=a||e.data.getTarget();if("span"==a.getName()&&(a=a.getParent()),"a"==a.getName()&&(n=a.getChild(0).getHtml())){i&&s(null,i);var o=t.getContentElement("info","htmlPreview").getElement();t.getContentElement("info","charPreview").getElement().setHtml(n),o.setHtml(CKEDITOR.tools.htmlEncode(n)),a.getParent().addClass("cke_light_background"),i=a}},s=function(e,a){a=a||e.data.getTarget(),"span"==a.getName()&&(a=a.getParent()),"a"==a.getName()&&(t.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),t.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),a.getParent().removeClass("cke_light_background"),i=void 0)},l=CKEDITOR.tools.addFunction(function(t){var i,t=new CKEDITOR.dom.event(t),a=t.getTarget();i=t.getKeystroke();var o="rtl"==e.lang.dir;switch(i){case 38:(i=a.getParent().getParent().getPrevious())&&(i=i.getChild([a.getParent().getIndex(),0]),i.focus(),s(null,a),r(null,i)),t.preventDefault();break;case 40:(i=a.getParent().getParent().getNext())&&(i=i.getChild([a.getParent().getIndex(),0]))&&1==i.type&&(i.focus(),s(null,a),r(null,i)),t.preventDefault();break;case 32:n({data:t}),t.preventDefault();break;case o?37:39:(i=a.getParent().getNext())?(i=i.getChild(0),1==i.type?(i.focus(),s(null,a),r(null,i),t.preventDefault(!0)):s(null,a)):(i=a.getParent().getParent().getNext())&&((i=i.getChild([0,0]))&&1==i.type?(i.focus(),s(null,a),r(null,i),t.preventDefault(!0)):s(null,a));break;case o?39:37:(i=a.getParent().getPrevious())?(i=i.getChild(0),i.focus(),s(null,a),r(null,i),t.preventDefault(!0)):(i=a.getParent().getParent().getPrevious())?(i=i.getLast().getChild(0),i.focus(),s(null,a),r(null,i),t.preventDefault(!0)):s(null,a)}});return{title:a.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var t,i,n=this.definition.charColumns,r=e.config.specialChars,s=CKEDITOR.tools.getNextId()+"_specialchar_table_label",c=['<table role="listbox" aria-labelledby="'+s+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],d=0,u=r.length;u>d;){c.push('<tr role="presentation">');for(var p=0;n>p;p++,d++){if(t=r[d]){t instanceof Array?(i=t[1],t=t[0]):(i=t.replace("&","").replace(";","").replace("#",""),i=a[i]||t);var m="cke_specialchar_label_"+d+"_"+CKEDITOR.tools.getNextNumber();c.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(d+1)+'"',' aria-setsize="'+u+'"',' aria-labelledby="'+m+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(i),'" onkeydown="CKEDITOR.tools.callFunction( '+l+', event, this )" onclick="CKEDITOR.tools.callFunction('+o+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+t+'</span><span class="cke_voice_label" id="'+m+'">'+i+"</span></a>")}else c.push('<td class="cke_dark_background">&nbsp;');c.push("</td>")}c.push("</tr>")}c.push("</tbody></table>",'<span id="'+s+'" class="cke_voice_label">'+a.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(c.join(""))},contents:[{id:"info",label:e.lang.common.generalTab,title:e.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:r,onMouseout:s,focus:function(){var e=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){e.focus(),r(null,e)},0)},onShow:function(){var e=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){e.focus(),r(null,e)},0)},onLoad:function(e){t=e.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}});