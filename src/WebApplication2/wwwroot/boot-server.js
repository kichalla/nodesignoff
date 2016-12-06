var prerendering = require('aspnet-prerendering');

module.exports = prerendering.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var result = '<h1>Hello world!</h1>'
            + '<p>Current time in Node is: ' + new Date() + '</p>'
            + '<p>Request path is: ' + params.location.path + '</p>'
            + '<p>Absolute URL is: ' + params.absoluteUrl + '</p>'
            + '<p>Is gold user: ' + params.data.isGoldUser + '</p>'
            + '<p>Number of cookies: ' + params.data.cookies.length + '</p>'
            + '<p>params.location' + JSON.stringify(params, null, 4) + '</p>';

        resolve({
            html: result,
            globals: {
                albumsList: { "name":"james", "age": 25, "score": 10.5 },
                userData: "some other data"
            }
        });
    });
});