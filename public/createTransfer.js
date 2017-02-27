
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'Your ClientId',
    clientPassword: 'Your Key',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.Transfers.create({
    "Tag": "custom meta",
    "AuthorId": "21503756",
    "CreditedUserId": "21503756",
    "DebitedFunds": {
    "Currency": "EUR",
        "Amount": 4
        },
    "Fees": {
        "Currency": "EUR",
        "Amount": 0
        },
    "DebitedWalletId": "21544804",
    "CreditedWalletId": "21569430"}, function (data) {
console.log(data);
});