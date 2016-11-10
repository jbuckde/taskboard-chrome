// When the popup HTML has loaded
window.addEventListener("load", function(evt) 
{
    // access selected tab and inject content script to extract required information (title and url) 
    // based on the url type e.g. special handling for bcp
    chrome.tabs.getSelected(null, function(tab) 
    {
        var matches = tab.url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i), //
        sTabHostname = matches && matches[1];
        
        // Inject the jquery and content script into the current page
        chrome.tabs.executeScript(null, { file: "jquery-3.1.1.min.js" }, function()
        {
            if( "support.wdf.sap.corp" === sTabHostname )
            {
                chrome.tabs.executeScript(null, { file: "bcpContent.js" });
            }
            else
            {
                chrome.tabs.executeScript(null, { file: "content.js" });
            }
        });
    });

    var sTargetBoardURL = "https://board.int.sap.hana.ondemand.com/board/";
    chrome.storage.sync.get("targetURL", function(item) {
        sTargetBoardURL = item && item.targetURL ? item.targetURL : "https://board.int.sap.hana.ondemand.com/board/";
    });


    //Add listener to react on content.js data extraction and trigger board,group selector from board web application
    chrome.runtime.onMessage.addListener(function (oPageDetails) 
    {
        var pageTitle = oPageDetails.title, //
        pageURL = oPageDetails.url, //
        boarURL = sTargetBoardURL + "/selector?pageTitle=",
        sURL = boarURL + encodeURIComponent(pageTitle) + "&pageURL=" + encodeURIComponent(pageURL);
        $("#selectorView").attr("src", sURL);
    });
});