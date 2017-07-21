const electron = require('electron');
const {app, BrowserWindow} = electron;

app.once('ready', () => {
	let win = new BrowserWindow({
		width: 			1100, 
		height: 		550,
		resizable: 		false,
		maximizable: 	false,
		title: 			'Projector',
		//backgroundColor:'#6C7A89'

	});

	//win.toggleDevTools();
	win.loadURL(`file://${__dirname}/src/html/index.html`);
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);
});

