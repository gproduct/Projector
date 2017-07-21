const remote 	= require('electron').remote;
const main		= remote.require('./main.js');
var $ 			= require('jquery');

/*main.update_db('swag','FULL');
var returned = main.read_db('swag');
console.log(returned);*/

setTimeout(function() {}, 1500);

$("#get_started").fadeIn(1800, () => {
	$("#get_started_button").fadeIn(1300);
});


