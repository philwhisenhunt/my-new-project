//Make all the features from Apify available 
const Apify = require('apify');

//request the page that you want
Apify.main(async () => {
    //create the request queue instance.
    const requestQueue = await Apify.openRequestQueue();
    // then, and ONLY then, can we add a request to it
    await requestQueue.addRequest({ url: 'https://www.visitrichmondva.com/event/rva-on-ice/17800/'});



const handlePageFunction = async ({ request, $ }) => {
    const title = $('title').text();
    const location = $('.location').text();
    console.log(`The title of "${request.url}" is: ${title}.`);
    console.log(`The location of "${request.url}" is: ${location}.`);

}

//Set up the crawler, passing a single options object as an argument. 
const crawler = new Apify.CheerioCrawler({
    requestQueue,
    handlePageFunction
});

await crawler.run();
});