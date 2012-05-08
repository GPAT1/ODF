// ODF: CONVINCE - PLUGINS 
// ========================

// Last Updated: 08.05.2012 15:06 by Laurent LANG


// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


// Contents:
// ---------

// 1. jQuery Easing 1.3
// 2. QueryLoader 2.2
// 3. jQuery.ScrollTo 1.4.2
// 4. Scrollorama
// 5. Scrolldeck
// 6. jQuery Waypoints 1.1.6
// 7. ScrollToFixed
// 8. jQuery Path
// 9. 


// ====================================================================================

// 1. jQuery Easing 1.3

// http://gsgd.co.uk/sandbox/jquery/easing/


// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

// ====================================================================================

// 2. QueryLoader 2.2

// http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/

(function($) {


    if (!Array.prototype.indexOf)
	   {
	   Array.prototype.indexOf = function(elt /*, from*/)
             {
             var len  = this.length >>> 0;
             var from = Number(arguments[1]) || 0;
                 from = (from < 0)
                      ? Math.ceil(from)
                      : Math.floor(from);
             if (from < 0)
                 from += len;
 
                 for (; from < len; from++)
                     {
                     if (from in this &&
                     this[from] === elt)
                     return from;
                     }
             return -1;
             };
       }


    var qLimages = new Array;
    var qLdone = 0;
    var qLdestroyed = false;

    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;

    var qLoptions = {
        onComplete: function () {},
        backgroundColor: "#000",
        barColor: "#fff",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function () {
            if (qLoptions.completeAnimation == "grow") {
                var animationTime = 500;
                var currentTime = new Date();
                if ((currentTime.getTime() - qLstart) < qLoptions.minimumTime) {
                    animationTime = (qLoptions.minimumTime - (currentTime.getTime() - qLstart));
                }

                $(qLbar).stop().animate({
                    "width": "100%"
                }, animationTime, function () {
                    $(this).animate({
                        top: "0%",
                        width: "100%",
                        height: "100%"
                    }, 500, function () {
                        $(qLoverlay).fadeOut(500, function () {
                            $(this).remove();
                            qLoptions.onComplete();
                        })
                    });
                });
            } else {
                $(qLoverlay).fadeOut(500, function () {
                    $(qLoverlay).remove();
                    qLoptions.onComplete();
                });
            }
        }
    };

    var afterEach = function () {
        //start timer
        var currentTime = new Date();
        qLstart = currentTime.getTime();

        createPreloadContainer();
        createOverlayLoader();
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var i = 0; qLimages.length > i; i++) {
            $.ajax({
                url: qLimages[i],
                type: 'HEAD',
                success: function(data) {
                    if(!qLdestroyed){
                        qLimageCounter++;
                        addImageForPreload(this['url']);
                    }
                }
            });
        }
    };

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).bind("load", function () {
            completeImageLoading();
        }).appendTo(qLimageContainer);
    };

    var completeImageLoading = function () {
        qLdone++;

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
            width: percentage + "%",
            minWidth: percentage + "%"
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    };

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        qLoptions.onLoadComplete();
        qLdestroyed = true;
    };

    var createOverlayLoader = function () {
        qLoverlay = $("<div id='qLoverlay'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: qLoptions.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
        qLbar = $("<div id='qLbar'></div>").css({
            height: qLoptions.barHeight + "px",
            marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            backgroundColor: qLoptions.barColor,
            width: "0%",
            position: "absolute",
            top: "50%"
        }).appendTo(qLoverlay);
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "3em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + qLoptions.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: qLoptions.barColor
            }).appendTo(qLoverlay);
        }
    };

    var findImageInElement = function (element) {
        var url = "";

        if ($(element).css("background-image") != "none") {
            var url = $(element).css("background-image");
        } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = $(element).attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);
                    }
                    qLimages.push(urls[i] + extra);
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach();

        return this;
    };

})(jQuery);

