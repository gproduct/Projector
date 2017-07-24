const 	electron 				= require('electron');							// electron package
const 	{app, BrowserWindow} 	= electron;										// getting elements from electron

// https://www.npmjs.com/package/simple-json-db
const JSONdb = require('simple-json-db');										// json database for making this whole project portable

global.json_path = {path : null}												// making the path accessable later

let win;																		// first main window
var db;																			// make it global (locally)

/*
 *	Function: 	 app.once('ready')
 * 	Description: Executes when the app is ready and sets parameters
 */
app.once('ready', () => {
	win = new BrowserWindow({
		width: 			1100, 
		height: 		550,
		resizable: 		false,
		maximizable: 	false,
		title: 			'Projector',
		//backgroundColor:'#6C7A89'

	});

	win.toggleDevTools();										// used for debuging, the dev tools show up
	win.loadURL(`file://${__dirname}/src/html/index.html`);
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);
});


/***************************************************************************/

/*
 *	Function: 	 exports.init_db
 * 	Description: Inits the database, based on receiving the path to the json file
 */
exports.init_db = (path) => {
	db = new JSONdb(path);
	json_path.path = path;
	console.log("Setting json path to: " + json_path.path);
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
 *	Function: 	 exports.update_db = (key, value)
 * 	Description: Function that lets other files read the database
 */
exports.read_db = (key) => {
	return db.get(key);
}