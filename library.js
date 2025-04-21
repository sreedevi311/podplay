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
  let img=document.createElement("img");
  let source=firstPodcast.image;
  img.src=source;
  img.alt="cover";
  img.style.width="50px";
  document.querySelector('.image-div').appendChild(img);
}

window.addEventListener("DOMContentLoaded", () => {
  renderLibraryPage();
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
  
