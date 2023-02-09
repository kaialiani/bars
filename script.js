const chart = document.getElementById("chart");
const bars = chart.getElementsByClassName("bar");

let values = Array.from({ length: 40 }, () => Math.floor(Math.random() * 33));

// Function to update the height of each bar based on the values in the array
function updateChart() {
  for (let i = 0; i < 40; i++) {
    bars[i].style.height = `${values[i] * 9}px`;
    bars[i].title = `${values[i]}`;
  }
}

// Function to add a new value to the array and scroll the remaining values
function addValue(newValue) {
  values.pop();
  values.unshift(newValue);
  document.getElementById("currentValue").innerHTML = newValue;
}

updateChart();

setInterval(() => {
  addValue(Math.floor(Math.random() * 33));
  updateChart();
}, 1000);
