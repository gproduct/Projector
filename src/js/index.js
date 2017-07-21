const remote 	= require('electron').remote;
const main		= remote.require('./main.js');
var $ 			= require('jquery');


setTimeout(function() {}, 1500);

$("#get_started").fadeIn(1800, () => {
	$("#get_started_button").fadeIn(1300);
});

$("#get_started_button").click(function() {
	
});