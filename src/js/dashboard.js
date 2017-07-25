const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var $ 			= require('jquery');					// basic jquery

var basic_data  = {};									// title, description, github link
var setup_points;

function get_basic_data() {

	setup_points = remote.getGlobal('json_path').setup_points;		// gets setup points

	for(var i = 0; i < setup_points.length; i++) {					// goes through them
		var current_output = main.read_db(setup_points[i]);			// gets the current state of them
		$("#" + String(setup_points[i])).text(current_output);		// sets the output of them
	}	
}

get_basic_data();