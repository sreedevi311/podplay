import {categories} from "./data.js";

export function generateCategoriesPage(){
let fullHTML='';
  let i=1;
  categories.forEach( (categorie) => {
      fullHTML+=
      `
        <div class="card color-${i} with-image js-card" data-id="${categorie.id}" data-name="${categorie.name}">
              <img src="${categorie.image}" alt="Music Category">
              <span>${categorie.name}</span>
        </div>
        `;
        i++;
  });
      
  document.querySelector('.js-grid').innerHTML=`${fullHTML}`;
}
generateCategoriesPage();
/*
function categoryClicks(){
    document.querySelectorAll('.js-card').forEach( (div)=>{
        div.addEventListener('click',()=>{
            const {id,name} =div.dataset;
            generateCategoryPage(id,name);
        });
    });
}
categoryClicks();

function generateCategoryPage(id,name){
  let fullHTML='';
  let i=1;
  let variable=category.name;
  variable.forEach( (categorie) => {
      fullHTML+=
      `
        <div class="header">${variable}</div>
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
      
  document.querySelector('.js-body').innerHTML=`${fullHTML}`;
}
  */