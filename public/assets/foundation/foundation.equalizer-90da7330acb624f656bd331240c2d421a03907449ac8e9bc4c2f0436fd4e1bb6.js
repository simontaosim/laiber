!function(e,t){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.2",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(t){var n,i,o=!1,a=t.data("equalizer"),s=t.data(this.attr_name(!0)+"-init")||this.settings;if(n=t.find(s.act_on_hidden_el?a?"["+this.attr_name()+'-watch="'+a+'"]':"["+this.attr_name()+"-watch]":a?"["+this.attr_name()+'-watch="'+a+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==n.length&&(s.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),n.height("inherit"),s.equalize_on_stack!==!1||(i=n.first().offset().top,n.each(function(){return e(this).offset().top!==i?(o=!0,!1):void 0}),!o))){var r=n.map(function(){return e(this).outerHeight(!1)}).get();if(s.use_tallest){var l=Math.max.apply(null,r);n.css("height",l)}else{var c=Math.min.apply(null,r);n.css("height",c)}s.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this),i=n.data("equalizer-mq"),o=!0;i&&(i="is_"+i.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(i)&&(o=!1)),t.image_loaded(t.S("img",this),function(){if(o||Foundation.utils[i]())t.equalize(n);else{var e=n.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}}(jQuery,window,window.document);