const {app, BrowserWindow, Menu, ipcMain, dialog,remote} = require('electron')
const path = require('path')
const url = require('url')

const main_menu = [
    {
        label: 'Сервис',
        submenu: [
            {
                role: 'quit',
                label: 'Выход'
            },
            { role: 'toggleDevTools' },
            {type: 'separator'},
            {
                label: 'Переподключиться',
                click: async () => {
                    console.log('[server] Reconnecting...')
                }
            }
        ]
    }
]

app.disableHardwareAcceleration()
app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        show: false,
        useContentSize: true,
        resizable: false,
        maximizable: false,
        title: 'Explora v2',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false
        },
        icon:'assets/img/logo.png'
    })
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(startUrl);
    win.webContents.setFrameRate(60)
    win.show()
})

const menu = Menu.buildFromTemplate(main_menu)
Menu.setApplicationMenu(menu)

app.on('window-all-closed', () => {
    app.quit()
})
