const {app, BrowserWindow, Menu} = require('electron')
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
            {type: 'separator'}
        ]
    }
]

app.disableHardwareAcceleration()
app.whenReady().then(() => {
    let win = new BrowserWindow({
        show: false,
        useContentSize: true,
        minimizable: false,
        title: 'Progress GUI',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false
        },
        icon: 'Assets/img/logo.png'
    })
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(startUrl).then(r => {
        console.log(r)
        win.webContents.setFrameRate(60)
        win.maximize()
        win.show()
    });

})

const menu = Menu.buildFromTemplate(main_menu)
Menu.setApplicationMenu(null)

app.on('window-all-closed', () => {
    app.quit()
})
