!function(t,e){"function"==typeof define&&define.amd?define("simple-module",["jquery"],function(i){return t.returnExportsGlobal=e(i)}):"object"==typeof exports?module.exports=e(require("jquery")):t.SimpleModule=e(jQuery)}(this,function(t){var e,i=[].slice;return e=function(){function e(e){var i,n,o,s,a,r,l;if(this.opts=t.extend({},this.opts,e),(a=this.constructor)._connectedClasses||(a._connectedClasses=[]),o=function(){var t,e,n,o;for(n=this.constructor._connectedClasses,o=[],t=0,e=n.length;e>t;t++)i=n[t],s=i.pluginName.charAt(0).toLowerCase()+i.pluginName.slice(1),i.prototype._connected&&(i.prototype._module=this),o.push(this[s]=new i);return o}.call(this),this._connected)this.opts=t.extend({},this.opts,this._module.opts);else for(this._init(),r=0,l=o.length;l>r;r++)n=o[r],"function"==typeof n._init&&n._init();this.trigger("initialized")}return e.extend=function(t){var e,i,n;if(null!=t&&"object"==typeof t){for(e in t)i=t[e],"included"!==e&&"extended"!==e&&(this[e]=i);return null!=(n=t.extended)?n.call(this):void 0}},e.include=function(t){var e,i,n;if(null!=t&&"object"==typeof t){for(e in t)i=t[e],"included"!==e&&"extended"!==e&&(this.prototype[e]=i);return null!=(n=t.included)?n.call(this):void 0}},e.connect=function(t){if("function"==typeof t){if(!t.pluginName)throw new Error("Module.connect: cannot connect plugin without pluginName");return t.prototype._connected=!0,this._connectedClasses||(this._connectedClasses=[]),this._connectedClasses.push(t),t.pluginName?this[t.pluginName]=t:void 0}},e.prototype.opts={},e.prototype._init=function(){},e.prototype.on=function(){var e,n;return e=1<=arguments.length?i.call(arguments,0):[],(n=t(this)).on.apply(n,e),this},e.prototype.one=function(){var e,n;return e=1<=arguments.length?i.call(arguments,0):[],(n=t(this)).one.apply(n,e),this},e.prototype.off=function(){var e,n;return e=1<=arguments.length?i.call(arguments,0):[],(n=t(this)).off.apply(n,e),this},e.prototype.trigger=function(){var e,n;return e=1<=arguments.length?i.call(arguments,0):[],(n=t(this)).trigger.apply(n,e),this},e.prototype.triggerHandler=function(){var e,n;return e=1<=arguments.length?i.call(arguments,0):[],(n=t(this)).triggerHandler.apply(n,e)},e.prototype._t=function(){var t,e;return t=1<=arguments.length?i.call(arguments,0):[],(e=this.constructor)._t.apply(e,t)},e._t=function(){var t,e,n,o;return e=arguments[0],t=2<=arguments.length?i.call(arguments,1):[],n=(null!=(o=this.i18n[this.locale])?o[e]:void 0)||"",t.length>0?(n=n.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(e,i,n){return n?i+t[parseInt(n)-1]:i+t.shift()}),n.replace(/%%s/g,"%s")):n},e.i18n={"zh-CN":{}},e.locale="zh-CN",e}()});