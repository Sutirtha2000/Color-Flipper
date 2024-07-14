const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const color = document.querySelector(".color");

function randomGen() {
  return Math.floor(Math.random() * arr.length);
}

btn.addEventListener("click", function () {
  let color1 = "#";
  for (let i = 0; i < 6; i++) {
    color1 += arr[randomGen()];
  }

  container.style.backgroundColor = color1;
  color.innerText = color1;
  btn.style.color = color1;
});
