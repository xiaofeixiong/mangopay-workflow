
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'Your ClientId',
    clientPassword: 'Your Key',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.CardRegistrations.get('21568643', function (data) {
    data.RegistrationData = 'data=Your card registration data';

    api.CardRegistrations.update(data, function (updatedData) {
        console.log(updatedData);
    });
});
