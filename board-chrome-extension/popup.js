// This callback function is called when the content script has been 
// injected and returned its results
function onPageDetailsReceived(pageDetails)  { 
    var pageTitle = pageDetails.title,
    pageURL = pageDetails.url,
    pageSummary = pageDetails.summary; 
    
    var url = "http://localhost:8080/board/selector?pageTitle=" + encodeURIComponent(pageTitle) + "&pageURL=" + encodeURIComponent(pageURL); 
    document.getElementById("selectorView").setAttribute("src", url);
}

//window.onload = function()
//{
//    var url = "http://localhost:8080/board/selector?pageTitle=" + pageTitle; //You can get this url dynamically from an ajax request or from a form etc
    
    // To Do : A function to populate url with a valid url from any method you prefer.
    
    // Set an ID for the iframe. Let us give that an id of myframe
//    document.getElementById("selectorView").setAttribute("src", url);
//}
        
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    //statusDisplay = document.getElementById('status-display');
    // Handle the bookmark form submit event with our addBookmark function
    //document.getElementById('addbookmark').addEventListener('submit', addBookmark);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});