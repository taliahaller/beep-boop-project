// BUSINESS USER LOGIC

var beepBoop = [];

function Calculate(userNumber){
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

  $("#formOne").submit(function() {
    event.preventDefault();
    $(".magicText").hide();
    $(".well").show();
    var userNumber = parseInt($("input#inputNumber").val());
    Calculate(userNumber);
    beepBoop = beepBoop.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoop + ".");
  }); // (#formOne).submit close

  $("#reverseButton").click(function() {
    event.preventDefault();
    $(".magicText").hide();
    $(".well").show();
    var userNumber = parseInt($("input#inputNumber").val());
    Calculate(userNumber);
    var beepBoopReversed = beepBoop.reverse();
    beepBoopReversed = beepBoopReversed.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoopReversed + ".");
    
  }); // (#reverseButton).click close
}); // (document).ready close
