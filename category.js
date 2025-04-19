import * as category from "./categorydata.js";

function categoryClicks(){
  document.querySelectorAll('.js-card').forEach( (div)=>{
      div.addEventListener('click',()=>{
          let name=div.getAttribute('data-name');
          console.log(name);
          //generateCategoryPage(name);
      });
  });
}
categoryClicks();
/*
function generateCategoryPage(name){
let fullHTML='';
let i=1;
console.log(name);
let cleanName=name.replace(/\s+/g, '');

let variable=category[cleanName];

if (!variable) {
  console.error(`No data found for category: ${cleanName}`);
  return;
}

variable.forEach( (categorie) => {
    fullHTML+=
    `
      <div class="header">${name}</div>
      <div style="background: linear-gradient(color-${i},black); height: 250px;">
        <div class="section-title">Best episodes of the week</div>
        <div class="podcast-list">
          <div class="podcast-item">
            <img src="${categorie.image}" alt="Podcast 1" />
            <div class="podcast-title">${categorie.name}</div>
          </div>
        </div>
      </div>
      `;
      i++;
});
    
document.querySelector('.js-main').innerHTML=`${fullHTML}`;
}
generateCategoryPage();
*/