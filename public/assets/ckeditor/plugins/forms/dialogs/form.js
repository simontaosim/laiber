/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

CKEDITOR.dialog.add("form",function(a){var d={action:1,id:1,method:1,enctype:1,target:1};return{title:a.lang.forms.form.title,minWidth:350,minHeight:200,onShow:function(){delete this.form;var b=this.getParentEditor().elementPath().contains("form",1);b&&(this.form=b,this.setupContent(b))},onOk:function(){var b,a=this.form,c=!a;c&&(b=this.getParentEditor(),a=b.document.createElement("form"),a.appendBogus());c&&b.insertElement(a);this.commitContent(a)},onLoad:function(){function a(b){this.setValue(b.getAttribute(this.id)||
"")}function e(a){this.getValue()?a.setAttribute(this.id,this.getValue()):a.removeAttribute(this.id)}this.foreach(function(c){d[c.id]&&(c.setup=a,c.commit=e)})},contents:[{id:"info",label:a.lang.forms.form.title,title:a.lang.forms.form.title,elements:[{id:"txtName",type:"text",label:a.lang.common.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",
!1),a.removeAttribute("name"))}},{id:"action",type:"text",label:a.lang.forms.form.action,"default":"",accessKey:"T"},{type:"hbox",widths:["45%","55%"],children:[{id:"id",type:"text",label:a.lang.common.id,"default":"",accessKey:"I"},{id:"enctype",type:"select",label:a.lang.forms.form.encoding,style:"width:100%",accessKey:"E","default":"",items:[[""],["text/plain"],["multipart/form-data"],["application/x-www-form-urlencoded"]]}]},{type:"hbox",widths:["45%","55%"],children:[{id:"target",type:"select",
label:a.lang.common.target,style:"width:100%",accessKey:"M","default":"",items:[[a.lang.common.notSet,""],[a.lang.common.targetNew,"_blank"],[a.lang.common.targetTop,"_top"],[a.lang.common.targetSelf,"_self"],[a.lang.common.targetParent,"_parent"]]},{id:"method",type:"select",label:a.lang.forms.form.method,accessKey:"M","default":"GET",items:[["GET","get"],["POST","post"]]}]}]}]}});
=======
CKEDITOR.dialog.add("form",function(e){var t={action:1,id:1,method:1,enctype:1,target:1};return{title:e.lang.forms.form.title,minWidth:350,minHeight:200,onShow:function(){delete this.form;var e=this.getParentEditor().elementPath().contains("form",1);e&&(this.form=e,this.setupContent(e))},onOk:function(){var e,t=this.form,n=!t;n&&(e=this.getParentEditor(),t=e.document.createElement("form"),t.appendBogus()),n&&e.insertElement(t),this.commitContent(t)},onLoad:function(){function e(e){this.setValue(e.getAttribute(this.id)||"")}function n(e){this.getValue()?e.setAttribute(this.id,this.getValue()):e.removeAttribute(this.id)}this.foreach(function(i){t[i.id]&&(i.setup=e,i.commit=n)})},contents:[{id:"info",label:e.lang.forms.form.title,title:e.lang.forms.form.title,elements:[{id:"txtName",type:"text",label:e.lang.common.name,"default":"",accessKey:"N",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:function(e){this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"action",type:"text",label:e.lang.forms.form.action,"default":"",accessKey:"T"},{type:"hbox",widths:["45%","55%"],children:[{id:"id",type:"text",label:e.lang.common.id,"default":"",accessKey:"I"},{id:"enctype",type:"select",label:e.lang.forms.form.encoding,style:"width:100%",accessKey:"E","default":"",items:[[""],["text/plain"],["multipart/form-data"],["application/x-www-form-urlencoded"]]}]},{type:"hbox",widths:["45%","55%"],children:[{id:"target",type:"select",label:e.lang.common.target,style:"width:100%",accessKey:"M","default":"",items:[[e.lang.common.notSet,""],[e.lang.common.targetNew,"_blank"],[e.lang.common.targetTop,"_top"],[e.lang.common.targetSelf,"_self"],[e.lang.common.targetParent,"_parent"]]},{id:"method",type:"select",label:e.lang.forms.form.method,accessKey:"M","default":"GET",items:[["GET","get"],["POST","post"]]}]}]}]}});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45