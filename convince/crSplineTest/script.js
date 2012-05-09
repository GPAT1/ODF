// ====================================================================================

// jQuery Waypoints 1.1.6

// http://imakewebthings.com/jquery-waypoints/

(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);if(o.options.triggerOnce){o.element[k]("destroy")}},h=function(p,o){if(!o){return -1}var n=o.waypoints.length-1;while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1}return n},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(u,t){return p?(u.offset>s.oldScroll&&u.offset<=q):(u.offset<=s.oldScroll&&u.offset>q)}),o=r.length;if(!this.oldScroll||!q){$[m]("refresh")}this.oldScroll=q;if(!o){return}if(!p){r.reverse()}$.each(r,function(u,t){if(t.options.continuous||u===o-1){b(t,[p?"down":"up"])}})},this)});$(n).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;i.setTimeout($.proxy(function(){this.doScroll();this.didScroll=false},this),$[m].settings.scrollThrottle)}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;i.setTimeout($.proxy(function(){$[m]("refresh");this.didResize=false},this),$[m].settings.resizeThrottle)}},this));e.load($.proxy(function(){this.doScroll()},this))},j=function(n){var o=null;$.each(f,function(p,q){if(q.element[0]===n){o=q;return false}});return o},c={init:function(o,n){this.each(function(){var u=$.fn[k].defaults.context,q,t=$(this);if(n&&n.context){u=n.context}if(!$.isWindow(u)){u=t.closest(u)[0]}q=j(u);if(!q){q=new l(u);f.push(q)}var p=h(t,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);r.offset=r.offset==="bottom-in-view"?function(){var v=$.isWindow(u)?$[m]("viewportHeight"):$(u).height();return v-$(this).outerHeight()}:r.offset;if(p<0){q.waypoints.push({element:t,offset:null,options:r})}else{q.waypoints[p].options=r}if(o){t.bind(g,o)}if(n&&n.handler){t.bind(g,n.handler)}});$[m]("refresh");return this},remove:function(){return this.each(function(o,p){var n=$(p);$.each(f,function(r,s){var q=h(n,s);if(q>=0){s.waypoints.splice(q,1);if(!s.waypoints.length){s.element.unbind("scroll.waypoints resize.waypoints");f.splice(r,1)}}})})},destroy:function(){return this.unbind(g)[k]("remove")}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();$.each(s.waypoints,function(u,x){if(!x){return}var t=x.options.offset,w=x.offset;if(typeof x.options.offset==="function"){t=x.options.offset.apply(x.element)}else{if(typeof x.options.offset==="string"){var v=parseFloat(x.options.offset);t=x.options.offset.indexOf("%")?Math.ceil(p*(v/100)):v}}x.offset=x.element.offset().top-n+o-t;if(x.options.onlyOnScroll){return}if(w!==null&&s.oldScroll>w&&s.oldScroll<=x.offset){b(x,["up"])}else{if(w!==null&&s.oldScroll<w&&s.oldScroll>=x.offset){b(x,["down"])}else{if(!w&&o>x.offset){b(x,["down"])}}}});s.waypoints.sort(function(u,t){return u.offset-t.offset})})},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())},aggregate:function(){var n=$();$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)})});return n}};$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)}else{if(typeof n==="object"){return c.init.apply(this,[null,n])}else{$.error("Method "+n+" does not exist on jQuery "+k)}}}};$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};$[m]=function(n){if(a[n]){return a[n].apply(this)}else{return a.aggregate()}};$[m].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){$[m]("refresh")})})(jQuery,"waypoint","waypoints",window);


// ====================================================================================

// jQuery crSpline


// Variables

// Spline 1
var spline1ds = [[150, 0], [150, 220], [800, 300], [800, 580]];
var spline1d = $.crSpline.buildSequence(spline1ds);
var spline1us = spline1ds.reverse();
var spline1u = $.crSpline.buildSequence(spline1us);

// Spline 2
var spline2ds = [[800, 580], [150, 580], [150, 940]];
var spline2d = $.crSpline.buildSequence(spline2ds);
var spline2us = spline2ds.reverse();
var spline2u = $.crSpline.buildSequence(spline2us);

// Spline 3
var spline3ds = [[150, 940], [800, 940], [800, 1280]];
var spline3d = $.crSpline.buildSequence(spline3ds);
var spline3us = spline3ds.reverse();
var spline3u = $.crSpline.buildSequence(spline3us);



$(document).ready(function() { 
	
	$('#block12').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline1d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline1u }, 2000, function() { 
					$('#icebear').remove(); 
					$('<div id="icebear" />').appendTo($('#wrapper'));
				});
			}
		},
		offset: '50%'
	});
	
	$('#block13').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline2d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline2u }, 2000);
			}
		},
		offset: '50%'
	});
	
	$('#block14').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline3d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#wrapper')).animate({ crSpline: spline3u }, 2000);
			}
		},
		offset: '50%'
	});
	

});





// ===========================================================================

/*
var minX = 200;
	var minY = 200;
	var maxX = $(document).width() - 100;
	var maxY = $(document).height() - 100;

	var numPoints = 10;
	var dotsPerSeg = 50;
	var i;

	var points = [];
*/

	// Make a random list of waypoints for the animation to follow
	/*
for (i=0; i<numPoints; i++) {
		points.push([Math.floor(Math.random()*(maxX-minX))+minX, Math.floor(Math.random()*(maxY-minY))+minY]);
	}
*/

	// -- Important bit #1: Generate the spline animation object --
	//var spline = $.crSpline.buildSequence([[150, 0], [150, 220], [800, 300], [800, 590], [150, 600], [150, 940], [800, 940], [800, 1280], [150, 1280], [150, 1450]]);
	
	// Clean up visuals if we've run this once already
	/*
$("#mover").remove();
	$(".waypoint").remove();
	$(".path-dot").remove();
*/

	// Scary-looking stuff to visualize the waypoints and the trail of dots
	// NOT needed for animation
	/*
for (i=0; i<numPoints; i++) {
		
		for (var j=0; j<dotsPerSeg; j++) {
			var t = (i + j/dotsPerSeg) / points.length;
			var pos = spline.getPos(t);
			$('<div class="path-dot" />')
				.appendTo($('#wrapper'))
				.css({
					left: pos.left,
					top: pos.top,
					display: 'inline'
				});
		}
	}
*/

	// -- Important bit #2: Actually animate our mover object. --
	//$('<div id="mover" />').appendTo($('#wrapper')).animate({ crSpline: spline }, 10000);
	
//};

//$(document).ready(function() {

/*
	$("#show-trail").click(function () {
		if ($(this).is(":checked")) {
			$(".path-dot").css({display: "inline"});
			DEMO.showTrail = true;
		}
		else {
			$(".path-dot").css({display: "none"});
			DEMO.showTrail = true;
		}
	});

	$("#show-waypoints").click(function () {
		if ($(this).is(":checked")) {
			$(".waypoint").css({display: "inline"});
			DEMO.showWaypoints = false;
		}
		else {
			$(".waypoint").css({display: "none"});
			DEMO.showWaypoints = false;
		}
	});
*/

//	ICEBEAR.run();


//});



