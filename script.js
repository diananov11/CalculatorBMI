const calculateBMI = (event) => {
  event.preventDefault();
  // add dom
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let p = document.getElementById("result");

  //add calculation
  let calculation = weight / (height / 100) ** 2;
  let result = calculation.toFixed(1);
  let description = "";

  //condition
  if (result >= 30) {
    description = "Obesity";
  } else if (result >= 25) {
    description = "Overweight";
  } else if (result >= 18.5) {
    description = "Normal weight";
  } else {
    description = "underweight";
  }

  p.innerHTML = `Your BMI is ${result} which means You are ${description}`;
};

let button = document.getElementById("button");
button.addEventListener("click", calculateBMI);
