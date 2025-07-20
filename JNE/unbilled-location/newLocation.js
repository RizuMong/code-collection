_log(getListLocations.length);
_log(getListLocations[0]);

var eachData = [];
var lockets = 1;

for (i in getListLocations) {
    var item = getListLocations[i]
    var dataObject = {
        branch_id: item.branch_id,
        origin_branch_id: item.origin_branch_id,
        destination_branch_id: item.destination_branch_id,
        customer_id: item.customer_id,
        combination: item.key,
        locket: lockets
    }

    lockets++
    if (lockets > 25) {
        lockets = 1
    }

    eachData.push(dataObject);
};

_log(eachData[0]);
_log(eachData[1]);
_log(eachData[2]);

if (eachData.length > 0) {
    var lastIndex = eachData.length - 1;
    eachData[lastIndex].finalLocket = true;
}

if (eachData.length > 0) {
    if (payload.eachProcess.finalData) {
        var lastIndex = eachData.length - 1;
        eachData[lastIndex].finalRecord = true;
    };
};