/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e,t){var i;try{i=e.getSelection().getRanges()[0]}catch(n){return null}return i.shrink(CKEDITOR.SHRINK_TEXT),e.elementPath(i.getCommonAncestor()).contains(t,1)}function t(t,a){var o=t.lang.liststyle;if("bulletedListStyle"==a)return{title:o.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:o.type,id:"type",align:"center",style:"width:150px",items:[[o.notset,""],[o.circle,"circle"],[o.disc,"disc"],[o.square,"square"]],setup:function(e){this.setValue(e.getStyle("list-style-type")||n[e.getAttribute("type")]||e.getAttribute("type")||"")},commit:function(e){var t=this.getValue();t?e.setStyle("list-style-type",t):e.removeStyle("list-style-type")}}]}],onShow:function(){var t=this.getParentEditor();(t=e(t,"ul"))&&this.setupContent(t)},onOk:function(){var t=this.getParentEditor();(t=e(t,"ul"))&&this.commitContent(t)}};if("numberedListStyle"==a){var r=[[o.notset,""],[o.lowerRoman,"lower-roman"],[o.upperRoman,"upper-roman"],[o.lowerAlpha,"lower-alpha"],[o.upperAlpha,"upper-alpha"],[o.decimal,"decimal"]];return(!CKEDITOR.env.ie||7<CKEDITOR.env.version)&&r.concat([[o.armenian,"armenian"],[o.decimalLeadingZero,"decimal-leading-zero"],[o.georgian,"georgian"],[o.lowerGreek,"lower-greek"]]),{title:o.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:o.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(o.validateStartNumber),setup:function(e){this.setValue(e.getFirst(i).getAttribute("value")||e.getAttribute("start")||1)},commit:function(e){var t=e.getFirst(i),n=t.getAttribute("value")||e.getAttribute("start")||1;e.getFirst(i).removeAttribute("value");var a=parseInt(this.getValue(),10);for(isNaN(a)?e.removeAttribute("start"):e.setAttribute("start",a),e=t,t=n,a=isNaN(a)?1:a;(e=e.getNext(i))&&t++;)e.getAttribute("value")==t&&e.setAttribute("value",a+t-n)}},{type:"select",label:o.type,id:"type",style:"width: 100%;",items:r,setup:function(e){this.setValue(e.getStyle("list-style-type")||n[e.getAttribute("type")]||e.getAttribute("type")||"")},commit:function(e){var t=this.getValue();t?e.setStyle("list-style-type",t):e.removeStyle("list-style-type")}}]}]}],onShow:function(){var t=this.getParentEditor();(t=e(t,"ol"))&&this.setupContent(t)},onOk:function(){var t=this.getParentEditor();(t=e(t,"ol"))&&this.commitContent(t)}}}}var i=function(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.is("li")},n={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman",1:"decimal",disc:"disc",circle:"circle",square:"square"};CKEDITOR.dialog.add("numberedListStyle",function(e){return t(e,"numberedListStyle")}),CKEDITOR.dialog.add("bulletedListStyle",function(e){return t(e,"bulletedListStyle")})}();