// ====================================================================================

// 3. jQuery.ScrollTo 1.4.2

// http://flesler.blogspot.com/2007/10/jqueryscrollto.html

;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

// ====================================================================================

// 4. Scrollorama

// http://johnpolacek.github.com/scrollorama/

(function($) {
    $.scrollorama = function(options) {
		var scrollorama = this,
			blocks = [],
			browserPrefix = '',
			onBlockChange = function() {},
			latestKnownScrollY = 0,
            ticking = false,
            requestAnimFrame =	window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame    ||
								window.oRequestAnimationFrame      ||
								window.msRequestAnimationFrame     ||
								function( callback ){
									window.setTimeout(callback, 1000 / 60);
								},
			defaults = {offset:0, enablePin: true};
		
		scrollorama.settings = $.extend({}, defaults, options);
		scrollorama.blockIndex = 0;
		
		if (options.blocks === undefined) { alert('ERROR: Must assign blocks class selector to scrollorama plugin'); }
		
		// PRIVATE FUNCTIONS
		function init() {
			var i, block, didScroll = false;
			if (typeof scrollorama.settings.blocks === 'string') { scrollorama.settings.blocks = $(scrollorama.settings.blocks); }
			
			// set browser prefix
			if ($.browser.mozilla) { browserPrefix = '-moz-'; }
			if ($.browser.webkit) { browserPrefix = '-webkit-'; }
			if ($.browser.opera) { browserPrefix = '-o-'; }
			if ($.browser.msie) { browserPrefix = '-ms-'; }
			
			// create blocks array to contain animation props
			$('body').css('position','relative');
			for (i=0; i<scrollorama.settings.blocks.length; i++) {
				block = scrollorama.settings.blocks.eq(i);
				blocks.push({
					block: block,
					top: block.offset().top - parseInt(block.css('margin-top'), 10),
					pin: 0,
					animations:[]
				});
			}
			
			// convert block elements to absolute position
			if (scrollorama.settings.enablePin.toString() === 'true') {
				for (i=0; i<blocks.length; i++) {
					blocks[i].block
						.css('position', 'absolute')
						.css('top', blocks[i].top);
				}
			}
			
			$('body').prepend('<div id="scroll-wrap"></div>');
			
			latestKnownScrollY = 0;
            ticking = false;
            $(window).scroll( onScroll );
		}

		function onScroll() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        }
        
        function requestTick() {
            if(!ticking) {
                requestAnimFrame(function(){
                    onScrollorama();
                    update();
                });
            }
            ticking = true;
        }
        
        function update() {
            // reset the tick so we can
            // capture the next onScroll
            ticking = false;
        }
		
		function onScrollorama() {
			var scrollTop = $(window).scrollTop(),
			currBlockIndex = getCurrBlockIndex(scrollTop),
			i, j, anim, startAnimPos, endAnimPos, animPercent, animVal;
			
			// update all animations
			for (i=0; i<blocks.length; i++) {
				
				// go through the animations for each block
				if (blocks[i].animations.length) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						
						// if above current block, settings should be at start value
						if (i > currBlockIndex) {
							if (currBlockIndex !== i-1 && anim.baseline !== 'bottom') {
								setProperty(anim.element, anim.property, anim.startVal);
							}
							if (blocks[i].pin) {
								blocks[i].block
								.css('position', 'absolute')
								.css('top', blocks[i].top);
							}
						}
						
						// if below current block, settings should be at end value
						// unless on an element that gets animated when it hits the bottom of the viewport
						else if (i < currBlockIndex) {
							setProperty(anim.element, anim.property, anim.endVal);
							if (blocks[i].pin) {
								blocks[i].block
                                    .css('position', 'absolute')
                                    .css('top', (blocks[i].top + blocks[i].pin));
							}
						}
						
						// otherwise, set values per scroll position
						if (i === currBlockIndex || (currBlockIndex === i-1 && anim.baseline === 'bottom')) {
							// if block gets pinned, set position fixed
							if (blocks[i].pin && currBlockIndex === i) {
								blocks[i].block
                                    .css('position', 'fixed')
                                    .css('top', 0);
							}
							
							// set start and end animation positions
							startAnimPos = blocks[i].top + anim.delay;
							if (anim.baseline === 'bottom') { startAnimPos -= $(window).height(); }
							endAnimPos = startAnimPos + anim.duration;
							
							// if scroll is before start of animation, set to start value
							if (scrollTop < startAnimPos) {
								setProperty(anim.element, anim.property, anim.startVal);
							}
							
							// if scroll is after end of animation, set to end value
							else if (scrollTop > endAnimPos) {
								setProperty(anim.element, anim.property, anim.endVal);
								if (blocks[i].pin) {
									blocks[i].block
                                        .css('position', 'absolute')
                                        .css('top', (blocks[i].top + blocks[i].pin));
								}
							}
							
							// otherwise, set value based on scroll
							else {
								// calculate percent to animate
								animPercent = (scrollTop - startAnimPos) / anim.duration;
								// account for easing if there is any
								if ( anim.easing && $.isFunction( $.easing[anim.easing] ) ) {
									animPercent = $.easing[anim.easing]( animPercent, animPercent*1000, 0, 1, 1000 );
								}
								// then multiply the percent by the value range and calculate the new value
								animVal = anim.startVal + (animPercent * (anim.endVal - anim.startVal));
								setProperty(anim.element, anim.property, animVal);
							}
						}
					}
				}
			}
			
			// update blockIndex and trigger event if changed
			if (scrollorama.blockIndex !== currBlockIndex) {
				scrollorama.blockIndex = currBlockIndex;
				onBlockChange();
			}
		}
		
		function getCurrBlockIndex(scrollTop) {
			var currBlockIndex = 0, i;
			for (i=0; i<blocks.length; i++) {
				// check if block is in view
				if (blocks[i].top <= scrollTop - scrollorama.settings.offset) { currBlockIndex = i; }
			}
			return currBlockIndex;
		}
		
		function setProperty(target, prop, val) {
			var scaleCSS, currentPosition;
			if (prop === 'rotate' || prop === 'zoom' || prop === 'scale') {
				if (prop === 'rotate') {
					target.css(browserPrefix+'transform', 'rotate('+val+'deg)');
				} else if (prop === 'zoom' || prop === 'scale') {
					scaleCSS = 'scale('+val+')';
					if (browserPrefix !== '-ms-') {
						target.css(browserPrefix+'transform', scaleCSS);
					} else {
						target.css('zoom', scaleCSS);
					}
				}
			}
			else if(prop === 'background-position-x' || prop === 'background-position-y' ) {
				currentPosition = target.css('background-position').split(' ');
				if(prop === 'background-position-x') {
					target.css('background-position',val+'px '+currentPosition[1]);
				}
				if(prop === 'background-position-y') {
					target.css('background-position', currentPosition[0]+' '+val+'px');
				}
			}
			else if(prop === 'text-shadow' ) {
				target.css(prop,'0px 0px '+val+'px #ffffff');
			} else {
				target.css(prop, val);
			}
		}
		
		
		// PUBLIC FUNCTIONS
		scrollorama.animate = function(target) {
			var targetIndex,
				targetBlock,
				anim,
				offset,
				i, j;
			/*
				target		= animation target
				arguments	= array of animation parameters
				anim		= object that contains all animation params (created from arguments)
				offset		= positioning helper for pinning
				
				animation parameters:
				delay		= amount of scrolling (in pixels) before animation starts
				duration	= amount of scrolling (in pixels) over which the animation occurs
				property	= css property being animated
				start		= start value of the property
				end			= end value of the property
				pin			= pin block during animation duration (applies to all animations within block)
				baseline	= top (default, when block reaches top of viewport) or bottom (when block first comies into view)
				easing		= just like jquery's easing functions
			*/
			
			// if string, convert to DOM object
			if (typeof target === 'string') { target = $(target); }
			
			// find block of target
			for (i=0; i<blocks.length; i++) {
				if (blocks[i].block.has(target).length) {
					targetBlock = blocks[i];
					targetIndex = i;
				}
			}
			
			// add each animation to the blocks animations array from function arguments
			for (i=1; i<arguments.length; i++) {
				
				anim = arguments[i];
				
				// for top/left/right/bottom, set relative positioning if static
				if (anim.property === 'top' || anim.property === 'left' || anim.property === 'bottom' || anim.property === 'right' ) {
					if (target.css('position') === 'static') { target.css('position','relative'); }
					// set anim.start, anim.end defaults
					cssValue = parseInt(target.css(anim.property),10);
					if (anim.start === undefined) {
						anim.start = isNaN(cssValue) ? 0 : cssValue;
					} else if (anim.end === undefined) {
						anim.end = isNaN(cssValue) ? 0 : cssValue;
					}
				}
				
				// set anim.start/anim.end defaults for rotate, zoom/scale, letter-spacing
				if (anim.property === 'rotate') {
					if (anim.start === undefined) { anim.start = 0; }
					if (anim.end === undefined) { anim.end = 0; }
				} else if (anim.property === 'zoom' || anim.property === 'scale' ) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				} else if (anim.property === 'letter-spacing' && target.css(anim.property)) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				}
				
				if (anim.baseline === undefined) {
					if (anim.pin || targetBlock.pin || targetIndex === 0) {
						anim.baseline = 'top';
					} else {
						anim.baseline = 'bottom';
					}
				}
				
				if (anim.delay === undefined) { anim.delay = 0; }
				
				targetBlock.animations.push({
					element: target,
					delay: anim.delay,
					duration: anim.duration,
					property: anim.property,
					startVal: anim.start !== undefined ? anim.start : parseInt(target.css(anim.property),10),	// if undefined, use current css value
					endVal: anim.end !== undefined ? anim.end : parseInt(target.css(anim.property),10),			// if undefined, use current css value
					baseline: anim.baseline !== undefined ? anim.baseline : 'bottom',
					easing: anim.easing
				});
				
				if (anim.pin) {
					if (targetBlock.pin < anim.duration + anim.delay) {
						offset = anim.duration + anim.delay - targetBlock.pin;
						targetBlock.pin += offset;
						
						// adjust positions of blocks below target block
						for (j=targetIndex+1; j<blocks.length; j++) {
							blocks[j].top += offset;
							blocks[j].block.css('top', blocks[j].top);
						}
					}
				}
			}
			
			onScrollorama();
		};
		
		// function for passing blockChange event callback
		scrollorama.onBlockChange = function(f) {
			onBlockChange = f;
		};
		
		// function for getting an array of scrollpoints
		// (top of each animation block and animation element scroll start point)
		scrollorama.getScrollpoints = function() {
			var scrollpoints = [],i,j,anim;
			for (i=0; i<blocks.length; i++) {
				scrollpoints.push(blocks[i].top);
				// go through the animations for each block
				if (blocks[i].animations.length && blocks[i].pin > 0) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						scrollpoints.push(blocks[i].top + anim.delay + anim.duration);
					}
				}
			}
			// make sure scrollpoints are in numeric order
			scrollpoints.sort(function(a,b) {return a - b;});
			return scrollpoints;
		};
		
		
		// INIT
		init();
		
		return scrollorama;
    };

	//
	//		Easing functions from jQuery UI
	//
	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t + b; }
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t + b; }
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t + b; }
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t*t + b; }
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t===0) { return b; }
			if (t===d) { return b+c; }
			if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; }
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; }
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else{ s = p/(2*Math.PI) * Math.asin (c/a); }
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d/2)===2) { return b+c; }
			if (!p) { p=d*(0.3*1.5); }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			if (t < 1) { return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			if ((t/=d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; }
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) { return $.easing.easeInBounce (x, t*2, 0, c, d) * 0.5 + b; }
			return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	});
     
})(jQuery);

