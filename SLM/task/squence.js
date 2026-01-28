var sequence = 12;
var project_code = "PPA"
var code = "";

function generateTaskCode(projectCode, sequence, digit) {
    digit = digit || 3;

    var seqStr = String(sequence);
    var padding = digit - seqStr.length;

    if (padding > 0) {
        seqStr = new Array(padding + 1).join("0") + seqStr;
    }

    return projectCode + "-" + seqStr;
};

var code = generateTaskCode(project_code, sequence, 3);
console.log(code); 


// buat jadi PPA-001 tapi udah baca digitnya 3 jadi kalau nambah nanti bisa jadi PPA-012