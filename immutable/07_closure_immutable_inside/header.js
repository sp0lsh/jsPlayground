var createSth = ( function () {
	// var FIVE = 5;
	// Object.freeze( FIVE ); // lets freeze it! throws Object.freeze called on non-object 
	
	var constants = {
		FIVE: 5
	};
	Object.freeze( constants ); // lets freeze it!
	
	console.log( 'sth created' );
	
	return {
		doStuff: function () {
			return 'doStuff:' + constants.FIVE++; // change is ignored
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