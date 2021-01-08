chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min) * 1000;
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function automate() {
      console.log("Automating!");
      let timeout1 = getRandomInt(1, 5);
      let timeout2 = getRandomInt(1, 3);
      console.log(`sleeping for: ${timeout1}`);
      await sleep(timeout1);
      document.querySelector(".pv-s-profile-actions--connect").click();
      console.log(`sleeping for: ${timeout2}`);
      await sleep(timeout2);
      document.querySelector(".ml1").click();
    }

    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (window.location.hash === "#automate") {
        automate();
      }
    }
  }, 10);
});
