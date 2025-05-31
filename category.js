import * as category from "./categorydata.js";
import { addToLibraryButtonsClicks,addedToLibraryMsg } from "./script.js";



export function generateCategoryPage(name) {
  let row1 = '';
  let row2='';
  let completeHTML='';
  let cleanName = name.replace(/\s+/g, '');
  let variable = category[cleanName];

  if (!variable) {
    console.error(`No data for category: ${cleanName}`);
    return;
  }

  variable.forEach(categorie => {
    row1 += `
      <div class="podcast-item">
        <img src="${categorie.image}" alt="${categorie.name}" />
        <div class="podcast-title">${categorie.name}</div>
        <button class="add-to-library js-add-to-library" id="${categorie.id}" data-id="${categorie.id}" data-name="${cleanName}">Add</button>
      </div>
    `;
  });

  for(let i=variable.length-1;i>=0;i--){
    const categorie=variable[i];
    row2 += `
      <div class="podcast-item">
        <img src="${categorie.image}" alt="${categorie.name}" />
        <div class="podcast-title">${categorie.name}</div>
         <button class="add-to-library js-add-to-library" id="${categorie.id}" data-id="${categorie.id}" data-name="${cleanName}">Add</button>
      </div>
    `
  }
  completeHTML=row1+row2;
  document.querySelector('.js-podcast-list').innerHTML = completeHTML;
  document.querySelector('.header').textContent = name;
}

// Run this after the page loads
window.addEventListener("DOMContentLoaded", () => {
  const categoryName = sessionStorage.getItem("selectedCategory");
  const colorClass = sessionStorage.getItem("selectedColorClass");

  if (categoryName && colorClass) {
    generateCategoryPage(categoryName);

    const tempDiv = document.createElement("div");
    tempDiv.className = colorClass;
    document.body.appendChild(tempDiv);

    const computedColor = getComputedStyle(tempDiv).backgroundColor;
    console.log("🎨 Computed color:", computedColor);

    // Apply the background gradient with !important to override any CSS
    document.body.style.setProperty(
      "background",
      `linear-gradient(to bottom, ${computedColor}, black)`,
      "important"
    );

    tempDiv.remove();
    addToLibraryButtonsClicks();
  }
});

  

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