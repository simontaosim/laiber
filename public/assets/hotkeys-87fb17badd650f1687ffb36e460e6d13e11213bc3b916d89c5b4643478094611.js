!function(t,e){"function"==typeof define&&define.amd?define("simple-hotkeys",["jquery","simple-module"],function(n,i){return t.hotkeys=e(n,i)}):"object"==typeof exports?module.exports=e(require("jquery"),require("simplemodule")):(t.simple=t.simple||{},t.simple.hotkeys=e(jQuery,SimpleModule))}(this,function(t,e){var n,i,o=function(t,e){function n(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;return n=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return o(n,e),n.count=0,n.keyNameMap={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",91:"Meta",93:"Meta",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"Multiply",107:"Add",109:"Subtract",110:"Decimal",111:"Divide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19",131:"F20",132:"F21",133:"F22",134:"F23",135:"F24",59:";",61:"=",186:";",187:"=",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},n.aliases={escape:"esc","delete":"del","return":"enter",ctrl:"control",space:"spacebar",ins:"insert",cmd:"meta",command:"meta",wins:"meta",windows:"meta"},n.normalize=function(t){var e,n,i,o,s,a;for(s=t.toLowerCase().replace(/\s+/gi,"").split("+"),e=n=0,a=s.length;a>n;e=++n)i=s[e],s[e]=this.aliases[i]||i;return o=s.pop(),s.sort().push(o),s.join("_")},n.prototype.opts={el:document},n.prototype._init=function(){return this.id=++this.constructor.count,this._map={},this._delegate="string"==typeof this.opts.el?document:this.opts.el,t(this._delegate).on("keydown.simple-hotkeys-"+this.id,this.opts.el,function(t){return function(e){var n;return null!=(n=t._getHander(e))?n.call(t,e):void 0}}(this))},n.prototype._getHander=function(t){var e,n;if(e=this.constructor.keyNameMap[t.which])return n="",t.altKey&&(n+="alt_"),t.ctrlKey&&(n+="control_"),t.metaKey&&(n+="meta_"),t.shiftKey&&(n+="shift_"),n+=e.toLowerCase(),this._map[n]},n.prototype.respondTo=function(t){return"string"==typeof t?null!=this._map[this.constructor.normalize(t)]:null!=this._getHander(t)},n.prototype.add=function(t,e){return this._map[this.constructor.normalize(t)]=e,this},n.prototype.remove=function(t){return delete this._map[this.constructor.normalize(t)],this},n.prototype.destroy=function(){return t(this._delegate).off(".simple-hotkeys-"+this.id),this._map={},this},n}(e),i=function(t){return new n(t)}});