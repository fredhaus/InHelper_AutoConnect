let val = "nix"

document.getElementById('automate-form').onsubmit = event => {
  event.preventDefault()
  let p = document.createElement("p");
  p.innerHTML = "TEEEEST"
  document.body.appendChild(p)
  chrome.tabs.create({url: `https://www.linkedin.com/in/${val}/#automate`})
}



