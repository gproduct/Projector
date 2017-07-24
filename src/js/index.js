const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var dialog = remote.require('electron').dialog;			// accessing the users path

//"/home/silard_g/development/Projector/examples/test.json"

/*
 *	Function: 	 set_json_path(input_path)
 * 	Description: inits the database and saves the input path(json file)
 */
function set_json_path(input_path) {
	main.init_db(input_path);
}

/*
 *	Function: 	 user_json_path()
 * 	Description: asks the user to select the json file and returns the path
 */
function user_json_path() {
	var array_file = dialog.showOpenDialog({
	    properties: ['openFile']
	});

	return array_file[0];
}



/*set_json_path("/home/silard_g/development/Projector/examples/test.json");
main.update_db('project_title','stuffistuff');
console.log(main.read_db('project_title'));*/