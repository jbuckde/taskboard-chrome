var sBcpHost = "support.wdf.sap.corp";
var sPageTitle = jQuery(document).find("title").text();
var regex = /[^:](\d*)[,](.*)([-])/;
var aMatchParts = regex.exec(sPageTitle);

function getBcpURL(sMessageId) {
    return window.location.protocol + "//" + sBcpHost + "/sap/support/message/" + sMessageId;
};

function getBCPTitle(sTitle) {
    return sTitle.trim();
};

var oPageInfo = {
    'title': getBCPTitle(aMatchParts[2]),
    'url': getBcpURL(aMatchParts[1])
};
// Send a message containing the page details back to the event page
chrome.runtime.sendMessage(oPageInfo);