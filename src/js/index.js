const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var dialog = remote.require('electron').dialog;			// accessing the users path
var $ = require('jquery');

var path_returned;

//"/home/silard_g/development/Projector/examples/test.json"

/*
 *	Function: 	 set_json_path(input_path)
 * 	Description: inits the database and saves the input path(json file)
 */
function set_json_path() {

	// opens a dialog and gets the json file
	//commenting out for debugging
	/*
	var array_file = dialog.showOpenDialog({
	    properties: ['openFile']
	});*/

	//console.log(array_file[0]);

	main.init_db(JSON.stringify("/home/silard_g/development/Projector/examples/test.json"));		// why on EARTH would you stringify this stuff?! (at least it works)
}


function check_file() {
	console.log("Checking: " + remote.getGlobal('json_path').path);

	// reference to make coding a bit faster
	var setup_points = remote.getGlobal('json_path').setup_points;

	for(var i = 0; i < setup_points.length; i++) {
		console.log("Looking at: ", setup_points[i]);

		if(main.has_db(setup_points[i])) {
			// it contains the item, write it into the 
			console.log("The file already has " + setup_points[i]);
		} else {
			// it doesnt 
		}
	}
	

}

$("#choose_json").click(function() {
	$("#choose_json").text("Loading...");
	set_json_path();
	//load new interface with setup
	check_file();
});

/*
set_json_path();
check_file();
*/