
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'Your ClientId',
    clientPassword: 'Your Key',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});


api.PayOuts.create({
    "Tag": "custom meta",
    "AuthorId": "21504439",
    "DebitedFunds": {
        "Currency": "EUR",
        "Amount": 7
    },
    "Fees": {
        "Currency": "EUR",
        "Amount": 1
    },
    "BankAccountId": "21570411",
    "DebitedWalletId": "21569430",
    "BankWireRef": "invoice 7282",
    "PaymentType": "BANK_WIRE"
}, function (data) {
    console.log(data);
})