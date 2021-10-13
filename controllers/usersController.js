const path = require('path');

const usersController = {
    register: (req, res) => {
        const archivo = path.join(__dirname, '../views/users/register.html');

        res.sendFile(archivo);
    },
    login: (req, res) => {
        // const archivo = path.join(__dirname, '../views/users/login.html');

        res.render('users/login');

        // res.sendFile(archivo);
    },
    profile: (req, res) => {
        // const archivo = path.join(__dirname, '../views/users/login.html');

        res.render('users/profile');

        // res.sendFile(archivo);
    }
    
}

module.exports = usersController;