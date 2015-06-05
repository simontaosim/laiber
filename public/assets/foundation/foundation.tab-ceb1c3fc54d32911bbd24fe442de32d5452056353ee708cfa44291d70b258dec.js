!function(e,t,n,i){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.2",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,n,i){var o=this,a=this.S;a("["+this.attr_name()+"] > .active > a",this.scope).each(function(){o.default_tab_hashes.push(this.hash)}),o.entry_location=t.location.href,this.bindings(n,i),this.handle_location_hash_change()},events:function(){var e=this,n=this.S,i=function(t,i){var o=n(i).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");(!o.is_hover||Modernizr.touch)&&(t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(i).parent()))};n(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=this,n=e.keyCode||e.which;9==n&&(e.preventDefault(),i(e,t))}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=this;i(e,t)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var t=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");t.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var o=n(this).data(t.attr_name(!0)+"-init");if(o.deep_linking){var a;if(a=o.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=a){var s=n(a);if(s.hasClass("content")&&s.parent().hasClass("tabs-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+a+"]").parent());else{var r=s.closest(".content").attr("id");r!=i&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+r+"]").parent(),a)}}else for(var l=0;l<t.default_tab_hashes.length;l++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(o,a){var s=this,r=s.S,l=o.closest("["+this.attr_name()+"]"),c=o.find("a"),d=o.children("a").first(),u="#"+d.attr("href").split("#")[1],h=r(u),f=o.siblings(),p=l.data(this.attr_name(!0)+"-init"),m=function(t){var i,o=e(this),a=e(this).parents("li").prev().children('[role="tab"]'),s=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:i=a;break;case 39:i=s;break;default:i=!1}i.length&&(o.attr({tabindex:"-1","aria-selected":null}),i.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},g=function(e){var n=t.location.href===s.entry_location,i=p.scroll_to_content?s.default_tab_hashes[0]:n?t.location.hash:"fndtn-"+s.default_tab_hashes[0].replace("#","");n&&e===i||(t.location.hash=e)};d.data("tab-content")&&(u="#"+d.data("tab-content").split("#")[1],h=r(u)),p.deep_linking&&(p.scroll_to_content?(g(a||u),a==i||a==u?o.parent()[0].scrollIntoView():r(u)[0].scrollIntoView()):g(a!=i?"fndtn-"+a.replace("#",""):"fndtn-"+u.replace("#",""))),o.addClass(p.active_class).triggerHandler("opened"),c.attr({"aria-selected":"true",tabindex:0}),f.removeClass(p.active_class),f.find("a").attr({"aria-selected":"false",tabindex:-1}),h.siblings().removeClass(p.active_class).attr({"aria-hidden":"true",tabindex:-1}),h.addClass(p.active_class).attr("aria-hidden","false").removeAttr("tabindex"),p.callback(o),h.triggerHandler("toggled",[h]),l.triggerHandler("toggled",[o]),c.off("keydown").on("keydown",m)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document);