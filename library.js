import { podcasts } from "./data.js";

 let fullHTML='';
  let i=1;
  podcasts.forEach( (podcast) => {
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
