/*
 * Copyright © 2018-2022
 * Merz Information and Communication Technology AG.
 * All rights reserved.
 *
 * C021-DE
 * Einführung in JavaScript: Vertiefung
 */

"use strict";

function parseJsonTest() {
  console.log(Categories.parseJson());
}

function showBMIResult() {
  let bmi = new BMI(
    document.forms.entry.weight.value,
    document.forms.entry.height.value
  );

  let massAnchorNode = document.getElementById("mass");
  let sizeAnchorNode = document.getElementById("size");
  let bmiAnchorNode = document.getElementById("bmi");

  // Creating text nodes
  let massTextNode = HTML_Tools.createElement(
    "text",
    `Ihre Körpermasse: ${bmi.mass} kg`
  );
  let sizeTextNode = HTML_Tools.createElement(
    "text",
    `Ihre Körpergrösse: ${bmi.size} cm`
  );
  let bmiTextNode = HTML_Tools.createElement(
    "text",
    `Ihr Body-Mass-Index (BMI): ${bmi.value.toFixed(2)} kg/m`
  );

  // Creating sup elements
  let supNode = HTML_Tools.createElement("sup");

  // Creating paragraph elements
  let massParagraphNode = HTML_Tools.createElement("P");
  let sizeParagraphNode = HTML_Tools.createElement("P");
  let bmiParagraphNode = HTML_Tools.createElement("P");

  // Adding text nodes and sup elements to paragraph elements
  HTML_Tools.addElements(massParagraphNode, [massTextNode, supNode]);
  HTML_Tools.addElements(sizeParagraphNode, [sizeTextNode, supNode]);
  HTML_Tools.addElements(bmiParagraphNode, [bmiTextNode, supNode]);

  // Adding paragraph elements to anchor nodes
  HTML_Tools.addElements(massAnchorNode, [massParagraphNode]);
  HTML_Tools.addElements(sizeAnchorNode, [sizeParagraphNode]);
  HTML_Tools.addElements(bmiAnchorNode, [bmiParagraphNode]);
}

function showBMITable() {
  if (!document.getElementById("table-of-bmi-categories")) return;

  console.log(Categories.parseJson());

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
  for (let category of Categories.getArray()) {
    let subCategories = category.subCategories;
    if (subCategories.length == 0) {
      table += `<tr>`;
      table += `<td>${category.name}</td>`;
      table += `<td></td>`;
      table +=
        category.low == null
          ? `<td></td>`
          : `<td>${category.low.toFixed(1)}</td>`;
      table +=
        category.high == null
          ? `<td></td>`
          : `<td>&lt; ${category.high.toFixed(1)}</td>`;
      table += `</tr>`;
    } else {
      for (let index in subCategories) {
        let subCategory = subCategories[index];
        if (index == 0) {
          table += `<tr>`;
          table += `<td rowspan="${subCategories.length}">${category.name}</td>`;
          table += `<td>${subCategory.name}</td>`;
          table +=
            subCategory.low == null
              ? `<td></td>`
              : `<td>${subCategory.low.toFixed(1)}</td>`;
          table +=
            subCategory.high == null
              ? `<td></td>`
              : `<td>&lt; ${subCategory.high.toFixed(1)}</td>`;
          table += `</tr>`;
        } else {
          table += `<tr>`;
          table += `<td>${subCategories[index].name}</td>`;
          table +=
            subCategory.low == null
              ? `<td></td>`
              : `<td>${subCategory.low.toFixed(1)}</td>`;
          table +=
            subCategory.high == null
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
  hideAllPages();
  showPage("index");
}

function hideAllPages() {
  const pages = document.querySelectorAll("main > section");
  console.log(pages);
  for (const page of pages) {
    page.style.display = "none";
  }
}

function loadNewPage(pageId) {
  hideAllPages();
  showPage(pageId);
}

function showPage(pageId) {
  switch (pageId) {
    case "calculator":
      document.querySelector("#" + pageId).style.display = "block";
      break;
    case "table":
      document.querySelector("#" + pageId).style.display = "block";
      break;
    case "index":
      document.querySelector("#" + pageId).style.display = "block";
      break;
    default:
      console.log("It didn't work, sorry :(");
  }
}
