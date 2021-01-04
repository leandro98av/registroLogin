let fs = require('fs');

let moduloUsuarios = {

    archivoJSON: './usuarios.json',

    leerJSON: function() { 
        let usuariosJSON = fs.readFileSync(this.archivoJSON, 'utf-8'); 
        let usuarios = JSON.parse(usuariosJSON) 

        return usuarios;
    },

    guardarJSON: function(info) {
        let usuariosActualizados = JSON.stringify(info); 
        fs.writeFileSync(this.archivoJSON, usuariosActualizados, 'utf-8'); 
    },

    registro: (nombre, mail, password) => {
        let usuarios = moduloUsuarios.leerJSON(); 
        
        let nuevoUsuario = { 
            nombre: nombre,
            mail: mail,
            password: password
        }

        usuarios.push(nuevoUsuario);

        moduloUsuarios.guardarJSON(usuarios) 
    },

    login: (mail, password) => { 
        let usuarios = moduloUsuarios.leerJSON();
        let usuarioLogin;

        usuarios.forEach(usuario => {
            if(usuario.mail == mail && usuario.password == password) {
                usuarioLogin = usuario;
            }
        })

        return usuarioLogin;
    },

    eliminar: (mail, password) => {
        let usuarios = moduloUsuarios.leerJSON();

        let usuariosFiltrados = usuarios.filter(usuario => {
            return usuario.mail != mail && usuario.password != password;
        })

        moduloUsuarios.guardarJSON(usuariosFiltrados); 
    },

}

module.exports = moduloUsuarios 



module.exports = moduloUsuarios