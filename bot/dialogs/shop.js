var util = require('util');
var builder = require('botbuilder');
//var products = require('../../services/AllProducts');
var products = require('../../services/products');

var solr = require('solr-client');
var SolrQueryBuilder = require('solr-query-builder');

var lib = new builder.Library('shop');
lib.dialog('/', [
    function(session){
    builder.Prompts.text(session,"Sure! What do you want to buy?")
    },
    function (session) {
        session.dialogData.msg = session.message.text
       session.beginDialog('product-selection:/')
    },
    function (session, args,next) {
        session.dialogData.selection = args.selection;
       // session.beginDialog('checkout:/')
        // Ask for delivery address using 'address' library
        // session.beginDialog('address:/',
        //     {
        //         promptMessage: session.gettext('provide_delivery_address', session.message.user.name || session.gettext('default_user_name'))
        //     });
        next()
    },
    // function (session, args) {
    //     // Retrieve selection, continue to delivery date
    //     //session.dialogData.selection = args.selection;
    //    // session.dialogData.recipientAddress = args.address;
    //     //session.beginDialog('delivery:date');
    // },
    // function (session, args) {
    //     // Retrieve deliveryDate, continue to details
    //     //session.dialogData.deliveryDate = args.deliveryDate;
    //     //session.send('confirm_choice', session.dialogData.selection.name, session.dialogData.deliveryDate.toLocaleDateString());
    //     session.beginDialog('details:/');
    // },
    // function (session, args) {
    //     // Retrieve details, continue to billing address
    //     // session.dialogData.details = args.details;
    //     // session.beginDialog('address:billing');
    // },
    // function (session, args, next) {
    //     // Retrieve billing address
    //     // session.dialogData.billingAddress = args.billingAddress;
    //     next();
    // },
    function (session, args) {
        // Continue to checkout
        var order = {
            selection: session.dialogData.selection,
            // delivery: {
            //     date: session.dialogData.deliveryDate,
            //     address: session.dialogData.recipientAddress
            // },
            // details: session.dialogData.details,
            // billingAddress: session.dialogData.billingAddress
        };

        console.log('order', order);
        session.beginDialog('checkout:/', { order: order });
    }
]);

// Export createLibrary() function
module.exports.createLibrary = function () {
    return lib.clone();
};
