var _ = require('lodash');
var Promise = require('bluebird');
var Client = require('node-rest-client').Client;


productsService = {
    //     Products

    getProducts: function (pageNumber, pageSize, allProducts) {
        return pageItems(pageNumber, pageSize, allProducts);
    },

    // Get Single Product
    getProduct: function (productName, allProducts) {
        var product = _.find(allProducts, ['name', productName]);
        return Promise.resolve(product);
    }
    
    //getAlll: getAll2
};
// helpers
function pageItems(pageNumber, pageSize, items) {
    var pageItems = _.take(_.drop(items, pageSize * (pageNumber - 1)), pageSize);
    var totalCount = items.length;
    return Promise.resolve({
        items: pageItems,
        totalCount: totalCount
    });
}

// export
module.exports = productsService;
