/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

CKEDITOR.dialog.add("cellProperties",function(g){function d(a){return function(b){for(var c=a(b[0]),d=1;d<b.length;d++)if(a(b[d])!==c){c=null;break}"undefined"!=typeof c&&(this.setValue(c),CKEDITOR.env.gecko&&("select"==this.type&&!c)&&(this.getInputElement().$.selectedIndex=-1))}}function j(a){if(a=l.exec(a.getStyle("width")||a.getAttribute("width")))return a[2]}var h=g.lang.table,c=h.cell,e=g.lang.common,i=CKEDITOR.dialog.validate,l=/^(\d+(?:\.\d+)?)(px|%)$/,f={type:"html",html:"&nbsp;"},m="rtl"==
g.lang.dir,k=g.plugins.colordialog;return{title:c.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:c.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:e.width,validate:i.number(c.invalidWidth),onLoad:function(){var a=this.getDialog().getContentElement("info",
"widthType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:d(function(a){var b=parseInt(a.getAttribute("width"),10),a=parseInt(a.getStyle("width"),10);return!isNaN(a)?a:!isNaN(b)?b:""}),commit:function(a){var b=parseInt(this.getValue(),10),c=this.getDialog().getValueOf("info","widthType")||j(a);isNaN(b)?a.removeStyle("width"):a.setStyle("width",b+c);a.removeAttribute("width")},"default":""},{type:"select",id:"widthType",
label:g.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[h.widthPx,"px"],[h.widthPc,"%"]],setup:d(j)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:e.height,width:"100px","default":"",validate:i.number(c.invalidHeight),onLoad:function(){var a=this.getDialog().getContentElement("info","htmlHeightType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:d(function(a){var b=
parseInt(a.getAttribute("height"),10),a=parseInt(a.getStyle("height"),10);return!isNaN(a)?a:!isNaN(b)?b:""}),commit:function(a){var b=parseInt(this.getValue(),10);isNaN(b)?a.removeStyle("height"):a.setStyle("height",CKEDITOR.tools.cssLength(b));a.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+h.widthPx}]},f,{type:"select",id:"wordWrap",label:c.wordWrap,"default":"yes",items:[[c.yes,"yes"],[c.no,"no"]],setup:d(function(a){var b=a.getAttribute("noWrap");if("nowrap"==a.getStyle("white-space")||
b)return"no"}),commit:function(a){"no"==this.getValue()?a.setStyle("white-space","nowrap"):a.removeStyle("white-space");a.removeAttribute("noWrap")}},f,{type:"select",id:"hAlign",label:c.hAlign,"default":"",items:[[e.notSet,""],[e.alignLeft,"left"],[e.alignCenter,"center"],[e.alignRight,"right"],[e.alignJustify,"justify"]],setup:d(function(a){var b=a.getAttribute("align");return a.getStyle("text-align")||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("text-align",b):a.removeStyle("text-align");
a.removeAttribute("align")}},{type:"select",id:"vAlign",label:c.vAlign,"default":"",items:[[e.notSet,""],[e.alignTop,"top"],[e.alignMiddle,"middle"],[e.alignBottom,"bottom"],[c.alignBaseline,"baseline"]],setup:d(function(a){var b=a.getAttribute("vAlign"),a=a.getStyle("vertical-align");switch(a){case "top":case "middle":case "bottom":case "baseline":break;default:a=""}return a||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("vertical-align",b):a.removeStyle("vertical-align");a.removeAttribute("vAlign")}}]},
f,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:c.cellType,"default":"td",items:[[c.data,"td"],[c.header,"th"]],setup:d(function(a){return a.getName()}),commit:function(a){a.renameNode(this.getValue())}},f,{type:"text",id:"rowSpan",label:c.rowSpan,"default":"",validate:i.integer(c.invalidRowSpan),setup:d(function(a){if((a=parseInt(a.getAttribute("rowSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("rowSpan",this.getValue()):
a.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:c.colSpan,"default":"",validate:i.integer(c.invalidColSpan),setup:d(function(a){if((a=parseInt(a.getAttribute("colSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("colSpan",this.getValue()):a.removeAttribute("colSpan")}},f,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:c.bgColor,"default":"",setup:d(function(a){var b=a.getAttribute("bgColor");
return a.getStyle("background-color")||b}),commit:function(a){this.getValue()?a.setStyle("background-color",this.getValue()):a.removeStyle("background-color");a.removeAttribute("bgColor")}},k?{type:"button",id:"bgColorChoose","class":"colorChooser",label:c.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","bgColor").setValue(a);this.focus()},this)}}:f]},f,
{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:c.borderColor,"default":"",setup:d(function(a){var b=a.getAttribute("borderColor");return a.getStyle("border-color")||b}),commit:function(a){this.getValue()?a.setStyle("border-color",this.getValue()):a.removeStyle("border-color");a.removeAttribute("borderColor")}},k?{type:"button",id:"borderColorChoose","class":"colorChooser",label:c.chooseColor,style:(m?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align",
"bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","borderColor").setValue(a);this.focus()},this)}}:f]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection());this.setupContent(this.cells)},onOk:function(){for(var a=this._.editor.getSelection(),b=a.createBookmarks(),c=this.cells,d=0;d<c.length;d++)this.commitContent(c[d]);this._.editor.forceNextSelectionCheck();a.selectBookmarks(b);this._.editor.selectionChange()},
onLoad:function(){var a={};this.foreach(function(b){b.setup&&b.commit&&(b.setup=CKEDITOR.tools.override(b.setup,function(c){return function(){c.apply(this,arguments);a[b.id]=b.getValue()}}),b.commit=CKEDITOR.tools.override(b.commit,function(c){return function(){a[b.id]!==b.getValue()&&c.apply(this,arguments)}}))})}}});
=======
CKEDITOR.dialog.add("cellProperties",function(e){function t(e){return function(t){for(var n=e(t[0]),i=1;i<t.length;i++)if(e(t[i])!==n){n=null;break}"undefined"!=typeof n&&(this.setValue(n),CKEDITOR.env.gecko&&"select"==this.type&&!n&&(this.getInputElement().$.selectedIndex=-1))}}function n(e){return(e=s.exec(e.getStyle("width")||e.getAttribute("width")))?e[2]:void 0}var i=e.lang.table,o=i.cell,a=e.lang.common,r=CKEDITOR.dialog.validate,s=/^(\d+(?:\.\d+)?)(px|%)$/,l={type:"html",html:"&nbsp;"},c="rtl"==e.lang.dir,u=e.plugins.colordialog;return{title:o.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:o.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:a.width,validate:r.number(o.invalidWidth),onLoad:function(){var e=this.getDialog().getContentElement("info","widthType").getElement(),t=this.getInputElement(),n=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[n,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("width"),10),e=parseInt(e.getStyle("width"),10);return isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10),i=this.getDialog().getValueOf("info","widthType")||n(e);isNaN(t)?e.removeStyle("width"):e.setStyle("width",t+i),e.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:e.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[i.widthPx,"px"],[i.widthPc,"%"]],setup:t(n)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:a.height,width:"100px","default":"",validate:r.number(o.invalidHeight),onLoad:function(){var e=this.getDialog().getContentElement("info","htmlHeightType").getElement(),t=this.getInputElement(),n=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[n,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("height"),10),e=parseInt(e.getStyle("height"),10);return isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10);isNaN(t)?e.removeStyle("height"):e.setStyle("height",CKEDITOR.tools.cssLength(t)),e.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+i.widthPx}]},l,{type:"select",id:"wordWrap",label:o.wordWrap,"default":"yes",items:[[o.yes,"yes"],[o.no,"no"]],setup:t(function(e){var t=e.getAttribute("noWrap");return"nowrap"==e.getStyle("white-space")||t?"no":void 0}),commit:function(e){"no"==this.getValue()?e.setStyle("white-space","nowrap"):e.removeStyle("white-space"),e.removeAttribute("noWrap")}},l,{type:"select",id:"hAlign",label:o.hAlign,"default":"",items:[[a.notSet,""],[a.alignLeft,"left"],[a.alignCenter,"center"],[a.alignRight,"right"],[a.alignJustify,"justify"]],setup:t(function(e){var t=e.getAttribute("align");return e.getStyle("text-align")||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("text-align",t):e.removeStyle("text-align"),e.removeAttribute("align")}},{type:"select",id:"vAlign",label:o.vAlign,"default":"",items:[[a.notSet,""],[a.alignTop,"top"],[a.alignMiddle,"middle"],[a.alignBottom,"bottom"],[o.alignBaseline,"baseline"]],setup:t(function(e){var t=e.getAttribute("vAlign"),e=e.getStyle("vertical-align");switch(e){case"top":case"middle":case"bottom":case"baseline":break;default:e=""}return e||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("vertical-align",t):e.removeStyle("vertical-align"),e.removeAttribute("vAlign")}}]},l,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:o.cellType,"default":"td",items:[[o.data,"td"],[o.header,"th"]],setup:t(function(e){return e.getName()}),commit:function(e){e.renameNode(this.getValue())}},l,{type:"text",id:"rowSpan",label:o.rowSpan,"default":"",validate:r.integer(o.invalidRowSpan),setup:t(function(e){return(e=parseInt(e.getAttribute("rowSpan"),10))&&1!=e?e:void 0}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("rowSpan",this.getValue()):e.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:o.colSpan,"default":"",validate:r.integer(o.invalidColSpan),setup:t(function(e){return(e=parseInt(e.getAttribute("colSpan"),10))&&1!=e?e:void 0}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("colSpan",this.getValue()):e.removeAttribute("colSpan")}},l,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:o.bgColor,"default":"",setup:t(function(e){var t=e.getAttribute("bgColor");return e.getStyle("background-color")||t}),commit:function(e){this.getValue()?e.setStyle("background-color",this.getValue()):e.removeStyle("background-color"),e.removeAttribute("bgColor")}},u?{type:"button",id:"bgColorChoose","class":"colorChooser",label:o.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","bgColor").setValue(e),this.focus()},this)}}:l]},l,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:o.borderColor,"default":"",setup:t(function(e){var t=e.getAttribute("borderColor");return e.getStyle("border-color")||t}),commit:function(e){this.getValue()?e.setStyle("border-color",this.getValue()):e.removeStyle("border-color"),e.removeAttribute("borderColor")}},u?{type:"button",id:"borderColorChoose","class":"colorChooser",label:o.chooseColor,style:(c?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","borderColor").setValue(e),this.focus()},this)}}:l]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var e=this._.editor.getSelection(),t=e.createBookmarks(),n=this.cells,i=0;i<n.length;i++)this.commitContent(n[i]);this._.editor.forceNextSelectionCheck(),e.selectBookmarks(t),this._.editor.selectionChange()},onLoad:function(){var e={};this.foreach(function(t){t.setup&&t.commit&&(t.setup=CKEDITOR.tools.override(t.setup,function(n){return function(){n.apply(this,arguments),e[t.id]=t.getValue()}}),t.commit=CKEDITOR.tools.override(t.commit,function(n){return function(){e[t.id]!==t.getValue()&&n.apply(this,arguments)}}))})}}});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
