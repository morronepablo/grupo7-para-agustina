const path = require('path');

const mainController = {
    index: (req, res) => {
        const archivo = path.join(__dirname, '../views/index.html');

        res.sendFile(archivo);
    }   
}

module.exports = mainController;