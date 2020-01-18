// variables
let clientID = config.API_KEY;
let streamInfo = {};

document.querySelector(".get-started-button").addEventListener('click', getStarted);

// function for getting started
function getStarted() {
  getStreamInfo();
  setTimeout( () => console.log(streamInfo), 1000);
  traverseStreamInfo();
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