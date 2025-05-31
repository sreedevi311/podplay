import { categories } from "./data.js";

export function generateCategoriesPage() {
  let fullHTML = '';
  let i = 1;
  categories.forEach((categorie) => {
    fullHTML += `
      <div class="card color-${i} with-image js-card" data-i="${i}" data-name="${categorie.name}">
        <img src="${categorie.image}" alt="Music Category">
        <span>${categorie.name}</span>
      </div>
    `;
    i++;
  });

  document.querySelector('.js-grid').innerHTML = fullHTML;
}

generateCategoriesPage();

export function categoryClicks() {
  document.querySelectorAll('.js-card').forEach((div) => {
    div.addEventListener('click', () => {
      const { name,i } = div.dataset;
      const colorClass = `color-${i}`;
      // Save to sessionStorage
      sessionStorage.setItem("selectedCategory", name);
      sessionStorage.setItem("selectedColorClass", colorClass);

      // Navigate to the category page
      window.location.href = "category.html";
    });
  });
}

categoryClicks();
//student-04-b491ea18a341@qwiklabs.net
//XZ6oOhs7hWZu
//qwiklabs-gcp-01-36c7f2c0009e