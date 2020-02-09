// variables
let clientID = config.API_KEY;
let streams = {};
let tags = {};

// get Tags JSON data
fetch('./twitchScrape/tags.json')
  .then (res => {
    return res.json();
  })
  .then (jsonData => {
    // console.log(Object.keys(jsonData).length);
    tags = jsonData;
  });

document.querySelector(".get-started-button").addEventListener('click', getStarted);
let replaceItems = [document.querySelector("#main-content .branding-container"), document.querySelector("#main-content .get-started-button")]

function getStarted() {
  // Replace main-content with preference checkboxes
  clearMain();
  getStreamInfo();
  setTimeout( () => console.log(streams), 1000);
  traverseStreamInfo();
}

const clearMain = () => {
  // clear the main-content area
  for (i in replaceItems) {
    replaceItems[i].style.display="none";
  }
  // console.log(mainContent);
}

// call Twitch API
const getStreamInfo = () => {  
  fetch('https://api.twitch.tv/helix/streams?first=20', {
    headers: {
      'Client-ID': `${clientID}`
    }
    })
    .then(res => {
      return(res.json())
    })
    .then(resJSON => streams=resJSON);
}

// traverse returned JSON object
const traverseStreamInfo = () => {
  let streams = [];
  console.log()
}