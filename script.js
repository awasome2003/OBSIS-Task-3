document.getElementById("convertBtn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let convertedTemp;
  let convertedUnit;

  if (isNaN(temperature)) {
    document.getElementById("result").value = "Invalid input";
    return;
  }

  if (unit === "celsius") {
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = "°F";
  } else if (unit === "fahrenheit") {
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = "°C";
  } else if (unit === "kelvin") {
    convertedTemp = temperature - 273.15;
    convertedUnit = "°C";
  }

  document.getElementById("result").value = `${convertedTemp.toFixed(
    4
  )} ${convertedUnit}`;
});
