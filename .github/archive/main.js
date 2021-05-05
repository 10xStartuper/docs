// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const serve = require("electron-serve");
const loadURL = serve({ directory: "build" });

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function isDev() {
	return !app.isPackaged;
}

const isMac = process.platform === "darwin";

function createWindow() {
	if (require("electron-squirrel-startup")) app.quit();
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true,
		},
		darkTheme: true,
		// Use this in development mode.
		icon: isDev()
			? path.join(process.cwd(), "src/.vuepress/public/xinux.png")
			: path.join(__dirname, "build/xinux.png"),
		// Use this in production mode.
		// icon: path.join(__dirname, 'build/favicon.png'),
		show: false,
	});

	require("update-electron-app")({
		repo: "xinuxuz/docs",
		updateInterval: "12 hour",
		logger: require("electron-log"),
		notifyUser: true,
	});

	const template = [
		// { role: 'appMenu' }
		...(isMac
			? [
					{
						label: app.name,
						submenu: [
							{
								label: "Haqida",
								role: "about",
							},
							{ type: "separator" },
							{ label: "Servislar", role: "services" },
							{ type: "separator" },
							{ label: "Berkitish", role: "hide" },
							{
								label: "Diqqat jamlash",
								role: "hideothers",
							},
							{ label: "Eski holat qaytarish", role: "unhide" },
							{ type: "separator" },
							{ label: "Chiqish", role: "quit" },
						],
					},
			  ]
			: []),
		// { role: 'fileMenu' }
		{
			label: "Fayllar",
			submenu: [
				isMac
					? { label: "Oynani yopish", role: "close" }
					: { label: "Dasturdan chiqish", role: "quit" },
			],
		},
		// { role: 'editMenu' }
		{
			label: "To'girlash",
			submenu: [
				{
					label: "Bir qadam qaytish",
					role: "undo",
				},
				{
					label: "Holatni takrorlash",
					role: "redo",
				},
				{ type: "separator" },
				{
					label: "Ko'chirib olish",
					role: "cut",
				},
				{
					label: "Ko'chirish",
					role: "copy",
				},
				{
					label: "Nusxalash",
					role: "paste",
				},
				...(isMac
					? [
							{
								label: "Moslashtirib nusxalash",
								role: "pasteAndMatchStyle",
							},
							{ label: "O'chirish", role: "delete" },
							{ label: "Hammasini belgilash", role: "selectAll" },
							{ type: "separator" },
							{
								label: "Speech",
								submenu: [
									{ role: "startSpeaking" },
									{ role: "stopSpeaking" },
								],
							},
					  ]
					: [
							{
								label: "O'chirish",
								role: "delete",
							},
							{ type: "separator" },
							{
								label: "Hammasini belgilash",
								role: "selectAll",
							},
					  ]),
			],
		},
		// { role: 'viewMenu' }
		{
			label: "Ko'rinish",
			submenu: [
				{ label: "Qayta yuklash", role: "reload" },
				{ label: "Majburiy qayta yuklash", role: "forceReload" },
				{ label: "Dasturchi rejimi", role: "toggleDevTools" },
				{ type: "separator" },
				{ label: "Doimiy holatga keltirish", role: "resetZoom" },
				{ label: "Yaqinlashtirish", role: "zoomIn" },
				{ label: "Uzoqlashtirish", role: "zoomOut" },
				{ type: "separator" },
				{ label: "To'liq ekran rejimi", role: "togglefullscreen" },
			],
		},
		// { role: 'windowMenu' }
		{
			label: "Oyna",
			submenu: [
				{ label: "Kichraytirish", role: "minimize" },
				{ label: "Kattaytirish", role: "zoom" },
				...(isMac
					? [
							{ type: "separator" },
							{ label: "Eng oldinga siljitish", role: "front" },
							{ type: "separator" },
							{ label: "Oyna", role: "window" },
					  ]
					: [{ label: "Yopish", role: "close" }]),
			],
		},
		{
			label: "Yordam",
			role: "help",
			submenu: [
				{
					label: "Qo'llab quvvatlash",
					click: async () => {
						const { shell } = require("electron");
						await shell.openExternal("https://github.com/xinuxuz");
					},
				},
			],
		},
	];

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	// This block of code is intended for development purpose only.
	// Delete this entire block of code when you are ready to package the application.
	if (isDev()) {
		mainWindow.loadURL("http://localhost:8080/");
	} else {
		loadURL(mainWindow);
	}

	// Uncomment the following line of code when app is ready to be packaged.
	// loadURL(mainWindow);

	// Open the DevTools and also disable Electron Security Warning.
	// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
	// mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on("closed", function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	// Emitted when the window is ready to be shown
	// This helps in showing the window gracefully.
	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) createWindow();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
