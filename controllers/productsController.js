const path = require('path');

//Productos Provisorios hasta realizar base de batos
const productsList = [
    {
        
    }
];

const productsController = {
    index: (req, res) => {
        // const archivo = path.join(__dirname, '../views/products/productDetail.html');

            res.render('products/productDetail');

        // res.sendFile(archivo);
    }
}

module.exports = productsController;