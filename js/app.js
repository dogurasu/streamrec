// variables
let clientID = config.API_KEY;
let streamInfo = {};

// get Tags JSON data

document.querySelector(".get-started-button").addEventListener('click', getStarted);
let mainContent = document.querySelector("#main-content");

function getStarted() {
  // Replace main-content with preference checkboxes
  clearMain();
  getStreamInfo();
  setTimeout( () => console.log(streamInfo), 1000);
  traverseStreamInfo();
}

const clearMain = () => {
  // clear the main-content area
  mainContent.innerHTML = "";
  console.log(mainContent);
}

// call Twitch API
const getStreamInfo = () => {  
  fetch('https://api.twitch.tv/helix/tags/streams', {
    headers: {
      'Client-ID': `${clientID}`
    }
    })
    .then(res => {
      return(res.json())
    })
    .then(resJSON => streamInfo=resJSON);
}

// traverse returned JSON object
const traverseStreamInfo = () => {
  let streams = [];
  console.log()
}