const 	electron 				= require('electron');							// electron package
const 	{app, BrowserWindow} 	= electron;										// getting elements from electron

// https://www.npmjs.com/package/simple-json-db
const JSONdb = require('simple-json-db');										// json database for making this whole project portable


global.json_path = {
	path : null,
	setup_points : ['project_title', 'project_description', 'project_github']
}

let win;																		// first main window
var db;																			// make it global (locally)

/*
 *	Function: 	 app.once('ready')
 * 	Description: Executes when the app is ready and sets parameters
 */
app.once('ready', () => {
	win = new BrowserWindow({
		width: 			1000,
		height: 		500,
		resizable: 		false,
		maximizable: 	false,
		title: 			'Projector',
		//backgroundColor:'#6C7A89'

	});

	win.toggleDevTools();										// used for debuging, the dev tools show up
	win.loadURL(`file://${__dirname}/src/html/index.html`);
	//win.loadURL(`file://${__dirname}/src/html/dashboard.html`);
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);										// fuck the menu
});

exports.load_dashboard = () => {
	win.loadURL(`file://${__dirname}/src/html/dashboard.html`);
}

/***************************************************************************/

/*
 *	Function: 	 exports.init_db
 * 	Description: Inits the database, based on receiving the path to the json file
 */
exports.init_db = (path) => {
	db = new JSONdb(path);
	json_path.path = path;
	//console.log("Setting json path to: " + json_path.path);
}
/*
 *	Function: 	 exports.update_db = (key, value)
 * 	Description: Function that lets other files update the database
 */
exports.update_db = (key, value) => {
	db.set(key, value);
	if(!(db.has(key)))
		console.log("Database: ERROR, key set but really not");
}

/*
 *	Function: 	 exports.read_db = (key)
 * 	Description: Function that lets other files read the database
 */
exports.read_db = (key) => {
	return db.get(key);
}

/*
 *	Function: 	 exports.has_db = (key)
 * 	Description: checks if the item excists
 */
exports.has_db = (key) => {
	return db.has(key);
}
