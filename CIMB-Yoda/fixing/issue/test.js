// diBuatOleh
// diEditOleh
// division
// assignEmployee
// directSPV

// var payloadFunction = {
//   "type": "Create",
//   "code": positionCode,
//   "name": positionName,
//   "dibuat_oleh": diBuatOleh,
//   "diedit_oleh": diEditOleh,
//   "division": division,
//   "employee_email": assignEmployee,
//   "parent_position": directSPV,
//   "is_position_yoda": true,
//   "main_position": true
// };

// var getEmployee = {
//   position: {
//     id: "",
//     name: "",
//   },
// };

// var isNotHavePosition = !getEmployee.position || !getEmployee.position.name;

// console.log(isNotHavePosition);

var getPosition = {
  employee_email: {
    id: "",
    name: "",
  },
}

var isNotPositionMapping = !getPosition.employee_email || !getPosition.employee_email.name;

console.log(isNotPositionMapping);