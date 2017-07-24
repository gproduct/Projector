const remote 	= require('electron').remote;
const main		= remote.require('./main.js');

//"/home/silard_g/development/Projector/examples/test.json"

function set_json_path(input_path) {
	main.init_db(input_path);
}


/*set_json_path("/home/silard_g/development/Projector/examples/test.json");
main.update_db('project_title','stuffistuff');
console.log(main.read_db('project_title'));*/