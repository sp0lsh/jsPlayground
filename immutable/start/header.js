function HIGH_FIVE () { return 5; };

console.log( 'header:', HIGH_FIVE(), HIGH_FIVE );

window.onload = onLoad;

function onLoad() {
	console.log( 'onLoad:', HIGH_FIVE )
};