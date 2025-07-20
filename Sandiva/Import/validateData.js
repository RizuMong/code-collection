var errorMessageArray = [];

if (Object.keys(getProject).length === 0) {
    errorMessageArray.push("Project Code Not Found")
} else {
    var projectId = {
        "id": getProject.id_master_project_code,
        "name": getProject.nama_project
    }
};

var note = "";
var isValid = true;
if (errorMessageArray.length > 0) {
    note = errorMessageArray.join(", ")
    isValid = false
} else {
    note = "Success"
}



console.log({
//   expenseCategoryId
// member
// projectAssetCodeId
// projectId
// typeExpense
})