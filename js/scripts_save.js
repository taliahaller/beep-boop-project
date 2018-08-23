// BUSINESS USER LOGIC

var beepBoop = [];

function CalculateBeepBoop(userNumber){
  beepBoop = [];
  for(var i = 0; i < userNumber + 1; i++){
   var examineNumber = i;
   if (examineNumber % 3 == 0) {
     beepBoop.push("I'm sorry, Dave. I'm afraid I can't do that.");
   } else if (/1+/.test(examineNumber)) {
     beepBoop.push("Boop");
   } else if (/0+/.test(examineNumber)) {
     beepBoop.push("Beep");
   } else {
     beepBoop.push(examineNumber);
   }
 };
}

// USER INTERFACE LOGIC
$(document).ready(function() {

  function MyFunction (){
    event.preventDefault();
    $(".magicText").hide();
    $(".well").show();
    var userNumber = parseInt($("input#inputNumber").val());
    CalculateBeepBoop(userNumber);
  }

  $("#formOne").submit(function() {
    MyFunction();
    beepBoop = beepBoop.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoop + ".");
  }); // (#formOne).submit close

  $("#reverseButton").click(function() {
    MyFunction();
    var beepBoopReversed = beepBoop.reverse();
    beepBoopReversed = beepBoopReversed.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoopReversed + ".");

  }); // (#reverseButton).click close
}); // (document).ready close
