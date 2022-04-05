var tripleButton;
var tripleInput;
var mealInput;
var mealButton;
var mealOutput;
var restyleButton;
var text;

var meal_names = ["cheese pizza with apple juice.", "fried fish and soup.", "caesar salade with fresh fruits.", "chicken fried rice and dumplings.", "spaghetti and whole wheat bread."];

document.addEventListener("DOMContentLoaded", function(){
 tripleButton = document.getElementById("triple-button");
 tripleInput = document.getElementById("triple-input");
 mealButton = document.getElementById("meal-button");
 mealInput = document.getElementById("meal-input");
 mealOutput = document.getElementById("meal-output");
 text = document.getElementById("text");
 restyleButton = document.getElementById("restyle-button");

 tripleButton.addEventListener("click", function(){
   var currentTripleInput = tripleInput.value;;
   tripleNumber(currentTripleInput);
 });

 mealButton.addEventListener("click", function(){
   var currentMealInput = mealInput.value;
   meal(currentMealInput);
 });

 restyleButton.addEventListener("click", restyle);
});

function tripleNumber(num){
  triple_num = num * 3;
  alert(triple_num);
  console.log("Triple of " + num.toString() + " is " + triple_num.toString());
}

function meal(name){
  var meal_output = name + "! Today's lunch is ";
  meal_output += " " + meal_names[Math.floor(Math.random() * meal_names.length)];
  text.innerText = meal_output;
}

function restyle(){
  var colorRed = Math.random() * 255;
  var colorGreen = Math.random() * 255;
  var colorBlue = Math.random() * 255;
  var outputColorString = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
  var fontfamilyArray = ["cursive","serif","arial","monospace", "fantasy"];
  var type = Math.floor(Math.random()*fontfamilyArray.length);
  var angle = Math.random() * 10;
  mealOutput.style.backgroundColor = outputColorString;
  text.style.fontFamily = ""+ fontfamilyArray[type] + "";
  mealOutput.style.transform = "rotate(" + angle + "deg)";
}
