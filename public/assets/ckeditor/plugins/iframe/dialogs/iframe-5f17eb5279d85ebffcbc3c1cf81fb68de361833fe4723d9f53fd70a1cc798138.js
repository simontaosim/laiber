/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e){var t=this instanceof CKEDITOR.ui.dialog.checkbox;e.hasAttribute(this.id)&&(e=e.getAttribute(this.id),this.setValue(t?n[this.id]["true"]==e.toLowerCase():e))}function t(e){var t=""===this.getValue(),i=this instanceof CKEDITOR.ui.dialog.checkbox,a=this.getValue();t?e.removeAttribute(this.att||this.id):i?e.setAttribute(this.id,n[this.id][a]):e.setAttribute(this.att||this.id,a)}var n={scrolling:{"true":"yes","false":"no"},frameborder:{"true":"1","false":"0"}};CKEDITOR.dialog.add("iframe",function(n){var i=n.lang.iframe,a=n.lang.common,o=n.plugins.dialogadvtab;return{title:i.title,minWidth:350,minHeight:260,onShow:function(){this.fakeImage=this.iframeNode=null;var e=this.getSelectedElement();e&&e.data("cke-real-element-type")&&"iframe"==e.data("cke-real-element-type")&&(this.fakeImage=e,this.iframeNode=e=n.restoreRealElement(e),this.setupContent(e))},onOk:function(){var e;e=this.fakeImage?this.iframeNode:new CKEDITOR.dom.element("iframe");var t={},i={};this.commitContent(e,t,i),e=n.createFakeElement(e,"cke_iframe","iframe",!0),e.setAttributes(i),e.setStyles(t),this.fakeImage?(e.replace(this.fakeImage),n.getSelection().selectElement(e)):n.insertElement(e)},contents:[{id:"info",label:a.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{id:"src",type:"text",label:a.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(i.noUrl),setup:e,commit:t}]},{type:"hbox",children:[{id:"width",type:"text",requiredContent:"iframe[width]",style:"width:100%",labelLayout:"vertical",label:a.width,validate:CKEDITOR.dialog.validate.htmlLength(a.invalidHtmlLength.replace("%1",a.width)),setup:e,commit:t},{id:"height",type:"text",requiredContent:"iframe[height]",style:"width:100%",labelLayout:"vertical",label:a.height,validate:CKEDITOR.dialog.validate.htmlLength(a.invalidHtmlLength.replace("%1",a.height)),setup:e,commit:t},{id:"align",type:"select",requiredContent:"iframe[align]","default":"",items:[[a.notSet,""],[a.alignLeft,"left"],[a.alignRight,"right"],[a.alignTop,"top"],[a.alignMiddle,"middle"],[a.alignBottom,"bottom"]],style:"width:100%",labelLayout:"vertical",label:a.align,setup:function(t,n){if(e.apply(this,arguments),n){var i=n.getAttribute("align");this.setValue(i&&i.toLowerCase()||"")}},commit:function(e,n,i){t.apply(this,arguments),this.getValue()&&(i.align=this.getValue())}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"scrolling",type:"checkbox",requiredContent:"iframe[scrolling]",label:i.scrolling,setup:e,commit:t},{id:"frameborder",type:"checkbox",requiredContent:"iframe[frameborder]",label:i.border,setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"name",type:"text",requiredContent:"iframe[name]",label:a.name,setup:e,commit:t},{id:"title",type:"text",requiredContent:"iframe[title]",label:a.advisoryTitle,setup:e,commit:t}]},{id:"longdesc",type:"text",requiredContent:"iframe[longdesc]",label:a.longDescr,setup:e,commit:t}]},o&&o.createAdvancedTab(n,{id:1,classes:1,styles:1},"iframe")]}})}();