/*
 * Copyright © 2018-2022
 * Merz Information and Communication Technology AG.
 * All rights reserved.
 * 
 * C021-DE
 * Einführung in JavaScript: Vertiefung
 */

"use strict";

function getBMI(mass, size) {
    return mass / (size / 100) ** 2;
}

function showBMIResult() {
    const mass = document.forms.entry.weight.value;
    const size = document.forms.entry.height.value;

    document.getElementById("mass").innerHTML = `<p>Ihre Körpermasse: ${mass} kg</p>`;
    document.getElementById("size").innerHTML = `<p>Ihre Körpergrösse: ${size} cm</p>`;
    document.getElementById("bmi").innerHTML = `<p>Ihr Body-Mass-Index (BMI): ${getBMI(mass, size).toFixed(2)} kg/m<sup>2</sup></p>`;
}

function showBMITable() {
    let categories = [
        {
            name: "Untergewicht",
            low: null,
            high: 18.5,
            subCategories: [
                {
                    name: "stark",
                    low: null,
                    high: 16.0
                },
                {
                    name: "mässig",
                    low: 16.0,
                    high: 17.0
                },
                {
                    name: "leicht",
                    low: 17.0,
                    high: 18.5
                }
            ]
        },
        {
            name: "Normalgewicht",
            low: 18.5,
            high: 25.0,
            subCategories: [
            ]
        },
        {
            name: "Übergewicht",
            low: 25.0,
            high: 30.0,
            subCategories: [
            ]
        },
        {
            name: "Fettleibigkeit",
            low: 30.0,
            high: null,
            subCategories: [
                {
                    name: "Grad I",
                    low: 30.0,
                    high: 35.0
                },
                {
                    name: "Grad II",
                    low: 35.0,
                    high: 40.0
                },
                {
                    name: "Grad III",
                    low: 40.0,
                    high: null
                }
            ]
        }
    ];

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
    for (let category of categories) {
        let subCategories = category.subCategories;
        if (subCategories.length === 0) {
            table += `<tr>`;
            table += `<td>${category.name}</td>`;
            table += `<td></td>`;
            table += (category.low === null) ? `<td></td>` : `<td>${category.low.toFixed(1)}</td>`;
            table += (category.high === null) ? `<td></td>` : `<td>&lt; ${category.high.toFixed(1)}</td>`;
            table += `</tr>`;
        } else {
            for (let index in subCategories) {
                let subCategory = subCategories[index];
                if (index == 0) {
                    table += `<tr>`;
                    table += `<td rowspan="${subCategories.length}">${category.name}</td>`;
                    table += `<td>${subCategory.name}</td>`;
                    table += (subCategory.low === null) ? `<td></td>` : `<td>${subCategory.low.toFixed(1)}</td>`;
                    table += (subCategory.high === null) ? `<td></td>` : `<td>&lt; ${subCategory.high.toFixed(1)}</td>`;
                    table += `</tr>`;
                } else {
                    table += `<tr>`;
                    table += `<td>${subCategories[index].name}</td>`;
                    table += (subCategory.low === null) ? `<td></td>` : `<td>${subCategory.low.toFixed(1)}</td>`;
                    table += (subCategory.high === null) ? `<td></td>` : `<td>&lt; ${subCategory.high.toFixed(1)}</td>`;
                    table += `</tr>`;
                }
            }
        }
    }
    table += `</tbody>`;
    table += `</table>`;

    document.getElementById("table-of-bmi-categories").innerHTML = table;
}
