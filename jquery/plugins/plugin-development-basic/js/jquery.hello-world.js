// By including everything in the (function() {}) self-enclosed JavaScript pattern, 
// we’re making sure that all the variables in our plugin will stay safely outside of 
// the global namespace.

// The other thing you might notice is that we’re defining our plugin as if jQuery was 
// in it’s “no-conflict” mode. Again, we’re seeking to avoid colliding with other JavaScript 
// on the page, and thus we want to make sure that our plugin isn’t reliant on the default $, 
// which could be used by another library.
(function($) {

	// $.fn is jQuery’s way of allowing you to define your plugin, which we’ve named helloWorld
	$.fn.helloWorld = function( options ) {

		// Establish our default settings
		var settings = $.extend({
			text         : 'Hello, World!',
			color        : null,
			fontStyle    : null,
			complete	 : null
		}, options);

		// When we’re invoking the plugin by attaching it to a jQuery selector, the object 
		// we’re acting upon is already a jQuery object, so we don’t need to wrap it in the 
		// $(this) structure you’re used to. However, once we start looping through each 
		// instance of the matching selector, we use the $(this) structure as we would any 
		// time we ran our selectors through $.each().

		// To chain another jQuery action onto this, be sure to return the results of the 
		// plugin as it loops through the DOM elements:
		return this.each( function() {
			$(this).text( settings.text );

			if ( settings.color ) {
				$(this).css( 'color', settings.color );
			}

			if ( settings.fontStyle ) {
				$(this).css( 'font-style', settings.fontStyle );
			}

			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call(this);
			}
		});

	};

}(jQuery));