// ====================================================================================

// 5. Scrolldeck

// http://johnpolacek.github.com/scrolldeck.js/

(function($) {
    $.scrolldeck = function(options) {
		
		
		// VARS
		
		var currIndex = 0,
			buttons,
			slides,
			scrollpoints = [],
			sections = [],
			windowHeight = $(window).height(),
			i;
		
		var defaults = {
			buttons: '.nav-button',
			slides: '.slide',
			duration: 600,
			easing: 'easeInOutExpo',
			offset: 0
		};
		
		
		// INIT
		
		var scrolldeck = this;
		scrolldeck.settings = {};
			
		var init = function() {
			
			scrolldeck.settings = $.extend({}, defaults, options);
			
			buttons = $(scrolldeck.settings.buttons);
			slides = $(scrolldeck.settings.slides);
			scrolldeck.controller = $.scrollorama({blocks:slides, offset:scrolldeck.settings.offset});
			
			// add animations with scrollorama
			var anim;
			// ANIMATE INS
			for (i=0; i<$('.animate-in').length; i++) {
				anim = $('.animate-in').eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'left', start:-1200 });
						break;
					case 'fly-in-right':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'right', start:-1200 });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'letter-spacing', start:40 });
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'opacity', start:0 });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
						break;
					default:
						scrolldeck.controller.animate(anim, { delay: windowHeight/2, duration: windowHeight/2, property:'opacity', start:0 });
				}
			}
			
			// ANIMATE BUILDS
			for (i=0; i<$('.animate-build').length; i++) {
				anim = $('.animate-build').eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-1200, pin:true });
						break;
					case 'fly-in-right':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'right', start:-1200, pin:true });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'letter-spacing', start:40, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					default:
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
				}
			}
			
			// set slide and animation scrollpoints
			scrollpoints = scrolldeck.controller.getScrollpoints();
			
			// if nav buttons, create array of section header slide indexes
			for (i=0; i<buttons.length;i++)
				sections.push(slides.index($($(buttons[i]).attr('href'))));
			
			// event handler for updating current slide index and current nav button
			scrolldeck.controller.onBlockChange(function() {
				// get slide index
				currIndex = scrolldeck.controller.blockIndex;
				
				// then update nav
				updateNav();
			});
			
			// Nav button click event
			buttons.click(function(e) {
				e.preventDefault();
				var slide = $($(this).attr('href'));
				currIndex = slide.index();
				scrollToSlide(slide);
			});
			
			// Keyboard events
			$(document).keydown(function(e){
				// up/left arrow = scroll up
				if ((e.keyCode == 37 || e.keyCode == 38) && currIndex !== 0) {
					scrollToSlide(getPrevScrollpoint());
				}
				// down/right arrow, space = scroll down
				else if ((e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 40) && currIndex != slides.length-1) {
					scrollToSlide(getNextScrollpoint());
				}
			});
			
			// if slides are images, assign height to auto for proportional scaling
			for (i=0; i<slides.length; i++) {
				var el = slides.eq(i);
				if (el.prop('tagName').toUpperCase() === 'IMG') {
					el.css('height','auto');
				}
			}
			
			// if last slide is shorter than height of window, increase height
			var lastSlide = slides.eq(slides.length-1);
			if (lastSlide.outerHeight() < $(window).height()) {
				lastSlide.height(lastSlide.height()+$(window).height()-lastSlide.outerHeight());
			}
			
			updateNav();
		};
		
		
		
		// PRIVATE FUNCTIONS
		
		function updateNav() {
			if (buttons) {
				buttons.removeClass('current');
				var currSection = -1;
				for (i=0; i<sections.length;i++) {
					if (currIndex >= sections[i]) {
						currSection = i;
					}
				}
				if (currSection != -1) {
					buttons.eq(currSection).addClass('current');
				}
			}
		}
		
		function scrollToSlide(slide) {
			$(window)._scrollable().stop();
			$(window).scrollTo(slide, {
				duration: scrolldeck.settings.duration,
				easing: scrolldeck.settings.easing,
				offset: scrolldeck.settings.offset
			});
		}
		
		function getNextScrollpoint() {
			return getScrollpoint(2);
		}
		
		function getPrevScrollpoint() {
			return getScrollpoint(-1);
		}
		
		function getScrollpoint(n) {
			var scrollTop = $(window).scrollTop();
			// make temp dup scrollpoints array
			var points = scrollpoints.slice(0);
			// add current scroll position to new temp array
			points.push(scrollTop);
			// do sort to find nearest scrollpoint
			points.sort(function(a,b){return a - b;});
			return points[points.indexOf(scrollTop)+n];
		}
		
		
		// INIT
		init();
    };
     
})(jQuery);

