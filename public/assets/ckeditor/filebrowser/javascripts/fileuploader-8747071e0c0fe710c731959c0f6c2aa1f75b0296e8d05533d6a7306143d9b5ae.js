var qq=qq||{};qq.extend=function(t,e){for(var n in e)t[n]=e[n]},qq.indexOf=function(t,e,n){if(t.indexOf)return t.indexOf(e,n);n=n||0;var i=t.length;for(0>n&&(n+=i);i>n;n++)if(n in t&&t[n]===e)return n;return-1},qq.getUniqueId=function(){var t=0;return function(){return t++}}(),qq.attach=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)},qq.detach=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.attachEvent&&t.detachEvent("on"+e,n)},qq.preventDefault=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},qq.insertBefore=function(t,e){e.parentNode.insertBefore(t,e)},qq.remove=function(t){t.parentNode.removeChild(t)},qq.contains=function(t,e){return t==e?!0:t.contains?t.contains(e):!!(8&e.compareDocumentPosition(t))},qq.toElement=function(){var t=document.createElement("div");return function(e){t.innerHTML=e;var n=t.firstChild;return t.removeChild(n),n}}(),qq.css=function(t,e){null!=e.opacity&&"string"!=typeof t.style.opacity&&"undefined"!=typeof t.filters&&(e.filter="alpha(opacity="+Math.round(100*e.opacity)+")"),qq.extend(t.style,e)},qq.hasClass=function(t,e){var n=new RegExp("(^| )"+e+"( |$)");return n.test(t.className)},qq.addClass=function(t,e){qq.hasClass(t,e)||(t.className+=" "+e)},qq.removeClass=function(t,e){var n=new RegExp("(^| )"+e+"( |$)");t.className=t.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(t,e){t.innerText=e,t.textContent=e},qq.children=function(t){for(var e=[],n=t.firstChild;n;)1==n.nodeType&&e.push(n),n=n.nextSibling;return e},qq.getByClass=function(t,e){if(t.querySelectorAll)return t.querySelectorAll("."+e);for(var n=[],i=t.getElementsByTagName("*"),o=i.length,a=0;o>a;a++)qq.hasClass(i[a],e)&&n.push(i[a]);return n},qq.obj2url=function(t,e,n){var i=[],o="&",a=function(t,n){var o=e?/\[\]$/.test(e)?e:e+"["+n+"]":n;"undefined"!=o&&"undefined"!=n&&i.push("object"==typeof t?qq.obj2url(t,o,!0):"[object Function]"===Object.prototype.toString.call(t)?encodeURIComponent(o)+"="+encodeURIComponent(t()):encodeURIComponent(o)+"="+encodeURIComponent(t))};if(!n&&e)o=/\?/.test(e)?/\?$/.test(e)?"":"&":"?",i.push(e),i.push(qq.obj2url(t));else if("[object Array]"===Object.prototype.toString.call(t)&&"undefined"!=typeof t)for(var r=0,s=t.length;s>r;++r)a(t[r],r);else if("undefined"!=typeof t&&null!==t&&"object"==typeof t)for(var r in t)a(t[r],r);else i.push(encodeURIComponent(e)+"="+encodeURIComponent(t));return i.join(o).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(t){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(t){alert(t)}},qq.extend(this._options,t),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(t){this._options.params=t},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(t){var e=this;return new qq.UploadButton({element:t,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(t){e._onInputChange(t)}})},_createUploadHandler:function(){var t,e=this;t=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm";var n=new qq[t]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(t,n,i,o){e._onProgress(t,n,i,o),e._options.onProgress(t,n,i,o)},onComplete:function(t,n,i){e._onComplete(t,n,i),e._options.onComplete(t,n,i)},onCancel:function(t,n){e._onCancel(t,n),e._options.onCancel(t,n)}});return n},_preventLeaveInProgress:function(){var t=this;qq.attach(window,"beforeunload",function(e){if(t._filesInProgress){var e=e||window.event;return e.returnValue=t._options.messages.onLeave,t._options.messages.onLeave}})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(t,e,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(t){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(t.files):this._validateFile(t)&&this._uploadFile(t),this._button.reset()},_uploadFileList:function(t){if(this._validateFiles(t))for(var e=0;e<t.length;e++)this._uploadFile(t[e])},_uploadFile:function(t){var e=this._handler.add(t),n=this._handler.getName(e);this._options.onSubmit(e,n)!==!1&&(this._onSubmit(e,n),this._handler.upload(e,this._options.params))},_validateFiles:function(t){var e=this._filesUploaded+t.length;if(this._options.maxFilesCount>0&&e>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(this._options.minFilesCount>0&&e<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<t.length;n++)if(!this._validateFile(t[n]))return!1;return!0},_validateFile:function(t){var e,n;return t.value?e=t.value.replace(/.*(\/|\\)/,""):(e=null!=t.fileName?t.fileName:t.name,n=null!=t.fileSize?t.fileSize:t.size),this._isAllowedExtension(e)?0===n?(this._error("emptyError",e),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",e),!1):n&&n<this._options.minSizeLimit?(this._error("minSizeError",e),!1):!0:(this._error("typeError",e),!1)},_error:function(t,e){function n(t,e){i=i.replace(t,e)}var i=this._options.messages[t];n("{file}",this._formatFileName(e)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(t){return t.length>33&&(t=t.slice(0,19)+"..."+t.slice(-13)),t},_isAllowedExtension:function(t){var e=-1!==t.indexOf(".")?t.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==e)return!0;return!1},_formatSize:function(t){var e=-1;do t/=1024,e++;while(t>99);return Math.max(t,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][e]}},qq.FileUploader=function(t){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,t),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(t,e){var n=qq.getByClass(t,this._options.classes[e])[0];if(!n)throw new Error("element not found "+e);return n},_setupDragDrop:function(){var t=this,e=this._find(this._element,"drop"),n=new qq.UploadDropZone({element:e,onEnter:function(n){qq.addClass(e,t._classes.dropActive),n.stopPropagation()},onLeave:function(t){t.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(e,t._classes.dropActive)},onDrop:function(n){e.style.display="none",qq.removeClass(e,t._classes.dropActive),t._uploadFileList(n.dataTransfer.files)}});e.style.display="none",qq.attach(document,"dragenter",function(t){n._isValidFileDrag(t)&&(e.style.display="block")}),qq.attach(document,"dragleave",function(t){if(n._isValidFileDrag(t)){var i=document.elementFromPoint(t.clientX,t.clientY);i&&"HTML"!=i.nodeName||(e.style.display="none")}})},_onSubmit:function(t,e){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(t,e)},_onProgress:function(t,e,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o=this._getItemByFileId(t),a=this._find(o,"size");a.style.display="inline";var r;r=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(a,r)},_onComplete:function(t,e,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(t);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(t,e){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=t;var i=this._find(n,"file");qq.setText(i,this._formatFileName(e)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(t){for(var e=this._listElement.firstChild;e;){if(e.qqFileId==t)return e;e=e.nextSibling}},_bindCancelEvent:function(){var t=this,e=this._listElement;qq.attach(e,"click",function(e){e=e||window.event;var n=e.target||e.srcElement;if(qq.hasClass(n,t._classes.cancel)){qq.preventDefault(e);var i=n.parentNode;t._handler.cancel(i.qqFileId),qq.remove(i)}})}}),qq.UploadDropZone=function(t){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,t),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="none",t.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var t=this;qq.attach(t._element,"dragover",function(e){if(t._isValidFileDrag(e)){var n=e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"==n||"linkMove"==n?"move":"copy",e.stopPropagation(),e.preventDefault()}}),qq.attach(t._element,"dragenter",function(e){t._isValidFileDrag(e)&&t._options.onEnter(e)}),qq.attach(t._element,"dragleave",function(e){if(t._isValidFileDrag(e)){t._options.onLeave(e);var n=document.elementFromPoint(e.clientX,e.clientY);qq.contains(this,n)||t._options.onLeaveNotDescendants(e)}}),qq.attach(t._element,"drop",function(e){t._isValidFileDrag(e)&&(e.preventDefault(),t._options.onDrop(e))})},_isValidFileDrag:function(t){var e=t.dataTransfer,n=navigator.userAgent.indexOf("AppleWebKit")>-1;return e&&"none"!=e.effectAllowed&&(e.files||!n&&e.types.contains&&e.types.contains("Files"))}},qq.UploadButton=function(t){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,t),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var t=document.createElement("input");this._options.multiple&&t.setAttribute("multiple","multiple"),t.setAttribute("type","file"),t.setAttribute("name",this._options.name),qq.css(t,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(t);var e=this;return qq.attach(t,"change",function(){e._options.onChange(t)}),qq.attach(t,"mouseover",function(){qq.addClass(e._element,e._options.hoverClass)}),qq.attach(t,"mouseout",function(){qq.removeClass(e._element,e._options.hoverClass)}),qq.attach(t,"focus",function(){qq.addClass(e._element,e._options.focusClass)}),qq.attach(t,"blur",function(){qq.removeClass(e._element,e._options.focusClass)}),window.attachEvent&&t.setAttribute("tabIndex","-1"),t}},qq.UploadHandlerAbstract=function(t){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,t),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(t){this._options.debug&&window.console&&console.log("[uploader] "+t)},add:function(){},upload:function(t,e){var n=this._queue.push(t),i={};qq.extend(i,e),this._params[t]=i,n<=this._options.maxConnections&&this._upload(t,this._params[t])},cancel:function(t){this._cancel(t),this._dequeue(t)},cancelAll:function(){for(var t=0;t<this._queue.length;t++)this._cancel(this._queue[t]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(t){var e=qq.indexOf(this._queue,t);this._queue.splice(e,1);var n=this._options.maxConnections;if(this._queue.length>=n&&n>e){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(t){t.setAttribute("name",this._options.fieldName);var e="qq-upload-handler-iframe"+qq.getUniqueId();return this._inputs[e]=t,t.parentNode&&qq.remove(t),e},getName:function(t){return this._inputs[t].value.replace(/.*(\/|\\)/,"")},_cancel:function(t){this._options.onCancel(t,this.getName(t)),delete this._inputs[t];var e=document.getElementById(t);e&&(e.setAttribute("src","javascript:false;"),qq.remove(e))},_upload:function(t,e){var n=this._inputs[t];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(t),o=this._createIframe(t),a=this._createForm(o,e);a.appendChild(n);var r=this;return this._attachLoadEvent(o,function(){r.log("iframe loaded");var e=r._getIframeContentJSON(o);r._options.onComplete(t,i,e),r._dequeue(t),delete r._inputs[t],setTimeout(function(){qq.remove(o)},1)}),a.submit(),qq.remove(a),t},_attachLoadEvent:function(t,e){qq.attach(t,"load",function(){t.parentNode&&(t.contentDocument&&t.contentDocument.body&&"false"==t.contentDocument.body.innerHTML||e())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(err){response={}}return response},_createIframe:function(t){var e=qq.toElement('<iframe src="javascript:false;" name="'+t+'" />');return e.setAttribute("id",t),e.style.display="none",document.body.appendChild(e),e},_createForm:function(t,e){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(e,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",t.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),a=$('meta[name="csrf-param"]').attr("content"),r=qq.toElement('<input type="hidden" />');return r.setAttribute("name",a),r.setAttribute("value",o),n.appendChild(r),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var t=document.createElement("input");return t.type="file","multiple"in t&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(t){if(!(t instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(t)-1},getName:function(t){var e=this._files[t];return null!=e.fileName?e.fileName:e.name},getSize:function(t){var e=this._files[t];return null!=e.fileSize?e.fileSize:e.size},getLoaded:function(t){return this._loaded[t]||0},_upload:function(t,e){var n=this._files[t],i=this.getName(t),o=this.getSize(t);this._loaded[t]=0;var a=this._xhrs[t]=new XMLHttpRequest,r=this;a.upload.onprogress=function(e){e.lengthComputable&&(r._loaded[t]=e.loaded,r._options.onProgress(t,i,e.loaded,e.total))},a.onreadystatechange=function(){4==a.readyState&&r._onComplete(t,a)},e=e||{},e[this._options.fieldName]=i;var s=qq.obj2url(e,this._options.action);a.open(this._options.method,s,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-File-Name",encodeURIComponent(i)),a.setRequestHeader("X-File-Size",o),a.setRequestHeader("X-File-Type",n.type),a.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(a),a.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),[200,201].indexOf(xhr.status)>-1){this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);var response;try{response=eval("("+xhr.responseText+")")}catch(err){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(t){this._options.onCancel(t,this.getName(t)),this._files[t]=null,this._xhrs[t]&&(this._xhrs[t].abort(),this._xhrs[t]=null)}});