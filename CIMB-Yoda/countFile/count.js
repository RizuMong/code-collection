var filteredValidateStage = [];

if (filteredValidateStage.length > 0) {
  filteredValidateStage[filteredValidateStage.length - 1].finalRecord = true;
}

if (filteredValidateStage.length == 0) {
  filteredValidateStage.push({
    finalRecord: true,
  });
}

console.log(filteredValidateStage);
