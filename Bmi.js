// JavaScript source code
function Show_Bmi() {
    var height_cal = parseInt(document.getElementById('height').value) / 100;
    var height_con_m = height_cal * height_cal;
    var weight_cal = parseInt(document.getElementById('weight').value);
    var final_result = weight_cal / height_con_m;
    var calculation = final_result.toFixed(1);
    document.getElementById('Show_BMI_Result').innerHTML = calculation;

    if (calculation < 18.5) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Underweight";
    } else if (calculation > 18.5 && calculation < 24.9) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Normal";
    } else if (calculation > 25 && calculation < 29.9) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Overweight";
    }
    else if (calculation > 30 && calculation < 40) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Obse Type-1";
    }
    else if (calculation < 40.1 && calculation < 50) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Obse Type-2";
    } else if (calculation > 50) {
        document.getElementById('Show_BMI_Condition').innerHTML = "Obse Type-3";
    }
}