/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.2.0",n.prototype.close=function(e){function i(){s.detach().trigger("closed.bs.alert").remove()}var n=t(this),o=n.attr("data-target");o||(o=n.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var s=t(o);e&&e.preventDefault(),s.length||(s=n.hasClass("alert")?n:n.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(150):i())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery);