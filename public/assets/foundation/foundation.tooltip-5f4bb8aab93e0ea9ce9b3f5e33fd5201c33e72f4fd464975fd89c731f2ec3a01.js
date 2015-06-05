!function(e,t){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t){var n=e.extend({},this.settings,this.data_options(t));return"all"===n.show_on?!0:this.small()&&"small"===n.show_on?!0:this.medium()&&"medium"===n.show_on?!0:this.large()&&"large"===n.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){function n(e,t,n){e.timer||(n?(e.timer=null,o.showTip(t)):e.timer=setTimeout(function(){e.timer=null,o.showTip(t)}.bind(e),o.settings.hover_delay))}function i(e,t){e.timer&&(clearTimeout(e.timer),e.timer=null),o.hide(t)}var o=this,a=o.S;o.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var s=a(this),r=e.extend({},o.settings,o.data_options(s)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&a(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&o.ie_touch(t))return!1;if(s.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),o.hide(s);else{if(r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;if(!r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),a(r.tooltip_class+".open").hide(),l=!0,e(".open["+o.attr_name()+"]").length>0)){var c=a(e(".open["+o.attr_name()+"]")[0]);o.hide(c)}/enter|over/i.test(t.type)?n(this,s):"mouseout"===t.type||"mouseleave"===t.type?i(this,s):n(this,s,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){return/mouse/i.test(t.type)&&o.ie_touch(t)?!1:void(("touch"!=e(this).data("tooltip-open-event-type")||"mouseleave"!=t.type)&&("mouse"==e(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(t.type)?o.convert_to_touch(e(this)):i(this,e(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){i(this,a(this))})},ie_touch:function(){return!1},showTip:function(e){var t=this.getTip(e);return this.should_show(e,t)?this.show(e):void 0},getTip:function(t){var n=this.selector(t),i=e.extend({},this.settings,this.data_options(t)),o=null;return n&&(o=this.S('span[data-selector="'+n+'"]'+i.tooltip_class)),"object"==typeof o?o:!1},selector:function(e){var t=e.attr(this.attr_name())||e.attr("data-selector");return"string"!=typeof t&&(t=this.random_str(6),e.attr("data-selector",t).attr("aria-describedby",t)),t},create:function(n){var i=this,o=e.extend({},this.settings,this.data_options(n)),a=this.settings.tip_template;"string"==typeof o.tip_template&&t.hasOwnProperty(o.tip_template)&&(a=t[o.tip_template]);var s=e(a(this.selector(n),e("<div></div>").html(n.attr("title")).html())),r=this.inheritable_classes(n);s.addClass(r).appendTo(o.append_to),Modernizr.touch&&(s.append('<span class="tap-to-close">'+o.touch_close_text+"</span>"),s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){i.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,i){var o,a,s,r,l;if(n.css("visibility","hidden").show(),o=t.data("width"),a=n.children(".nub"),s=a.outerHeight(),r=a.outerHeight(),n.css(this.small()?{width:"100%"}:{width:o?o:"auto"}),l=function(e,t,n,i,o){return e.css({top:t?t:"auto",bottom:i?i:"auto",left:o?o:"auto",right:n?n:"auto"}).end()},l(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left),this.small())l(n,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),l(a,-s,"auto","auto",t.offset().left);else{var c=t.offset().left;Foundation.rtl&&(a.addClass("rtl"),c=t.offset().left+t.outerWidth()-n.outerWidth()),l(n,t.offset().top+t.outerHeight()+10,"auto","auto",c),a.attr("style")&&a.removeAttr("style"),n.removeClass("tip-override"),i&&i.indexOf("tip-top")>-1?(Foundation.rtl&&a.addClass("rtl"),l(n,t.offset().top-n.outerHeight(),"auto","auto",c).removeClass("tip-override")):i&&i.indexOf("tip-left")>-1?(l(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left-n.outerWidth()-s).removeClass("tip-override"),a.removeClass("rtl")):i&&i.indexOf("tip-right")>-1&&(l(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+s).removeClass("tip-override"),a.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),i=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),o=t.attr("class"),a=o?e.map(o.split(" "),function(t){return-1!==e.inArray(t,i)?t:void 0}).join(" "):"";return e.trim(a)},convert_to_touch:function(t){var n=this,i=n.getTip(t),o=e.extend({},n.settings,n.data_options(t));0===i.find(".tap-to-close").length&&(i.append('<span class="tap-to-close">'+o.touch_close_text+"</span>"),i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);"touch"==e.data("tooltip-open-event-type")&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);