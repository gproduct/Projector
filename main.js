const 	electron 				= require('electron');		// electron package
const 	{app, BrowserWindow} 	= electron;					// getting elements from electron
var 	TinyDB 					= require('tinydb');		// database package

db = new TinyDB('./data.db');								// accessing the database

/*
 *	Function: 	 app.once('ready')
 * 	Description: Executes when the app is ready and sets parameters
 */
app.once('ready', () => {
	let win = new BrowserWindow({
		width: 			1100, 
		height: 		550,
		resizable: 		false,
		maximizable: 	false,
		title: 			'Projector',
		//backgroundColor:'#6C7A89'

	});

	//win.toggleDevTools();										// used for debuging, the dev tools show up
	win.loadURL(`file://${__dirname}/src/html/index.html`);		// executes the index.html (first time setup)
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);
});

/*********************************************************************************/

/*
 *	Function: 	 db.onReady
 * 	Description: Executes when the database is ready for operation
 */
db.onReady = function() {
  console.log('database is ready for operating');
}

/*
 *	Function: 	 update_db
 * 	Description: Uses exports for electron to access it. Updates the database
 */
exports.update_db = (input_key, input_value) => {
	db.setInfo(input_key, input_value, function(err, key, value) {
    if (err) {
      console.log(err);
      return;
    }
    
    console.log('[update_db] ' + key + ' : ' + value);
  });
}

/*
 *	Function: 	 update_db
 * 	Description: Uses exports for electron to access it. Reads the database and returns 
 */
exports.read_db = (input_key) => {
	var return_value;

	db.getInfo(input_key, function(err, key, value) {
	    if (err) {
	      console.log(err);
	      return;
	    } else {
	    	console.log('[read_db] ' + key + ' : ' + value);
	    	return_value = value;
	    }
  	});

	return return_value;
}

/*********************************************************************************/