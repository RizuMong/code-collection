//_log(amountNotValid)
var tanggalSekarang = new Date();
var currentDate = tanggalSekarang.getTime();
if (listAmountPolicy.length > 0) {
  _log({
    parentMasterPosition: parentMasterPosition,
    requestorPositionId: requestorPositionId,
  });
  // _log(requestorPositionId);
  var sameEmail = false;

  if (pushParent == true) {
    if (
      !!parentMasterPosition.employee_email_temp &&
      !!parentMasterPosition.employee_email_temp.name
    ) {
      _log("ada temporary");
      if (
        parentMasterPosition.employee_email_temp.name.toLowerCase() ==
          requestorPositionId.employee_email.name.toLowerCase() &&
        (!parentMasterPosition.start_date ||
          parentMasterPosition.start_date < currentDate) &&
        (!parentMasterPosition.end_date ||
          currentDate < parentMasterPosition.end_date)
      ) {
        _log("temporary masuk");
        sameEmail = true;
      } else if (
        requestorPositionId.employee_email.name.toLowerCase() ==
        parentMasterPosition.employee_email.name.toLowerCase()
      ) {
        _log("email sama ada temporary");
        sameEmail = true;
      }
    } else if (
      requestorPositionId.employee_email.name.toLowerCase() ==
      parentMasterPosition.employee_email.name.toLowerCase()
    ) {
      _log("email sama");
      sameEmail = true;
    }
    if (!sameEmail) {
      _log("masuk approval");
      flowDirectSupervisorList.push(parentMasterPosition.core_flow_id);
      // flowDirectSupervisorList.push(parentMasterPosition.organigram_id);
    }
  }
}
