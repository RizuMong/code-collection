var getSquence = []


// create squence
var nextSequence = getSquence.length && getSquence[getSquence.length - 1].sequence
    ? getSquence[getSquence.length - 1].sequence + 1
    : 1;

var sequence = ("0000" + nextSequence).slice(-4);
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var year = now.getFullYear().toString().slice(-2);

var sppdNumber = "SPPD/" + sequence + "/" + day + month + year; 

console.log(sppdNumber);