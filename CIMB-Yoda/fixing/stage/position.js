var createdPosition = {};
console.log(masterPosition.code)
var dataAvail = false;
cekPosition.data.forEach(function (item) {
    if (item.code.toUpperCase() == masterPosition.code.toUpperCase()) {
        console.log(item)
        createdPosition = {
            data: {
                id: item.id
            }
        }
        dataAvail = true;
    }
});

console.log(createdPosition);