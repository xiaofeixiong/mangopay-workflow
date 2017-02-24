var mangopay = require('mangopay2-nodejs-sdk');

var api = new mangopay({
    clientId: 'taskito',
    clientPassword: 'Eii2mqpB01yqKjydchRSFHfz2zsW8dPSiDuhrQZFEuZ8i5WsYy',
    // Set the right production API url. If testing, omit the property since it defaults to sandbox URL
    //baseUrl: 'https://api.mangopay.com'
});

api.Users.create({
    FirstName: "Xiaofei",
    LastName: "Xiong",
    Birthday: 1300186358,
    Nationality: "FR",
    CountryOfResidence: "FR",
    Occupation: "Writer",
    IncomeRange: "6",
    ProofOfIdentity: null,
    ProofOfAddress: null,
    PersonType: "NATURAL",
    Email: "xiaofei.xiong@gmail.com",
    Tag: "custom tag",
}, function(model) {
    // User created - using callback
    console.log(model.FirstName + ' user created with id ' + model.Id);

}).then(function(model){
    // User created - using promise
});


var myUser = new api.models.UserLegal({
    Name: 'MangoPay',
    Email: 'info@mangopay.com',
    LegalPersonType: 'BUSINESS',
    LegalRepresentativeFirstName: 'Mango',
    LegalRepresentativeLastName: 'Pay',
    LegalRepresentativeEmail: 'mango@mangopay.com',
    HeadquartersAddress: new api.models.Address({
        AddressLine1: "4101 Reservoir Rd NW",
        AddressLine2: "",
        City: "Washington",
        Region: "District of Columbia",
        PostalCode: "20007",
        Country: "US"
    }),
    LegalRepresentativeBirthday: 1300186358,
    LegalRepresentativeNationality: 'FR',
    LegalRepresentativeCountryOfResidence: 'FR',
    Tag: 'custom tag'
});

api.Users.create(myUser).then(function(){
    // Output the created user data to console
    console.log(myUser.Name + ' user created at ' + myUser.CreationDate);
});
