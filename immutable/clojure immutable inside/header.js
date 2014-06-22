var createSth = ( function () {
	'use strict';
	
	var constants = {
		FIVE: 5
	};
	Object.freeze( constants ); // lets freeze it!
	
	console.log( 'sth created' );
	
	return {
		doStuff: function () {
			return 'doStuff:' + constants.FIVE++; // but we can break it inside
		},
		
		addStuff: function ( val ) {
			// FIVE sits still there,
			// value is not inserted only at execution time of clojure
			return 'addStuff:' + ( constants.FIVE + val );
		}
	}
});

var sth = createSth();
console.log( 'header:', sth.doStuff(), sth.addStuff( 1 ), sth.constants, sth );

window.onload = onLoad;
function onLoad() {
	console.log( 'onLoad:', sth.doStuff(), sth.addStuff( 1 ), sth.constants, sth );
};