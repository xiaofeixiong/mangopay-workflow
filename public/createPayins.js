
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.PayIns.create({
    "Tag": "custom meta",
    "AuthorId": "21503756",
    "CreditedUserId": "21503756",
    "CreditedWalletId": "21544804",
    "DebitedFunds": {
        "Currency": "EUR",
        "Amount": 12
    },
    "Fees": {
        "Currency": "EUR",
        "Amount": 5
    },
    "PaymentType": "CARD",
    "CardId": "21568737",
    "ExecutionType": "DIRECT",
    "SecureModeReturnURL": "http://google.com",
    "SecureMode": "DEFAULT",
    "StatementDescriptor": "Fev2017"}, function (data) {

    console.log(data);
});