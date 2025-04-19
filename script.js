import {categories, podcasts} from "./data.js";
export let cart=JSON.parse(localStorage.getItem('library'))||[{id:'id2',
                                                              image:"https://i.scdn.co/image/ab67656300005f1fe5841c0bf9e30a9dce0034b6",
                                                              name:"Moment Of Silence",
                                                              author:"Sakshi and Naina",
                                                              duration:'30min 2sec'}];

const playBtn = document.getElementById('play-pause');
let playing = false;

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.textContent = playing ? '⏸' : '▶';
});
function scrollLeftPodcasts() {
    const container = document.getElementById("podcastScroll");
    container.scrollBy({ left: -200, behavior: "smooth" });
  }
  
  function scrollRightPodcasts() {
    const container = document.getElementById("podcastScroll");
    container.scrollBy({ left: 200, behavior: "smooth" });
  }
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on ${card.innerText} category`);
    });
  });
  const mainBtn = document.getElementById("mainBtn");
const dropdown = document.getElementById("dropdown");

mainBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("show");
});




//display all products in home page

 let totalHTML='';
 podcasts.forEach( (podcast) => {
    totalHTML+=
    `
      <div class="podcast-card" role="button" tabindex="0"
                 aria-labelledby="title-pod-4 subtitle-pod-4">
              <img src="${podcast.image}" alt="Podcast Cover" />
              <h4 id="title-h4">${podcast.name}</h4>
              <span  id="subtitle-p"><p>${podcast.author}</p></span>
              <button class="add-to-library" data-id="${podcast.id}">Add</button>
            </div>
    `;
 });

 document.querySelector('.js-scroll-container').innerHTML=`${totalHTML}`;


 let completeHTML = '';
 for (let i = 0; i < categories.length && i < 8; i++) {
     completeHTML += `
       <div class="card color-${i + 1} with-image">
             <img src="${categories[i].image}" alt="Music Category">
             <span>${categories[i].name}</span>
       </div>
     `;
 }
 
 document.querySelector('.js-grid').innerHTML = completeHTML;

 
