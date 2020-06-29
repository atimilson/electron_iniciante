// Modules to control application life and create native browser window
const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;
const dialog = electron.dialog;
const Menu = electron.Menu;
let Win;

app.on('ready',function(){  
  Win = new electron.BrowserWindow({
    width: 500,
    height: 350
  });

 // Win.loadURL("http://www.google.com.br");
  Win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol : 'file:'
  }));

  // Win.webContents.openDevTools();
  //   Win.on('closed', function(){
  //       console.log('XAuuu.') 
  // });

//  dialog.showMessageBox( Win,{
//    type: 'info',
//    message : 'Ola mundo',
//    title : 'SON',
//    buttons : []
//  })

  // dialog.showOpenDialog(Win, {
  //   title: 'Select a new file from Electron',
  //   buttonLabel: 'SON'
  // });

  // dialog.showErrorBox('Ttitle erro','Contet')

  // dialog.showSaveDialog(Win,{
  //   title: 'Save ',
  //   buttonLabel : 'Salvar'
  // })

  // let menuTemplate = [
  //   {
  //     label: 'Menu 1'
  //   },
  //   {
  //     label:'Menu 2',
  //     submenu:[
  //       {
  //         label: 'Hello',
  //         click: function(item, Win, event) {
  //             dialog.showMessageBox(Win,{
  //               title: 'teste de mensagem menu',
  //               message:'Essa é uma mensagem',
  //               buttons : []
  //             });
  //         }
  //       }
  //     ]
  //   }
  // ];
  // const menu = Menu.buildFromTemplate(menuTemplate);
  // Menu.setApplicationMenu(menu) 
  
  
});

// app.on('before-quit', function(){
//   console.log('fechou o app')
// });


