

    const {app,BrowserWindow,Menu} = require('electron');
    const path = require('path');
    const url = require('url');
    const templateMenu = [
        {  
          label: 'DevTools',
          submenu: [
            {
              label: 'Show/Hide Dev Tools',
              accelerator: process.platform == 'darwin' ? 'Comand+D' : 'Ctrl+D',
              click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
              }
            },
            {
              role: 'reload'
            }
          ]
        }
      ];    
   
    let ventanaPrincipal;

    function estaEnProduccion(){
        if (process.env.NODE_ENV!=='production'){
            require('electron-reload')(__dirname,{
               
            });
        }
    }
    
    
    function mostrarVentanaJuego(){
      app.on('ready',() =>{   
         crearVentanaPrincipal();
         cargarVista();
        //  eliminarMenuPorDefecto();
      }); 
      const mainMenu = Menu.buildFromTemplate(templateMenu);
      Menu.setApplicationMenu(mainMenu);

    }
     
    function  crearVentanaPrincipal(){
        ventanaPrincipal = new BrowserWindow({
          width: 1080,
          height: 700,
            webPreferences:{
              nodeIntegration: true

            },
            title: "Guess Game"
           });
    }
    
    function cargarVista(){
        ventanaPrincipal.loadURL(url.format({
            pathname: path.join(__dirname, 'Views/juego.html'),
            protocol: 'file',
            slashes: true
         }));
         
     }
    
    function eliminarMenuPorDefecto(){
        Menu.setApplicationMenu(null);
     }

     function cerrarVentanaJuego(){
         ventanaPrincipal.on('closed', () =>{
             app.quit();
         });
     }

     exports.estaEnProduccion = estaEnProduccion;
     exports.mostrarVentanaJuego = mostrarVentanaJuego;
     

