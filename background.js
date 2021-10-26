


//ON page change
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // if (changeInfo.url) {
  if(changeInfo.status == 'complete'){
    setTimeout(() => {
      chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
    } , 8000);
      
    function notify() {
      var opt = {
      iconUrl: "http://www.google.com/favicon.ico",
      type: 'list',
      title: 'Primary Title',
      message: 'Primary message to display',
      priority: 1,
      items: [{ title: 'Item1', message: 'This is item 1.'},
            { title: 'Item2', message: 'This is item 2.'},
            { title: 'Item3', message: 'This is item 3.'}]
      };
    chrome.notifications.create('notify1', opt, function() { 
      console.log('created!'); 
    });
  }

notify()
  }



});

