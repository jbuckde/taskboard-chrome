// Saves options to chrome.storage
function save_options() 
{
  var sUrl = document.getElementById("url").value;
  chrome.storage.sync.set({
    targetURL: sUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = "";
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() 
{
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    targetURL: "https://board.int.sap.hana.ondemand.com/board/"
  }, function(items) {
     document.getElementById("url").value = items.targetURL;
  });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function reset_options() 
{
    chrome.storage.sync.set({
         targetURL: "https://board.int.sap.hana.ondemand.com/board/"
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById("status");
        status.textContent = "Options reset.";
        setTimeout(function() {
        status.textContent = "";
        }, 750);

         document.getElementById("url").value = "https://board.int.sap.hana.ondemand.com/board/";
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);