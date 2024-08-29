// console.log(weight);
// console.log(height);

const calculateBMI = (event) => {
  event.preventDefault();
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let p = document.getElementById("result");
  p.innerHTML = "hai";
  console.log(weight);
  console.log(height);
  let calculation = weight / (height / 100) ** 2;
  let result = calculation.toFixed(1);
  console.log(result);
};

let button = document.getElementById("button");
button.addEventListener("click", calculateBMI);
