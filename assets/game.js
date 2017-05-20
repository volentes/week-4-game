$(document).ready(function() {

//Generate random number on page load:

var randomNum = Math.floor(Math.random() * 80) + 15;
  $("#randNum").html(randomNum);

//Assigning a random number to crystal1 aka "blackquartz"
  $("#crystal1").val( Math.floor(Math.random() * 15+ 1));
  console.log("blah " + $("#crystal1").val());

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
    var numWins = 0;
    numWins += increment;
    $("#wins").html(numWins);
  }

   else if (count > randomNum) {
    alert ("You lost!");
    var numLoses = 0;
    numLoses += increment;
    $("#loses").html(numLoses);
  }
})
$("#fluorite").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal2").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    var numWins = 0;
    numWins += increment;
    $("#wins").html(numWins);
  }

   else if (count > randomNum) {
    alert ("You lost!");
    var numLoses = 0;
    numLoses += increment;
    $("#loses").html(numLoses);
  }
})
$("#selenite").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal3").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    var numWins = 0;
    numWins += increment;
    $("#wins").html(numWins);
  }

   else if (count > randomNum) {
    alert ("You lost!");
    var numLoses = 0;
    numLoses += increment;
    $("#loses").html(numLoses);
  }

})
$("#quartz").on("click", function() {
  var count = parseInt($("#counter").val());
  console.log(count);
  count += parseInt($("#crystal4").val());
  $("#counter").val(count);

  if (count === randomNum) {
    alert("You won!");
    var numWins = 0;
    numWins += increment;
    $("#wins").html(numWins);

  }

   else if (count > randomNum) {
    alert ("You lost!");
    var numLoses = 0;
    numLoses += increment;
    $("#loses").html(numLoses);
  }
})




});
