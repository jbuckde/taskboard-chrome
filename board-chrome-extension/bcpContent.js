var sBcpHost = "support.wdf.sap.corp";
function getBCPFrame() 
{
    return $("frame#WorkAreaFrame1", $("iframe").contents()).contents();
};

function getBcpURL(oFrameDom) 
{
    var sMessageId = $("span[id*='object_id']", oFrameDom).text();
    return window.location.protocol + "//" + sBcpHost + "/sap/support/message/" + sMessageId;
};

function getBCPTitle(oFrameDom) 
{
    return $("span[id*='description']", oFrameDom).text();
};

var oFrameDom = getBCPFrame(), //
    oPageInfo = {
        'title': getBCPTitle(oFrameDom),
        'url': getBcpURL(oFrameDom)
    };
// Send a message containing the page details back to the event page
chrome.runtime.sendMessage(oPageInfo);