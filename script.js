import {categories, podcasts} from "./data.js";

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
              <h4 id="title-pod-4">${podcast.name}</h4>
              <p id="subtitle-pod-4">${podcast.author}</p>
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

 
function displayCategories(){
  let fullHTML='';
  let i=1;
  categories.forEach( (categorie) => {
      fullHTML+=
      `
        <div class="card color-${i} with-image">
              <img src="${categorie.image}" alt="Music Category">
              <span>${categorie.name}</span>
        </div>
        `;
  });
      
  document.querySelector('.js-grid').innerHTML=`${fullHTML}`;
}
