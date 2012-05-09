// ODF: CONVINCE - SCRIPT 
// =======================

// Last Updated: 08.05.2012 11:55 by Laurent LANG


$(function(){

	// Fix position of Header & Subnav
	$('#header-wrapper').scrollToFixed({ marginTop: 0 });
	$('#subnavbg').scrollToFixed({ marginTop: 88 });
	$('#icefloe-border').scrollToFixed({ marginTop: 186 });
	
	
	// ===== THE ICEBEAR'S JOURNEY =====
	
	// Spline 1
	var spline1ds = [[80, 0], [80, 420], [800, 450], [800, 700]];
	var spline1d = $.crSpline.buildSequence(spline1ds);
	var spline1us = spline1ds.reverse();
	var spline1u = $.crSpline.buildSequence(spline1us);
	
	// Spline 2
	var spline2ds = [[800, 700], [800, 1000], [150, 1000], [150, 1300]];
	var spline2d = $.crSpline.buildSequence(spline2ds);
	var spline2us = spline2ds.reverse();
	var spline2u = $.crSpline.buildSequence(spline2us);
	
	// Spline 3
	var spline3ds = [[150, 1300], [150, 1600], [800, 1600], [800, 1900]];
	var spline3d = $.crSpline.buildSequence(spline3ds);
	var spline3us = spline3ds.reverse();
	var spline3u = $.crSpline.buildSequence(spline3us);
	
	
	$('#block11').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline1d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline1u }, 2000, function() { 
					$('#icebear').remove(); 
					$('<div id="icebear" />').appendTo($('#main'));
				});
			}
		},
		offset: '35%'
	});
	
	$('#block12').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline2d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline2u }, 2000);
			}
		},
		offset: '35%'
	});
	
	$('#block13').waypoint({
		handler: function(event, direction) {
			if (direction === 'down'){
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline3d }, 2000);
			}
			else {
				$('#icebear').remove();
				$('<div id="icebear" />').appendTo($('#main')).animate({ crSpline: spline3u }, 2000);
			}
		},
		offset: '35%'
	});
		
	

});


