// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     let myDate;
//     for (let i = 0; i < 10000000; ++i) {
//         let date = new Date();
//         myDate = date;
//     }
//     console.log(myDate);

//     let pElem = document.createElement('p');
//     pElem.textContent = "This is a newly-added paragraph.";
//     document.body.appendChild(pElem);
// })
// function expensiveOperation() {
//     for(let i = 0; i < 1000000; i++) {
//       ctx.fillStyle = 'rgba(0,0,255, 0.2)';
//       ctx.beginPath();
//       ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
//       ctx.fill()
//     }
//   }
  
//     fillBtn.addEventListener('click', expensiveOperation);

//     alertBtn.addEventListener('click', () =>
//     alert('You clicked me!')
// );

// let myDate = new Date();
// console.log(myDate.getSeconds());

// console.log("Sync Code1")

// fetch("sandbox.html")
//     .then( () => {
//         setTimeout( () => console.log("First Then"), 2000)
//         // console.log(myDate.getSeconds());
//     })
//     .then( () => {
//         setTimeout( () => console.log("Second Then"), 1000)
//         console.log("DIdin't wait");
//         // console.log(myDate.getSeconds());
//     })

// console.log("Sync Code2")

setTimeout( () => console.log("First then"), 1000);
setTimeout( () => console.log("Second then"), 2000);
console.log("In Order");