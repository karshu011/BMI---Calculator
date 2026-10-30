
let feet = document.getElementById("feet");
let inches = document.getElementById("inches");

let button = document.getElementById("button");

let bmi = document.getElementById("bmi");
let result = document.getElementById("result");

let metric = document.getElementById("metric");
let imperial = document.getElementById("imperial");

let weightLabel = document.getElementById("weightLabel");

let metricHeight = document.getElementById("metricHeight");
let imperialHeight = document.getElementById("imperialHeight");

let unit = "metric";

metric.addEventListener("click", function () {
    unit = "metric";
    metric.style.background = "#168cff";
    imperial.style.background = "#10283a";

    weightLabel.innerText = "💪 Weight (kg)";

    metricHeight.style.display = "block";
    imperialHeight.style.display = "none";

});

imperial.addEventListener("click", function () {
    unit = "imperial";
    imperial.style.background = "#168cff";
    metric.style.background = "#10283a";
    weightLabel.innerText = "💪 Weight (lb)";

    metricHeight.style.display = "none";
    imperialHeight.style.display = "block";

});


button.addEventListener("click", function () {
    let w = Number(weight.value);
    let value;


    if (unit === "metric") {
        let h = Number(height.value);
        if (w <= 0 || h <= 0) {
            alert("Please enter valid weight and height");
            return;
        }

        let heightMeter = h / 100;

        value = w / (heightMeter * heightMeter);
    }
    else {

        let ft = Number(feet.value);
        let inch = Number(inches.value);

        if (w <= 0 || ft < 0 || inch < 0 || (ft === 0 && inch === 0)) {
            alert("Please enter valid weight and height");
            return;
        }

        let totalInches = (ft * 12) + inch;

        value = (w / (totalInches * totalInches)) * 703;
    }

    bmi.innerText = value.toFixed(1);


    if (value < 18.5) {

        result.innerText = "Underweight";

    } else if (value < 25) {

        result.innerText = "Normal";

    } else if (value < 30) {

        result.innerText = "Overweight";

    } else {

        result.innerText = "Obese";
    }

});
