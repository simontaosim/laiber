/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("checkbox",function(e){return{title:e.lang.forms.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){delete this.checkbox;var e=this.getParentEditor().getSelection().getSelectedElement();e&&"checkbox"==e.getAttribute("type")&&(this.checkbox=e,this.setupContent(e))},onOk:function(){var e,t=this.checkbox;t||(e=this.getParentEditor(),t=e.document.createElement("input"),t.setAttribute("type","checkbox"),e.insertElement(t)),this.commitContent({element:t})},contents:[{id:"info",label:e.lang.forms.checkboxAndRadio.checkboxTitle,title:e.lang.forms.checkboxAndRadio.checkboxTitle,startupFocus:"txtName",elements:[{id:"txtName",type:"text",label:e.lang.common.name,"default":"",accessKey:"N",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:function(e){e=e.element,this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"txtValue",type:"text",label:e.lang.forms.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(e){e=e.getAttribute("value"),this.setValue(CKEDITOR.env.ie&&"on"==e?"":e)},commit:function(t){var i=t.element,n=this.getValue();!n||CKEDITOR.env.ie&&"on"==n?CKEDITOR.env.ie?(n=new CKEDITOR.dom.element("input",i.getDocument()),i.copyAttributes(n,{value:1}),n.replace(i),e.getSelection().selectElement(n),t.element=n):i.removeAttribute("value"):i.setAttribute("value",n)}},{id:"cmbSelected",type:"checkbox",label:e.lang.forms.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(e){this.setValue(e.getAttribute("checked"))},commit:function(t){var i=t.element;if(CKEDITOR.env.ie){var n=!!i.getAttribute("checked"),a=!!this.getValue();n!=a&&(n=CKEDITOR.dom.element.createFromHtml('<input type="checkbox"'+(a?' checked="checked"':"")+"/>",e.document),i.copyAttributes(n,{type:1,checked:1}),n.replace(i),e.getSelection().selectElement(n),t.element=n)}else this.getValue()?i.setAttribute("checked","checked"):i.removeAttribute("checked")}}]}]}});