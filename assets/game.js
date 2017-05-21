$(document).ready(function() {

//Generate random number on page load:
var numWins = 0;
var numLoses = 0;

//Creating a reset function 
function reset () {
    randomNum = Math.floor(Math.random() * 80) + 15;
    $("#randNum").html(randomNum);

  //Assigning a random number to crystal1 aka "blackquartz"
    $("#crystal1").val( Math.floor(Math.random() * 15+ 1));


  //Assiging a random number to crystal2 aka "fluorite"
    $("#crystal2").val( Math.floor(Math.random() * 15+ 1));

  //Assiging a random number to crystal3 aka "elenite"
    $("#crystal3").val( Math.floor(Math.random() * 15+ 1));

  //Assigning a random number to crystal4
    $("#crystal4").val( Math.floor(Math.random() * 15+ 1));

  }

//Assigning a random number
var randomNum = Math.floor(Math.random() * 80) + 15;
  $("#randNum").html(randomNum);

//Assigning a random number to crystal1 aka "blackquartz"
  $("#crystal1").val( Math.floor(Math.random() * 15+ 1));


//Assiging a random number to crystal2 aka "fluorite"
  $("#crystal2").val( Math.floor(Math.random() * 15+ 1));

//Assiging a random number to crystal3 aka "elenite"
  $("#crystal3").val( Math.floor(Math.random() * 15+ 1));

//Assigning a random number to crystal4
  $("#crystal4").val( Math.floor(Math.random() * 15+ 1));

//Creating the score or counter

$("#blackquartz").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal1").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    numWins++;
    $("#counter").val(0);
    var winCounter = parseInt($("#wins").val());
    winCounter += parseInt($("#crystal1").val());
    $("#wins").val(numWins);
    $("#wins").html(numWins);
    reset();
  }

   else if (count > randomNum) {
    alert ("You lost!");
    numLoses++;
    $("#counter").val(0);
    var lossCounter = parseInt($("#loses").val());
    lossCounter += parseInt($("#crystal1").val());
    $("#loses").val(numLoses);
    $("#loses").html(numLoses);
    console.log(numLoses);
    reset();
  }
})

$("#fluorite").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal2").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    numWins++;
    $("#counter").val(0);
    var winCounter = parseInt($("#wins").val());
    winCounter += parseInt($("#crystal2").val());
    $("#wins").val(numWins);
    $("#wins").html(numWins);
    reset();
  }

   else if (count > randomNum) {
    alert ("You lost!");
    numLoses++;
    $("#counter").val(0);
    var lossCounter = parseInt($("#loses").val());
    lossCounter += parseInt($("#crystal2").val());
    $("#loses").val(numLoses);
    $("#loses").html(numLoses);
    console.log(numLoses);
    reset();
  }
})

$("#selenite").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal3").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    numWins++;
    $("#counter").val(0);
    var winCounter = parseInt($("#wins").val());
    winCounter += parseInt($("#crystal3").val());
    $("#wins").val(numWins);
    $("#wins").html(numWins);
    reset();
  }

   else if (count > randomNum) {
    alert ("You lost!");
    numLoses++;
    $("#counter").val(0);
    var lossCounter = parseInt($("#loses").val());
    lossCounter += parseInt($("#crystal3").val());
    $("#loses").val(numLoses);
    $("#loses").html(numLoses);
    console.log(numLoses);
    reset();
  }
})

$("#quartz").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal4").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    numWins++;
    $("#counter").val(0);
    var winCounter = parseInt($("#wins").val());
    winCounter += parseInt($("#crystal4").val());
    $("#wins").val(numWins);
    $("#wins").html(numWins);
    reset();
  }

   else if (count > randomNum) {
    alert ("You lost!");
    numLoses++;
    $("#counter").val(0);
    var lossCounter = parseInt($("#loses").val());
    lossCounter += parseInt($("#crystal4").val());
    $("#loses").val(numLoses);
    $("#loses").html(numLoses);
    console.log(numLoses);
    reset();
  }
})


});
