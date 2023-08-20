import { generateRandomData } from "./mock.js";
import { paintPieChart, getData } from "./utils.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const checkbox = document.getElementById("value-checkbox");

let data = getData();
let showLegend = checkbox.checked;

canvas.addEventListener("click", () => {
  data = generateRandomData();
  paintPieChart(ctx, data, { legend: showLegend });
});

checkbox.addEventListener("change", () => {
  showLegend = checkbox.checked;
  paintPieChart(ctx, data, { legend: showLegend });
});

paintPieChart(ctx, data, { legend: showLegend });
