document.querySelector(".get-started-button").addEventListener('click', getStarted);

 function getStarted() {
  console.log("Get Started Button Clicked");
}


let clientID;

let getStreamInfo = () => {
  fetch('clientID')
  .then(res => res.text())
  .then(txt => {
    clientID = txt;
  })
  .then(() => {
    fetch('https://api.twitch.tv/helix/streams?first=20', {
      headers: {
        'Client-ID': `${clientID}`
      }
      })
      .then(res => res.json())
      .then(resJSON => console.log(resJSON));
  })
}

