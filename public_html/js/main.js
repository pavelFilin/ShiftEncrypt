var fr = " etaoinshrdlcumwfgypbvkxjqz";
var lastEngLow = 122;
var firstEngtLow = 97;
$("#text").val("");

function shift(shiftNumber) {
    var text = $("#text").val();
    text = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
//        console.log(text.charCodeAt(i));
//         if (text.charCodeAt(i) > 122 || text.charCodeAt(i) < 97) {
//             if (isPunctuation(text[i])) {
//                 alert("it's imposable");
//                 return;
//
//
//             }
//         }
    }


    var newText = "";
    for (var i = 0; i < text.length; i++) {
        if (isPunctuation(text.charAt(i)) || text[i] == " ") {
            newText = newText + text.charAt(i);
        } else {
            newText = newText + String.fromCharCode(cycleShift(lastEngLow, firstEngtLow, +text.charCodeAt(i), +shiftNumber));
        }
    }

    function cycleShift(max, min, current, shift) {
        var direct = 0;
        if (shift > 0) {
            direct = 1;
        } else {
            direct = -1;
        }

        shift = Math.abs(shift);
        for (let i = 0; i < shift; i++) {
            current += direct;
            if (current > max) {
                current = min;
            } else if (current < min) {
                current = max;
            }
        }
        return current;
    }


    console.log(newText);
    $("#text").val(newText);
}

function isPunctuation(char) {
    var puncts = "*0123456789\r\n_—`><«»“”’↵{}[]().,:!?'-;~/\\\"";
    for (var i = 0; i < puncts.length; i++) {
        if (char === puncts.charAt(i)) {
            return true;
        }
    }
    return false;
}

// $("#button").on("click", function () {
//     shift($("#shiftNumber").val());
// });

// $("#decryptButton").on("click", function () {
//     var text = $("#text").val();
//     text = text.toLowerCase();
//     decrypting(text);
// });

function decrypting(text) {
    var stat = {};
    for (var i = 0; i < text.length; i++) {
        if (isPunctuation(text[i])) {
            continue;
        }
        var ch = text[i];
        if (ch in stat) {
            stat[ch]++;
        } else {
            stat[ch] = 1;
        }
    }


    let newText = "";
    let sortStat = sortingStat(stat);
    let count = 0;
    for (let i = 0; i < sortable.length; i++) {
        text = text.replace(new RegExp(sortable[i], 'g'), fr[count]);
        count++;
    }

    $("#text").val(text);
    console.log(stat);

}

function sortingStat(stat) {
    sortable = Object.keys(stat).sort(function (a, b) {
        return -(stat[a] - stat[b])
    })
    console.log(sortable);
    return sortable;
}

function findBigrams(text) {
    let stat = {};
    for (let i = 0; i < text.length - 1; i++) {
        if (isPunctuation(text[i]) || isPunctuation(text[i + 1])) {
            continue;
        }

        let ch = text[i];
        let ch2 = text[i + 1];
        if (ch + ch2 in stat) {
            stat[ch + ch2]++;
        } else {
            stat[ch + ch2] = 1;
        }
    }
    return stat;
}