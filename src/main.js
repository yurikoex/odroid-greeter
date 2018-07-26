const path = require('path')
const glob = require('glob')
const { app, BrowserWindow } = require('electron')

let mainWindow = null

function initialize() {
	function createWindow() {
		mainWindow = new BrowserWindow({
			minWidth: 680,
			minHeight: 840,
			title: 'Greeter',
			kiosk: true,
			frame: false
		})
		mainWindow.loadURL(path.join(`http://localhost:1234/`))

		mainWindow.maximize()

		//mainWindow.webContents.openDevTools()

		mainWindow.on('closed', () => {
			mainWindow = null
		})
	}

	app.on('ready', () => {
		createWindow()
	})

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})

	app.on('activate', () => {
		if (mainWindow === null) {
			createWindow()
		}
	})
}

initialize()
