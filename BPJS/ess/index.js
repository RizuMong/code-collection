var name = findByEmployeeID.update_other_permission.name;
var errors = [];
var findUpdate = findAll;
var isTaken = findUpdateOther.is_allowance_take;

for (var i = 0; i < findUpdate.length; i++) {
  var current = findUpdate[i];

  if (
    current.permission_id &&
    current.permission_id.name &&
    current.flow_status === "sent" &&
    current.permission_id.name.indexOf(name) !== -1 &&
    isTaken !== "taken"
  ) {
    errors.push(
      "Approve/Reject cuti " + current.permission_id.name + " terlebih dahulu"
    );
    break;
  }
}
