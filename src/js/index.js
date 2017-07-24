const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var dialog = remote.require('electron').dialog;			// accessing the users path

var path_returned;

//"/home/silard_g/development/Projector/examples/test.json"

/*
 *	Function: 	 set_json_path(input_path)
 * 	Description: inits the database and saves the input path(json file)
 */
function set_json_path() {

	// opens a dialog and gets the json file
	var array_file = dialog.showOpenDialog({
	    properties: ['openFile']
	});

	//console.log(array_file[0]);

	main.init_db(JSON.stringify(array_file[0]));		// why on EARTH would you stringify this stuff?! (at least it works)
}


function check_file() {
	console.log("Checking: " + remote.getGlobal('json_path').path);
}


set_json_path();
check_file();

/*set_json_path("/home/silard_g/development/Projector/examples/test.json");
main.update_db('project_title','stuffistuff');
console.log(main.read_db('project_title'));*/