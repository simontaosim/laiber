!function(e,t){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.2",settings:{start:0,end:100,step:1,precision:null,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n),this.reflow()},events:function(){var n=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){n.cache.active||(t.preventDefault(),n.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(i){if(n.cache.active)if(i.preventDefault(),e.data(n.cache.active[0],"settings").vertical){var o=0;i.pageY||(o=t.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(i,"y")+o)}else n.calculate_position(n.cache.active,n.get_cursor_position(i,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(){n.remove_active_slider()}).on("change.fndtn.slider",function(){n.settings.on_change()}),n.S(t).on("resize.fndtn.slider",n.throttle(function(){n.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var t=e(this),i=t.children(".range-slider-handle")[0],o=n.initialize_settings(i);""!=o.display_selector&&e(o.display_selector).each(function(){this.hasOwnProperty("value")&&e(this).change(function(){t.foundation("slider","set_value",e(this).val())})})})},get_cursor_position:function(e,t){var n,i="page"+t.toUpperCase(),o="client"+t.toUpperCase();return"undefined"!=typeof e[i]?n=e[i]:"undefined"!=typeof e.originalEvent[o]?n=e.originalEvent[o]:e.originalEvent.touches&&e.originalEvent.touches[0]&&"undefined"!=typeof e.originalEvent.touches[0][o]?n=e.originalEvent.touches[0][o]:e.currentPoint&&"undefined"!=typeof e.currentPoint[t]&&(n=e.currentPoint[t]),n},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,n){var i=this,o=e.data(t[0],"settings"),a=(e.data(t[0],"handle_l"),e.data(t[0],"handle_o"),e.data(t[0],"bar_l")),s=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;e=Foundation.rtl&&!o.vertical?i.limit_to((s+a-n)/a,0,1):i.limit_to((n-s)/a,0,1),e=o.vertical?1-e:e;var r=i.normalized_value(e,o.start,o.end,o.step,o.precision);i.set_ui(t,r)})},set_ui:function(t,n){var i=e.data(t[0],"settings"),o=e.data(t[0],"handle_l"),a=e.data(t[0],"bar_l"),s=this.normalized_percentage(n,i.start,i.end),r=s*(a-o)-1,l=100*s,c=t.parent(),d=t.parent().children("input[type=hidden]");Foundation.rtl&&!i.vertical&&(r=-r),r=i.vertical?-r+a-o+1:r,this.set_translate(t,r,i.vertical),i.vertical?t.siblings(".range-slider-active-segment").css("height",l+"%"):t.siblings(".range-slider-active-segment").css("width",l+"%"),c.attr(this.attr_name(),n).trigger("change.fndtn.slider"),d.val(n),i.trigger_input_change&&d.trigger("change.fndtn.slider"),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":i.start,"aria-valuemax":i.end}),t.attr("aria-valuenow",n),""!=i.display_selector&&e(i.display_selector).each(function(){this.hasAttribute("value")?e(this).val(n):e(this).text(n)})},normalized_percentage:function(e,t,n){return Math.min(1,(e-t)/(n-t))},normalized_value:function(e,t,n,i,o){var a=n-t,s=e*a,r=(s-s%i)/i,l=s%i,c=l>=.5*i?i:0;return(r*i+c+t).toFixed(o)},set_translate:function(t,n,i){i?e(t).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):e(t).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(e,t,n){return Math.min(Math.max(e,t),n)},initialize_settings:function(t){var n,i=e.extend({},this.settings,this.data_options(e(t).parent()));return null===i.precision&&(n=(""+i.step).match(/\.([\d]*)/),i.precision=n&&n[1]?n[1].length:0),i.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",i)},set_initial_position:function(t){var n=e.data(t.children(".range-slider-handle")[0],"settings"),i="number"!=typeof n.initial||isNaN(n.initial)?Math.floor(.5*(n.end-n.start)/n.step)*n.step+n.start:n.initial,o=t.children(".range-slider-handle");this.set_ui(o,i)},set_value:function(t){var n=this;e("["+n.attr_name()+"]",this.scope).each(function(){e(this).attr(n.attr_name(),t)}),e(this.scope).attr(n.attr_name())&&e(this.scope).attr(n.attr_name(),t),n.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var n=e(this).children(".range-slider-handle")[0],i=e(this).attr(t.attr_name());t.initialize_settings(n),i?t.set_ui(e(n),parseFloat(i)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document);