let moduloUsuarios = require('./usuarios'); 

let process = require('process');
let comando = process.argv[2]; 

switch (comando) {  

    case 'registro': 
        let nombre = process.argv[3]; 
        let mail = process.argv[4]; 
        let password = process.argv[5]; 

        if (nombre == undefined || mail == undefined || password == undefined) { 
            console.log('Debe ingresar nombre, mail y contraseña.');
            break;  
         
        } else{
        moduloUsuarios.registro(nombre, mail, password); 
        console.log('Usuario creado correctamente!! Ya puede iniciar sesión.');
        }

        break;

    case 'login': 
        let mailLogin = process.argv[3]; 
        let passwordLogin = process.argv[4]; 

        if (mailLogin == undefined || passwordLogin == undefined) {
            console.log('Debe escribir su mail y su contraseña');
            break;
        }

        let usuarioLogin = moduloUsuarios.login(mailLogin, passwordLogin);

        if(usuarioLogin == undefined) { 
            console.log('No encontramos un usuario con estas credenciales')
        } else { 
            console.log(`Sesion iniciada, bienvenidx ${usuarioLogin.nombre}!`)
        }

        break;

    case 'eliminar':
        let eliminarEmail = process.argv[3]; 
        let eliminarPass = process.argv[4]; 
        let res = moduloUsuarios.eliminar(eliminarEmail, eliminarPass);

        res ? console.log('Usuario eliminado correctamente') : console.log('No encontramos un usuario con esas credenciales');

        break;

}