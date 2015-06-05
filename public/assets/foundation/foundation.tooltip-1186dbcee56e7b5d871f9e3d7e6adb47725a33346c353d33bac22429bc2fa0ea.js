!function(t,e){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(t,e){return'<span data-selector="'+t+'" id="'+t+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(t,e,n){Foundation.inherit(this,"random_str"),this.bindings(e,n)},should_show:function(e){var n=t.extend({},this.settings,this.data_options(e));return"all"===n.show_on?!0:this.small()&&"small"===n.show_on?!0:this.medium()&&"medium"===n.show_on?!0:this.large()&&"large"===n.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(e){function n(t,e,n){t.timer||(n?(t.timer=null,o.showTip(e)):t.timer=setTimeout(function(){t.timer=null,o.showTip(e)}.bind(t),o.settings.hover_delay))}function i(t,e){t.timer&&(clearTimeout(t.timer),t.timer=null),o.hide(e)}var o=this,a=o.S;o.create(this.S(e)),t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(e){var s=a(this),r=t.extend({},o.settings,o.data_options(s)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&a(e.target).is("a"))return!1;if(/mouse/i.test(e.type)&&o.ie_touch(e))return!1;if(s.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&e.preventDefault(),o.hide(s);else{if(r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type))return;if(!r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&(e.preventDefault(),a(r.tooltip_class+".open").hide(),l=!0,t(".open["+o.attr_name()+"]").length>0)){var c=a(t(".open["+o.attr_name()+"]")[0]);o.hide(c)}/enter|over/i.test(e.type)?n(this,s):"mouseout"===e.type||"mouseleave"===e.type?i(this,s):n(this,s,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(e){return/mouse/i.test(e.type)&&o.ie_touch(e)?!1:void(("touch"!=t(this).data("tooltip-open-event-type")||"mouseleave"!=e.type)&&("mouse"==t(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(e.type)?o.convert_to_touch(t(this)):i(this,t(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){i(this,a(this))})},ie_touch:function(){return!1},showTip:function(t){var e=this.getTip(t);return this.should_show(t,e)?this.show(t):void 0},getTip:function(e){var n=this.selector(e),i=t.extend({},this.settings,this.data_options(e)),o=null;return n&&(o=this.S('span[data-selector="'+n+'"]'+i.tooltip_class)),"object"==typeof o?o:!1},selector:function(t){var e=t.attr(this.attr_name())||t.attr("data-selector");return"string"!=typeof e&&(e=this.random_str(6),t.attr("data-selector",e).attr("aria-describedby",e)),e},create:function(n){var i=this,o=t.extend({},this.settings,this.data_options(n)),a=this.settings.tip_template;"string"==typeof o.tip_template&&e.hasOwnProperty(o.tip_template)&&(a=e[o.tip_template]);var s=t(a(this.selector(n),t("<div></div>").html(n.attr("title")).html())),r=this.inheritable_classes(n);s.addClass(r).appendTo(o.append_to),Modernizr.touch&&(s.append('<span class="tap-to-close">'+o.touch_close_text+"</span>"),s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){i.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(e,n,i){var o,a,s,r,l;if(n.css("visibility","hidden").show(),o=e.data("width"),a=n.children(".nub"),s=a.outerHeight(),r=a.outerHeight(),n.css(this.small()?{width:"100%"}:{width:o?o:"auto"}),l=function(t,e,n,i,o){return t.css({top:e?e:"auto",bottom:i?i:"auto",left:o?o:"auto",right:n?n:"auto"}).end()},l(n,e.offset().top+e.outerHeight()+10,"auto","auto",e.offset().left),this.small())l(n,e.offset().top+e.outerHeight()+10,"auto","auto",12.5,t(this.scope).width()),n.addClass("tip-override"),l(a,-s,"auto","auto",e.offset().left);else{var c=e.offset().left;Foundation.rtl&&(a.addClass("rtl"),c=e.offset().left+e.outerWidth()-n.outerWidth()),l(n,e.offset().top+e.outerHeight()+10,"auto","auto",c),a.attr("style")&&a.removeAttr("style"),n.removeClass("tip-override"),i&&i.indexOf("tip-top")>-1?(Foundation.rtl&&a.addClass("rtl"),l(n,e.offset().top-n.outerHeight(),"auto","auto",c).removeClass("tip-override")):i&&i.indexOf("tip-left")>-1?(l(n,e.offset().top+e.outerHeight()/2-n.outerHeight()/2,"auto","auto",e.offset().left-n.outerWidth()-s).removeClass("tip-override"),a.removeClass("rtl")):i&&i.indexOf("tip-right")>-1&&(l(n,e.offset().top+e.outerHeight()/2-n.outerHeight()/2,"auto","auto",e.offset().left+e.outerWidth()+s).removeClass("tip-override"),a.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(e){var n=t.extend({},this.settings,this.data_options(e)),i=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),o=e.attr("class"),a=o?t.map(o.split(" "),function(e){return-1!==t.inArray(e,i)?e:void 0}).join(" "):"";return t.trim(a)},convert_to_touch:function(e){var n=this,i=n.getTip(e),o=t.extend({},n.settings,n.data_options(e));0===i.find(".tap-to-close").length&&(i.append('<span class="tap-to-close">'+o.touch_close_text+"</span>"),i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){n.hide(e)})),e.data("tooltip-open-event-type","touch")},show:function(t){var e=this.getTip(t);"touch"==t.data("tooltip-open-event-type")&&this.convert_to_touch(t),this.reposition(t,e,t.attr("class")),t.addClass("open"),e.fadeIn(150)},hide:function(t){var e=this.getTip(t);e.fadeOut(150,function(){e.find(".tap-to-close").remove(),e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),t.removeClass("open")})},off:function(){var e=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){t("["+e.attr_name()+"]").eq(n).attr("title",t(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);