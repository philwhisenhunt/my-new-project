//Make all the features from Apify available 
const Apify = require('apify');

//request the page that you want
const Apify = require('apify');

Apify.main(async () => {
    //create the request queue instance.
    const requestQueue = await Apify.openRequestQueue();
    // then, and ONLY then, can we add a request to it
    await requestQueue.addRequest({ url: 'https://www.apify.com'});

});

consta handlePageFunction = async ({ request, $ }) => {
    const title = $('title').text();
    console.log(`The title of "${request.url}" is: ${title}.`);

}

//Set up the crawler, passing a single options object as an argument. 