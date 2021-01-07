chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			
			if (window.location.hash === "#automate"){
				console.log("Automating!")
			}
    }
  }, 10);
});
