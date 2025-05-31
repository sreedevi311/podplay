import {categories, podcasts} from "./data.js";
import { addToLibrary } from "./library.js";

export function playBtn(){
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
}
window.addEventListener("DOMContentLoaded", () => {
  playBtn();
});



//display all products in home page
export function renderHomePagePodcasts(){
 let totalHTML='';
 podcasts.forEach( (podcast) => {
    totalHTML+=
    `
      <div class="podcast-card" role="button" tabindex="0"
                 aria-labelledby="title-pod-4 subtitle-pod-4">
              <img src="${podcast.image}" alt="Podcast Cover" />
              <h4 id="title-h4">${podcast.name}</h4>
              <span  id="subtitle-p"><p>${podcast.author}</p></span>
              <button class="add-to-library js-add-to-library" id="${podcast.id}" data-id="${podcast.id}" data-name="podcasts">Add</button>
            </div>
    `;
 });

 document.querySelector('.js-scroll-container').innerHTML=`${totalHTML}`;
}
window.addEventListener("DOMContentLoaded", () => {
  renderHomePagePodcasts();
});


export function renderHomePageCategories(){
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
}
window.addEventListener("DOMContentLoaded", () => {
  renderHomePageCategories();
});


 export function addToLibraryButtonsClicks(){
     document.querySelectorAll('.js-add-to-library').forEach( (button)=>{
         button.addEventListener('click',()=>{
             const {id,name}=button.dataset;
             console.log(id);
             console.log(name);
             addedToLibraryMsg(id);
            
             addToLibrary(id,name);
             
         });
     });
 }
 window.addEventListener("DOMContentLoaded", () => {
  addToLibraryButtonsClicks();
});



 export function addedToLibraryMsg(id){
  const msgDiv=document.getElementById(`${id}`);
      if(msgDiv.innerHTML==='Add'){
        msgDiv.innerHTML='Added';
        msgDiv.classList.add('added-to-library');
    }else{
        msgDiv.innerHTML='Add';
        msgDiv.classList.remove('added-to-library');
    }
}
