

var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.CardRegistrations.create({
    "Tag": "custom meta",
    "UserId": "21503756",
    "Currency": "EUR",
    "CardType": "CB_VISA_MASTERCARD"
}, function (data) {
    console.log(data);
})