// ====================================================================================

// 6. jQuery Waypoints 1.1.6

// http://imakewebthings.com/jquery-waypoints/

(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);if(o.options.triggerOnce){o.element[k]("destroy")}},h=function(p,o){if(!o){return -1}var n=o.waypoints.length-1;while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1}return n},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(u,t){return p?(u.offset>s.oldScroll&&u.offset<=q):(u.offset<=s.oldScroll&&u.offset>q)}),o=r.length;if(!this.oldScroll||!q){$[m]("refresh")}this.oldScroll=q;if(!o){return}if(!p){r.reverse()}$.each(r,function(u,t){if(t.options.continuous||u===o-1){b(t,[p?"down":"up"])}})},this)});$(n).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;i.setTimeout($.proxy(function(){this.doScroll();this.didScroll=false},this),$[m].settings.scrollThrottle)}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;i.setTimeout($.proxy(function(){$[m]("refresh");this.didResize=false},this),$[m].settings.resizeThrottle)}},this));e.load($.proxy(function(){this.doScroll()},this))},j=function(n){var o=null;$.each(f,function(p,q){if(q.element[0]===n){o=q;return false}});return o},c={init:function(o,n){this.each(function(){var u=$.fn[k].defaults.context,q,t=$(this);if(n&&n.context){u=n.context}if(!$.isWindow(u)){u=t.closest(u)[0]}q=j(u);if(!q){q=new l(u);f.push(q)}var p=h(t,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);r.offset=r.offset==="bottom-in-view"?function(){var v=$.isWindow(u)?$[m]("viewportHeight"):$(u).height();return v-$(this).outerHeight()}:r.offset;if(p<0){q.waypoints.push({element:t,offset:null,options:r})}else{q.waypoints[p].options=r}if(o){t.bind(g,o)}if(n&&n.handler){t.bind(g,n.handler)}});$[m]("refresh");return this},remove:function(){return this.each(function(o,p){var n=$(p);$.each(f,function(r,s){var q=h(n,s);if(q>=0){s.waypoints.splice(q,1);if(!s.waypoints.length){s.element.unbind("scroll.waypoints resize.waypoints");f.splice(r,1)}}})})},destroy:function(){return this.unbind(g)[k]("remove")}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();$.each(s.waypoints,function(u,x){if(!x){return}var t=x.options.offset,w=x.offset;if(typeof x.options.offset==="function"){t=x.options.offset.apply(x.element)}else{if(typeof x.options.offset==="string"){var v=parseFloat(x.options.offset);t=x.options.offset.indexOf("%")?Math.ceil(p*(v/100)):v}}x.offset=x.element.offset().top-n+o-t;if(x.options.onlyOnScroll){return}if(w!==null&&s.oldScroll>w&&s.oldScroll<=x.offset){b(x,["up"])}else{if(w!==null&&s.oldScroll<w&&s.oldScroll>=x.offset){b(x,["down"])}else{if(!w&&o>x.offset){b(x,["down"])}}}});s.waypoints.sort(function(u,t){return u.offset-t.offset})})},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())},aggregate:function(){var n=$();$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)})});return n}};$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)}else{if(typeof n==="object"){return c.init.apply(this,[null,n])}else{$.error("Method "+n+" does not exist on jQuery "+k)}}}};$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};$[m]=function(n){if(a[n]){return a[n].apply(this)}else{return a.aggregate()}};$[m].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){$[m]("refresh")})})(jQuery,"waypoint","waypoints",window);

