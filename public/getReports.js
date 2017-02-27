
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'Your ClientId',
    clientPassword: 'Your Key',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.Reports.getAll({
    parameters: {
        per_page: 40,
        page: 1
    }
}).then(function(data){
    console.log(data);
});