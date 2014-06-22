var constants = ( function () {
	var _FIVE = 5; // will be assigned on each call
	return {
		FIVE: _FIVE
	}
});

console.log( 'header:', constants(), constants().FIVE );

window.onload = onLoad;

function onLoad() {
	console.log( 'onLoad:', constants(), constants().FIVE );
};