
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'Your ClientId',
    clientPassword: 'Your Key',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

var bankAccount ={
    "Tag": "custom meta",
    "OwnerAddress": {
        "AddressLine1": "1 Place Chatelet",
        "AddressLine2": "",
        "City": "Paris",
        "Region": "Ile de France",
        "PostalCode": "75001",
        "Country": "FR"
    },
    "OwnerName": "MLE Xiaofei Xiong",
    "IBAN": "Your IBAN",
    "BIC": "Your BIC",
    "Type": "IBAN"
}

api.Users.createBankAccount('21504439', bankAccount, function (data) {
    console.log(data);
})