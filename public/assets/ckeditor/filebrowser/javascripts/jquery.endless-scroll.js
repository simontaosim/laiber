<<<<<<< HEAD
/**
 * Author: Sergey Kukunin
 * See: https://github.com/Kukunin/jquery-endless-scroll
 */

(function($) {
	'use strict';

	// Is pushState supported by this browser?
	$.support.pushState =
		window.history && window.history.pushState && window.history.replaceState &&
		// pushState isn't reliable on iOS until 5.
		!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)

	//Declaration of modules
	var scrollModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				scrollContainer: window,
				scrollPadding: 100,
				scrollEventDelay: 300
			}, options);
			this.options = obj.options;
			this.container = obj.container;
			obj.scrollModule = this;

			this._toplock = true;
			this._bottomlock = true;

			this.scrollContainer = $(this.options.scrollContainer);

			this.updateEntities();
			this.sortMarkers();

			this.currentPage = null;

			this.container.on("jes:afterPageLoad", $.proxy(function(event, url, placement) {
				this.updateEntities();
				this.sortMarkers();
				this.checkMarker();

				if ( placement == "top" ) {
					//Get offset between first and second pages
					var offset = this.markers[1].top,
						scrollTop = this.scrollContainer.scrollTop();

					this.scrollContainer.scrollTop(scrollTop + offset);
				}
			}, this));

			this.bind();
		},
		updateEntities: function() {
			this.entities = $(this.options.entity, this.container);
		},
		sortMarkers: function() {
			var markers = [];
			$(".jes-marker", this.container).each(function() {
				markers.push({ top: $(this).position().top, url: $(this).data("jesUrl") });
			});
			this.markers = markers;
		},
		//Check, whether user scrolled to another page
		checkMarker: function() {
			var newPage = this.markers[0],
				scrollTop = this.scrollContainer.scrollTop();

			//Determine, what is current page
			for ( var i = 1; i < this.markers.length; i++ ) {
				if ( scrollTop > this.markers[i].top ) {
					newPage = this.markers[i];
				} else {
					break;
				}
			}
			if ( newPage.url != this.currentPage ) {
				this.currentPage = newPage.url;
				$(this.container).trigger("jes:scrollToPage", newPage.url);
			}
		},
		bind: function() {
			this.scrollContainer.on("scroll.jes", $.proxy(function(event) {
				if ( this._tId ) { return; }

				this.scrollHandler(event);
				//Clean up mark
				this._tId= setTimeout($.proxy(function(){
					this._tId = null;
				},this), this.options.scrollEventDelay);

			}, this));
		},
		unbind: function() {
			$(this.options.scrollContainer).off("scroll.jes");
		},
		scrollHandler: function(ev) {
			var $scrollable = this.scrollContainer,
				$entities = this.entities,
				$firstEntity = $entities.first(),
				$lastEntity = $entities.last();

			var scrollTop = $scrollable.scrollTop(),
				height = $scrollable.height(),
				scrollBottom = scrollTop + height;

			var topEntityPosition = $firstEntity.position().top,
				topTarget = topEntityPosition + this.options.scrollPadding,
				bottomEntityPosition = $lastEntity.outerHeight() + $lastEntity.position().top,
				bottomTarget = bottomEntityPosition - this.options.scrollPadding;

			//Don't trigger event again, if already fired
			//Visitor have to leave the area and get back to fire event again
			//Process top threshold
			if ( scrollTop < topTarget ) {
				if ( !this._toplock ) {
					$(this.container).trigger("jes:topThreshold");
					this._toplock = true;
				}
			} else {
				this._toplock = false;
			}

			//Process bottom threshold
			if ( scrollBottom > bottomTarget ) {
				if ( !this._bottomlock ) {
					$(this.container).trigger("jes:bottomThreshold");
					this._bottomlock = true;
				}
			} else {
				this._bottomlock = false;
			}

			this.checkMarker();
		}
	}

	var ajaxModule = {
		init: function(options, obj) {
			obj.options = $.extend({
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			//markers
			this.setMarker($(this.options.entity, this.container).first(), location.href);

			obj.ajaxModule = this;
		},
		loadPage: function(url, placement, callback) {
			//The hash with methods list
			//depends from placement
			var actions = {
					top: {
						find: 'first',
						inject: 'insertBefore'
					},
					bottom: {
						find: 'last',
						inject: 'insertAfter'
					}
				},
				action = actions[placement];

			this.container.trigger("jes:beforePageLoad", [url, placement]);

			//Make AJAX query
			$.get(url, null, $.proxy(function (_data) {
				var data = $("<div>").html(_data),
				containerSelector = this.options.container,
				container = $(containerSelector, data).first();

				if ( container.length ) {
					//Find entities
					var entities = container.find(this.options.entity);

					if ( placement == "bottom" ) {
						//Remove duplicated (staled) entities from page
						entities.each(function(i) {
							var id = $(this).attr("id");
							if ( id ) {
								$('#' + id, this.container).remove();
							}
						});
					}

					//Find the cursor
					var cursor = $(this.options.entity, containerSelector)[action.find]();

					//Find and insert entities
					entities[action.inject](cursor);
					this.setMarker(entities.first(), url);
				}

				if ( $.isFunction(callback) ) {
					callback(data);
				}
				this.container.trigger("jes:afterPageLoad", [url, placement, data, entities]);
			}, this), 'html');
		},
		setMarker: function(entity, url) {
			entity.addClass("jes-marker").data("jesUrl", url);
		}
	}

	var navigationModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				nextPage: ".pagination a[rel=next]",
				previousPage: ".pagination a[rel=previous]"
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			$.each([{
				selector: this.options.nextPage,
				event: "jes:bottomThreshold.navigation",
				placement: 'bottom'
			}, {
				selector: this.options.previousPage,
				event: "jes:topThreshold.navigation",
				placement: 'top'
			}], $.proxy(function(i, v) {
				v.element = $(v.selector);
				if ( v.element.length ) {
					var url = v.element.prop("href"),
					lock = false;

					var handler = function() {
						//this object is container
						if ( lock || !url ) return;

						lock = true;
						obj.ajaxModule.loadPage(url, v.placement, $.proxy(function( data ) {
							//Search new next link
							var newElement = $(v.selector, $(data));
							if ( newElement.length ) {
								//Update URL and remove lock
								lock = false;
								url = newElement.prop("href");
								v.element.attr("href", url);
							} else {
								//Remove event at all
								$(this).off(v.event);
								v.element.remove();
							}
						}, this));
					};

					$(this.container).on(v.event, handler);
					$(v.element).on("click", $.proxy(function(ev) {
						ev.preventDefault();
						handler.apply(this.container)
					}, this));
				}
			},this));
		}
	}

	var pushStateHistory = {
		init: function(options, obj) {
			if ( !$.support.pushState ) {
				return;
			}

			obj.container.on("jes:scrollToPage", function(event, url) {
				history.replaceState({}, null, url);
			});
		}
	}

	$.endlessScroll = function(options) {

		//Initialize modules
		this.options = $.extend(true, {
			container: "#container",
			entity: ".entity",
			_modules: [ ajaxModule, scrollModule, navigationModule, pushStateHistory ],
			modules: []
		}, options);

		this.container = $(this.options.container);
		if ( !this.container.length ) {
			throw "Container for endless scroll isn't available on the page";
			return;
		}


		//Merge custom options with default
		$.merge(this.options.modules, this.options._modules);
		//Init modules
		this.options.modules.forEach($.proxy(function(module) {
			module.init(this.options, this);
		},this));


		return this;
	}

})(jQuery);
=======
!function(t){"use strict";t.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var e={init:function(e,n){n.options=t.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},e),this.options=n.options,this.container=n.container,n.scrollModule=this,this._toplock=!0,this._bottomlock=!0,this.scrollContainer=t(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",t.proxy(function(t,e,n){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==n){var i=this.markers[1].top,o=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(o+i)}},this)),this.bind()},updateEntities:function(){this.entities=t(this.options.entity,this.container)},sortMarkers:function(){var e=[];t(".jes-marker",this.container).each(function(){e.push({top:t(this).position().top,url:t(this).data("jesUrl")})}),this.markers=e},checkMarker:function(){for(var e=this.markers[0],n=this.scrollContainer.scrollTop(),i=1;i<this.markers.length&&n>this.markers[i].top;i++)e=this.markers[i];e.url!=this.currentPage&&(this.currentPage=e.url,t(this.container).trigger("jes:scrollToPage",e.url))},bind:function(){this.scrollContainer.on("scroll.jes",t.proxy(function(e){this._tId||(this.scrollHandler(e),this._tId=setTimeout(t.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){t(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var e=this.scrollContainer,n=this.entities,i=n.first(),o=n.last(),a=e.scrollTop(),r=e.height(),s=a+r,l=i.position().top,c=l+this.options.scrollPadding,u=o.outerHeight()+o.position().top,d=u-this.options.scrollPadding;c>a?this._toplock||(t(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,s>d?this._bottomlock||(t(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},n={init:function(e,n){n.options=t.extend({},e),this.options=n.options,this.container=n.container,this.setMarker(t(this.options.entity,this.container).first(),location.href),n.ajaxModule=this},loadPage:function(e,n,i){var o={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}},a=o[n];this.container.trigger("jes:beforePageLoad",[e,n]),t.get(e,null,t.proxy(function(o){var r=t("<div>").html(o),s=this.options.container,l=t(s,r).first();if(l.length){var c=l.find(this.options.entity);"bottom"==n&&c.each(function(){var e=t(this).attr("id");e&&t("#"+e,this.container).remove()});var u=t(this.options.entity,s)[a.find]();c[a.inject](u),this.setMarker(c.first(),e)}t.isFunction(i)&&i(r),this.container.trigger("jes:afterPageLoad",[e,n,r,c])},this),"html")},setMarker:function(t,e){t.addClass("jes-marker").data("jesUrl",e)}},i={init:function(e,n){n.options=t.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},e),this.options=n.options,this.container=n.container,t.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],t.proxy(function(e,i){if(i.element=t(i.selector),i.element.length){var o=i.element.prop("href"),a=!1,r=function(){!a&&o&&(a=!0,n.ajaxModule.loadPage(o,i.placement,t.proxy(function(e){var n=t(i.selector,t(e));n.length?(a=!1,o=n.prop("href"),i.element.attr("href",o)):(t(this).off(i.event),i.element.remove())},this)))};t(this.container).on(i.event,r),t(i.element).on("click",t.proxy(function(t){t.preventDefault(),r.apply(this.container)},this))}},this))}},o={init:function(e,n){t.support.pushState&&n.container.on("jes:scrollToPage",function(t,e){history.replaceState({},null,e)})}};t.endlessScroll=function(a){if(this.options=t.extend(!0,{container:"#container",entity:".entity",_modules:[n,e,i,o],modules:[]},a),this.container=t(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return t.merge(this.options.modules,this.options._modules),this.options.modules.forEach(t.proxy(function(t){t.init(this.options,this)},this)),this}}(jQuery);
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
