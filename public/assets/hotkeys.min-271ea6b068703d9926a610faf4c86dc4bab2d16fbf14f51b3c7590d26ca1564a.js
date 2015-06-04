!function(t,e){"function"==typeof define&&define.amd?define("simple-hotkeys",["jquery","simple-module"],function(i,n){return t.hotkeys=e(i,n)}):"object"==typeof exports?module.exports=e(require("jquery"),require("simplemodule")):(t.simple=t.simple||{},t.simple.hotkeys=e(jQuery,SimpleModule))}(this,function(t,e){var i,n,o=function(t,e){function i(){this.constructor=t}for(var n in e)s.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},s={}.hasOwnProperty;return i=function(e){function i(){return i.__super__.constructor.apply(this,arguments)}return o(i,e),i.count=0,i.keyNameMap={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",91:"Meta",93:"Meta",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"Multiply",107:"Add",109:"Subtract",110:"Decimal",111:"Divide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19",131:"F20",132:"F21",133:"F22",134:"F23",135:"F24",59:";",61:"=",186:";",187:"=",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},i.aliases={escape:"esc","delete":"del","return":"enter",ctrl:"control",space:"spacebar",ins:"insert",cmd:"meta",command:"meta",wins:"meta",windows:"meta"},i.normalize=function(t){var e,i,n,o,s,a;for(s=t.toLowerCase().replace(/\s+/gi,"").split("+"),e=i=0,a=s.length;a>i;e=++i)n=s[e],s[e]=this.aliases[n]||n;return o=s.pop(),s.sort().push(o),s.join("_")},i.prototype.opts={el:document},i.prototype._init=function(){return this.id=++this.constructor.count,this._map={},this._delegate="string"==typeof this.opts.el?document:this.opts.el,t(this._delegate).on("keydown.simple-hotkeys-"+this.id,this.opts.el,function(t){return function(e){var i;return null!=(i=t._getHander(e))?i.call(t,e):void 0}}(this))},i.prototype._getHander=function(t){var e,i;return(e=this.constructor.keyNameMap[t.which])?(i="",t.altKey&&(i+="alt_"),t.ctrlKey&&(i+="control_"),t.metaKey&&(i+="meta_"),t.shiftKey&&(i+="shift_"),i+=e.toLowerCase(),this._map[i]):void 0},i.prototype.respondTo=function(t){return"string"==typeof t?null!=this._map[this.constructor.normalize(t)]:null!=this._getHander(t)},i.prototype.add=function(t,e){return this._map[this.constructor.normalize(t)]=e,this},i.prototype.remove=function(t){return delete this._map[this.constructor.normalize(t)],this},i.prototype.destroy=function(){return t(this._delegate).off(".simple-hotkeys-"+this.id),this._map={},this},i}(e),n=function(t){return new i(t)}});