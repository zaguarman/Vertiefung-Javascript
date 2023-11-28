/*
 * Copyright © 2018-2022
 * Merz Information and Communication Technology AG.
 * All rights reserved.
 *
 * C021-DE
 * Einführung in JavaScript: Vertiefung
 */

"use strict";

class BMI {
  constructor(mass, size) {
    this._mass = mass;
    this._size = size;
  }

  get mass() {
    return this._mass;
  }

  get size() {
    return this._size;
  }

  get value() {
    return this._mass / (this._size / 100) ** 2;
  }
}

class Category {
  constructor(name, low, high) {
    this._name = name;
    this._low = low;
    this._high = high;
  }

  get name() {
    return this._name;
  }

  get low() {
    return this._low;
  }

  get high() {
    return this._high;
  }
}

class MainCategory extends Category {
  constructor(name, low, high, subCategories) {
    super(name, low, high);
    this._subCategories = subCategories;
  }

  static fromJSON(mainCategoryAsJSON) {
    const subCategories = [];
    const subCategoriesAsJSON = mainCategoryAsJSON.subCategories;
    for (let subCategoryAsJSON of subCategoriesAsJSON) {
      subCategories.push(SubCategory.fromJSON(subCategoryAsJSON));
    }
    return new MainCategory(
      mainCategoryAsJSON.name,
      mainCategoryAsJSON.low,
      mainCategoryAsJSON.high,
      subCategories
    );
  }

  get subCategories() {
    return this._subCategories;
  }
}

class SubCategory extends Category {
  constructor(name, low, high) {
    super(name, low, high);
  }

  static fromJSON(subCategoryAsJSON) {
    return new SubCategory(
      subCategoryAsJSON.name,
      subCategoryAsJSON.low,
      subCategoryAsJSON.high
    );
  }
}

class Categories {
  static _categories;

  static {
    Categories._categories = Categories.loadCategories();
  }

  static loadCategories() {
    let categories;
    const xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      "http://172.16.5.48/data/bmi_categories_with_definitions.php",
      false
    );

    xhttp.onload = function () {
      const categoriesAsJSON = JSON.parse(this.responseText);
      categories = Categories.fromJSON(categoriesAsJSON);
    };
    xhttp.send();
    return categories;
  }

  static fromJSON(categoriesAsJSON) {
    const categories = [];
    for (let mainCategoryAsJSON of categoriesAsJSON) {
      categories.push(MainCategory.fromJSON(mainCategoryAsJSON));
    }
    return categories;
  }

  static get categories() {
    return Categories._categories;
  }
}

function showBMIResult() {
  const bmi = new BMI(
    document.forms.entry.weight.value,
    document.forms.entry.height.value
  );

  const massOutputDiv = document.getElementById("mass");
  if (massOutputDiv.childNodes.length > 0) {
    massOutputDiv.removeChild(massOutputDiv.lastElementChild);
  }
  const massOutputParagraph = document.createElement("p");
  massOutputParagraph.innerText = `Ihre Körpermasse: ${bmi.mass} kg`;
  document.getElementById("mass").appendChild(massOutputParagraph);

  const sizeOutputDiv = document.getElementById("size");
  while (sizeOutputDiv.hasChildNodes()) {
    sizeOutputDiv.removeChild(sizeOutputDiv.lastElementChild);
  }
  const sizeOutputParagraph = document.createElement("p");
  const sizeOutputText = document.createTextNode(
    `Ihre Körpergrösse: ${bmi.size} cm`
  );
  sizeOutputParagraph.appendChild(sizeOutputText);
  sizeOutputDiv.appendChild(sizeOutputParagraph);

  const bmiOutputDiv = document.getElementById("bmi");
  while (bmiOutputDiv.hasChildNodes()) {
    bmiOutputDiv.removeChild(bmiOutputDiv.lastChildElement);
  }
  const bmiOutputParagraph = document.createElement("p");
  const bmiOutputText = document.createTextNode(
    `Ihr Body-Mass-Index (BMI): ${bmi.value.toFixed(2)} kg/m`
  );
  const bmiOutputTextSuperscript = document.createElement("sup");
  const bmiOutputTextSuperscriptText = document.createTextNode("2");
  bmiOutputTextSuperscript.appendChild(bmiOutputTextSuperscriptText);
  bmiOutputParagraph.appendChild(bmiOutputText);
  bmiOutputParagraph.appendChild(bmiOutputTextSuperscript);
  bmiOutputDiv.appendChild(bmiOutputParagraph);
}

function showBMITable() {
  const categories = Categories.categories;

  let table = "";
  table += `<table style="background-color: lavender;width: 50%">`;
  table += `<caption>Beurteilungen zum BMI (nach WHO, Stand 2008)</caption>`;
  table += `<thead>`;
  table += `<tr>`;
  table += `<th>Körpergewicht</th>`;
  table += `<th>Kategorie</th>`;
  table += `<th>von</th>`;
  table += `<th>bis</th>`;
  table += `</tr>`;
  table += `</thead>`;
  table += `<tbody>`;
  for (const category of categories) {
    const subCategories = category.subCategories;
    if (subCategories.length === 0) {
      table += `<tr>`;
      table += `<td>${category.name}</td>`;
      table += `<td></td>`;
      table +=
        category.low === null
          ? `<td></td>`
          : `<td>${category.low.toFixed(1)}</td>`;
      table +=
        category.high === null
          ? `<td></td>`
          : `<td>&lt; ${category.high.toFixed(1)}</td>`;
      table += `</tr>`;
    } else {
      for (const index in subCategories) {
        const subCategory = subCategories[index];
        if (index == 0) {
          table += `<tr>`;
          table += `<td rowspan="${subCategories.length}">${category.name}</td>`;
          table += `<td>${subCategory.name}</td>`;
          table +=
            subCategory.low === null
              ? `<td></td>`
              : `<td>${subCategory.low.toFixed(1)}</td>`;
          table +=
            subCategory.high === null
              ? `<td></td>`
              : `<td>&lt; ${subCategory.high.toFixed(1)}</td>`;
          table += `</tr>`;
        } else {
          table += `<tr>`;
          table += `<td>${subCategories[index].name}</td>`;
          table +=
            subCategory.low === null
              ? `<td></td>`
              : `<td>${subCategory.low.toFixed(1)}</td>`;
          table +=
            subCategory.high === null
              ? `<td></td>`
              : `<td>&lt; ${subCategory.high.toFixed(1)}</td>`;
          table += `</tr>`;
        }
      }
    }
  }
  table += `</tbody>`;
  table += `</table>`;

  document.getElementById("table-of-bmi-categories").innerHTML = table;
}

function init() {
  showBMITable();
  showHomePage();
}

function hideAllPages() {
  const pages = document.querySelectorAll("main > section");
  for (const page of pages) {
    page.style.display = "none";
  }
}

function showHomePage() {
  hideAllPages();
  document.getElementById("home").style.display = "block";
}

function showTablePage() {
  hideAllPages();
  document.getElementById("table").style.display = "block";
}

function showCalculatorPage() {
  hideAllPages();
  document.getElementById("calculator").style.display = "block";
}
