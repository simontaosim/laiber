!function(e){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.2",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,i=this.S;n.create(this.S(t)),i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(t){var o=i(this).closest("["+n.attr_name()+"]"),a=n.attr_name()+"="+o.attr(n.attr_name()),s=o.data(n.attr_name(!0)+"-init")||n.settings,r=i("#"+this.href.split("#")[1]),l=e("> dd, > li",o),c=l.children("."+s.content_class),d=c.filter("."+s.active_class);return t.preventDefault(),o.attr(n.attr_name())&&(c=c.add("["+a+"] dd > ."+s.content_class+", ["+a+"] li > ."+s.content_class),l=l.add("["+a+"] dd, ["+a+"] li")),s.toggleable&&r.is(d)?(r.parent("dd, li").toggleClass(s.active_class,!1),r.toggleClass(s.active_class,!1),i(this).attr("aria-expanded",function(e,t){return"true"===t?"false":"true"}),s.callback(r),r.triggerHandler("toggled",[o]),void o.triggerHandler("toggled",[r])):(s.multi_expand||(c.removeClass(s.active_class),l.removeClass(s.active_class),l.children("a").attr("aria-expanded","false")),r.addClass(s.active_class).parent().addClass(s.active_class),s.callback(r),r.triggerHandler("toggled",[o]),o.triggerHandler("toggled",[r]),void i(this).attr("aria-expanded","true"))})},create:function(t){var n=this,i=t,o=e("> .accordion-navigation",i),a=i.data(n.attr_name(!0)+"-init")||n.settings;o.children("a").attr("aria-expanded","false"),o.has("."+a.content_class+"."+a.active_class).children("a").attr("aria-expanded","true"),a.multi_expand&&t.attr("aria-multiselectable","true")},off:function(){},reflow:function(){}}}(jQuery,window,window.document);