/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

CKEDITOR.dialog.add("anchor",function(c){function d(a,b){return a.createFakeElement(a.document.createElement("a",{attributes:b}),"cke_anchor","anchor")}return{title:c.lang.link.anchor.title,minWidth:300,minHeight:60,onOk:function(){var a=CKEDITOR.tools.trim(this.getValueOf("info","txtName")),a={id:a,name:a,"data-cke-saved-name":a};if(this._.selectedElement)this._.selectedElement.data("cke-realelement")?(a=d(c,a),a.replace(this._.selectedElement),CKEDITOR.env.ie&&c.getSelection().selectElement(a)):
this._.selectedElement.setAttributes(a);else{var b=c.getSelection(),b=b&&b.getRanges()[0];b.collapsed?(a=d(c,a),b.insertNode(a)):(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(a["class"]="cke_anchor"),a=new CKEDITOR.style({element:"a",attributes:a}),a.type=CKEDITOR.STYLE_INLINE,c.applyStyle(a))}},onHide:function(){delete this._.selectedElement},onShow:function(){var a=c.getSelection(),b=a.getSelectedElement(),d=b&&b.data("cke-realelement"),e=d?CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,b):CKEDITOR.plugins.link.getSelectedLink(c);
e&&(this._.selectedElement=e,this.setValueOf("info","txtName",e.data("cke-saved-name")||""),!d&&a.selectElement(e),b&&(this._.selectedElement=b));this.getContentElement("info","txtName").focus()},contents:[{id:"info",label:c.lang.link.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:c.lang.link.anchor.name,required:!0,validate:function(){return!this.getValue()?(alert(c.lang.link.anchor.errorName),!1):!0}}]}]}});
=======
CKEDITOR.dialog.add("anchor",function(e){function t(e,t){return e.createFakeElement(e.document.createElement("a",{attributes:t}),"cke_anchor","anchor")}return{title:e.lang.link.anchor.title,minWidth:300,minHeight:60,onOk:function(){var n=CKEDITOR.tools.trim(this.getValueOf("info","txtName")),n={id:n,name:n,"data-cke-saved-name":n};if(this._.selectedElement)this._.selectedElement.data("cke-realelement")?(n=t(e,n),n.replace(this._.selectedElement),CKEDITOR.env.ie&&e.getSelection().selectElement(n)):this._.selectedElement.setAttributes(n);else{var i=e.getSelection(),i=i&&i.getRanges()[0];i.collapsed?(n=t(e,n),i.insertNode(n)):(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(n["class"]="cke_anchor"),n=new CKEDITOR.style({element:"a",attributes:n}),n.type=CKEDITOR.STYLE_INLINE,e.applyStyle(n))}},onHide:function(){delete this._.selectedElement},onShow:function(){var t=e.getSelection(),n=t.getSelectedElement(),i=n&&n.data("cke-realelement"),o=i?CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,n):CKEDITOR.plugins.link.getSelectedLink(e);o&&(this._.selectedElement=o,this.setValueOf("info","txtName",o.data("cke-saved-name")||""),!i&&t.selectElement(o),n&&(this._.selectedElement=n)),this.getContentElement("info","txtName").focus()},contents:[{id:"info",label:e.lang.link.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:e.lang.link.anchor.name,required:!0,validate:function(){return this.getValue()?!0:(alert(e.lang.link.anchor.errorName),!1)}}]}]}});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
