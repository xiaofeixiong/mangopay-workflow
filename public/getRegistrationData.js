var querystring = require('querystring');
var https = require('https');

var post_data = querystring.stringify({
    accessKeyRef: '1X0m87dmM2LiwFgxPLBJ',
    data: 'HBalUf7sKsj1NiktfVS7-5f7VT5gfRfurzYdVwY7bz_JK9LB7x1LkV_htgGfF8jmS4wCy-yiraxeE65tmxOe8A',
    cardNumber: '4706750000000009',
    cardExpirationDate: '1019',
    cardCvx: '414'
});

// Set the headers
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(post_data)
}


// Configure the request
var options = {
    host: 'homologation-webpayment.payline.com',
    path: '/webpayment/getToken',
    method: 'POST',
    headers: headers
}

var post_req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

// post the data
post_req.write(post_data);
post_req.end();

