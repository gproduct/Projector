const 	electron 				= require('electron');		// electron package
const 	{app, BrowserWindow} 	= electron;					// getting elements from electron

let win;													// first main window
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

	//win.toggleDevTools();										// used for debuging, the dev tools show up

	
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);
});