// ====================================================================================

// 7. ScrollToFixed

// https://github.com/bigspotteddog/ScrollToFixed

(function(a){a.ScrollToFixed=function(d,g){var j=this;j.$el=a(d);j.el=d;j.$el.data("ScrollToFixed",j);var c=false;var y=j.$el;var z;var w=0;var m=0;var h=-1;var e=-1;var o=null;var t;function p(){i();e=-1;w=y.offset().top;m=y.offset().left+(y.offset().left-y.position().left);if(h==-1){h=m}z=y.css("position");c=true;if(j.options.bottom!=-1){r()}}function l(){return z==="fixed"}function s(){return z==="absolute"}function f(){return !(l()||s())}function r(){if(!l()){o.css({display:y.css("display"),width:y.outerWidth(true),height:y.outerHeight(true),"float":y.css("float")});y.css({width:y.width(),position:"fixed",top:j.options.bottom==-1?n():"",bottom:j.options.bottom==-1?"":j.options.bottom});z="fixed"}}function b(){y.css({width:y.width(),position:"absolute",top:j.options.limit,left:m});z="absolute"}function i(){if(!f()){e=-1;o.css("display","none");y.css({width:"",position:"",left:"",top:""});z=null}}function q(A){if(A!=e){y.css("left",m-A);e=A}}function n(){return j.options.marginTop}function u(){var B=c;if(!c){p()}var A=a(window).scrollLeft();var C=a(window).scrollTop();if(j.options.bottom==-1){if(j.options.limit>0&&C>=j.options.limit-n()){if(!s()||!B){k();y.trigger("preAbsolute");b();y.trigger("unfixed")}}else{if(C>=w-n()){if(!l()||!B){k();y.trigger("preFixed");r();e=-1;y.trigger("fixed")}q(A)}else{if(!f()||!B){k();y.trigger("preUnfixed");i();y.trigger("unfixed")}}}}else{if(j.options.limit>0){if(C+a(window).height()-y.outerHeight(true)>=j.options.limit-n()){if(l()){k();y.trigger("preUnfixed");i();y.trigger("unfixed")}}else{if(!l()){k();y.trigger("preFixed");r()}q(A);y.trigger("fixed")}}else{q(A)}}}function k(){var A=y.css("position");if(A=="absolute"){y.trigger("postAbsolute")}else{if(A=="fixed"){y.trigger("postFixed")}else{y.trigger("postUnfixed")}}}var v=function(A){c=false;u()};var x=function(A){u()};j.init=function(){j.options=a.extend({},a.ScrollToFixed.defaultOptions,g);if(navigator.platform==="iPad"||navigator.platform==="iPhone"||navigator.platform==="iPod"){if(!navigator.userAgent.match(/OS 5_.*\ like Mac OS X/i)){return}}j.$el.css("z-index",j.options.zIndex);o=a("<div />");z=y.css("position");if(f()){j.$el.after(o)}a(window).bind("resize.ScrollToFixed",v);a(window).bind("scroll.ScrollToFixed",x);if(j.options.preFixed){y.bind("preFixed.ScrollToFixed",j.options.preFixed)}if(j.options.postFixed){y.bind("postFixed.ScrollToFixed",j.options.postFixed)}if(j.options.preUnfixed){y.bind("preUnfixed.ScrollToFixed",j.options.preUnfixed)}if(j.options.postUnfixed){y.bind("postUnfixed.ScrollToFixed",j.options.postUnfixed)}if(j.options.preAbsolute){y.bind("preAbsolute.ScrollToFixed",j.options.preAbsolute)}if(j.options.postAbsolute){y.bind("postAbsolute.ScrollToFixed",j.options.postAbsolute)}if(j.options.fixed){y.bind("fixed.ScrollToFixed",j.options.fixed)}if(j.options.unfixed){y.bind("unfixed.ScrollToFixed",j.options.unfixed)}if(j.options.spacerClass){o.addClass(j.options.spacerClass)}y.bind("resize",function(){o.height(y.height())});y.bind("scroll.ScrollToFixed",function(){i();u()});y.bind("remove.ScrollToFixed",function(){i();a(window).unbind("resize",v);a(window).unbind("scroll",x);y.unbind(".ScrollToFixed")});if(j.options.bottom!=-1){if(!l()){k();y.trigger("preFixed.ScrollToFixed");r()}}};j.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);

// ====================================================================================

// 8. jQuery Path

// https://github.com/weepy/jquery.path

(function($){

  $.path = {}


  var V = {
    rotate: function(p, degrees) {
      var radians = degrees * 3.141592654 / 180
      var c = Math.cos(radians), s = Math.sin(radians)
      return [c*p[0] - s*p[1], s*p[0] + c*p[1] ]
    },
    scale: function(p, n) {
      return [n*p[0], n*p[1]]
    },
    add: function(a, b) {
      return [a[0]+b[0], a[1]+b[1]]
    },
    minus: function(a, b) {
      return [a[0]-b[0], a[1]-b[1]]
    }
  }
   
   $.path.bezier = function( params ) { 
     	params.start = $.extend({angle: 0, length: 0.3333}, params.start )
     	params.end   = $.extend({angle: 0, length: 0.3333}, params.end )

     this.p1 = [params.start.x, params.start.y];
     this.p4 = [params.end.x, params.end.y];
     
     var v14 = V.minus(this.p4, this.p1)
     var v12 = V.scale(v14, params.start.length)
     v12 = V.rotate(v12, params.start.angle)
     this.p2 = V.add(this.p1, v12)
      
     var v41 = V.scale(v14, -1)
     var v43 = V.scale(v41, params.end.length)     
     v43 = V.rotate(v43, params.end.angle)
     this.p3 = V.add(this.p4, v43)

     this.f1 = function(t) { return (t*t*t); }
     this.f2 = function(t) { return (3*t*t*(1-t)); } 
     this.f3 = function(t) { return (3*t*(1-t)*(1-t)); }
     this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); }

     /* p from 0 to 1 */
     this.css = function(p) {
       var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p)
       var x = this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4;
       var y = this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4;
       return {top: y + "px", left: x + "px"}
     }
   }

   $.path.arc = function(params) {
     for(var i in params)
       this[i] = params[i]

     this.dir = this.dir || 1

     while(this.start > this.end && this.dir > 0)
       this.start -= 360

     while(this.start < this.end && this.dir < 0)
       this.start += 360


     this.css = function(p) {
       var a = this.start * (p ) + this.end * (1-(p ))  
       a = a * 3.1415927 / 180 // to radians

       var x = Math.sin(a) * this.radius + this.center[0]
       var y = Math.cos(a) * this.radius + this.center[1]
       return {top: y + "px", left: x + "px"}
     } 

   };
   
       
  $.fx.step.path = function(fx){
    var css = fx.end.css(1 - fx.pos)
    for(var i in css) 
      fx.elem.style[i] = css[i];
  }
})(jQuery);

// ====================================================================================

// 9. 



// ====================================================================================

