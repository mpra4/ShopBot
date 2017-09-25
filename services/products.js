var _ = require('lodash');
var Promise = require('bluebird');
var Client = require('node-rest-client').Client;
var solr = require('solr-client');
var SolrQueryBuilder = require('solr-query-builder');
var SolrNode = require('solr-node');
/*
var client = new Client();
allProducts = []
url_te = "http://34.201.62.199:7777/nlpapi/tri?text=" + "I love shoes";
var client1 = solr.createClient('54.158.112.215', '8080', 'ecommerce');
function getSearchQuery(){
    search_qry=[]
    var args =
    {
        data: { test: "hello" },
        headers: { "Content-Type": "application/json" }
    };
    var client = new Client();
    client.post
    (url_te, args, function (data, response) {
        // console.log("The length of the variable data is " + data.length);
        //Handles when triple extarction yields null results
        if (data.length == 0) {
            search_qry.push(msg);
            //session.send("You wanted to buy " + msg + ". Here are the results.");
        }

        //Handles when triple extraction yields results
        else {
            reslen = Object.keys(data).length;

            for (var i = 0; i < reslen; i++) {
                search_qry.push(data[i]['object']);
            }
            console.log(search_qry);
        }
        final1()   
    })
    
}

function final2(){
    console.log("I AM HERE FINAL22")
    console.log(query)
    client1.search
    (getQuery(search_qry), function (err, obj) {
        if (err) {
            console.log(err);
        }
        else {
            resultsobj = obj.response;
            //console.log(resultsobj)
            //console.log(resultsobj.docs[1]['title'].toString())
            for(var i =0; i < 10; i++){
                allProducts.push(i)
            }
            console.log("YYYYYYYYYYYYYY")
            final3()
        }
    })
}
function final1(){
    console.log("I AM HERE FIRST FINAL")
    console.log(search_qry)
    console.log((getQuery(search_qry)))
    query = getQuery(search_qry)
    final2()
}
function final3(){
    console.log("HERE WE CAME THE SOLUTION IS: ")
    console.log(allProducts)
}
function getQuery(search_qry) {
    //Creating connection to Solr
    var qb = new SolrQueryBuilder();
    
    // var opt = {title:['guestbook','heater']};

    //True coonversion of array into string
    stringsearched = JSON.stringify(search_qry);
    //stringsearched=[]
    // console.log(typeof(stringsearched))
    // console.log("The string searched is " + stringsearched)

    //Defines the properties and gives the values to be searched in those properties
    var opt = { title: [stringsearched] };

    //Creates the query with multiple search terms retrieved from stringssearched
    if (opt.title) qb.where('title').in(opt.title);

    //Connects to the Solr server and passes the query.            
    var query = client1.createQuery().q(qb.build()).start(0).rows(3);
    return (query)
}

*/

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
