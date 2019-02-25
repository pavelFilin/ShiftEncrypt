var frequencyArray = "etaoinshrdlcumwfgypbvkxjqz";


function findFrequencyLetter(text) {
    let dictionary = {};
    for (let i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            let ch = text[i];
            if (ch in dictionary) {
                dictionary[ch]++;
            } else {
                dictionary[ch] = 1;
            }
        }
    }

    return dictionary;
}


function sort(sortable) {
    sortable = Object.keys(sortable).sort(function (a, b) {
        return -(sortable[a] - sortable[b])
    });

    console.log(sortable);
    return sortable;
}

$("#decryptButton").on("click", function () {
    let text = $("#text").val();
    text = text.toLowerCase();
    $("#text").val(decrypting(text));
});

function decrypting(text) {
    let newText = "";
    let dictionary = findFrequencyLetter(text);

    console.log(dictionary);
    let sortableDictionary = sort(dictionary);


    for (let i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            let number = sortableDictionary.indexOf(text[i]);
            newText += frequencyArray[number];
        }
         else {
             newText += text[i];
        }
    }

    return newText;
}

