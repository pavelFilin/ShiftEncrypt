var s = "etaoinshrdlcumwfgypbvkxjqz";
var lastEngLow = 122;
var firsEngtLow = 97;
$("#text").val("");
function shift(shiftNumber) {
   text = $("#text").val();
   text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
//        console.log(text.charCodeAt(i));
//        if (text.charCodeAt(i)>122 || text.charCodeAt(i)<97) {
//            alert("it's imposable");
//            return;
//        }
    }
    var  newText = "";
    for (var i = 0; i < text.length; i++) {
        if(isPunctuation(text.charAt(i))) {
           newText = newText + text.charAt(i);
        } else {
          
          shiftNumber = shiftNumber%26;
          var newChar = +text.charCodeAt(i)+parseInt(shiftNumber);
          console.log(newChar);
            if (newChar>122) {
                console.log(+shiftNumber+97);
                newText = newText +  String.fromCharCode(+shiftNumber+96);
            } else if (newChar<97) {
               newText = newText + String.fromCharCode(123+shiftNumber);
            } else {   
                newText = newText + String.fromCharCode(+text.charCodeAt(i)+parseInt(shiftNumber));
            }  
        }  
    }
    console.log(newText);
  $("#text").val(newText);
}

function isPunctuation(char) {
    var puncts = ".,:!?";
    for (var i = 0; i < puncts.length; i++) {
        if (char === puncts.charAt(i)) {
            return true;
        }
    }
    return false;
}

$("#button").on("click", function(){
  shift($("#shiftNumber").val());
});

function Decodyng(text) {
   
}