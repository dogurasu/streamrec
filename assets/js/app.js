fetch('clientID')
  .then(res => res.text())
  .then(txt => console.log(txt));

// fetch('https://api.twitch.tv/helix/streams?first=20', {
//   headers: {
//     'Client-ID': `${clientID}`
//   }
// })
//   .then(res => res.json())
//   .then(resJSON => console.log(resJSON))