const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d38cb2d6b1775fd99978e7962990fe8a&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude);
    request({ url, json: true }, (error, response, body) => {
        if(error) {
            callback('Unable to access services');
        } else if(body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, 'Temperature: '+body.current.temperature+', Feels like: '+body.current.feelslike);
        }
    });

};

module.exports = forecast;