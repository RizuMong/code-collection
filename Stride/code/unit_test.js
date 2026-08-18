var time = [];

for (var h = 0; h < 24; h++) {
    for (var m = 0; m < 60; m++) {
        time.push(
            (h < 10 ? "0" : "") + h + ":" +
            (m < 10 ? "0" : "") + m
        );
    }
}

console.log(JSON.stringify({ time: time }, null, 2));