/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

(function(a){CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal;"undefined"!=typeof a&&(a.extend(a.fn,{ckeditorGet:function(){var a=this.eq(0).data("ckeditorInstance");if(!a)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return a},ckeditor:function(g,d){if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!a.isFunction(g))var k=d,d=g,g=k;var i=[],d=d||{};this.each(function(){var b=
a(this),c=b.data("ckeditorInstance"),f=b.data("_ckeditorInstanceLock"),h=this,j=new a.Deferred;i.push(j.promise());if(c&&!f)g&&g.apply(c,[this]),j.resolve();else if(f)c.once("instanceReady",function(){setTimeout(function(){c.element?(c.element.$==h&&g&&g.apply(c,[h]),j.resolve()):setTimeout(arguments.callee,100)},0)},null,null,9999);else{if(d.autoUpdateElement||"undefined"==typeof d.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)d.autoUpdateElementJquery=!0;d.autoUpdateElement=!1;b.data("_ckeditorInstanceLock",
!0);c=a(this).is("textarea")?CKEDITOR.replace(h,d):CKEDITOR.inline(h,d);b.data("ckeditorInstance",c);c.on("instanceReady",function(d){var e=d.editor;setTimeout(function(){if(e.element){d.removeListener();e.on("dataReady",function(){b.trigger("dataReady.ckeditor",[e])});e.on("setData",function(a){b.trigger("setData.ckeditor",[e,a.data])});e.on("getData",function(a){b.trigger("getData.ckeditor",[e,a.data])},999);e.on("destroy",function(){b.trigger("destroy.ckeditor",[e])});e.on("save",function(){a(h.form).submit();
return!1},null,null,20);if(e.config.autoUpdateElementJquery&&b.is("textarea")&&a(h.form).length){var c=function(){b.ckeditor(function(){e.updateElement()})};a(h.form).submit(c);a(h.form).bind("form-pre-serialize",c);b.bind("destroy.ckeditor",function(){a(h.form).unbind("submit",c);a(h.form).unbind("form-pre-serialize",c)})}e.on("destroy",function(){b.removeData("ckeditorInstance")});b.removeData("_ckeditorInstanceLock");b.trigger("instanceReady.ckeditor",[e]);g&&g.apply(e,[h]);j.resolve()}else setTimeout(arguments.callee,
100)},0)},null,null,9999)}});var f=new a.Deferred;this.promise=f.promise();a.when.apply(this,i).then(function(){f.resolve()});this.editor=this.eq(0).data("ckeditorInstance");return this}}),CKEDITOR.config.jqueryOverrideVal&&(a.fn.val=CKEDITOR.tools.override(a.fn.val,function(g){return function(d){if(arguments.length){var k=this,i=[],f=this.each(function(){var b=a(this),c=b.data("ckeditorInstance");if(b.is("textarea")&&c){var f=new a.Deferred;c.setData(d,function(){f.resolve()});i.push(f.promise());
return!0}return g.call(b,d)});if(i.length){var b=new a.Deferred;a.when.apply(this,i).done(function(){b.resolveWith(k)});return b.promise()}return f}var f=a(this).eq(0),c=f.data("ckeditorInstance");return f.is("textarea")&&c?c.getData():g.call(f)}})))})(window.jQuery);
=======
!function(e){CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal,"undefined"!=typeof e&&(e.extend(e.fn,{ckeditorGet:function(){var e=this.eq(0).data("ckeditorInstance");if(!e)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return e},ckeditor:function(t,n){if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!e.isFunction(t))var i=n,n=t,t=i;var o=[],n=n||{};this.each(function(){var i=e(this),a=i.data("ckeditorInstance"),r=i.data("_ckeditorInstanceLock"),s=this,l=new e.Deferred;o.push(l.promise()),a&&!r?(t&&t.apply(a,[this]),l.resolve()):r?a.once("instanceReady",function(){setTimeout(function(){a.element?(a.element.$==s&&t&&t.apply(a,[s]),l.resolve()):setTimeout(arguments.callee,100)},0)},null,null,9999):((n.autoUpdateElement||"undefined"==typeof n.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)&&(n.autoUpdateElementJquery=!0),n.autoUpdateElement=!1,i.data("_ckeditorInstanceLock",!0),a=e(this).is("textarea")?CKEDITOR.replace(s,n):CKEDITOR.inline(s,n),i.data("ckeditorInstance",a),a.on("instanceReady",function(n){var o=n.editor;setTimeout(function(){if(o.element){if(n.removeListener(),o.on("dataReady",function(){i.trigger("dataReady.ckeditor",[o])}),o.on("setData",function(e){i.trigger("setData.ckeditor",[o,e.data])}),o.on("getData",function(e){i.trigger("getData.ckeditor",[o,e.data])},999),o.on("destroy",function(){i.trigger("destroy.ckeditor",[o])}),o.on("save",function(){return e(s.form).submit(),!1},null,null,20),o.config.autoUpdateElementJquery&&i.is("textarea")&&e(s.form).length){var a=function(){i.ckeditor(function(){o.updateElement()})};e(s.form).submit(a),e(s.form).bind("form-pre-serialize",a),i.bind("destroy.ckeditor",function(){e(s.form).unbind("submit",a),e(s.form).unbind("form-pre-serialize",a)})}o.on("destroy",function(){i.removeData("ckeditorInstance")}),i.removeData("_ckeditorInstanceLock"),i.trigger("instanceReady.ckeditor",[o]),t&&t.apply(o,[s]),l.resolve()}else setTimeout(arguments.callee,100)},0)},null,null,9999))});var a=new e.Deferred;return this.promise=a.promise(),e.when.apply(this,o).then(function(){a.resolve()}),this.editor=this.eq(0).data("ckeditorInstance"),this}}),CKEDITOR.config.jqueryOverrideVal&&(e.fn.val=CKEDITOR.tools.override(e.fn.val,function(t){return function(n){if(arguments.length){var i=this,o=[],a=this.each(function(){var i=e(this),a=i.data("ckeditorInstance");if(i.is("textarea")&&a){var r=new e.Deferred;return a.setData(n,function(){r.resolve()}),o.push(r.promise()),!0}return t.call(i,n)});if(o.length){var r=new e.Deferred;return e.when.apply(this,o).done(function(){r.resolveWith(i)}),r.promise()}return a}var a=e(this).eq(0),s=a.data("ckeditorInstance");return a.is("textarea")&&s?s.getData():t.call(a)}})))}(window.jQuery);
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
