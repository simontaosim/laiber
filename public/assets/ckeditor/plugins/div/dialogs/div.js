!function(){function e(e,t,i){t.is&&t.getCustomData("block_processed")||(t.is&&CKEDITOR.dom.element.setMarker(i,t,"block_processed",!0),e.push(t))}function t(t,i){function n(){this.foreach(function(e){/^(?!vbox|hbox)/.test(e.type)&&(e.setup||(e.setup=function(t){e.setValue(t.getAttribute(e.id)||"",1)}),!e.commit)&&(e.commit=function(t){var i=this.getValue();"dir"==e.id&&t.getComputedStyle("direction")==i||(i?t.setAttribute(e.id,i):t.removeAttribute(e.id))})})}var a=function(){var e=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);return t.config.div_wrapTable&&(delete e.td,delete e.th),e}(),o=CKEDITOR.dtd.div,r={},s=[];return{title:t.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:t.lang.common.generalTab,title:t.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:t.lang.div.styleSelectLabel,"default":"",items:[[t.lang.common.notSet,""]],onChange:function(){var e=["info:elementStyle","info:class","advanced:dir","advanced:style"],i=this.getDialog(),n=i._element&&i._element.clone()||new CKEDITOR.dom.element("div",t.document);this.commit(n,!0);for(var a,e=[].concat(e),o=e.length,r=0;o>r;r++)(a=i.getContentElement.apply(i,e[r].split(":")))&&a.setup&&a.setup(n,!0)},setup:function(e){for(var i in r)r[i].checkElementRemovable(e,!0,t)&&this.setValue(i,1)},commit:function(e){var i;(i=this.getValue())?r[i].applyToObject(e,t):e.removeAttribute("style")}},{id:"class",type:"text",requiredContent:"div(cke-xyz)",label:t.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:t.lang.common.advancedTab,title:t.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",requiredContent:"div[id]",label:t.lang.common.id,"default":""},{type:"text",id:"lang",requiredContent:"div[lang]",label:t.lang.common.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",requiredContent:"div{cke-xyz}",style:"width: 100%;",label:t.lang.common.cssStyle,"default":"",commit:function(e){e.setAttribute("style",this.getValue())}}]},{type:"hbox",children:[{type:"text",id:"title",requiredContent:"div[title]",style:"width: 100%;",label:t.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",requiredContent:"div[dir]",style:"width: 100%;",label:t.lang.common.langDir,"default":"",items:[[t.lang.common.notSet,""],[t.lang.common.langDirLtr,"ltr"],[t.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){n.call(this);var e=this,i=this.getContentElement("info","elementStyle");t.getStylesSet(function(n){var a,o;if(n)for(var s=0;s<n.length;s++)o=n[s],o.element&&"div"==o.element&&(a=o.name,r[a]=o=new CKEDITOR.style(o),t.filter.check(o)&&(i.items.push([a,a]),i.add(a,a)));i[1<i.items.length?"enable":"disable"](),setTimeout(function(){e._element&&i.setup(e._element)},0)})},onShow:function(){"editdiv"==i&&this.setupContent(this._element=CKEDITOR.plugins.div.getSurroundDiv(t))},onOk:function(){if("editdiv"==i)s=[this._element];else{var n,r,l,d=[],c={},u=[],p=t.getSelection(),m=p.getRanges(),h=p.createBookmarks();for(r=0;r<m.length;r++)for(l=m[r].createIterator();n=l.getNextParagraph();)if(n.getName()in a&&!n.isReadOnly()){var f=n.getChildren();for(n=0;n<f.count();n++)e(u,f.getItem(n),c)}else{for(;!o[n.getName()]&&!n.equals(m[r].root);)n=n.getParent();e(u,n,c)}for(CKEDITOR.dom.element.clearAllMarkers(c),m=[],r=null,l=0;l<u.length;l++)n=u[l],f=t.elementPath(n).blockLimit,f.isReadOnly()&&(f=f.getParent()),t.config.div_wrapTable&&f.is(["td","th"])&&(f=t.elementPath(f.getParent()).blockLimit),f.equals(r)||(r=f,m.push([])),m[m.length-1].push(n);for(r=0;r<m.length;r++){for(f=m[r][0],u=f.getParent(),n=1;n<m[r].length;n++)u=u.getCommonAncestor(m[r][n]);for(l=new CKEDITOR.dom.element("div",t.document),n=0;n<m[r].length;n++){for(f=m[r][n];!f.getParent().equals(u);)f=f.getParent();m[r][n]=f}for(n=0;n<m[r].length;n++)f=m[r][n],f.getCustomData&&f.getCustomData("block_processed")||(f.is&&CKEDITOR.dom.element.setMarker(c,f,"block_processed",!0),n||l.insertBefore(f),l.append(f));CKEDITOR.dom.element.clearAllMarkers(c),d.push(l)}p.selectBookmarks(h),s=d}for(d=s.length,c=0;d>c;c++)this.commitContent(s[c]),!s[c].getAttribute("style")&&s[c].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==i&&this._element.removeCustomData("elementStyle"),delete this._element}}}CKEDITOR.dialog.add("creatediv",function(e){return t(e,"creatediv")}),CKEDITOR.dialog.add("editdiv",function(e){return t(e,"editdiv")})}();