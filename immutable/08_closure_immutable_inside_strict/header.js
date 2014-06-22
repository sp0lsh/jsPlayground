var createSth = ( function () {
	'use strict'; // now changing freezed objects is an error
	
	var constants = {
		FIVE: 5
	};
	Object.freeze( constants ); // lets freeze it!
	
	console.log( 'sth created' );
	
	return {
		doStuff: function () {
			// cannot break: throws Cannot assign to read only property 'FIVE' of #<Object> 
			return 'doStuff:' + constants.FIVE; 
		},
		
		adStuff: function ( val ) {
			// FIVE sits still there,
			// value is not inserted only at execution time of closure
			return 'adStuff:' + ( constants.FIVE + val );
		}
	}
});

var sth = createSth();
console.log( 'header:', sth.doStuff(), sth.adStuff( 1 ), sth.constants, sth );

window.onload = onLoad;
function onLoad() {
	console.log( 'onLoad:', sth.doStuff(), sth.adStuff( 1 ), sth.constants, sth );
};