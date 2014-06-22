var HIGH_FIVE  = function () { return 5; };

console.log( 'header:', HIGH_FIVE(), HIGH_FIVE );

window.onload = onLoad;

function onLoad() {
	console.log( 'onLoad:', HIGH_FIVE )
};