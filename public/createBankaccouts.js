
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

var bankAccount ={
    "Tag": "custom meta",
    "OwnerAddress": {
        "AddressLine1": "14 Rue Taine",
        "AddressLine2": "",
        "City": "Paris",
        "Region": "Ile de France",
        "PostalCode": "75012",
        "Country": "FR"
    },
    "OwnerName": "MLE Xiaofei Xiong",
    "IBAN": "FR7630004009020000108405170",
    "BIC": "BNPAFRPPXXX",
    "Type": "IBAN"
}

api.Users.createBankAccount('21504439', bankAccount, function (data) {
    console.log(data);
})