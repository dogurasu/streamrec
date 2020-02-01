// variables
let clientID = config.API_KEY;
let streamInfo = {};

document.querySelector(".get-started-button").addEventListener('click', getStarted);
let mainContent = document.querySelector("#get-started");

// function for getting started
function getStarted() {
  clearMain();
  getStreamInfo();
  setTimeout( () => console.log(streamInfo), 1000);
  traverseStreamInfo();
}

const clearMain = () => {
  
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
    .then(resJSON => streamInfo=resJSON);
}

// traverse returned JSON object
const traverseStreamInfo = () => {
  let streams = [];
  console.log()
}