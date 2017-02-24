

var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.Wallets.create({
    "Owners": [ "21504439" ],
    "Balance": {
        "Currency": "EUR",
        "Amount": 12
    },
    "FundsType": "DEFAULT",
    "Description": "My big project",
    "Currency": "EUR"}, function (data) {
console.log(data);
});


