!function(a,b){"function"==typeof define&&define.amd?define("simple-hotkeys",["jquery","simple-module"],function(c,d){return a.hotkeys=b(c,d)}):"object"==typeof exports?module.exports=b(require("jquery"),require("simplemodule")):(a.simple=a.simple||{},a.simple.hotkeys=b(jQuery,SimpleModule))}(this,function(a,b){var c,d,e=function(a,b){function c(){this.constructor=a}for(var d in b)f.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},f={}.hasOwnProperty;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return e(c,b),c.count=0,c.keyNameMap={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",91:"Meta",93:"Meta",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"Multiply",107:"Add",109:"Subtract",110:"Decimal",111:"Divide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19",131:"F20",132:"F21",133:"F22",134:"F23",135:"F24",59:";",61:"=",186:";",187:"=",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},c.aliases={escape:"esc","delete":"del","return":"enter",ctrl:"control",space:"spacebar",ins:"insert",cmd:"meta",command:"meta",wins:"meta",windows:"meta"},c.normalize=function(a){var b,c,d,e,f,g;for(f=a.toLowerCase().replace(/\s+/gi,"").split("+"),b=c=0,g=f.length;g>c;b=++c)d=f[b],f[b]=this.aliases[d]||d;return e=f.pop(),f.sort().push(e),f.join("_")},c.prototype.opts={el:document},c.prototype._init=function(){return this.id=++this.constructor.count,this._map={},this._delegate="string"==typeof this.opts.el?document:this.opts.el,a(this._delegate).on("keydown.simple-hotkeys-"+this.id,this.opts.el,function(a){return function(b){var c;return null!=(c=a._getHander(b))?c.call(a,b):void 0}}(this))},c.prototype._getHander=function(a){var b,c;if(b=this.constructor.keyNameMap[a.which])return c="",a.altKey&&(c+="alt_"),a.ctrlKey&&(c+="control_"),a.metaKey&&(c+="meta_"),a.shiftKey&&(c+="shift_"),c+=b.toLowerCase(),this._map[c]},c.prototype.respondTo=function(a){return"string"==typeof a?null!=this._map[this.constructor.normalize(a)]:null!=this._getHander(a)},c.prototype.add=function(a,b){return this._map[this.constructor.normalize(a)]=b,this},c.prototype.remove=function(a){return delete this._map[this.constructor.normalize(a)],this},c.prototype.destroy=function(){return a(this._delegate).off(".simple-hotkeys-"+this.id),this._map={},this},c}(b),d=function(a){return new c(a)}});
