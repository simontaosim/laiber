$.QueryString=function(t){if(""==t)return{};for(var e={},n=0;n<t.length;++n){var i=t[n].split("=");2==i.length&&(e[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")))}return e}(window.location.search.substr(1).split("&")),$(document).ready(function(){$("div.gal-item div.gal-inner-holder").live("mouseover",function(){$(this).addClass("hover")}).live("mouseout",function(){$(this).removeClass("hover")}).live("click",function(){var t=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,t),window.close()}),$("div.gal-item a.gal-del").live("ajax:complete",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(t){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,t),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(t,e){var n=qq.getByClass(t,this._options.classes[e])[0];if(!n)throw alert(e),new Error("element not found "+e);return n},_setupDragDrop:function(){var t=this,e=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:e,onEnter:function(n){qq.addClass(e,t._classes.dropActive),n.stopPropagation()},onLeave:function(t){t.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(e,t._classes.dropActive)},onDrop:function(n){e.style.display="none",qq.removeClass(e,t._classes.dropActive),t._uploadFileList(n.dataTransfer.files)}});e.style.display="none",qq.attach(document,"dragenter",function(t){n._isValidFileDrag(t)&&(e.style.display="block")}),qq.attach(document,"dragleave",function(t){if(n._isValidFileDrag(t)){var i=document.elementFromPoint(t.clientX,t.clientY);i&&"HTML"!=i.nodeName||(e.style.display="none")}})},_onSubmit:function(t,e){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(t,e)},_onProgress:function(t,e,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(t),r=this._find(a,"size");o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(r,o)},_onComplete:function(t,e,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(t),o=n.asset?n.asset:n;o&&o.id?(qq.addClass(i,this._classes.success),o.size=this._formatSize(o.size),o.controller=void 0!==o.type&&"ckeditor::picture"==o.type.toLowerCase()?"pictures":"attachment_files",$(i).replaceWith($(this._options.template_id).tmpl(o))):qq.addClass(i,this._classes.fail)},_addToList:function(t,e){if(this._listElement){this._options.multiple===!1&&$(this._listElement).empty();var n={id:0,filename:this._formatFileName(e),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:"/assets/ckeditor/filebrowser/images/preloader-3799a3e41d7787a31dac5796ebccc242951da2f2b57eb088326ab3bffe15056a.gif"},i=$(this._options.template_id).tmpl(n).attr("qqfileid",t).prependTo(this._listElement);i.find("div.img").addClass("preloader"),this._bindCancelEvent(i)}},_getItemByFileId:function(t){return $(this._listElement).find("div[qqfileid="+t+"]").get(0)},_bindCancelEvent:function(t){var e=this,n=$(t);n.find("a."+this._classes.cancel).bind("click",function(t){return e._handler.cancel(n.attr("qqfileid")),n.remove(),qq.preventDefault(t),!1})}});