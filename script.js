/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let numLog = document.getElementById("num-log");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

const meterToFeet = 3.281;
const literToGal = 0.264;
const kgToPound = 2.204;


convertBtn.addEventListener("click",function(){
    let baseValue = numLog.value;
    lengthEl.textContent = `${baseValue} meters = ${(meterToFeet * baseValue).toFixed(2)} feet` 
    volumeEl.textContent = `${baseValue} liters = ${(literToGal * baseValue).toFixed(2)} gallon` 
    massEl.textContent = `${baseValue} kilos = ${(kgToPound * baseValue).toFixed(2)} pound` 
    numLog.value= "";
}
) 