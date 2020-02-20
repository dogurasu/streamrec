// channel class
class Channel {
  constructor(name, channel_id, tag_ids) {
    this.name = name;
    this.channelID = channel_id;
    this.tags = [];
    this.numTags = 0;
  }
  setTags = (name, tagDesc) => {
    this.tags.push({
      [name]: tagDesc
    })
    ++this.numTags;
  }
}

// variables
let clientID = config.API_KEY;
let streams = [];
let channels = [];
let pageIndex = '';
let tags = {};

// getButtons & Elements
document.querySelector(".get-started-button").addEventListener('click', getStarted);
let gsElems = [document.querySelector("#main-content .branding-container"), document.querySelector("#main-content .get-started-button")];
let prefBoxes = [document.querySelector("#main-content-Pref .preference-box.box1"), document.querySelector("#main-content-Pref .preference-box.box2"), document.querySelector("#main-content-Pref .preference-box.box3")];
// add event Listeners for preference boxes


function getStarted() {
  // Replace main-content with preference checkboxes
  clearMain();
  getStreamInfo();
  traverseStreamInfo();
  collectChannelTags();
  listTags();
}

function boxSelected() {
  let boxNum = this.className[this.className.length-1]-1;
  prefBoxes[boxNum].innerHTML= `<a href="https://www.twitch.tv/${channels[boxNum].name}" class="streamer-name" target="_blank">${channels[boxNum].name}</a>`; 
  // then change the name so that this function does not run again
  this.removeEventListener('click', boxSelected);
}

const listTags = () => {
  setTimeout(() => {
    let boxes = [];
    for (let i = 1; i < 4; ++i) {
      boxes.push(document.querySelector("#main-content-Pref .preference-box.box" + i))
    }
    console.log(channels)
    console.log(boxes);
    setTimeout(() => {
      for (let i = 0; i < 3; ++i) {
        let pString = `${Object.keys(channels[i].tags[0])[0]}: ${Object.values(channels[i].tags[0])[0]}`;
        boxes[i].innerHTML= `<h2 class="tags-title">Tags:</h2>
        <p class="tagDesc">${pString}</p> `;
      }
    }, 1000)
    for (let i = 0; i < 3; ++i) {
      prefBoxes[i].addEventListener('click', boxSelected);
    }
  }, 1000);
}


const collectChannelTags = () => {
  setTimeout(() => {
    for (let i = 0; i < channels.length; ++i) {
      getChannelTags(i);
    }
  }, 1000)
}

const clearMain = () => {
  // set respective "display" attributes
  for (i in gsElems) {
    gsElems[i].style.display="none";
  }
  let boxes = [];
  document.querySelector("#main-content").style.display="none";
  document.querySelector("#main-content-Pref").style.display = "flex";
  for (i in prefBoxes) {
    prefBoxes[i].style.display="flex"
  }
  for (let i = 1; i < 4; ++i) {
    boxes.push(document.querySelector("#main-content-Pref .preference-box.box" + i))
  }
}

// call Twitch API for stream info
const getStreamInfo = () => {
  // Get Top 100 streams
  let paginCursor = '';
  let url = "https://api.twitch.tv/helix/streams?first=100&after=";
  fetch(url + paginCursor, {
    headers: {
      'Client-ID': `${clientID}`
    }
    })
  .then(res => {
    return(res.json())
  })
  .then(resJSON => {
    streams.push(resJSON.data);
    paginCursor = resJSON.pagination.cursor;
  })
}

// traverse returned JSON object
const traverseStreamInfo = () => {
  setTimeout(() => {
    // select 3 random streams and their tag info
    let myRands = [];
    // let num = 1;
    for (let i = 0; i < 5; ++i) {
      myRands.push(Math.ceil(Math.random()*100));
    }
    // Get random Channels
    streams = streams[0];
    for (let j = 0; j < 5; ++j) {
      let currStream = streams[myRands[j]];
      channels.push(new Channel(currStream.user_name, currStream.user_id, currStream.tag_ids))
    }
  }, 1000);
}

const getChannelTags = (channelInd) => {
  let currChannel = channels[channelInd];
  let url = "https://api.twitch.tv/helix/streams/tags?broadcaster_id=" + currChannel.channelID;
  fetch(url, {
    headers: {
      "Client-ID": `${clientID}`
    }
  })
  .then (res => res.json())
  .then (tagArray => {
    for (let i = 0; i < tagArray.data.length; ++i) {
      currChannel.setTags(tagArray.data[i].localization_names["en-us"], tagArray.data[i].localization_descriptions["en-us"]);
    }
  })
}