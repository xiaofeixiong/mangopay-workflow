
var mangopay = require('mangopay2-nodejs-sdk');


var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.CardRegistrations.get('21568643', function (data) {
    data.RegistrationData = 'data=dAj315t4g0Sq0Zy7Th16sUMB7zYXWNgXj_XKVLKksT1ArO0wBvebsiuF00jcj7J5ddghLg3-NO13ESRxg9yVTK6Zh7t5TYnma-t8bO1P1nOpDSoCHj9GwMHjdNhV-wuq0ftIYwFxOdfmDQ5GtM_cIg';

    api.CardRegistrations.update(data, function (updatedData) {
        console.log(updatedData);
    });
});
