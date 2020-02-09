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
let gsElems = [document.querySelector("#main-content .branding-container"), document.querySelector("#main-content .get-started-button")];
let prefBoxes = [document.querySelector("#main-content-Pref .preference-box.box1"), document.querySelector("#main-content-Pref .preference-box.box2"), document.querySelector("#main-content-Pref .preference-box.box3")];

function getStarted() {
  // Replace main-content with preference checkboxes
  clearMain();
  getStreamInfo();
  setTimeout( () => console.log(streams), 1000);
  traverseStreamInfo();
}

const clearMain = () => {
  // set respective "display" attributes
  for (i in gsElems) {
    gsElems[i].style.display="none";
  }
  document.querySelector("#main-content").style.display="none";
  document.querySelector("#main-content-Pref").style.display = "flex";
  for (i in prefBoxes) {
    prefBoxes[i].style.display="flex"
  }
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