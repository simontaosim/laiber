!function(){function e(e,t,n){t.is&&t.getCustomData("block_processed")||(t.is&&CKEDITOR.dom.element.setMarker(n,t,"block_processed",!0),e.push(t))}function t(t,n){function i(){this.foreach(function(e){/^(?!vbox|hbox)/.test(e.type)&&(e.setup||(e.setup=function(t){e.setValue(t.getAttribute(e.id)||"",1)}),!e.commit)&&(e.commit=function(t){var n=this.getValue();"dir"==e.id&&t.getComputedStyle("direction")==n||(n?t.setAttribute(e.id,n):t.removeAttribute(e.id))})})}var a=function(){var e=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);return t.config.div_wrapTable&&(delete e.td,delete e.th),e}(),o=CKEDITOR.dtd.div,r={},s=[];return{title:t.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:t.lang.common.generalTab,title:t.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:t.lang.div.styleSelectLabel,"default":"",items:[[t.lang.common.notSet,""]],onChange:function(){var e=["info:elementStyle","info:class","advanced:dir","advanced:style"],n=this.getDialog(),i=n._element&&n._element.clone()||new CKEDITOR.dom.element("div",t.document);this.commit(i,!0);for(var a,e=[].concat(e),o=e.length,r=0;o>r;r++)(a=n.getContentElement.apply(n,e[r].split(":")))&&a.setup&&a.setup(i,!0)},setup:function(e){for(var n in r)r[n].checkElementRemovable(e,!0,t)&&this.setValue(n,1)},commit:function(e){var n;(n=this.getValue())?r[n].applyToObject(e,t):e.removeAttribute("style")}},{id:"class",type:"text",requiredContent:"div(cke-xyz)",label:t.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:t.lang.common.advancedTab,title:t.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",requiredContent:"div[id]",label:t.lang.common.id,"default":""},{type:"text",id:"lang",requiredContent:"div[lang]",label:t.lang.common.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",requiredContent:"div{cke-xyz}",style:"width: 100%;",label:t.lang.common.cssStyle,"default":"",commit:function(e){e.setAttribute("style",this.getValue())}}]},{type:"hbox",children:[{type:"text",id:"title",requiredContent:"div[title]",style:"width: 100%;",label:t.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",requiredContent:"div[dir]",style:"width: 100%;",label:t.lang.common.langDir,"default":"",items:[[t.lang.common.notSet,""],[t.lang.common.langDirLtr,"ltr"],[t.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){i.call(this);var e=this,n=this.getContentElement("info","elementStyle");t.getStylesSet(function(i){var a,o;if(i)for(var s=0;s<i.length;s++)o=i[s],o.element&&"div"==o.element&&(a=o.name,r[a]=o=new CKEDITOR.style(o),t.filter.check(o)&&(n.items.push([a,a]),n.add(a,a)));n[1<n.items.length?"enable":"disable"](),setTimeout(function(){e._element&&n.setup(e._element)},0)})},onShow:function(){"editdiv"==n&&this.setupContent(this._element=CKEDITOR.plugins.div.getSurroundDiv(t))},onOk:function(){if("editdiv"==n)s=[this._element];else{var i,r,l,d=[],c={},u=[],p=t.getSelection(),h=p.getRanges(),m=p.createBookmarks();for(r=0;r<h.length;r++)for(l=h[r].createIterator();i=l.getNextParagraph();)if(i.getName()in a&&!i.isReadOnly()){var f=i.getChildren();for(i=0;i<f.count();i++)e(u,f.getItem(i),c)}else{for(;!o[i.getName()]&&!i.equals(h[r].root);)i=i.getParent();e(u,i,c)}for(CKEDITOR.dom.element.clearAllMarkers(c),h=[],r=null,l=0;l<u.length;l++)i=u[l],f=t.elementPath(i).blockLimit,f.isReadOnly()&&(f=f.getParent()),t.config.div_wrapTable&&f.is(["td","th"])&&(f=t.elementPath(f.getParent()).blockLimit),f.equals(r)||(r=f,h.push([])),h[h.length-1].push(i);for(r=0;r<h.length;r++){for(f=h[r][0],u=f.getParent(),i=1;i<h[r].length;i++)u=u.getCommonAncestor(h[r][i]);for(l=new CKEDITOR.dom.element("div",t.document),i=0;i<h[r].length;i++){for(f=h[r][i];!f.getParent().equals(u);)f=f.getParent();h[r][i]=f}for(i=0;i<h[r].length;i++)f=h[r][i],f.getCustomData&&f.getCustomData("block_processed")||(f.is&&CKEDITOR.dom.element.setMarker(c,f,"block_processed",!0),i||l.insertBefore(f),l.append(f));CKEDITOR.dom.element.clearAllMarkers(c),d.push(l)}p.selectBookmarks(m),s=d}for(d=s.length,c=0;d>c;c++)this.commitContent(s[c]),!s[c].getAttribute("style")&&s[c].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==n&&this._element.removeCustomData("elementStyle"),delete this._element}}}CKEDITOR.dialog.add("creatediv",function(e){return t(e,"creatediv")}),CKEDITOR.dialog.add("editdiv",function(e){return t(e,"editdiv")})}();