const { dialog } = require('electron');
const electron = require('electron')
const { app, BrowserWindow, ipcMain, Menu } = electron
const fs = require('fs');

let win;
let path = null;

app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})

const isMac = process.platform === 'darwin'
const template = [
    ...(isMac
        ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
            ]
        }]
        : []),
    {
        label: 'Save',
        submenu: [
            {
                label: "Save",
                accelerator: "CommandOrControl+S",
                click: () => {
                    win.webContents.send('savebutton')
                }
            },
            {
                label: "Save As",
                accelerator: "CommandOrControl+Shift+S",
                click: () => {
                    path = null;
                    win.webContents.send('savebutton')
                }
            }
        ]
    },
    { role: 'editMenu' },
    { role: "viewMenu" },
]


ipcMain.on('save', (event, text) => {
    console.log(`${text} from main`);
    if (path === null) {
        dialog.showSaveDialog(win, { defaultPath: "text.txt" }, (filePath) => {
            if (filePath) {
                path = filePath;
                fs.writeFile(filePath, text, err => {
                    if (err) {
                        console.error(err);
                        win.webContents.send('background', 'red')
                    } else {
                        console.error('saved');
                        win.webContents.send('background', 'green')
                    }
                });
            }
        });
    }
    else {
        fs.writeFile(path, text, err => {
            if (err) {
                console.error(err);
                win.webContents.send('background', 'red');
            } else {
                console.error('saved');
                win.webContents.send('background', 'green')

            }
        });
    }

})