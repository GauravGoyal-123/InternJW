const arr = [
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },
    {
        date : "16 july",
        Name : "3 idiots",
        desc : "Movie based on the Engineer's life"
    },

]

const section = document.querySelector(".movie-detail");

for (let index = 0; index < arr.length; index++) {
    const div = document.createElement('div');
    div.className = "section-item"
    const date_p = document.createElement('p');
    date_p.className = "movie-date"
    date_p.textContent = arr[index].date;
    const name_p = document.createElement('p');
    name_p.className = "movie-name";
    name_p.textContent = arr[index].Name;
    const desc_p = document.createElement('p');
    desc_p.className = "movie-desc"
    desc_p.textContent = arr[index].desc;
    const btn = document.createElement("button");
    btn.type = "submit"
    btn.className = "buy-ticket";
    btn.textContent = "Buy Ticket";
    div.appendChild(date_p);
    div.appendChild(name_p);
    div.appendChild(desc_p);
    div.appendChild(btn);
    // console.log(div);

    section.appendChild(div);
    // div.style.display = "flex";
    // div.style.justifyContent = "space-between";
    // div.style.borderBottom = "1px solid grey";    
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    var playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  });

// let play = true;


// document.addEventListener("DOMContentLoaded", function() {
//     // Get the audio element
//     var audio = document.querySelector("play");
  
//     // Play the audio
//     function playAudio() {
//       audio.play();
//     }
  
//     // Pause the audio
//     function pauseAudio() {
//       audio.pause();
//     }
  
//     // Add event listeners to play and pause buttons (assuming you have buttons with IDs "playButton" and "pauseButton")
//     document.querySelector(".play").addEventListener("click", ()=>{
//         if(play) {
//             playAudio();
//         }
//         else {
//             pauseAudio();
//         }
//         play = !play;
//     });
//     // document.getElementById("pauseButton").addEventListener("click", pauseAudio);
//   });
  