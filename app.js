const arr = [
  "yellow",
  "red",
  "green",
  "pink",
  "orange",
  "white",
  "blue",
  "white",
  "aqua",
];

const container = document.querySelector(".container");
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

function randomFun() {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", function () {
  let idx = randomFun();
  container.style.backgroundColor = arr[idx];
  color.innerText = arr[idx];
  btn.style.color = arr[idx];
});
