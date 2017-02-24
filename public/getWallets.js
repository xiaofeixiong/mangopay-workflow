
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});


api.Wallets.get('21569430', function(data, response) {
    console.log(data);
}).then(function(data){

});
