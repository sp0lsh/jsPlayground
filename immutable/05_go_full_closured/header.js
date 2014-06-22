var createSth = ( function () {
	var FIVE = 5; // it will be seen to all functions, but not outside
	console.log( 'sth created' );
	return {
		doStuff: function () {
			return 'doStuff:' + FIVE;
		},
		
		adStuff: function ( val ) {
			// FIVE sits still there,
			// value is not inserted only at execution time of closure
			return 'adStuff:' + ( FIVE + val );
		}
	}
});

var sth = createSth();
console.log( 'header:', sth.doStuff(), sth.adStuff( 1 ), sth.FIVE, sth );

window.onload = onLoad;
function onLoad() {
	console.log( 'onLoad:', sth.doStuff(), sth.adStuff( 1 ), sth.FIVE, sth );
};