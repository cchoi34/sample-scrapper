const request = require('request');
const cheerio = require('cheerio');

request('exampleURL.com', (error, response, html) => {
    if(!error && response.statusCode === 200) {
        console.log(html);
    }
});