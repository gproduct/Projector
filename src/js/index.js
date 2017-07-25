const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var dialog 		= remote.require('electron').dialog;	// accessing the users path
var $ 			= require('jquery');					// basic jquery

var path_returned; var setup_points;
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

	main.init_db(/*JSON.stringify(*/"/home/silard_g/development/Projector/examples/test.json"/*)*/);		// why on EARTH would you stringify this stuff?! (at least it works)

	// add checking if it has been setup, if yes skip all bullshit stuff
}

/*
 *	Function: 	 check_file()
 * 	Description: checks the json file for already created stuff
 */
function check_file() {
	console.log("Checking: " + remote.getGlobal('json_path').path);

	// reference to make coding a bit faster
	setup_points = remote.getGlobal('json_path').setup_points;

	for(var i = 0; i < setup_points.length; i++) {
		if(main.has_db(setup_points[i])) { 
			console.log("The file already has: " + setup_points[i]);
			document.getElementById(setup_points[i]).value = main.read_db(setup_points[i]);
		} else {
			console.log("The file doesnt contain:" + setup_points[i]);
			// it doesnt 
		}
	}
}

$("#choose_json").click(function() {
	$("#choose_json").text("Loading...");
	set_json_path();
	//load new interface with setup
	$("#button_centered").slideUp(500);
	$("#setup").slideDown(1500);
	check_file();
});

$("#submit_setup").click(function() {

	var form_data = {};

	for(var i = 0; i < setup_points.length; i++) {

		//getting the data
		form_data[i] = document.getElementById(setup_points[i]).value;

		//checking for empty ones
		if(form_data[i] == null || form_data[i] == "") {
			alert("Please fill out everything!");
			return;
		}
	}
	//console.log(form_data);
	for(var i = 0; i< setup_points.length; i++) {

		// updating the json file
		main.update_db(setup_points[i], form_data[i]);

		// checking if all okay
		if(main.read_db(setup_points[i]) != form_data[i]) {
			alert("Something went wrong!");
			return;
		}
	}

	alert("Data recorded successfully");

	// redirect to other page
	main.load_file(`file://${__dirname}/src/html/dashboard.html`);
});