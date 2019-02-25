var alphabet = "abcdefghijklmnopqrstuvwxyz";
var engLowFirst = 97;
var engLowLast = 122;


function isLetter(char) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === char) {
            return true;
        }
    }

    return false;
}


function Encrypt(text2, shiftNumber) {
   let text = text2.toLowerCase();
   let newText = "";

    for (let i = 0; i < text.length; i++) {

        if (isLetter(text[i])) {
            newText +=cycleShift(text[i], shiftNumber);;
        } else {
            newText += text[i];
        }

        function cycleShift(char, shiftNumber) {

            let charCode = +char.charCodeAt();
            let direct = shiftNumber > 0;

            shiftNumber = Math.abs(shiftNumber);
            shiftNumber %= (engLowLast - engLowFirst);


            for (let i = 0; i < shiftNumber; i++) {
                if (direct) {
                    charCode++;
                    if (charCode === engLowLast + 1) {
                        charCode = engLowFirst;
                    }
                } else {
                    charCode--;
                    if (charCode === engLowFirst - 1) {
                        charCode = engLowLast;
                    }
                }
            }

            return  String.fromCharCode(charCode);
        }
    }

    return newText;

}

$("#encryptButton").on("click", function () {
    let text = $("#text").val();

    let shiftNumber = $("#shiftNumber").val();
    text = Encrypt(text, shiftNumber);

    $("#text").val(text);
});
