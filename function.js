
document.getElementById("generateNumber").onclick = function() {
    var minNumber = parseInt(document.getElementById("minimumNumber").value);
    var maxNumber = parseInt(document.getElementById("maximumNumber").value);
    var generatedNumber = document.getElementById("generatedNumber");
    
    let value = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    generatedNumber.textContent = value;
}

