import * as podcasts from "./data.js";
import * as category from "./categorydata.js";

export let library=JSON.parse(localStorage.getItem('Library'))||[{
  id:'id2',
  image:"https://i.scdn.co/image/ab67656300005f1fe5841c0bf9e30a9dce0034b6",
  name:"Moment Of Silence",
  author:"Sakshi and Naina",
  duration:'30min 2sec'
}];

export function renderLibraryPage(){
 let fullHTML='';
  let i=1;
  let firstPodcast;
  library.forEach( (podcast) => {
      if(i===1) firstPodcast=podcast;
      fullHTML+=
      `<tr>
        <td>${i}</td>
        <td>
          <div class="song-info">
            <img src=${podcast.image} class="album-cover" alt="Album Art" />
            <div>
              <div class="song-title">${podcast.name}</div>
              <div>${podcast.author}</div>
            </div>
          </div>
        </td>
        <td>${podcast.name}</td>
        <td>6 minutes ago</td>
        <td>${podcast.duration}</td>
      </tr>
        `;
        i++;
  });
      
  document.querySelector('.js-library').innerHTML=`${fullHTML}`;
  let len=library.length;
  
  // Helper function to convert a duration string to total seconds
function parseDuration(duration) {
  const minMatch = duration.match(/(\d+)\s*min/);
  const secMatch = duration.match(/(\d+)\s*sec/);

  const minutes = minMatch ? parseInt(minMatch[1], 10) : 0;
  const seconds = secMatch ? parseInt(secMatch[1], 10) : 0;

  return minutes * 60 + seconds;
}

// Sum all durations in seconds from the objects
const totalSeconds = library.reduce((sum, podcast) => {
  return sum + parseDuration(podcast.duration);
}, 0);

// Convert total seconds to minutes and seconds
const totalHours = Math.floor(totalSeconds/3600);
const totalMinutes = Math.floor((totalSeconds)%3600 / 60);
const remainingSeconds = totalSeconds % 60;

console.log(`Total Duration:${totalHours}hours ${totalMinutes}min ${remainingSeconds}sec`);

  document.querySelector('.paragraph').innerHTML=`<strong>VIVEK POTNURU</strong> • ${len} podcasts, ${totalHours}hours ${totalMinutes}min ${remainingSeconds}sec`;
  let img=document.createElement("img");
  let source=firstPodcast.image;
  img.src=source;
  img.alt="cover";
  img.style.width="70%";
  img.style.borderRadius="10%";
  document.querySelector('.header-img').appendChild(img);
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.js-library')) {
    renderLibraryPage();
  }
});

  
  export function addToLibrary(id,name){
      let matchingItem;
      let existingItem;
      let variable;
      console.log(name);
      if(name!=='podcasts'){
        variable=category[name];
        console.log(variable);
      }else{
        variable=podcasts[name];
      }
      variable.forEach( (item)=>{
          if(item.id===id){
              matchingItem=item;
          }
      });
     console.log(matchingItem);
      library.forEach( (item)=>{
        if(item.id===matchingItem.id){
            existingItem=item;
        }
      });

      if(!existingItem){ 
        library.push({
          id:matchingItem.id,
          image:matchingItem.image,
          name:matchingItem.name,
          author:matchingItem.author,
          duration:matchingItem.duration
      }); 
      }
      
      console.log(library);
      localStorage.setItem('Library',JSON.stringify(library));
  }
  