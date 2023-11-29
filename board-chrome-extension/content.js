var oPageInfo = {
    'title': jQuery(document).find("head>title").text(),
    'url': window.location.href
};
// Send a message containing the page details back to the event page
chrome.runtime.sendMessage(oPageInfo);
